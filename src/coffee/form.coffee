(($) ->

  # form validation init..
  myLanguage = {
    errorTitle : 'Не удалось отправить форму!'
    requiredFields : 'Заполните поле'
    badTime : 'Введите корректное время'
    badEmail : 'Введите корректный E-mail'
    badTelephone : 'Введите корректный номер телефона'
    badSecurityAnswer : 'You have not given a correct answer to the security question'
    badDate : 'Введите корректную дату'
    lengthBadStart : 'You must give an answer between '
    lengthBadEnd : ' символов'
    lengthTooLongStart : 'Вы ввели более чем '
    lengthTooShortStart : 'Введите больше '
    notConfirmed : 'Values could not be confirmed'
    badDomain : 'Введите корректное доменное имя'
    badUrl : 'Введите корректный URL'
    badCustomVal : 'Неправильно заполнено поле'
    badInt : 'Введите номер'
    badSecurityNumber : 'Your social security number was incorrect'
    badUKVatAnswer : 'Incorrect UK VAT Number'
    badStrength : 'The password isn\'t strong enough'
    badNumberOfSelectedOptionsStart : 'You have to choose at least '
    badNumberOfSelectedOptionsEnd : ' answers'
    badAlphaNumeric : 'The answer you gave must contain only alphanumeric characters '
    badAlphaNumericExtra: ' and '
    wrongFileSize : 'The file you are trying to upload is too large'
    wrongFileType : 'The file you are trying to upload is of wrong type'
    groupCheckedRangeStart : 'Please choose between '
    groupCheckedTooFewStart : 'Please choose at least '
    groupCheckedTooManyStart : 'Please choose a maximum of '
    groupCheckedEnd : ' item(s)'
  }

  $.validate({
    language : myLanguage
    scrollToTopOnError : false
  })
  # ..form validation init


  # form uploader..
  $('.input-file').change ->
    name = this.value
    reWin = /.*\\(.*)/
    fileTitle = name.replace(reWin, "$1")
    reUnix = /.*\/(.*)/
    fileTitle = fileTitle.replace(reUnix, "$1")
    $wrapper = $(this).parents('.upload-control')
    $wrapper.find('.remove-controlls-wrapper')
      .addClass('show')
      .find('.filename')
      .text(fileTitle)
    $wrapper.addClass('with-filename')

  $('.remove-file-btn').on "click", (e) ->
    e.preventDefault()
    $wrapper = $(this).parents('.upload-control')
    $input = $wrapper.find('.input-file')
    $input.replaceWith($input = $input.clone(true))
    $wrapper.removeClass('with-filename')
    $wrapper.find('.remove-controlls-wrapper').removeClass('show')
  # ..form uploader


  # form submit..
  $('.btn-jsend-submit').on "click", (e) ->
    e.preventDefault()
    $jform = $(this).parents('.mail-form')
    url = $jform.attr('action')
    if $jform.attr('action').indexOf('?tmpl=send') == -1
      url =  $jform.attr('action') + '?tmpl=send'
    $jform.attr('action', url)
    $jform.submit()
  # ..form submit

)
