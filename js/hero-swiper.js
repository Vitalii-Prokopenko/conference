const swiper = new Swiper('.hero-slider', {
  // Classes
  slidePrevClass: '.hero-prev-slide',
  slideNextClass: '.hero-next-slide',

  // Optional parameters

  direction: 'horizontal',
  loop: true,
  centeredSlides: false,
  effect: 'coverflow',
  grabCursor: true,
  speed: 1000,
  slidesPerView: 'auto',
  spaceBetween: 20,

  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },

  coverflowEffect: {
    rotate: 0,
    slideShadows: false,
    scale: 1,
    depth: 0,
  },

  // If we need pagination
  pagination: {
    el: '.hero-slider-pagination',    
    bulletClass: 'hero-slider-pagination-bullet',
    bulletActiveClass: 'hero-slider-pagination-bullet-active',
  },

  // Navigation arrows
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },

  // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
});
