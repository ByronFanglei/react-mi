const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use('/byron', createProxyMiddleware({
    target: 'http://192.168.199.190:10010',
    // target: 'http://172.20.10.3:10010',
    changeOrigin: true,
    pathRewrite:{
      '/byron': ''
    }
  }))
  
}