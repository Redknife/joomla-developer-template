// import spritesmith from 'gulp.spritesmith';
// import gulp from 'gulp';
// import imagemin from 'gulp-imagemin';
// import livereload from 'gulp-livereload';
// import merge from 'merge-stream';
// import buffer from 'vinyl-buffer';
// import conf from '../config';
//
// const config = conf.sprite;
//
// gulp.task('sprite', () => {
//   const spriteData = gulp.src(config.src)
//       .pipe(spritesmith(config.settings));
//
//   const imgStream = spriteData.img
//     .pipe(buffer())
//     .pipe(imagemin())
//     .pipe(gulp.dest(config.imgDest));
//
//   const cssStream = spriteData.css
//     .pipe(gulp.dest(config.cssDest))
//     .pipe(livereload());
//
//   return merge(imgStream, cssStream);
// });
