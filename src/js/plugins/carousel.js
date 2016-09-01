import $ from 'jquery';
import 'slick-carousel/slick/slick';

export default (selector = '.js-slider') => {
  $(selector).each((i, el) => {
    const $carousel = $(el);

    $carousel.slick({
      useTransform: true,
      useCSS: true,

      adaptiveHeight: $carousel.data('adaptiveHeight') || false,

      dots: $carousel.data('dots') || false,

      autoplay: $carousel.data('autoplay') || false,
      autoplaySpeed: $carousel.data('autoplaySpeed') || 4000,
    });
  });
};
