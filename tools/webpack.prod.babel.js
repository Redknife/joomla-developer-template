const webpack = require('webpack');

module.exports = require('./webpack.base.babel')({
  output: {
    filename: '[name].min.js',
    chunkFilename: '[name].chunk.min.js',
  },

  plugins: [
    // OccurrenceOrderPlugin is needed for long-term caching to work properly.
    // See http://mxs.is/googmv
    new webpack.optimize.OccurrenceOrderPlugin(true),

    // Merge all duplicate modules
    new webpack.optimize.DedupePlugin(),

    // Minify and optimize the JavaScript
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: false,
      comments: false,
      compress: {
        warnings: false, // ...but do not show warnings in the console (there is a lot of them)
      },
    }),
  ],
});
