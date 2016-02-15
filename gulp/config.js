basePaths = {
  src: 'src/',
  dest: 'public/',
  bower: 'src/vendor/'
};

module.exports = {

  sass: {
    src: basePaths.src + 'scss/styles.scss',
    dest: basePaths.dest,
    resultFile: 'styles.css',
    resultMinFile: 'styles.min.css',
    watch: basePaths.src + 'scss/**/*',

    settings: {
      sourcemap: true,
      loadPath: basePaths.bower
    },

    autoprefixer: {
      browsers: [
        'ie >= 8',
        'ie_mob >= 10',
        'ff >= 29',
        'chrome >= 34',
        'safari >= 7',
        'opera >= 23',
        'ios >= 7',
        'android >= 4.0'
      ]
    }
  },

  images: {
    src: basePaths.src + 'img/**',
    dest: basePaths.dest + 'img/',
    watch: basePaths.src + 'img/**/*',
  },

  sprite: {
    src: basePaths.src + 'sprite/**/*.png',
    cssDest: basePaths.src + 'scss/utils',
    imgDest: basePaths.dest + 'img/',
    watch: basePaths.src + 'sprite/**/*.png',

    settings: {
      imgName: 'sprite.png',
      cssName: '_sprite.scss',
      imgPath: 'img/sprite.png',
      padding: 5,
      cssFormat: 'scss',
      cssOpts: {
        functions: true
      },
      cssVarMap: function(sprite) {
        sprite.name = 'sp-' + sprite.name;
      }
    }
  },

  coffee: {
    src: [basePaths.src + 'coffee/form.coffee',
          basePaths.src + 'coffee/app.coffee'],
    dest: basePaths.dest,
    resultFile: 'app.js',
    resultMinFile: 'app.min.js',
    watch: basePaths.src + 'coffee/**/*',
    vendor: [basePaths.bower + 'jquery/dist/jquery.min.js',
             basePaths.bower + 'modal.js',
             basePaths.bower + 'tab.js',
             basePaths.bower + 'jquery-form-validator/form-validator/jquery.form-validator.min.js',
             basePaths.bower + 'slick-carousel/slick/slick.min.js',
             basePaths.bower + 'magnific-popup/dist/jquery.magnific-popup.min.js']
  }
};
