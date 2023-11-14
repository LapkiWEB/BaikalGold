// WOW JS Конфликтует с оверфлоу хайден на бади или секций

$(function () {
  $('.menu__btn').on('click', (function () {
    if (!$('.menu').hasClass('active')) {
      $('.menu').addClass('active');
      $('.menu__btn').addClass('active');
    } else {
      $('.menu').removeClass('active');
      $('.menu__btn').removeClass('active');
    }
  }));


  $('.slider__wrapper').slick({
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
  });

})

