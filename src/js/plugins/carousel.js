import $ from 'jquery';
import 'slick-carousel/slick/slick';

export default (selector) => {
  $(selector).each((i, el) => {
    const $carousel = $(el);

    $carousel.slick({
      useCSS: true,
      useTransform: true,

      adaptiveHeight: $carousel.data('adaptiveHeight') || true,

      dots: $carousel.data('dots') || true,
      appendArrows: $carousel.parent().find('.js-carousel-arrows'),
      appendDots: $carousel.parent().find('.js-carousel-dots'),
    });
  });
};
