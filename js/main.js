$(function() {
  $(".about__slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: ".about__slider-dots",
    
  });

  $(".about__slider-dots").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: ".about__slider",
    dots: true,
    centerMode: true,
    centerPadding: 0,
    focusOnSelect: true
  });

  $(".reviews__slider").slick({
    slidesToShow: 2,
    slidesToScroll: 1,
   // autoplay: true,
    arrows: false,
    dotsClass: "reviews__dots",
  //
    dots: true
  });

  $(".membership__slider").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    dots: false,
    autoplaySpeed: 3000
  });

  $(".contacts__tag").click(function() {
    $(this).toggleClass("tag-active");
  });
});
