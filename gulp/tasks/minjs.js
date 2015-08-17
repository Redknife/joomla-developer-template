var gulp = require('gulp');
var config = require('../config').javascript;
var size = require('gulp-size');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');


gulp.task('minjs', ['browserify'], function() {
  return gulp.src(config.dest + config.resultFile)
    .pipe(uglify())
    .pipe(rename(config.resultMinFile))
    .pipe(gulp.dest(config.dest))
    .pipe(size({
      title: 'JS'
    }));
});
