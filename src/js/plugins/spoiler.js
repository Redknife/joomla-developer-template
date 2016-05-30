import $ from 'jquery';

import { breakpointChangeEvent } from './breakpoints';

export default (selector) => {
  $(selector).each((i, el) => {
    const $container = $(el);
    const $toggler = $container.find(`${selector}-toggler`);
    const $box = $container.find(`${selector}-box`);
    const $content = $box.children().first();
    let isCollapsed = $box.hasClass('-collapsed');

    const open = () => {
      $toggler.removeClass('-collapsed');
      $box.removeClass('-collapsed');
      $box.css({ height: $content.outerHeight(true) });
      isCollapsed = false;
    };

    const close = () => {
      $toggler.addClass('-collapsed');
      $box.addClass('-collapsed');
      $box.css({ height: 0 });
      isCollapsed = true;
    };

    $toggler.on('click', (e) => {
      e.preventDefault();
      if (isCollapsed) {
        open();
      } else {
        close();
      }
    });

    $(window).on(breakpointChangeEvent, () => {
      if (!isCollapsed) {
        $box.css({ height: $content.outerHeight(true) });
      }
    });
  });
};
