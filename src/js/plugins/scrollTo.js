import $ from 'jquery';
import 'jquery.scrollto';


export default (selector) => {
  $(selector).each((i, el) => {
    const $el = $(el);

    if (!!$el.attr('href') || !!$el.data('target')) {
      const target = $el.attr('href') || $el.data('target');
      const speed = $el.data('speed') || 500;

      let $target;

      if (target.startsWith('#') || target.startsWith('.')) {
        $target = $(target);
      } else {
        $target = $(`[data-scroll="${target}"]`);
      }

      $el.on('click', (e) => {
        e.preventDefault();

        $(window).scrollTo($target, speed, {
          axis: 'y',
          interrupt: true,
          offset: {
            top: $el.data('offsetTop') || 0,
            left: 0,
          },
        });
      });
    }
  });
};
