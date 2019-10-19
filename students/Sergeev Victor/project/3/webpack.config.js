var path = require('path');

module.exports = {
  entry: './js/goods.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};