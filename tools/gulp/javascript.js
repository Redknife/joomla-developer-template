/* eslint no-param-reassign: 0 */
import gulp from 'gulp';
import gutil from 'gulp-util';
import webpack from 'webpack-stream';
import afterCompleteTaskCb from './utils/afterCompleteTaskCb';

import webpackDevConfig from '../webpack.dev.babel';
import webpackProdConfig from '../webpack.prod.babel';

const watch = Boolean(process.env.NODE_WATCH);

const makeTask = (webpackConfig) => {
  webpackConfig.watch = watch;
  const src = Object.keys(webpackConfig.entry).map(key => webpackConfig.entry[key]);
  const wpStreamConf = Object.assign({ quiet: true }, webpackConfig.stats, webpackConfig);

  return (cb) => {
    return gulp.src(src)
      .pipe(webpack(wpStreamConf, null, (err, stats) => {
        if (err) throw new gutil.PluginError('webpack', err);
        gutil.log('[webpack]', stats.toString(webpackConfig.stats));
        if (watch) afterCompleteTaskCb();
        cb();
      }))
      .pipe(gulp.dest(webpackConfig.output.path))
      .pipe(afterCompleteTaskCb());
  };
};

export const js = makeTask(webpackProdConfig);
export const jsDev = makeTask(webpackDevConfig);

gulp.task('js', js);
gulp.task('js:dev', jsDev);
