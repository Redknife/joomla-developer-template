function whichAnimationEvent() {
  let t;
  const el = document.createElement('fakeelement');

  const animations = {
    animation: 'animationend',
    OAnimation: 'oAnimationEnd',
    MozAnimation: 'animationend',
    WebkitAnimation: 'webkitAnimationEnd',
  };

  for (t in animations) {
    if (el.style[t] !== undefined) {
      return animations[t];
    }
  }

  return animations.animation;
}

export const animationEvent = whichAnimationEvent();

function whichTransitionEvent() {
  let t;
  const el = document.createElement('fakeelement');
  const transitions = {
    transition: 'transitionend',
    OTransition: 'oTransitionEnd',
    MozTransition: 'transitionend',
    WebkitTransition: 'webkitTransitionEnd',
  };

  for (t in transitions) {
    if (el.style[t] !== undefined) {
      return transitions[t];
    }
  }

  return transitions.transition;
}

export const transitionEvent = whichTransitionEvent();
