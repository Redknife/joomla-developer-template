var gulp      = require('gulp');
var config    = require('../config').sass;
var size      = require('gulp-size');
var combineMediaQueries = require('gulp-combine-media-queries');
var csso = require('gulp-csso');
var rename = require('gulp-rename');

gulp.task('mincss', ['sass'], function() {
  return gulp.src(config.dest + config.resultFile)
    .pipe(combineMediaQueries({
      log: true
    }))
    .pipe(csso())
    .pipe(rename(config.resultMinFile))
    .pipe(gulp.dest(config.dest))
    .pipe(size({
      title: 'CSS'
    }));
})
