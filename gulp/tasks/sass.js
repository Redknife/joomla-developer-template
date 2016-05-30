import gulp from 'gulp';
import livereload from 'gulp-livereload';
import sass from 'gulp-sass';
import sourcemaps from 'gulp-sourcemaps';
import handleErrors from '../util/handleErrors';
import rename from 'gulp-rename';
import size from 'gulp-size';
import postcss from 'gulp-postcss';
import mqpacker from "css-mqpacker";
import fixies from "postcss-fixes";
import autoprefixer from 'autoprefixer';
import conf from '../config';

const config = conf.sass;

const processors = [
  fixies,
  autoprefixer(config.autoprefixer.browsers),
  mqpacker({ sort: true })
];

gulp.task('sass', () => {
  return gulp.src(config.src)
    .pipe(sourcemaps.init())
    .pipe(sass(config.settings).on('error', handleErrors))
    .pipe(postcss(processors))
    .on('error', handleErrors)
    .pipe(sourcemaps.write())
    .pipe(rename(config.resultFile))
    .pipe(gulp.dest(config.dest))
    .pipe(livereload())
    .pipe(size({
      title: 'CSS'
    }));
});
