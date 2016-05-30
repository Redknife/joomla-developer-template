import $ from 'jquery';
import { transitionEvent } from '../utils/animationEvent';

// Alert
export default (selector) => {
  $(selector).each((i, el) => {
    const $alert = $(el);
    const $closeBtn = $alert.find('.close');

    $closeBtn.on('click', (e) => {
      e.preventDefault();

      $alert.addClass('-out');

      $alert.one(transitionEvent, () => {
        $alert.hide(100);
      });
    });
  });
};
