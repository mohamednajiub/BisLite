$('.owl-stage').owlCarousel({
    loop:true,
    margin:10,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        },
        1200: {
            items:4
        }
    },
    mouseDrag: true,
    dots: false,
    freeDrag: true,
    autoPlay: true
});
$('.owl-prev').click(function() {
    $('.owl-stage').trigger('prev.owl.carousel');
})
// Go to the previous item
$('.owl-next').click(function() {
    $('.owl-stage').trigger('next.owl.carousel', [300]);
})