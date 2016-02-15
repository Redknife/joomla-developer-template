var gulp     = require('gulp');
var config   = require('../config');

gulp.task('watch', ['livereload'], function() {
  gulp.watch(config.coffee.watch, ['coffee']);
  gulp.watch(config.sass.watch, ['sass']);
  gulp.watch(config.images.watch, ['images']);
  gulp.watch(config.sprite.watch, ['sprite']);
});
