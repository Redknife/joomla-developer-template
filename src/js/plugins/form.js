import $ from 'jquery';
import 'parsleyjs';
import 'parsleyjs/dist/i18n/ru';
import 'whatwg-fetch';
import 'magnific-popup';
import 'jquery.maskedinput/src/jquery.maskedinput';

import { checkHttpStatus } from '../utils/checkHttpStatus';

export default (selector) => {
  $('[data-mask]').each((i, el) => {
    const $el = $(el);

    $el.mask($el.data('mask'), {
      placeholder: $el.data('maskPlaceholder') || '_',
    });
  });

  $(selector).each((i, el) => {
    const $form = $(el);

    const $formParsley = $form.parsley();

    $formParsley.on('form:validate', (formInstance) => {
      const promise = formInstance.whenValid();

      promise.done(() => {
        const tmpl = $form.data('tmpl');
        const doAjax = !!$form.data('ajax');

        if (!!tmpl) {
          $form.attr('action', `/?tmpl=${tmpl}`);
        }

        if (doAjax) {
          const data = new FormData($form[0]);
          $form.addClass('-sending');
          fetch($form.prop('action'), {
            method: $form.prop('method'),
            body: data,
            credentials: 'same-origin',
          })
            .then(checkHttpStatus)
            .then(resp => resp.text())
            .then((msg) => {
              $form.removeClass('-sending');
              $.magnificPopup.close();
              $form[0].reset();
              $formParsley.reset();
              $form.find('.js-attachment-filename').parent().removeClass('-show');

              setTimeout(() => {
                $.magnificPopup.open({
                  items: {
                    src: $(`<div class="m-modal e-align-center">${msg}</div>`),
                    type: 'inline',
                  },
                  removalDelay: 300,
                  preloader: false,
                  mainClass: 'mfp-scale',
                  closeMarkup: `<button
                        title="%title%"
                        type="button"
                        class="mfp-close m-modal_close i-cross">
                    </button>`,
                });
              }, 300);
            });
        } else {
          $form.submit();
        }
      });
    });

    $form.on('submit', (e) => {
      e.preventDefault();
    });
  });


  $('.js-attachment').each((i, el) => {
    const $container = $(el);

    let $input = $container.find('.js-attachment-input');
    const $fileName = $container.find('.js-attachment-filename');
    const $removeBtn = $container.find('.js-attachment-remove');

    $input.on('change', () => {
      const filename = $input.val().replace(/C:\\fakepath\\/i, '');
      if (filename.length) {
        $fileName.text(filename);
        $fileName.parent().addClass('-show');
      } else {
        $fileName.parent().removeClass('-show');
      }
    });

    $removeBtn.on('click', (e) => {
      e.preventDefault();
      $input.replaceWith($input = $input.clone(true));
      $fileName.parent().removeClass('-show');
    });
  });
};
