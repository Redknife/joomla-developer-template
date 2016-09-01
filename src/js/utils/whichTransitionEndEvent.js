import Modernizr from 'modernizr';

const transEndEventNames = {
  transition: 'transitionend',
  OTransition: 'oTransitionEnd',
  MozTransition: 'transitionend',
  WebkitTransition: 'webkitTransitionEnd',
};

export default transEndEventNames[Modernizr.prefixed('transition')];
