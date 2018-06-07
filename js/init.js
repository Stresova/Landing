$( function() {
    // init tabs
    $( ".services-tab" ).tabs();

    // init portfolio tabs
    $( ".portfolio-tab" ).tabs();

    // init reviews carousel     
    $(".reviews-carousel").slick({        
        dots: true,        
        autoplay: true,        
        autoplaySpeed: 5000,        
        prevArrow: '<div class="slick-prev slick-arrow"><div class="carousel-button"><i class="fa fa-chevron-left"></i></div></div>',        
        nextArrow: '<div class="slick-next slick-arrow"><div class="carousel-button"><i class="fa fa-chevron-right"></i></div></div>'   
    });
    // init slicknav
    $(".header-nav").slicknav({
        appendTo: '#header .header-container',
        label: ''
    });

    //init wow animate
    new WOW().init();
} );