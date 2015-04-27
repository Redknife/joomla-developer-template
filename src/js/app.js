jQuery(function($){

    // form validation init..
    var myLanguage = {
      errorTitle : 'Form submission failed!',
      requiredFields : 'Заполните поле',
      badTime : 'You have not given a correct time',
      badEmail : 'Введите корректный E-mail',
      badTelephone : 'You have not given a correct phone number',
      badSecurityAnswer : 'You have not given a correct answer to the security question',
      badDate : 'You have not given a correct date',
      lengthBadStart : 'You must give an answer between ',
      lengthBadEnd : ' символов',
      lengthTooLongStart : 'You have given an answer longer than ',
      lengthTooShortStart : 'Введите больше ',
      notConfirmed : 'Values could not be confirmed',
      badDomain : 'Incorrect domain value',
      badUrl : 'The answer you gave was not a correct URL',
      badCustomVal : 'Неправильно заполнено поле',
      badInt : 'Введите номер',
      badSecurityNumber : 'Your social security number was incorrect',
      badUKVatAnswer : 'Incorrect UK VAT Number',
      badStrength : 'The password isn\'t strong enough',
      badNumberOfSelectedOptionsStart : 'You have to choose at least ',
      badNumberOfSelectedOptionsEnd : ' answers',
      badAlphaNumeric : 'The answer you gave must contain only alphanumeric characters ',
      badAlphaNumericExtra: ' and ',
      wrongFileSize : 'The file you are trying to upload is too large',
      wrongFileType : 'The file you are trying to upload is of wrong type',
      groupCheckedRangeStart : 'Please choose between ',
      groupCheckedTooFewStart : 'Please choose at least ',
      groupCheckedTooManyStart : 'Please choose a maximum of ',
      groupCheckedEnd : ' item(s)'
    };

    $.validate({
      language : myLanguage,
      scrollToTopOnError : false
    });
    // ..form validation init

    // form uploader..
    $('.input-file').change(function() {
      var name = this.value;
      reWin = /.*\\(.*)/;
      var fileTitle = name.replace(reWin, "$1");
      reUnix = /.*\/(.*)/;
      fileTitle = fileTitle.replace(reUnix, "$1");
      textContainer = $(this).parents('.form-uploadfile').find('.flname');
      textContainer.text(fileTitle);
      textContainer.parent().show();
    });

    $('.remove-file-btn').on('click', function(event) {
        // event.preventDefault();
        var $formWrapper = $(this).parents('.form-uploadfile');
        var $control = $formWrapper.find('.upload-control');
        var $fileName = $formWrapper.find('.filename-wrapper');
        $control.replaceWith($control = $control.clone(true));
        $fileName.hide();
    });
    // ..form uploader

    // gallery init..
    $('#zoom-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        closeOnContentClick: false,
        closeBtnInside: false,
        mainClass: 'mfp-with-zoom mfp-img-mobile',
        image: {
            verticalFit: true,
            titleSrc: function(item) {
                // return item.el.attr('title') + ' &middot; <a class="image-source-link" href="'+item.el.attr('data-source')+'" target="_blank">image source</a>';
                return false;
            }
        },
        gallery: {
            enabled: true
        },
        zoom: {
            enabled: true,
            duration: 300, // don't foget to change the duration also in CSS
            opener: function(element) {
                return element.find('img');
            }
        }
    });
    // ..gallery init

    // google map..
    // if ($('#map-wrapper').length){
    //     var map;
    //     function initialize() {
    //         var mapOptions = {
    //             zoom: 17,
    //             center: new google.maps.LatLng(55.242512, 61.420713),
    //             scrollwheel: false,
    //             zoomControl: true,
    //             streetViewControl: false,
    //             mapTypeId: google.maps.MapTypeId.ROADMAP
    //             };

    //             map = new google.maps.Map(document.getElementById('map-wrapper'),
    //               mapOptions);

    //             var markerLatlng = new google.maps.LatLng(55.242512, 61.420713);
    //             var myMarker = new google.maps.Marker({
    //               position: markerLatlng,
    //               map: map,
    //         });

    //         var contentString = '<div id="content">Хлебозаводская, 7А</div>';
    //         var infowindow = new google.maps.InfoWindow({
    //             content: contentString
    //         });
    //         google.maps.event.addListener(myMarker, 'click', function() {
    //             infowindow.open(map,myMarker);
    //         });

    //     }

    //     google.maps.event.addDomListener(window, 'load', initialize);
    // }
    // ..google map

    // form submit..
    $jbtn = $('.btn-jsend-submit');
    if($jbtn){
      $jbtn.on('click', function(e){
        e.preventDefault();
        $jform = $(this).parents('.mail-form');
        url = $jform.attr('action');
        if( $jform.attr('action').indexOf('?tmpl=send') === -1 ){
          url =  $jform.attr('action') + '?tmpl=send';
        }
        $jform.attr('action', url);
        $jform.submit();
      });
    }
    // ..form submit

    // slider init..
    $('img').on('dragstart', function(event) { event.preventDefault(); });
    $('a').on('dragstart', function(event) { event.preventDefault(); });

    var slick = $('.slider > ul').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      infinite: true,
      slide: 'li'
    });
    // ..slider init

});
