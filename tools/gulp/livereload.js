import gulp from 'gulp';
import livereload from 'gulp-livereload';

export default function startLivereload(cb) {
  livereload.listen();
  cb();
}

gulp.task('startLivereload', startLivereload);
