const responsive = {
    0: {
        items: 1
    },
    320: {
        items: 1
    },
    640: {
        items: 2
    },
    960: {
        items: 3
    }
}


$(function(){

    $nav = $('.nav');
    $toggleCollapse = $('.toggle-collapse');

    /* click event on toggle menu */
    $toggleCollapse.click(function(){
        $nav.toggleClass('collapse');
    })

    // Owl-Carousel for Blog
    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        dots: false,
        nav: true,
        navText: [$('.owl-nav-prev'), $('.owl-nav-next')],
        responsive: responsive
    });

    // scroll to top
    $('.move-up span').click(function(){
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    })

    // AOS Instance
    AOS.init();

})