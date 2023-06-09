const { createProxyMiddleware } = require('http-proxy-middleware');


const URL = 'http://localhost:5000';
module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: URL,
      changeOrigin: true,
    })
  );
};