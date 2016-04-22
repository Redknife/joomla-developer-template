import gulp from 'gulp';
import size from 'gulp-size';
import csso from 'gulp-csso';
import rename from 'gulp-rename';
import conf from '../config';

const config = conf.sass;


gulp.task('mincss', ['sass'], () => {
  return gulp.src(config.dest + config.resultFile)
    .pipe(csso())
    .pipe(rename(config.resultMinFile))
    .pipe(gulp.dest(config.dest))
    .pipe(size({
      title: 'CSS'
    }));
})
