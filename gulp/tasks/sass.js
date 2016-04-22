import gulp from 'gulp';
import livereload from 'gulp-livereload';
import sass from 'gulp-ruby-sass';
import sourcemaps from 'gulp-sourcemaps';
import handleErrors from '../util/handleErrors';
import rename from 'gulp-rename';
import size from 'gulp-size';
import postcss from 'gulp-postcss';
import mqpacker from "css-mqpacker";
import autoprefixer from 'autoprefixer';
import conf from '../config';

const config = conf.sass;

const processors = [
  autoprefixer(config.autoprefixer.browsers),
  mqpacker({ sort: true })
];

gulp.task('sass', () => {
  return sass(config.src, config.settings)
    .on('error', handleErrors)
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
