
$(document).ready(function () {
    //Owl
    $('.hero-slider-area').owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        dots: true,
        // navText: ['PREV', 'NEXT'],
        smartSpeed: 1000,
        // autoplay: true,
        autoplayTimeout: 7000,
        responsive: {
            0: {
                nav: false,
            },
            768: {
                nav: true,
            }
        }
    })

});
