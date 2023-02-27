const swiper = new Swiper('.swiper', {
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
    el: '.swiper-pagination',    
  },

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
