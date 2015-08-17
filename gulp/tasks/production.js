var gulp = require('gulp');

// Run this to compress all the things!
gulp.task('prod', function(){
  // This runs only if the karma tests pass
  gulp.start(['images', 'sprite', 'mincss', 'minjs'])
});
