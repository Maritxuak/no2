const swiper = new Swiper('.swiper', {
    // Optional parameters
    slidesPerView: 3,
    loop: true,
    centeredSlides: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        1200: {
          slidesPerView: 3,
          loop: true,
          centeredSlides: true,
        },
        360: {
            slidesPerView: 1,
            loop: true,
            centeredSlides: true,
        }
    }
});