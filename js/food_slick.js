$(document).ready(function () {
    $('.pic').slick({
      centerMode: true,
      centerPadding: '20px',
      slidesToShow: 3,
      prevArrow:'<a href="#"><h4 class="left">PREV</h4></a>',
      nextArrow:'<a href="#"><h4 class="right">NEXT</h4></a>',
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 3
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '80px',
            slidesToShow: 1
          }
        }
      ]
    });
  });
  


  