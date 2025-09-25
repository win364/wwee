const https = require('https');

module.exports = async (req, res) => {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  if (req.method === 'OPTIONS') {
    res.status(204).end();
    return;
  }

  try {
    // Replace with your actual mines server URL
    const upstreamUrl = process.env.MINES_SERVER_URL || 'http://localhost:8080';
    
    const data = await new Promise((resolve, reject) => {
      const url = new URL('/mines/debug/state', upstreamUrl);
      
      const options = {
        hostname: url.hostname,
        port: url.port || (url.protocol === 'https:' ? 443 : 80),
        path: url.pathname,
        method: 'GET',
        headers: {
          'User-Agent': 'Mozilla/5.0 (compatible; MinesPredictor/1.0)'
        }
      };

      const req = https.request(options, (response) => {
        let data = '';
        response.on('data', (chunk) => {
          data += chunk;
        });
        response.on('end', () => {
          try {
            const parsed = JSON.parse(data);
            resolve(parsed);
          } catch (e) {
            reject(new Error('Invalid JSON response'));
          }
        });
      });

      req.on('error', (error) => {
        reject(error);
      });

      req.setTimeout(5000, () => {
        req.destroy();
        reject(new Error('Request timeout'));
      });

      req.end();
    });

    // Simple next-safe prediction: first safe cell not yet revealed
    let nextSafe = null;
    try {
      const revealedSet = new Set((data.revealed || []).map(c => `${c.col}:${c.row}`));
      const candidate = (data.safe || []).find(c => !revealedSet.has(`${c.col}:${c.row}`));
      if (candidate) nextSafe = candidate;
    } catch (e) {
      console.error('Error processing safe cells:', e);
    }

    const prediction = { nextSafe, minesLeft: data?.minesLeft ?? null };

    // Build and persist latest snapshot map when signal present
    try {
      const bombsArr = Array.isArray(data.bombs) ? data.bombs : [];
      const safeArr = Array.isArray(data.safe) ? data.safe : [];
      if (bombsArr.length > 0 || safeArr.length > 0) {
        const bombSet = new Set(bombsArr.map(b => `${b.row}:${b.col}`));
        const map = new Array(25);
        for (let r = 0; r < 5; r++) {
          for (let c = 0; c < 5; c++) {
            const key = `${r}:${c}`;
            map[r * 5 + c] = bombSet.has(key) ? 'mine' : 'safe';
          }
        }
        
        // Store snapshot in environment variable or use a simple in-memory store
        // For production, you might want to use a database
        global.lastSnapshot = { map, ts: Date.now() };
      }
    } catch (e) {
      console.error('Error building snapshot:', e);
    }

    // Expose upstream fields at top-level so predictor.html can read them directly
    res.status(200).json({ ...data, prediction });
  } catch (error) {
    console.error('Error fetching mines state:', error);
    res.status(502).json({ 
      error: 'Upstream not available',
      message: error.message 
    });
  }
};
