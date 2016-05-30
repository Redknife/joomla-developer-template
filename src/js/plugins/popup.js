import $ from 'jquery';
import 'magnific-popup';

// Translating
$.extend(true, $.magnificPopup.defaults, {
  tClose: 'Закрыть (Esc)',
  tLoading: 'Загрузка...',
  gallery: {
    tPrev: 'Назад',
    tNext: 'Вперед',
    tCounter: '%curr% из %total%',
  },
  image: {
    tError: 'Ошибка при загрузке <a href="%url%">изображения</a>.',
  },
  ajax: {
    tError: 'Ошибка при загрузке <a href="%url%">контента</a>.',
  },
});


export const initPopupShow = (selector) => {
  $(selector).each((i, el) => {
    const $el = $(el);
    const href = $el.attr('href');

    if (!!href && href.startsWith('#')) {
      const $firstInput = $(href).find('input').first();

      $el.magnificPopup({
        type: 'inline',
        focus: $firstInput,
        removalDelay: 300,
        preloader: false,
        mainClass: 'mfp-scale',
        closeMarkup: `<button
                        title="%title%"
                        type="button"
                        class="mfp-close m-modal_close i-cross">
                    </button>`,
      });
    } else {
      $el.magnificPopup({
        type: 'ajax',
        removalDelay: 300,
        preloader: false,
        mainClass: 'mfp-scale',
        closeMarkup: `<button
                        title="%title%"
                        type="button"
                        class="mfp-close m-modal_close i-cross">
                    </button>`,
      });
    }
  });
};

// Gallery..
export const initPopupGallery = (selector = '.js-gallery', options = {}) => {
  const settings = $.extend({}, {
    delegate: '.js-gallery-item',
  }, options);

  $(selector).each((i, el) => {
    const $gallery = $(el);
    if ($gallery.hasClass('js-carousel')) {
      settings.delegate = '.slick-slide:not(.slick-cloned) .js-gallery-item';
    }

    $gallery.magnificPopup({
      delegate: settings.delegate,
      type: 'image',
      removalDelay: 300,
      mainClass: 'mfp-scale',
      gallery: {
        enabled: true,
      },
    });
  });
};
