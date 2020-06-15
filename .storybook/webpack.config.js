const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.css?$/,
        loaders: [ 'style-loader', 'raw-loader' ],
        include: path.resolve(__dirname, '../')
      }
    ]
  }
}