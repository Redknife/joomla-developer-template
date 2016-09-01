import 'babel-polyfill';

import 'chai';

const context = require.context('../../src/js', true, /\.js$/);
context.keys().forEach(context);
