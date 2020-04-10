$(document).ready(function () {
  let $slider = $(".slider").slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
  });
  $("#prev").click(function (e) {
    e.preventDefault();
    $slider.slick("slickPrev");
  });
  $("#next").click(function (e) {
    e.preventDefault();
    $slider.slick("slickNext");
  });
});
