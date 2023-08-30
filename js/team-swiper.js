const swiper = new Swiper('.team-slider', {
// Classes
    wrapperClass: 'team-slider-wrapper',
    slideClass: 'team-slide',
    slideActiveClass: 'active-slide',
    slidePrevClass: 'prev-slide',
    slideNextClass: 'next-slide',
    slideVisibleClass: 'visible-slide',
    

  // Optional parameters

  direction: 'horizontal',
  loop: true,
  centeredSlides: false,
  effect: 'slide',
  grabCursor: true,
  speed: 1000,
  slidesPerView: 3,
  spaceBetween: 20,

  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },

//   

  // If we need pagination
//   pagination: {
//     el: '.swiper-pagination',
//   },

  // Navigation arrows
  navigation: {
    nextEl: '.team-btn-next',
    prevEl: '.team-btn-prev',
  },

  // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
});

swiper.on('click', function () {
  console.log('slide clicked');
});
