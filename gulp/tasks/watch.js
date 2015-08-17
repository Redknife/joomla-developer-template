var gulp     = require('gulp');
var config   = require('../config');

gulp.task('watch', ['livereload'], function() {
  gulp.watch(config.coffee.src, ['coffee']);
  gulp.watch(config.sass.src+'**/*.scss', ['sass']);
  gulp.watch(config.images.src+'/*.{png,jpg,jpeg}', ['images']);
  gulp.watch(config.sprite.src, ['sprite']);
});
