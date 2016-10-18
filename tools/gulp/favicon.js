import gulp from 'gulp';
import realFavicon from 'gulp-real-favicon';
import fs from 'fs';
import conf from '../config';

const config = conf.favicon;

gulp.task('favicon', ['favicon:gen']);

gulp.task('favicon:gen', (cb) => {
  realFavicon.generateFavicon(config.settings, cb);
});

gulp.task('favicon:markup', (cb) => {
  fs.readFile(config.dataFile, (err, data) => {
    if (err) throw err;
    const obj = JSON.parse(data);
    const htmlCode = obj.favicon.html_code;
    gulp.src(config.markupFile)
      .pipe(realFavicon.injectFaviconMarkups(htmlCode))
      .pipe(gulp.dest(config.markupFileDest));
    cb();
  });
});

gulp.task('favicon:check-update', (cb) => {
  const currentVersion = JSON.parse(fs.readFileSync(config.dataFile)).version;
  realFavicon.checkForUpdates(currentVersion, (err) => {
    if (err) throw err;
    cb();
  });
});
