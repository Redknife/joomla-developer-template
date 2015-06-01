var basePaths = {
    src: 'src/',
    dest: 'public/'
};

var paths = {
    images: {
        src: basePaths.src + 'img/',
        dest: basePaths.dest + 'img/'
    },
    scripts: {
        src: basePaths.src + 'js/',
        dest: basePaths.dest + 'js/'
    },
    styles: {
        src: basePaths.src + 'scss/',
        dest: basePaths.dest + 'css/'
    },
    sprite: {
        src: basePaths.src + 'sprite/*.png'
    },
    vendor: basePaths.src + 'vendor/'
};

var appFiles = {
    styles: paths.styles.src + '**/*.scss',
    scripts: [
        paths.scripts.src + 'app.js'
    ],
    images: paths.images.src + '**/*'
};

var vendorFiles = {
    styles: '',
    scripts: [
        paths.vendor + 'jquery/dist/jquery.js',
        paths.vendor + 'slick.js/slick/slick.js',
        paths.vendor + 'magnific-popup/dist/jquery.magnific-popup.js',
        paths.vendor + 'jquery-form-validator/form-validator/jquery.form-validator.js',
        paths.scripts.src + 'modal.js',
        paths.scripts.src + 'tab.js'
    ]
};

var spriteConfig = {
    imgName: 'sprite.png',
    cssName: '_sprite.scss',
    imgPath: '../img/sprite.png'
};

var AUTOPREFIXER_BROWSERS = [
    'ie >= 8',
    'ie_mob >= 10',
    'ff >= 29',
    'chrome >= 34',
    'safari >= 7',
    'opera >= 23',
    'ios >= 7',
    'android >= 4.0'
];

// For pagespeed tests
var psi = require('psi');
var site = 'http://www.sitename.net',
    key = '';

var gulp = require('gulp');

var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'gulp.*'],
    replaceString: /\bgulp[\-.]/
});

var gutil = require('gulp-util'),
    runSequence = require('run-sequence'),
    livereload = require('gulp-livereload');

var isProduction = true,
    sassStyle = 'compressed',
    sassLineNumber = false;

if (gutil.env.dev === true) {
    sassStyle = 'expanded';
    isProduction = false;
    sassLineNumber = true;
}

var nativeNotify = false;

var changeEvent = function(evt) {
    gutil.log('File', gutil.colors.cyan(evt.path.replace(new RegExp('/.*(?=/' + basePaths.src + ')/'), '')), 'was', gutil.colors.magenta(evt.type));
};

// TASKS..

// Compile and Automatically Prefix Stylesheets
gulp.task('styles', function() {
    return $.rubySass(paths.styles.src, {
            style: sassStyle,
            precision: 10,
            lineNumbers: sassLineNumber,
            loadPath: 'src/vendor/'
        })

        .on('error', console.error.bind(console))
        .pipe($.autoprefixer(AUTOPREFIXER_BROWSERS))
        .pipe(gulp.dest('.tmp'))
        .pipe($.concat('styles.css'))
        .pipe(isProduction ? $.combineMediaQueries({
            log: true
        }) : gutil.noop())
        .pipe(isProduction ? $.if('*.css', $.csso()) : gutil.noop())
        .pipe(isProduction ? $.rename('styles.min.css') : gutil.noop())
        .pipe(gulp.dest(paths.styles.dest))
        .pipe(livereload())
        .pipe($.size({
            title: 'styles'
        }))
        .pipe(nativeNotify ? $.notify({
            onLast: true,
            message: function(file) {
              return "Compiled: " + file.relative;
            }
        }) : gutil.noop());
});

// Lint and concat JavaScript
gulp.task('scripts', function() {
    gulp.src(appFiles.scripts)
        .pipe($.jshint())
        .pipe($.jshint.reporter('jshint-stylish'));

    return gulp.src(vendorFiles.scripts.concat(appFiles.scripts))
        .pipe(isProduction ? $.concat('app.min.js') : $.concat('app.js'))
        .pipe(isProduction ? $.uglify() : gutil.noop())
        .pipe($.size({
            title: 'scripts'
        }))
        .pipe(gulp.dest(paths.scripts.dest))
        .pipe(livereload())
        .pipe(nativeNotify ? $.notify({
            onLast: true,
            message: function(file) {
              return "Scripts is done: " + file.relative;
            }
        }) : gutil.noop());
});

// Optimize Images
gulp.task('images', function() {
    return gulp.src(appFiles.images)
        .pipe($.imagemin({
            progressive: true,
            interlaced: true
        }))
        .pipe(gulp.dest(paths.images.dest))
        .pipe(livereload())
        .pipe($.size({
            title: 'images'
        }))
        .pipe(nativeNotify ? $.notify("Images optimized!") : gutil.noop());
});

// Sprite generator
gulp.task('sprite', function() {
    var spriteData = gulp.src(paths.sprite.src).pipe($.spritesmith({
        imgName: spriteConfig.imgName,
        cssName: spriteConfig.cssName,
        imgPath: spriteConfig.imgPath,
        padding: 10,
        cssFormat: 'scss',
        cssOpts: {
            functions: true
        },
        cssVarMap: function(sprite) {
            sprite.name = 'sp-' + sprite.name;
        }
    }));
    spriteData.img.pipe(gulp.dest(paths.images.dest));
    spriteData.css.pipe(gulp.dest(paths.styles.src+"utils"));
});

gulp.task('watch', ['styles', 'scripts'], function() {
    livereload.listen();

    gulp.watch(appFiles.styles, ['styles']).on('change', function(evt) {
        changeEvent(evt);
    });

    gulp.watch(appFiles.scripts, ['scripts']).on('change', function(evt) {
        changeEvent(evt);
    });

    gulp.watch(appFiles.images, ['images']).on('change', function(evt) {
        changeEvent(evt);
    });

    gulp.watch(paths.sprite.src, ['sprite']).on('change', function(evt) {
        changeEvent(evt);
    });
});

gulp.task('ps-mobile', function (cb) {
    psi({
        // key: key
        nokey: 'true',
        url: site,
        strategy: 'mobile',
    }, cb);
});

gulp.task('ps-desktop', function (cb) {
    psi({
        // key: key,
        nokey: 'true',
        url: site,
        strategy: 'desktop',
    }, cb);
});

gulp.task('default', [], function(cb) {
    runSequence(['styles', 'scripts', 'images', 'sprite', 'watch'], cb);
});
