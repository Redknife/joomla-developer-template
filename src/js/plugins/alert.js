import $ from 'jquery';
import { transitionEndEvent } from '../utils/whichTransitionEndEvent';

export default (selector) => {
  $(selector).each((i, el) => {
    const $alert = $(el);
    const $closeBtn = $alert.find('.close');

    $closeBtn.on('click', (e) => {
      e.preventDefault();

      $alert.addClass('-out');

      $alert.one(transitionEndEvent, () => {
        $alert.hide(100);
      });
    });
  });
};
