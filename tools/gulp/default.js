import gulp from 'gulp';
import runSequence from 'run-sequence';

// TODO: rewrite to async run with depend tasks
gulp.task('default', cb => {
  runSequence('iconfont', ['js', 'styles', 'images'], cb);
});
