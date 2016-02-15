var gulp = require('gulp');
var del = require('del');

gulp.task('clean', function() {
  del(['./public/**/*.{png,jpg,jpeg,gif,css,js}'], function(err, paths) {
    console.log('Deleted files/folders:\n', paths.join('\n'));
  });
});
