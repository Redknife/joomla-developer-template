import gulp from 'gulp';
import livereload from 'gulp-livereload';

export default function startLivereload() {
  livereload.listen();
}

gulp.task('livereload', startLivereload);
