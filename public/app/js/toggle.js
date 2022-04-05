$(document).ready(function () {
  $('.cart-button').click(function () {
    $('.cart-wrap').toggleClass('active');
    $('.cart-container').toggleClass('active');
  });

  $('.close-button').click(function () {
    $('.cart-wrap').removeClass('active');
    $('.cart-container').removeClass('active');
  });

  $('.menu-button').click(function () {
    $('.navbar-menu-overlay').toggleClass('active');
  });
})
