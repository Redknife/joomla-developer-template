import $ from 'jquery';

// Disable hover effect while scrolling
export default (bodyClass = 'g-disable-hover') => {
  const $body = $('body');
  let timer;

  window.addEventListener('scroll', () => {
    clearTimeout(timer);
    if (!$body.hasClass(bodyClass)) {
      $body.addClass(bodyClass);
    }

    timer = setTimeout(() => {
      $body.removeClass(bodyClass);
    }, 500);
  }, false);
};
