import Modernizr from 'modernizr';

const animationEndEventNames = {
  animation: 'animationend',
  OAnimation: 'oAnimationEnd',
  MozAnimation: 'animationend',
  WebkitAnimation: 'webkitAnimationEnd',
};

export default animationEndEventNames[Modernizr.prefixed('animation')];
