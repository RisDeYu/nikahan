gsap.from('.judul-hero', {duration:1.5, y:100, opacity:0});
let tl = gsap.timeline(
  {
    scrollTrigger:{
    }
  }
);

tl.from('.wrap-arrum',{delay:.5, duration:1, y:100, opacity:0});



// album Product Slider-start
var TrandingSlider = new Swiper('.album-slider', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2.5,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
// album Product Slider-end
