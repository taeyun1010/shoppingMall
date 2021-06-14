const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'http://222.99.189.215:5000',
            changeOrigin: true,
        })
    );
};