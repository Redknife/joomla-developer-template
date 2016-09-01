const path = require('path');
const webpack = require('webpack');
const modules = [
  'src/js',
  'node_modules',
  'bower_components',
];

module.exports = {
  devtool: 'inline-source-map',
  isparta: {
    babel: {
      presets: ['es2016'],
    },
  },
  module: {
    preLoaders: [
      { test: /\.js$/,
        loader: 'isparta',
        exclude: /(node_modules|bower_components)/,
      },
    ],
    loaders: [
      { test: /\.json$/, loader: 'json-loader' },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /(node_modules|bower_component)/,
      },
    ],
  },

  plugins: [

    // Always expose NODE_ENV to webpack, in order to use `process.env.NODE_ENV`
    // inside your code for any environment checks; UglifyJS will automatically
    // drop any unreachable code.
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    })],

  // Some node_modules pull in Node-specific dependencies.
  // Since we're running in a browser we have to stub them out. See:
  // https://webpack.github.io/docs/configuration.html#node
  // https://github.com/webpack/node-libs-browser/tree/master/mock
  // https://github.com/webpack/jade-loader/issues/8#issuecomment-55568520
  node: {
    fs: 'empty',
    child_process: 'empty',
    net: 'empty',
    tls: 'empty',
  },

  resolve: {
    modulesDirectories: modules,
    modules,
  },
};
