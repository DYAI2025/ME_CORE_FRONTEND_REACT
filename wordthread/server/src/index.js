const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const { createProxyMiddleware } = require('http-proxy-middleware');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 7071;

app.use(morgan('dev'));
app.use(cors());

// Proxy middleware
const apiProxy = createProxyMiddleware('/api', {
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
