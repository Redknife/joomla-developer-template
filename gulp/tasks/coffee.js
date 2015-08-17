var sourcemaps = require('gulp-sourcemaps');
var coffee = require('gulp-coffee');
var gulp = require('gulp');
var changed = require('gulp-changed');
var livereload = require('gulp-livereload');
var size = require('gulp-size');
var config = require('../config').coffee;
var handleErrors = require('../util/handleErrors');
var concat = require('gulp-concat');
var es = require("event-stream");
var order = require("gulp-order");
var streamqueue = require('streamqueue');

gulp.task('coffee', function() {
  streamqueue({ objectMode: true },
    gulp.src(config.vendor),
    gulp.src(config.src)
        .pipe(sourcemaps.init())
        .pipe(concat('app.coffee'))
        .pipe(coffee()).on('error', handleErrors)
        .pipe(sourcemaps.write())
  )
  .pipe(concat('app.js'))
  .pipe(gulp.dest(config.dest))
  .pipe(livereload())
  .pipe(size({
    title: 'JS'
  }));
});
