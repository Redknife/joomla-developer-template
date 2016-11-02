/* eslint new-cap: 0 */
/* eslint no-unused-expressions: 0 */
import $ from 'jquery';

const defaultSettings = {
  togglerSfx: '_toggle',
  controlSfx: '_control',
  boxSfx: '_box',
  closedClass: 'm-spoiler--closed',

  duration: 500,
  easing: 'easeInOutQuad',

  closeSiblings: true,

  openCb: () => {},
  closeCb: () => {},
};

const toggleControlText = ($el, closed = false) => {
  if ($el && $el.length) {
    closed ? $el.text($el.data('openText')) : $el.text($el.data('closeText'));
  }
};

export default (selector = '.js-spoiler', opts) => {
  const settings = Object.assign({}, defaultSettings, opts);
  const togglerSel = selector + settings.togglerSfx;
  const controlSel = selector + settings.controlSfx;
  const boxSel = selector + settings.boxSfx;

  $(selector).each((i, el) => {
    const $container = $(el);
    const $toggler = $container.find(togglerSel);
    const $control = $container.find(controlSel);
    const $box = $container.find(boxSel).css({ transform: 'translateZ(0)' });

    let closed = $container.hasClass(settings.closedClass);
    let inAnimation = false;

    $box.css({
      transform: 'translateZ(0)',
      display: closed ? 'none' : 'block',
    });

    const completeCb = () => {
      inAnimation = false;
      closed = !closed;
      closed ? settings.closeCb($container) : settings.openCb($container);
      toggleControlText($control, closed);
    };

    const animationOpts = {
      duration: settings.duration,
      easing: settings.easing,
      complete: completeCb,
    };

    const toggle = (e) => {
      if (e) e.preventDefault();
      if (inAnimation) return;
      inAnimation = true;
      $container.toggleClass(settings.closedClass);
      if (closed) {
        if (settings.closeSiblings) {
          $container.siblings(selector).trigger('spoiler::close');
        }
        $box.velocity('slideDown', animationOpts);
      } else {
        $box.velocity('slideUp', animationOpts);
      }
    };

    $toggler.on('click', toggle);
    $control.on('click', toggle);

    $container.on('spoiler::close', () => {
      if (!closed) {
        $box.velocity('slideUp', animationOpts);
        $container.addClass(settings.closedClass);
      }
    });

    $container.on('spoiler::open', () => {
      if (closed) {
        $box.velocity('slideDown', animationOpts);
        $container.removeClass(settings.closedClass);
      }
    });
  });
};
