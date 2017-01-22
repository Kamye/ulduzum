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

$('.footer-number__area').mask('000 000 00 00');

$('.footer-number__area').on('input', function(){
    if($(this).val().length == 13){
        $(this).parent().find('.footer-number__call').addClass('opacity1');
    } else{
        $(this).parent().find('.footer-number__call').removeClass('opacity1');
    }
})