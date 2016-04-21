var gulp = require('gulp');
var iconfont = require('gulp-iconfont');
var livereload = require('gulp-livereload');
var iconfontCss = require('gulp-iconfont-css');
var config = require('../config').iconfont;

var runTimestamp = Math.round(Date.now() / 1000);

gulp.task('iconfont', function() {
  return gulp.src(config.src, {base: 'src'})
    .pipe(iconfontCss(config.cssSettings))
    .pipe(iconfont(config.settings))
    .pipe(gulp.dest(config.dest))
    .pipe(livereload());
});
