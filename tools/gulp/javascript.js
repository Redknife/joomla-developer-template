import gulp from 'gulp';
import livereload from 'gulp-livereload';
import webpack from 'webpack';
import gutil from 'gulp-util';

import webpackDevConfig from '../webpack.dev.babel';
import webpackProdConfig from '../webpack.prod.babel';

const isDev = process.env.NODE_ENV === 'dev';

const config = isDev ? webpackDevConfig : webpackProdConfig;
const bundler = webpack(config);

gulp.task('js', (cb) => {
  bundler.run((err, stats) => {
    if (err) throw new gutil.PluginError('js', err);
    gutil.log('[webpack] \n', stats.toString(config.stats));
    livereload.reload();
    cb(err);
  });
});
