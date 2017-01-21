$('.slider').slick({
    arrows: false,
    dots: false,
    autoplay: true,
    autoplaySpeed: 3000
});

$('.select').select2({
    minimumResultsForSearch: -1
});

$('#star-rating').rating();