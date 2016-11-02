import $ from 'jquery';

export default (selector = '.js-scrollto') => {
  $(selector).each((i, el) => {
    const $el = $(el);
    const targetSel = $el.attr('href') || $el.data('target');
    const $target = $(targetSel);
    if (!$target.length) return;

    const offset = $el.data('offset');
    const duration = $el.data('duration') || 500;
    const easing = $el.data('easing') || 'easeInOutQuad';
    const containerSel = $el.data('container');
    const container = containerSel ? $(containerSel) : undefined;

    $el.on('click', (e) => {
      e.preventDefault();
      $target.velocity('scroll', {
        container,
        offset,
        duration,
        easing,
      });
    });
  });
};
