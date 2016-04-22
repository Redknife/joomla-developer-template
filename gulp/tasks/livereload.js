import gulp from 'gulp';
import livereload from 'gulp-livereload';

gulp.task('livereload', () => {
  livereload.listen();
});
