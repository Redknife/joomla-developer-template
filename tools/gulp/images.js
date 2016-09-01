import changed from 'gulp-changed';
import gulp from 'gulp';
import imagemin from 'gulp-imagemin';
import livereload from 'gulp-livereload';
import size from 'gulp-size';
import conf from '../config';

const config = conf.images;

gulp.task('images', () => {
  return gulp.src(config.src)
    .pipe(changed(config.dest))
    .pipe(imagemin())
    .pipe(gulp.dest(config.dest))
    .pipe(livereload())
    .pipe(size({
      title: 'IMAGES',
    }));
});
