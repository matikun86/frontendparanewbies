const path = require('path');

module.exports = {
  entry: [
    path.resolve(__dirname, 'src/index.js')
  ],
  output: {
    path: path.resolve(__dirname, 'docs'),
    filename: "bundle.js"
  },
  module: {
    rules: [
      { test: /\.css$/, loaders: ["style-loader", "css-loader"] },
      { test: /\.scss$/, loader: ["style-loader", "css-loader", "sass-loader"] }
    ]
  }
};