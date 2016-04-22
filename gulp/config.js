import path from 'path';

const basePaths = {
  src: 'src/',
  dest: 'public/',
  bower: './bower_components'
};

export default {

  sass: {
    src: path.join(basePaths.src, '/scss/styles.scss'),
    dest: basePaths.dest,
    resultFile: 'styles.css',
    resultMinFile: 'styles.min.css',
    watch: path.join(basePaths.src, '/scss/**/*'),

    settings: {
      sourcemap: true,
      loadPath: basePaths.bower
    },

    autoprefixer: {
      browsers: [
        'last 3 versions',
        '> 5%',
        'ie >= 8',
        'ios >= 7',
        'android >= 4.0'
      ]
    }
  },

  images: {
    src: path.join(basePaths.src, '/img/**'),
    dest: path.join(basePaths.dest, '/img'),
    watch: path.join(basePaths.src, '/img/**/*')
  },

  sprite: {
    src: path.join(basePaths.src, '/sprite/**/*.png'),
    cssDest: path.join(basePaths.src, '/scss/utils'),
    imgDest: path.join(basePaths.dest, '/img'),
    watch: path.join(basePaths.src, '/sprite/**/*.png'),

    settings: {
      imgName: 'sprite.png',
      cssName: '_sprite.scss',
      imgPath: 'img/sprite.png',
      padding: 5,
      cssFormat: 'scss',
      cssOpts: {
        functions: true
      },
      cssVarMap(sprite) {
        sprite.name = `sp-${sprite.name}`;
      }
    }
  },

  iconfont: {
    src: [path.join(basePaths.src, '/icons/**/*.svg')],
    settings: {
      fontName: 'iconfont',
      prependUnicode: false,
      fontHeight: 150,
      normalize: true,
      centerHorizontally: true,
      formats: ['ttf', 'eot', 'woff', 'woff2', 'svg']
    },
    cssSettings: {
      fontName: 'iconfont',
      path: 'src/scss/utils/_template-iconfont.scss',
      targetPath: '../../src/scss/base/_icons.scss',
      fontPath: 'iconfont/',
      cssClass: 'i'
    },
    dest: path.join(basePaths.dest, '/iconfont'),
    watch: path.join(basePaths.src, '/icons/**/*.svg')
  },

  js: {
    src: path.join(basePaths.src, '/js/index.js'),
    dest: basePaths.dest,
    resultFile: 'app.js',
    resultMinFile: 'app.min.js',
    watch: path.join(basePaths.src, '/js/**/*.js'),
    vendor: []
  }
};
