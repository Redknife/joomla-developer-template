import gulp from 'gulp';
import sourcemaps from 'gulp-sourcemaps';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import livereload from 'gulp-livereload';
import size from 'gulp-size';
import streamqueue from 'streamqueue';
import concat from 'gulp-concat';
import handleErrors from '../util/handleErrors';
import webpackStream from 'webpack-stream';
import path from 'path';
import webpack from "webpack";
import conf from '../config';

const config = conf.js;

gulp.task('js', () => {
  return gulp.src(config.src)
    .pipe(webpackStream({
      plugins: [
        new webpack.ProvidePlugin({
          $: 'jquery',
          jQuery: 'jquery',
          'window.jQuery': 'jquery'
        })
      ],
      module: {
        preLoaders: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: require.resolve('eslint-loader')
          }
        ],
        loaders: [
          { test: /jquery\.js$/, loader: 'expose?$' },
          { test: /jquery\.js$/, loader: 'expose?jQuery' },
          {
            test: /\.js$/,
            include: [
              path.resolve(__dirname, '../../src/js')
            ],
            loader: 'babel-loader',
            query: {
              presets: ['es2016'],
              plugins: ['transform-object-rest-spread']
            }
          }
        ]
      },
      devtool: 'source-map',
      output: {
        filename: config.resultFile
      }
    }))
    .on('error', handleErrors)
    .pipe(gulp.dest(config.dest))
    .pipe(livereload())
    .pipe(size({
      title: 'JS'
    }));
});
