var gulp         = require('gulp');
var livereload  = require('gulp-livereload');
var sass         = require('gulp-ruby-sass');
var sourcemaps   = require('gulp-sourcemaps');
var handleErrors = require('../util/handleErrors');
var config       = require('../config').sass;
var autoprefixer = require('gulp-autoprefixer');
var rename = require('gulp-rename');
var size = require('gulp-size');


gulp.task('sass', function() {
  return sass(config.src, config.settings)
    .on('error', handleErrors)
    .pipe(sourcemaps.write())
    .pipe(autoprefixer(config.autoprefixer.browsers))
    .pipe(rename(config.resultFile))
    .pipe(gulp.dest(config.dest))
    .pipe(livereload())
    .pipe(size({
      title: 'CSS'
    }));
});
