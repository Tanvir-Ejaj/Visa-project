$(function () {
  $("select").niceSelect();

  $(".need-slider").slick({
    autoplay: true,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    prevArrow: '<i class="fa-solid fa-arrow-left left-arrow"></i>',
    nextArrow: '<i class="fa-solid fa-arrow-right right-arrow"></i>',
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  });

  new VenoBox({
    selector: ".my-video-links",
  });

  // new Calendar({
  //   id: "#color-calendar",
  // });

  $(".offer-slider").slick({
    autoplay: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<i class="fa-solid fa-arrow-left left-arrow"></i>',
    nextArrow: '<i class="fa-solid fa-arrow-right right-arrow"></i>',
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  });

  $(window).scroll(function () {
    var scrolling = $(this).scrollTop();

    if (scrolling > 5) {
      $(".navbar").addClass("nav-bg");
    } else {
      $(".navbar").removeClass("nav-bg");
    }

    if (scrolling > 5) {
      $(".extra-btn-top").fadeIn(200);
    } else {
      $(".extra-btn-top").fadeOut(200);
    }
  });

  $(".extra-btn-top").click(function () {
    $("html,body").animate({
      scrollTop: 0,
    });
  });
});
