import gulp from 'gulp';
import livereload from 'gulp-livereload';
import gutil from 'gulp-util';
import sass from 'gulp-sass';
import sourcemaps from 'gulp-sourcemaps';
import rename from 'gulp-rename';
import postcss from 'gulp-postcss';
import mqpacker from 'css-mqpacker';
import fixies from 'postcss-fixes';
import autoprefixer from 'autoprefixer';
import gulpif from 'gulp-if';
import csso from 'gulp-csso';
import conf from '../config';
import assets from 'postcss-assets';
import initial from 'postcss-initial';

const isDev = process.env.NODE_ENV === 'dev';

const processors = [
  fixies,
  initial({
    reset: 'inherited',
  }),
  assets(conf.styles.assets),
  autoprefixer(conf.styles.autoprefixer),
  mqpacker({ sort: true }),
];

const finalFilename = isDev ? 'styles' : 'styles.min';

// TODO: optimize task: multiply funcs for dev and prod build

gulp.task('styles', () => {
  return gulp.src(conf.styles.src)
    .pipe(gulpif(isDev, sourcemaps.init()))
    .pipe(sass(conf.styles.sass).on('error', sass.logError))
    .pipe(postcss(processors))
    .on('error', gutil.log)
    .pipe(gulpif(isDev, sourcemaps.write()))
    .pipe(gulpif(!isDev, csso()))
    .pipe(rename({
      basename: finalFilename,
    }))
    .pipe(gulp.dest(conf.styles.dest))
    .pipe(gulpif(isDev, livereload()));
});
