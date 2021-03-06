var webpack = require('webpack');
var path = require('path');
var babelLoader = require('babel-loader');

//var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
//var APP_DIR = path.resolve(__dirname, 'src/client/app');

var config = {
  context: path.join(__dirname, 'src/client/app'),
  entry: './index.jsx',
  output: {
    path: path.join(__dirname, 'src/client/public'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: [
          path.join(__dirname, 'src/client/app')
        ],
        loader: 'babel-loader'
      }
    ]
  }
};

module.exports = config;