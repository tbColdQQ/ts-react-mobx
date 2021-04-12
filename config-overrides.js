const { override, fixBabelImports, addLessLoader, overrideDevServer } = require('customize-cra')

const Webpack = require('webpack')

const addPlugins = () => config => {
  if (process.env.NODE_ENV === 'development') {
    config.plugins.push(new Webpack.HotModuleReplacementPlugin())
  }
  return config
}

const devServerConfig = () => config => {
  return {
    ...config,
    compress: true,
    proxy: {
      '/api': {
        target: '',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}

module.exports = {
  webpack: override(
    fixBabelImports('import', {
      libraryName: 'antd-mobile',
      style: 'css'
    })
  ),
  devServer: overrideDevServer(devServerConfig())
}