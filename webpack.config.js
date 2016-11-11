const path = require('path');

module.exports = {
  entry: path.resolve('src/assets/js/main.js'),
  output: {
    path: path.resolve('public/js'),
    filename: 'bundle.js',
  },
};
