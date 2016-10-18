import path from 'path';

const cwd = process.cwd();

const basePaths = {
  src: path.join(cwd, 'src'),
  dest: path.join(cwd, 'public'),
  bower: path.join(cwd, 'bower_components'),
  node_modules: path.join(cwd, 'node_modules'),
};

export default {

  basePaths,

  styles: {
    src: path.join(basePaths.src, '/scss/main.scss'),
    dest: basePaths.dest,
    watch: path.join(basePaths.src, '/scss/**/*'),

    sass: {
      sourcemap: true,
      includePaths: [basePaths.node_modules, basePaths.bower],
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

  favicon: {
    dataFile: path.join(basePaths.dest, 'favicons', 'faviconData.json'),
    markupFileDest: path.join(basePaths.dest, 'favicons'),
    markupFile: path.join(basePaths.dest, 'favicons', 'markup.html'),
    settings: {
      markupFile: path.join(basePaths.dest, 'favicons', 'faviconData.json'),
      masterPicture: path.join(basePaths.src, '/favicon/favicon.jpg'),
      dest: path.join(basePaths.dest, 'favicons'),
      iconsPath: '/templates/blank_j3/public/favicons/',
      design: {
        ios: {
          pictureAspect: 'noChange',
          assets: {
            ios6AndPriorIcons: false,
            ios7AndLaterIcons: false,
            precomposedIcons: false,
            declareOnlyDefaultIcon: true,
          },
          appName: 'MySite',
        },
        desktopBrowser: {},
        windows: {
          pictureAspect: 'noChange',
          backgroundColor: '#00aba9',
          onConflict: 'override',
          assets: {
            windows80Ie10Tile: false,
            windows10Ie11EdgeTiles: {
              small: false,
              medium: true,
              big: false,
              rectangle: false,
            },
          },
          appName: 'MySite',
        },
        androidChrome: {
          pictureAspect: 'noChange',
          themeColor: '#ffffff',
          manifest: {
            name: 'MySite',
            display: 'standalone',
            orientation: 'notSet',
            onConflict: 'override',
            declared: true,
          },
          assets: {
            legacyIcon: false,
            lowResolutionIcons: false,
          },
        },
        safariPinnedTab: {
          pictureAspect: 'blackAndWhite',
          threshold: 44.53125,
          themeColor: '#00aba9',
        },
      },
      settings: {
        scalingAlgorithm: 'Mitchell',
        errorOnImageTooSmall: false,
      },
    },
  },
};
