const path = require('path');

module.exports = {
  mode: 'development',
  entry: './js/dashboard_main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  }
};
