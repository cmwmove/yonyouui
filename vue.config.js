module.exports = {
  // 开发环境配置
  devServer: {
    // 默认端口
    port: 8081
  },
  // 编译时使用相对路径
  publicPath: "./",
  // 编译后不产生map文件
  productionSourceMap: false,
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  }
};
