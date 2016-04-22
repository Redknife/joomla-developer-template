import gulp from 'gulp';
import size from 'gulp-size';
import uglify from 'gulp-uglify';
import rename from 'gulp-rename';
import conf from '../config';

const config = conf.js;

gulp.task('minjs', ['js'], () => {
  return gulp.src(config.dest + config.resultFile)
    .pipe(uglify())
    .pipe(rename(config.resultMinFile))
    .pipe(gulp.dest(config.dest))
    .pipe(size({
      title: 'JS'
    }));
});
