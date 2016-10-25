import 'babel-polyfill';

import $ from 'jquery';
import 'modernizr';

import uaHtmlClasses from './helpers/uaHtmlClasses';
import breakpoints from './helpers/breakpoints';

// Init all..
$(() => {
  uaHtmlClasses();
  breakpoints.init();
});
