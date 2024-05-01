/******** Products Swiper View ********/
function myFunction(y) {
    if (y.matches) { // If media query matches
      /***  Initialize Swiper **/
      var swiper = new Swiper(".products__swiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
    } else {
      /***  Initialize Swiper **/
      var swiper = new Swiper(".products__swiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
    }
  }
  
  var y = window.matchMedia("(max-width: 720px)")
  myFunction(y) // Call listener function at run time
  
  