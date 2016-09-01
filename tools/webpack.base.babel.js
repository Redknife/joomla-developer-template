const path = require('path');
const webpack = require('webpack');
const AssetsPlugin = require('assets-webpack-plugin');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

module.exports = (options) => ({
  entry: {
    app: path.join(process.cwd(), 'src/js/app.js'),
  },

  output: Object.assign({
    path: path.resolve(process.cwd(), 'public'),
    publicPath: '/public/',
  }, options.output),

  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /(node_modules|bower_component)/,
        query: {
          plugins: ['lodash'],
          presets: ['es2015'],
        },
      },
      {
        test: /modernizrrc\.json$/,
        loader: 'modernizr',
      },
    ],
  },

  plugins: options.plugins.concat([
    new LodashModuleReplacementPlugin(),

    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
    }),

    // Always expose NODE_ENV to webpack, in order to use `process.env.NODE_ENV`
    // inside your code for any environment checks; UglifyJS will automatically
    // drop any unreachable code.
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
  ]),

  resolve: {
    modulesDirectories: ['src/js', 'node_modules', 'bower_components'],
    extensions: [
      '',
      '.js',
    ],
    alias: {
      modernizr: path.resolve(process.cwd(), 'modernizrrc.json'),
    },
  },

  devtool: options.devtool,
  target: 'web', // Make web variables accessible to webpack, e.g. window
  stats: {
    assets: true,
    colors: true,
    version: false,
    hash: false,
    timings: false,
    chunks: false,
    chunkModules: false,
  },
});
