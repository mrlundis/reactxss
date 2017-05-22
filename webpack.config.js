const path = require('path');

const config = {
  entry: {
    inferno: './src/inferno.js',
    preact: './src/preact.js',
    react: './src/react.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {test: /\.(js|jsx)$/, use: 'babel-loader'}
    ]
  }
};

module.exports = config;
