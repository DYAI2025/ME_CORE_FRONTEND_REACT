const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const { createProxyMiddleware } = require('http-proxy-middleware');
const path = require('path');

// Load environment variables from the project root regardless of the
// current working directory. This avoids runtime failures when the
// server is launched via npm workspaces which set a different cwd.
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

if (!process.env.ME_BASE_URL) {
  console.error('ME_BASE_URL is not defined. Please set it in server/.env');
  process.exit(1);
}

const app = express();
const port = process.env.PORT || 7071;

app.use(morgan('dev'));
app.use(cors());

// Simple health check endpoint for monitoring
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Proxy middleware
const apiProxy = createProxyMiddleware({
  target: process.env.ME_BASE_URL,
  changeOrigin: true,
  pathRewrite: { '^/api': '' },
  onProxyReq: (proxyReq, req, res) => {
    // Forward authorization header if it exists
    if (req.headers.authorization) {
      proxyReq.setHeader('Authorization', req.headers.authorization);
    }
  }
});

app.use('/api', apiProxy);

app.listen(port, () => {
  console.log(`Proxy server listening on port ${port}`);
  console.log(`Proxying requests from /api to ${process.env.ME_BASE_URL}`);
});
