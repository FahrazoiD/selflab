$(document).ready(function() {
  //portflioSlide();
  //setSpecContent();
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

