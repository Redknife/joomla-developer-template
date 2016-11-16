import gulp from 'gulp';
import assets from 'gulp-asset-hash';
import { rev as config } from '../config';

export function rev() {
  return gulp.src(config.src)
    .pipe(assets.hash(config.hashConfig))
    .pipe(gulp.dest('public'));
}

gulp.task('rev', rev);

export function revWatch() {
  gulp.watch(config.watch, rev);
}

gulp.task('rev:watch', revWatch);
