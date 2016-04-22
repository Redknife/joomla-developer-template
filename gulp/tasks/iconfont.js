import gulp from 'gulp';
import iconfont from 'gulp-iconfont';
import livereload from 'gulp-livereload';
import iconfontCss from 'gulp-iconfont-css';
import conf from '../config';

const config = conf.iconfont;

var runTimestamp = Math.round(Date.now() / 1000);

gulp.task('iconfont', () => {
  return gulp.src(config.src, { base: 'src' })
    .pipe(iconfontCss(config.cssSettings))
    .pipe(iconfont(config.settings))
    .pipe(gulp.dest(config.dest))
    .pipe(livereload());
});
