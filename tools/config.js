const path = require('path');

const cwd = process.cwd();
const configuration = {};

export const basePaths = {
  src: path.join(cwd, 'src'),
  dest: path.join(cwd, 'public'),
  bower: path.join(cwd, 'bower_components'),
  node_modules: path.join(cwd, 'node_modules'),
};
configuration.basePaths = basePaths;

// Clean task
export const clean = {
  src: ['public/**/!(favicons|fonts|img|index.html)'],
};
configuration.clean = clean;

// Styles task
export const styles = {
  src: path.join(basePaths.src, '/scss/main.scss'),
  dest: basePaths.dest,
  resultFilename: 'styles',
  watch: path.join(basePaths.src, '/scss/**/*.scss'),

  sass: {
    sourcemap: true,
    includePaths: [basePaths.node_modules, basePaths.bower],
    outputStyle: 'compact',
  },

  postcss: {
    autoprefixer: {
      browsers: [
        '> 7%',
        'last 2 version',
        'ie >= 9',
        'ios >= 7',
        'android >= 4.0',
      ],
    },

    assets: {
      basePath: cwd,
      baseUrl: '/templates/blank_j3/',
      loadPaths: ['public/img/'],
    },

    initial: { reset: 'inherited' },

    mqpacker: { sort: true },
  },
};
configuration.styles = styles;

// Icon font
export const iconfont = {
  src: [path.join(basePaths.src, 'icons/**/*.svg')],
  dest: path.join(basePaths.dest, 'fonts', 'icons'),
  watch: path.join(basePaths.src, 'icons/**/*.svg'),
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
};
configuration.iconfont = iconfont;

// Images
export const images = {
  src: path.join(basePaths.src, '/img/**'),
  dest: path.join(basePaths.dest, '/img'),
  watch: path.join(basePaths.src, '/img/**/*.{png,jpg,jpeg,svg,gif}'),
};
configuration.images = images;

// Favicons
export const favicons = {
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
};
configuration.favicons = favicons;

export default configuration;
