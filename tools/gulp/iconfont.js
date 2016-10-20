import gulp from 'gulp';
import iconfont from 'gulp-iconfont';
import iconfontCss from 'gulp-iconfont-css';
import { iconfont as config } from '../config';
import afterCompleteTaskCb from './utils/afterCompleteTaskCb';

export default function genIconfont() {
  return gulp.src(config.src, { base: 'src', since: gulp.lastRun('iconfont') })
    .pipe(iconfontCss(config.cssSettings))
    .pipe(iconfont(config.settings))
    .pipe(gulp.dest(config.dest))
    .pipe(afterCompleteTaskCb());
}

gulp.task('iconfont', genIconfont);

