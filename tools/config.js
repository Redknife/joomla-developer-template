import path from 'path';

const cwd = process.cwd();

const basePaths = {
  src: path.join(cwd, 'src'),
  dest: path.join(cwd, 'public'),
  bower: path.join(cwd, 'bower_components'),
};

export default {

  basePaths,

  styles: {
    src: path.join(basePaths.src, '/scss/main.scss'),
    dest: basePaths.dest,
    watch: path.join(basePaths.src, '/scss/**/*'),

    sass: {
      sourcemap: true,
      includePaths: basePaths.bower,
      outputStyle: 'compact',
    },

    autoprefixer: {
      browsers: [
        'last 3 versions',
        '> 5%',
        'ie >= 8',
        'ios >= 7',
        'android >= 4.0',
      ],
    },

    assets: {
      basePath: path.resolve(cwd, '..', '..'),
      loadPaths: [
        'images/',
        path.relative(path.resolve(cwd, '..', '..'), path.join(cwd, 'public', 'img')),
        path.relative(path.resolve(cwd, '..', '..'), path.join(cwd, 'public', 'fonts')),
      ],
    },
  },


  iconfont: {
    src: [path.join(basePaths.src, 'icons/**/*.svg')],
    settings: {
      fontName: 'icons',
      prependUnicode: false,
      fontHeight: 150,
      normalize: true,
      centerHorizontally: true,
      formats: ['ttf', 'eot', 'woff', 'woff2', 'svg'],
    },
    cssSettings: {
      fontName: 'icons',
      path: 'src/scss/utilities/_template-iconfont.scss',
      targetPath: '../../../src/scss/base/_icons.scss',
      fontPath: 'fonts/icons/',
      cssClass: 'i',
    },
    dest: path.join(basePaths.dest, 'fonts', 'icons'),
    watch: path.join(basePaths.src, 'icons/**/*.svg'),
  },

  images: {
    src: path.join(basePaths.src, '/img/**'),
    dest: path.join(basePaths.dest, '/img'),
    watch: path.join(basePaths.src, '/img/**/*'),
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
        functions: true,
      },
      cssVarMap(sprite) {
        /* eslint-disable no-param-reassign */
        sprite.name = `sp-${sprite.name}`;
        /* eslint-enable no-param-reassign */
      },
    },
  },
};
