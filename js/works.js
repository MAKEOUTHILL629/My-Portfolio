var swiper = new Swiper('.swiper-container',{
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect:{
        rotate: 50,
        stretch: 0,
        depth: 0,
        modifier: 1,
        slideShadows: true,
    },
    // pagination: {
    //     el: '.swiper-pagination',
    // }
    loop: true,
});