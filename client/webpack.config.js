const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = function(env, argv) {
  console.log({env})
  return {
    mode: env.production ? 'production' : 'development',
    entry: './src/app.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js'
    },
    devtool: env.production ? 'cheap-module-source-map' : 'cheap-module-eval-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'dist'),
      hot: true,
      open: true,
      overlay: {
        warnings: true,
        errors: true
      },
      proxy: {
        '/api': {
          target: 'htp://localhost:5006',
          pathRewrite: {'^/api': ''}
        }
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
      })
    ]
  }
}
