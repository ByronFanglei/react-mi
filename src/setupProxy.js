const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use('/byron', createProxyMiddleware({
    target: 'http://192.168.199.190:10011/api/',
    // target: 'http://172.20.10.3:10011/api',
    changeOrigin: true,
    pathRewrite:{
      '/byron': ''
    }
  }))
  
}