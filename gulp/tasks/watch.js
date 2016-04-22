import gulp from 'gulp';
import config from '../config';

gulp.task('watch', ['livereload'], () => {
  gulp.watch(config.js.watch, ['js']);
  gulp.watch(config.sass.watch, ['sass']);
  gulp.watch(config.images.watch, ['images']);
  gulp.watch(config.iconfont.watch, ['iconfont']);
});
