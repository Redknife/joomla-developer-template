import $ from 'jquery';
import 'selectize';

export const selectizeElement = ($select) => new Promise((resolve, reject) => {
  if (!!$select) {
    let searchFields = ['text', 'value'];
    if (!!$select.data('searchFields')) {
      searchFields = $select.data('searchFields').split(',').map(field => $.trim(field));
    }
    const firstOption = $select.find('option').first();
    let placeholder;
    if (!firstOption.val().length) {
      placeholder = firstOption.text();
    } else {
      placeholder = $select.data('placeholder');
    }

    $select.selectize({
      hideSelected: !!$select.data('hideSelected') || true,
      closeAfterSelect: !!$select.data('closeAfterSelect') || true,
      allowEmptyOption: !!$select.data('allowEmptyOption') || true,
      searchField: searchFields,
      placeholder,
      onDropdownOpen: ($dropdown) => {
        $dropdown.addClass('-open');
      },
      onDropdownClose: ($dropdown) => {
        $dropdown.removeClass('-open');
      },
      onInitialize: () => {
        resolve($select);
      },
    });
  } else {
    reject(new Error(`Element '${$select}' not found`));
  }
});

// Selectize all by selector..
export default (selector) => {
  const promises = [...$(selector)].map((el) => selectizeElement($(el)));

  return Promise.all(promises);
};
