var gulp     = require('gulp');
var config   = require('../config');

gulp.task('watch', ['livereload'], function() {
  gulp.watch(config.js.watch, ['js']);
  gulp.watch(config.sass.watch, ['sass']);
  gulp.watch(config.images.watch, ['images']);
  gulp.watch(config.iconfont.watch, ['iconfont']);
});
