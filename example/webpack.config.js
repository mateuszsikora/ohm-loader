const webpack = require("webpack");

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
  }
};
