const http = require('http');
const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const HOST = 'localhost';
const PORT = process.env.VZLOM_PORT ? Number(process.env.VZLOM_PORT) : 8084;
const UPSTREAM = process.env.MINES_HOST || 'http://localhost:8080';

function send(res, status, body, headers = {}) {
  res.writeHead(status, { 'Cache-Control': 'no-store', ...headers });
  if (Buffer.isBuffer(body) || typeof body === 'string') return res.end(body);
  try { return res.end(JSON.stringify(body)); } catch(_) { return res.end(String(body||'')); }
}

function getContentType(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  return {
    '.html': 'text/html; charset=utf-8',
    '.js': 'application/javascript; charset=utf-8',
    '.css': 'text/css; charset=utf-8',
    '.png': 'image/png',
    '.webp': 'image/webp',
    '.svg': 'image/svg+xml'
  }[ext] || 'application/octet-stream';
}

function serveFile(res, fp) {
  fs.readFile(fp, (err, data) => {
    if (err) return send(res, 404, 'Not Found');
    return send(res, 200, data, { 'Content-Type': getContentType(fp) });
  });
}

function buildFieldFromUpstream(up) {
  const field = Array.from({ length: 5 }, () => Array(5).fill(null));
  try {
    const bombsArr = Array.isArray(up.bombs) ? up.bombs : [];
    const bombSet = new Set(bombsArr.map(b => `${b.row}:${b.col}`));
    for (let r = 0; r < 5; r++) {
      for (let c = 0; c < 5; c++) {
        const key = `${r}:${c}`;
        field[r][c] = bombSet.has(key) ? 'mine' : 'safe';
      }
    }
  } catch (_) {}
  return field;
}

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return send(res, 204, '');

  // Prediction/state proxy following the tactic in predictor-server.js
  if (url.pathname === '/vzlom/state') {
    return http.get(`${UPSTREAM}/mines/debug/state`, (r) => {
      let data = '';
      r.on('data', c => data += c);
      r.on('end', () => {
        try {
          const upstream = JSON.parse(data || '{}');
          if (!upstream || typeof upstream !== 'object') return send(res, 502, { error: 'Bad upstream' }, { 'Content-Type': 'application/json' });
          // Build 5x5 field map
          const field = buildFieldFromUpstream(upstream);
          const payload = {
            sessionId: upstream.sessionId || null,
            lastRound: upstream.lastRound || 0,
            minesLeft: upstream.minesLeft ?? null,
            field
          };
          return send(res, 200, payload, { 'Content-Type': 'application/json' });
        } catch (_) {
          return send(res, 500, { error: 'Parse error' }, { 'Content-Type': 'application/json' });
        }
      });
    }).on('error', () => send(res, 502, { error: 'Upstream not available' }, { 'Content-Type': 'application/json' }));
  }

  // Serve VZLOMMINES app
  if (url.pathname === '/' || url.pathname === '/index.html') {
    const fp = path.join(ROOT, 'VZLOMMINES', 'index.html');
    return serveFile(res, fp);
  }

  // Serve any assets under VZLOMMINES/
  if (url.pathname.startsWith('/VZLOMMINES/')) {
    const fp = path.join(ROOT, url.pathname.replace(/^\/+/, ''));
    return serveFile(res, fp);
  }

  return send(res, 404, 'Not Found');
});

server.listen(PORT, HOST, () => {
  console.log(`[vzlommines] running at http://${HOST}:${PORT}`);
  console.log(`[vzlommines] open http://${HOST}:${PORT}/`);
});





