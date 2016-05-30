import $ from 'jquery';
import 'babel-polyfill';

import initCarousel from './plugins/carousel';
import initSelectbox from './plugins/selectbox';
import initScrollTo from './plugins/scrollTo';
import initAlert from './plugins/alert';
import initSpoiler from './plugins/spoiler';
import initForm from './plugins/form';
import { initPopupShow, initPopupGallery } from './plugins/popup';
import { initBreakpoints } from './plugins/breakpoints';

$(() => {
  initBreakpoints();

  // Plugins..
  initPopupShow('.js-modal-show');
  initPopupGallery('.js-gallery');
  initScrollTo('.js-scrollto');
  initSelectbox('.js-selectbox');
  initAlert('.alert');
  initCarousel('.js-carousel');
  initSpoiler('.js-spoiler');
  initForm('.js-form');
});
