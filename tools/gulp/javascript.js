import gulp from 'gulp';
import gutil from 'gulp-util';
import webpack from 'webpack';
import livereload from 'gulp-livereload';

import webpackDevConfig from '../webpack.dev.babel';
import webpackProdConfig from '../webpack.prod.babel';

const watch = process.env.NODE_WATCH;

const makeTask = (webpackConfig) => {
  const bundler = webpack(webpackConfig);

  return (cb) => {
    bundler.run((err, stats) => {
      if (err) throw new gutil.PluginError('js', err);
      gutil.log('[webpack!] \n', stats.toString(webpackConfig.stats));
      if (watch) livereload.reload();
      cb();
    });
  };
};

export const js = makeTask(webpackProdConfig);
export const jsDev = makeTask(webpackDevConfig);

gulp.task('js', js);
gulp.task('js:dev', jsDev);
