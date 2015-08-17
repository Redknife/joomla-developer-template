var spritesmith = require('gulp.spritesmith');
var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var config = require('../config').sprite;
var livereload = require('gulp-livereload');
var merge = require('merge-stream');

gulp.task('sprite', function() {
  var spriteData = gulp.src(config.src)
      .pipe(spritesmith(config.settings));
  var imgStream = spriteData.img
    .pipe(imagemin())
    .pipe(gulp.dest(config.imgDest));

  var cssStream = spriteData.css
    .pipe(gulp.dest(config.cssDest))
    .pipe(livereload());

  return merge(imgStream, cssStream);
});
