const visitSwiper = new Swiper('.visit-swiper', {
    // Optional parameters
    loop: true,
    grabCursor: true,
    slidesPerView: 'auto',
    centeredSlides: true,
    spaceBetween: 150,

    // If we need pagination
    pagination: {
        el: '.visit-swiper_pagination',
        dynamicBullets: true,
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});