import gulp from 'gulp';
import realFavicon from 'gulp-real-favicon';
import fs from 'fs';
import { favicons as config } from '../config';

export default function faviconsGen(cb) {
  realFavicon.generateFavicon(config.settings, cb);
}

export function faviconsGenMarkup(cb) {
  fs.readFile(config.dataFile, (err, data) => {
    if (err) throw err;
    const obj = JSON.parse(data);
    const htmlCode = obj.favicon.html_code;
    gulp.src(config.markupFile)
      .pipe(realFavicon.injectFaviconMarkups(htmlCode))
      .pipe(gulp.dest(config.markupFileDest));
    cb();
  });
}

export function checkFaviconUpdate(cb) {
  const currentVersion = JSON.parse(fs.readFileSync(config.dataFile)).version;
  realFavicon.checkForUpdates(currentVersion, (err) => {
    if (err) throw err;
    cb();
  });
}

gulp.task('favicons', faviconsGen);

