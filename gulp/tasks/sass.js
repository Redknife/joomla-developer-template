var gulp = require('gulp');
var livereload = require('gulp-livereload');
var sass = require('gulp-ruby-sass');
var sourcemaps = require('gulp-sourcemaps');
var handleErrors = require('../util/handleErrors');
var config = require('../config').sass;
var rename = require('gulp-rename');
var size = require('gulp-size');
var postcss = require('gulp-postcss');
var mqpacker = require("css-mqpacker");
var autoprefixer = require('autoprefixer');

var processors = [
  autoprefixer(config.autoprefixer.browsers),
  mqpacker({ sort: true })
];

gulp.task('sass', function () {
  return sass(config.src, config.settings)
    .on('error', handleErrors)
    .pipe(postcss(processors))
    .on('error', handleErrors)
    .pipe(sourcemaps.write())
    .pipe(rename(config.resultFile))
    .pipe(gulp.dest(config.dest))
    .pipe(livereload())
    .pipe(size({
      title: 'CSS'
    }));
});
