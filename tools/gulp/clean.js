import gulp from 'gulp';
import del from 'del';
import { clean as config } from '../config';

export default function clean() {
  return del(config.src);
}

gulp.task('clean', clean);
