module.exports = require('./webpack.base.babel')({
  output: {
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
  },

  plugins: [],

  // Emit a source map for easier debuggingw
  devtool: 'cheap-module-eval-source-map',
});
