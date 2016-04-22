import gulp from 'gulp';

gulp.task('prod', () => {
  gulp.start(['images', 'iconfont', 'mincss', 'minjs'])
});
