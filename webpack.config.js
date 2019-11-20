const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.ts',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
  },

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Output Management',
      filename: 'index.html',
      template: 'src/index.html',
      inject: false
    })
  ],
  
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        exclude: /node_modules/,
        use: 'file-loader',
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      }
    ],
  },

  resolve: {
    extensions: [ '.ts', '.js' ],
  },
};