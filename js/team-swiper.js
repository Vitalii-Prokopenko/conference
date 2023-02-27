const swiper = new Swiper('.team__swiper', {
// Classes
    wrapperClass: '.team__wrapper',
    slideClass: '.team__slide',

  // Optional parameters

  direction: 'horizontal',
  loop: false,
  centeredSlides: false,
  effect: 'slide',
  grabCursor: true,
  speed: 1000,
  slidesPerView: 'auto',
  spaceBetween: 20,

//   autoplay: {
//     delay: 4000,
//     disableOnInteraction: false,
//   },

//   

  // If we need pagination
//   pagination: {
//     el: '.swiper-pagination',
//   },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
});
