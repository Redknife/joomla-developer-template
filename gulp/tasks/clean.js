import gulp from 'gulp';
import del from 'del';

gulp.task('clean', () => {
  del(['./public/**/*.{png,jpg,jpeg,gif,css,js,map,eot,svg,ttf,woff,woff2}'], (err, paths) => {
    console.log('Deleted files/folders:\n', paths.join('\n'));
  });
});
