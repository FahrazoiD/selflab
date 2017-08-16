$(document).ready(function() {
 // portflioSlide();
  setSpecContent();
 // parallaxScroller();
});

function portflioSlide() {

  $('.img-unit').click(function() {
    $('.portfolio-slide').css('left', '-100%');
  });

  $('.back-arrow').click(function() {
    $('.portfolio-slide').css('left', '0');
  });

}

function setSpecContent() {

  $('.img-unit').click(function() {
    let specTitle = $(this).find('p').text(),
        specImage = $(this).css('background-image');

        specImage = './' + specImage.slice(specImage.indexOf("assets"), -2);

    $('.spec-title').text(specTitle);
    $('.img-spec').attr('src', specImage);
  });

}

function parallaxScroller() {
  
  var windowHeight = $(document.body).height();
  var quoteHeight = $('.quote-spacing').height();
  var quoteBgTop = $('.quote-spacing').css('background-position');
  var quoteBgSize = $('.quote-spacing').css('background-size');
  var scrollage = 0;
  var quote_spacings = [];

  $('.quote-spacing').each(function(index) {
    quote_spacings.push($(this));
  });

  console.log(quote_spacings);

  console.log(quoteBgTop, windowHeight, quoteHeight, quoteBgSize);

  $(window).scroll(function() {

    scrollage = $(this).scrollTop() / windowHeight * 200;

    if ( ( ( $(this).scrollTop() + $(window).height() ) >= quote_spacings[0].offset().top ) && 
      ( $(this).scrollTop() <= ( quote_spacings[0].offset().top + quote_spacings[0].height() ) ) ) {

      quote_spacings[0].css('background-position', '50% calc( 100% - ' + scrollage + '% )');

    }

    if ( ( ( $(this).scrollTop() + $(window).height() ) >= quote_spacings[1].offset().top ) && 
      ( $(this).scrollTop() <= ( quote_spacings[1].offset().top + quote_spacings[1].height() ) ) ) {

      quote_spacings[1].css('background-position', '50% calc( 100% - ' + scrollage + '% )');

    }

  });

}

