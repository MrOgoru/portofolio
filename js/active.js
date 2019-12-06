/* navigation */

const ham = document.querySelector("#ham");
const menu = document.querySelector("#menu");


ham.addEventListener("click", function(e) {
  menu.classList.toggle("hide-mobile");
  e.preventDefault();
});

(function($) {
  "use strict";

  /*--------------------------------------
	Owl Carousel Active
----------------------------------------*/
  $(".review-active").owlCarousel({
    loop: true,
    autoPlay: true,
    autoPlayTimeout: 5,
    autoPlayHoverPause: true,
    nav: true,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>'
    ],
    responsive: {
      0: {
        items: 1
      },
      767: {
        items: 2
      },
      1000: {
        items: 3
      }
    }
  });
})(jQuery);
