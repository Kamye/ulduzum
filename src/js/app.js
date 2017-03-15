$('.slider').slick({
    arrows: false,
    dots: false,
    autoplay: false,
    autoplaySpeed: 3000
});

$('.select').select2({
    minimumResultsForSearch: -1
});

$('.select').on('select2:open', function () {
    $('.select2-dropdown').hide();
    $('.select2-dropdown').slideDown();
});

$('.select').on('select2:close', function () {
    setTimeout(function(){ jQuery('.select2-dropdown').slideUp(); }, 200);
});

$('.footer-select').select2({
    minimumResultsForSearch: -1
});

$('.form-select').select2({
    minimumResultsForSearch: -1
});

$('.sms-select').select2({
    minimumResultsForSearch: -1
});

$(document).ready(function () {
    $('body').on('click', ".footer__select .select2", function(){
        $('.select2-container').addClass('footer-select');
    });
});

$(document).ready(function () {
    $('body').on('click', ".form-item__select .select2", function(){
        $('.select2-container').addClass('form-select');
    });
});

$(document).ready(function () {
    $('body').on('click', ".last-child .select2", function(){
        $('.select2-container').addClass('last_child');
    });
});

$(document).ready(function () {
    $('body').on('click', ".sms-item__select .select2", function(){
        $('.select2-container').addClass('sms-select1');
    });
});

$('.footer-number__area').mask('000 00 00');

$('.footer-number').on('submit', function (event) {
    event.preventDefault();
    var number = $('.footer-number__area');
    if(number .val().length < 9){
        alert('введите 7 цифр');
    }
});


$('.footer-number__area').on('input', function(){
    if($(this).val().length == 9){
        $(this).parent().find('.footer-number__call').addClass('opacity1');
    } else{
        $(this).parent().find('.footer-number__call').removeClass('opacity1');
    }
});

$(function($) {
    var allAccordions = $('.accordion div.data');
    var allAccordionItems = $('.accordion .accordion-item');
    $('.accordion > .accordion-item').click(function() {
        if($(this).hasClass('open'))
        {
            $(this).removeClass('open');
            $(this).next().slideUp("slow");
        }
        else
        {
            allAccordions.slideUp("slow");
            allAccordionItems.removeClass('open');
            $(this).addClass('open');
            $(this).next().slideDown("slow");
            return false;
        }
    });
});

$('.form-item__place').on('keyup', function(){
    var count = $(this).val().length;
    var difference = 140 - count;
    $('.counter').text(difference);
});

$(function() {

    $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
        $(this)
            .addClass('active').siblings().removeClass('active')
            .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
    });

});

$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    centerMode: true,
    focusOnSelect: true
});

$(document).ready(function(){
    $('.scrollbar-inner').scrollbar();
});

$(function(){
    $('#nav').slicknav();
});

$('#bar').on('click', function(){ $("#nav").slicknav('toggle');})

AOS.init();

var inputs = document.querySelectorAll( '.inputfile' );
Array.prototype.forEach.call( inputs, function( input )
{
    var label	 = input.nextElementSibling,
        labelVal = label.innerHTML;

    input.addEventListener( 'change', function( e )
    {
        var fileName = '';
        if( this.files && this.files.length > 1 )
            fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length );
        else
            fileName = e.target.value.split( '\\' ).pop();

        if( fileName )
            label.querySelector( 'span' ).innerHTML = fileName;
        else
            label.innerHTML = labelVal;
    });
});

$('body').on('click', '#sorting-filter .selection', function () {
    $('.select2-container').css({
        'left': 'auto',
        'right': 0
    })
});