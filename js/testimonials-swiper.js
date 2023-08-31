const swiper = new Swiper('.testimonials-slider', {
  // Optional parameters

  direction: 'horizontal',
  loop: true,
  centeredSlides: false,
  effect: 'coverflow',
  grabCursor: true,
  speed: 1000,
  slidesPerView: 'auto',
  spaceBetween: 30,

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
    el: '.testimonials-pagination',
    bulletClass: 'testimonials-pagination-bullet',
    bulletActiveClass: 'testimonials-pagination-bullet-active',
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
