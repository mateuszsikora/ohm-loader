const webpack = require("webpack");
const path = require('path');

module.exports = {
  entry: './index.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.ohm$/,
      loader: 'ohm-loader'
    }]
  },
  resolveLoader: {
    alias: {
      "ohm-loader": path.join(__dirname, '../lib/index.js')
    }
  },
};


