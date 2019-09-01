const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const webpack = require('webpack')

module.exports = function(env, argv) {
  const baseURL = env.production ? '' : 'http://localhost:5006'
  console.log({env})
  return {
    mode: env.production ? 'production' : 'development',
    entry: './src/app.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
      publicPath: '/'
    },
    devtool: env.production ? 'cheap-module-source-map' : 'cheap-module-eval-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'dist'),
      historyApiFallback: true,
      hot: true,
      open: true,
      overlay: {
        warnings: true,
        errors: true
      }
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          include: [path.resolve(__dirname, 'src')],
          loader: 'babel-loader'
        },
        {
          test: /\.(png|jpe?g|gif)$/i,
          loader: 'file-loader'
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        }
      ]
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: 'index.html'
      }),
      new webpack.DefinePlugin({
        'global.BASE_URL': JSON.stringify(baseURL)
      })
    ]
  }
}
