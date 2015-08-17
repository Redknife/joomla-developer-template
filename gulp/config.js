basePaths = {
  src: 'src/',
  dest: 'public/',
  bower: 'src/vendor/'
};

module.exports = {

  sass: {
    src: basePaths.src + 'scss/',
    dest: basePaths.dest,
    resultFile: 'styles.css',
    resultMinFile: 'styles.min.css',

    settings: {
      style: 'compressed',
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
    dest: basePaths.dest + 'img/'
  },

  sprite: {
    src: basePaths.src + 'sprite/**/*.png',
    cssDest: basePaths.src + 'scss/utils',
    imgDest: basePaths.dest + 'img/',

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

  javascript: {
    dest: basePaths.dest,
    resultFile: 'app.js',
    resultMinFile: 'app.min.js'
  },

  coffee: {
    src: [basePaths.src + 'coffee/form.coffee',
          basePaths.src + 'coffee/app.coffee'],
    dest: basePaths.dest,
    resultFile: 'app.js',
    resultMinFile: 'app.min.js',
    vendor: [basePaths.bower + 'jquery/dist/jquery.min.js',
             basePaths.bower + 'jquery-form-validator/jquery.form-validator.min.js',
             basePaths.bower + 'slick.js/slick/slick.min.js']
  },

  browserify: {
    bundleConfigs: [{
      entries: './src/coffee/app.coffee',
      dest: './public/',
      outputName: 'app.js',
      extensions: ['.coffee'],
      debug: true,
      // defining transforms here will avoid crashing your stream
      // transform: ['coffeeify']
    }]
  }

};
