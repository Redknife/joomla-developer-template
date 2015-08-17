(($) ->

  # slick slider..
  $('.base-slider').slick {
    slidesToShow: 1
    slidesToScroll: 1
    arrows: true
    infinite: true
    dots: true
    slide: 'li'
  }
  # ..slick slider


  # zoom gallery..
  $('.zoom-gallery').each (i, el) ->
    $(el).magnificPopup {
      delegate: 'a'
      type: 'image'
      gallery: {
        enabled: true
      }
    }
  # ..zoom gallery

) jQuery
