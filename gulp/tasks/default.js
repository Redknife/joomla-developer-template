import gulp from 'gulp';
import runSequence from 'run-sequence';

gulp.task('default', [], cb => {
  runSequence('iconfont', ['js', 'sass', 'images', 'watch'], cb);
});
