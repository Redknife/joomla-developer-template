import gulp from 'gulp';
import del from 'del';
import gutil from 'gulp-util';
import path from 'path';
import config from '../config';

gulp.task('clean', (cb) => {
  const src = path.join(config.basePaths.dest, '**/*');
  // return gulp.src([src, '!**/index.html'])
  return del([src, '!**/index.html'], (err, paths) => {
    if (err) throw new gutil.PluginError('clean', err);
    gutil.log('Deleted files/folders:\n', paths.join('\n'));
    cb();
  });
});
