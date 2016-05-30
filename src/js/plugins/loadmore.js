import $ from 'jquery';
import 'jquery.scrollto';
import 'whatwg-fetch';

import checkHttpStatus from '../utils/checkHttpStatus';

import initAllSelectboxes from './selectbox';

const getHtml = (resp) => resp.text();

const renderData = ($container, doScroll) => (resp) => {
  const $elements = $(resp).find('.js-product');
  $elements.find('.j-catalogue_product').addClass('-not-loaded');
  $elements.hide();

  $container.append($elements);

  initAllSelectboxes('select.js-selectbox:not(.selectized)')
    .then(() => {
      $elements.show();
      $elements.find('.j-catalogue_product').addClass('-loaded').removeClass('-not-loaded');
      if (doScroll) {
        $(window).scrollTo($elements.get(0), 400, {
          axis: 'y',
          interrupt: true,
          offset: {
            top: -30,
          },
        });
      }
    });

  return resp;
};

export default (selector) => {
  const $btn = $(selector);
  const $btnParent = $(selector).parent();

  const containerSelector = !!$btn.data('container') ? $btn.data('container') : '.js-products';
  const $container = $(containerSelector);

  $btn.on('click', (e) => {
    e.preventDefault();
    $btnParent.addClass('-loading');

    const url = $btn.prop('href');

    fetch(url)
      .then(checkHttpStatus)
      .then(getHtml)
      .then(renderData($container, !!$btn.data('scroll')))
      .then((resp) => {
        const newBtn = $(resp).find(selector);

        if (newBtn.length) {
          $btn.prop('href', newBtn.prop('href'));
          $btnParent.removeClass('-loading');
        } else {
          $btnParent.hide();
        }

        return resp;
      });
  });
};
