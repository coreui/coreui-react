var path = require('path')
var webpack = require('webpack')

module.exports = {
    //stories: ['../stories/*.stories.js'],
    //stories: ['/stories/*.stories.js'],
   // stories: ['../stories/*.stories.js'],

   //stories: ['../stories/TEST.stories.js'],
   //stories: ['../src/*.stories.js']
   //stories: ['../src/**/*.stories.js']
   stories: ['../stories/*.stories.js'],
   module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: [ 'babel-loader' ],
        exclude: /node_modules/,
        include: __dirname
      },
      {
        test: /\.css?$/,
        loaders: [ 'style-loader', 'raw-loader' ],
        include: __dirname
      }
    ]
  },
  addons: [
    '@storybook/addon-storysource',
    '@storybook/addon-knobs',
  ],
};