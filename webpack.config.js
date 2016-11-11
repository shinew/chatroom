const path = require('path');

module.exports = {
  entry: path.resolve('src/assets/js/main.jsx'),
  output: {
    path: path.resolve('public/js'),
    filename: 'bundle.js'
  },
  module : {
    loaders: [
      {
        test : /\.jsx?/,
        include : path.resolve(),
        loader : 'babel'
      }
    ]
  }
};
