import gulp from 'gulp';
import path from 'path';
import config from '../config';

gulp.task('watch', ['livereload'], () => {
  gulp.watch(path.join(config.basePaths.src, 'js/**/*.js'), ['js']);
  gulp.watch(config.styles.watch, ['styles']);
  gulp.watch(config.images.watch, ['images']);
  gulp.watch(config.iconfont.watch, ['iconfont']);
});
