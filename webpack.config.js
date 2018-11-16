const path = require('path');

module.exports = {
  entry: {
    index: './src/entry.js'
  },
  output: {
    path: path.resolve(__dirname),
    filename: 'index.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};
