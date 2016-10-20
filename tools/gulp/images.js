import changed from 'gulp-changed';
import gulp from 'gulp';
import imagemin from 'gulp-imagemin';
import { images as config } from '../config';
import afterCompleteTaskCb from './utils/afterCompleteTaskCb';

export default function images() {
  return gulp.src(config.src, { since: gulp.lastRun('images') })
    .pipe(changed(config.dest))
    .pipe(imagemin())
    .pipe(gulp.dest(config.dest))
    .pipe(afterCompleteTaskCb());
}

gulp.task('images', images);
