const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  devServer: {
      host: '0.0.0.0',
    // https:true,
      port: 6103,
      client: {
        webSocketURL: 'ws://0.0.0.0:6103/ws',
      },
      headers: {
        'Access-Control-Allow-Origin': '*',
      }
  },
  // 从history改成hash 添加的
  // assetsPublicPath: '/',

  transpileDependencies: true
})