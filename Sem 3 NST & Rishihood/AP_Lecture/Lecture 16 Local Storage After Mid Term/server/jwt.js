const jwt = require('jsonwebtoken');
const express = require('express');
const app = express();

app.use(express.json());

const SECRET_KEY = 'nothingsecreatehere';

// Simple in-memory store for refresh tokens (demo only)
const refreshTokensStore = {};

// Simple POST /login
// - If body contains { token } -> verify and respond
// - Else expect { email, password } -> if email matches the demo user, issue token
app.post('/login', (req, res) => {
  const { token, email, password } = req.body || {};

  if (token) {
    try {
      const decoded = jwt.verify(token, SECRET_KEY);
      return res.json({ ok: true, message: 'Token valid', payload: decoded });
    } catch (err) {
      return res.status(401).json({ ok: false, error: 'Invalid or expired token' });
    }
  }

  // Credential flow (very simple demo)
  if (!email || !password) {
    return res.status(400).json({ ok: false, error: 'Provide email and password or a token' });
  }

  // demo check: accept only this email
  if (email !== 'narendra@mail.com') return res.status(401).json({ ok: false, error: 'Invalid credentials' });

  const payload = { email: 'narendra@mail.com', name: 'narendra Singh', role: 'admin' };
  const accessToken = jwt.sign(payload, SECRET_KEY, { expiresIn: '1m' });
  const refreshToken = jwt.sign(payload, SECRET_KEY, { expiresIn: '10m' });

  // store refresh token in memory (demo only)
  refreshTokensStore[refreshToken] = payload.email;

  return res.json({ ok: true, accessToken, refreshToken });
});

// Minimal protected route: Authorization: Bearer <token>
app.get('/protected', (req, res) => {
  const auth = req.headers.authorization;
  if (!auth) return res.status(401).json({ ok: false, error: 'Missing Authorization header' });
  const parts = auth.split(' ');
  if (parts.length !== 2 || parts[0].toLowerCase() !== 'bearer') return res.status(400).json({ ok: false, error: 'Malformed Authorization header' });
  const token = parts[1];

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    return res.json({ ok: true, message: 'Protected content', user: decoded });
  } catch (err) {
    // If token expired or invalid, instruct client to use refresh token
    return res.status(401).json({ ok: false, error: 'Invalid or expired token', canRefresh: true });
  }
});

// POST /refresh - exchange refresh token for new access token
app.post('/refresh', (req, res) => {
  const { refreshToken } = req.body || {};
  if (!refreshToken) return res.status(400).json({ ok: false, error: 'Missing refreshToken in body' });

  // Check refresh token exists in store
  if (!refreshTokensStore[refreshToken]) return res.status(401).json({ ok: false, error: 'Refresh token not recognized' });

  try {
    const decoded = jwt.verify(refreshToken, SECRET_KEY);
    const newAccessToken = jwt.sign({ email: decoded.email, name: decoded.name, role: decoded.role }, SECRET_KEY, { expiresIn: '1m' });
    return res.json({ ok: true, accessToken: newAccessToken });
  } catch (err) {
    return res.status(401).json({ ok: false, error: 'Invalid or expired refresh token' });
  }
});

// Start server
const server = app.listen(3000, () => console.log('Server running on http://localhost:3000'));

module.exports = { app, server };

