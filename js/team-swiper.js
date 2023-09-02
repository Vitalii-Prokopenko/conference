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
  spaceBetween: 29,

  autoplay: {
    delay: 5000,
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

let clickedSlide;
let clickedSlideOverlay;

swiper.on('click', function () {
  // console.log('slide clicked');

  clickedSlide = this.clickedSlide;
  clickedSlide.style.transform = 'scale(1.2857)';
  clickedSlide.style.zIndex = '999';
  clickedSlideOverlay = clickedSlide.lastElementChild;
  clickedSlideOverlay.style.transform = 'translateY(0%)';
});

swiper.on('slideChange', function () {
  // console.log('slide changed');
  if (clickedSlide) {
    clickedSlide.style.transform = 'scale(1)';
    clickedSlideOverlay.style.transform = 'translateY(100%)';
  }
});
