const http = require('http');
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
    // Use ngrok tunnel URL for the mines server
    const upstreamUrl = 'https://f5a9ad995f52.ngrok-free.app';
    
    const data = await new Promise((resolve, reject) => {
      const url = new URL('/mines/debug/state', upstreamUrl);
      
      const options = {
        hostname: url.hostname,
        port: url.port || 8080,
        path: url.pathname,
        method: 'GET',
        headers: {
          'User-Agent': 'Mozilla/5.0 (compatible; MinesPredictor/1.0)',
          'Accept': 'application/json'
        },
        timeout: 10000
      };

      console.log(`Fetching from: ${upstreamUrl}/mines/debug/state`);

      // Use https for ngrok URLs
      const client = upstreamUrl.startsWith('https') ? https : http;
      const req = client.request(options, (response) => {
        let data = '';
        response.on('data', (chunk) => {
          data += chunk;
        });
        response.on('end', () => {
          try {
            const parsed = JSON.parse(data);
            console.log('Successfully fetched data from localhost:8080');
            resolve(parsed);
          } catch (e) {
            console.error('Invalid JSON response:', e);
            reject(new Error('Invalid JSON response'));
          }
        });
      });

      req.on('error', (error) => {
        console.error('Request error:', error.message);
        reject(error);
      });

      req.on('timeout', () => {
        console.error('Request timeout');
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
    console.error('Error fetching mines state:', error.message);
    res.status(502).json({ 
      error: 'Upstream not available',
      message: error.message,
      details: 'Cannot connect to ngrok tunnel. Make sure the mines server is running and ngrok tunnel is active.'
    });
  }
};
