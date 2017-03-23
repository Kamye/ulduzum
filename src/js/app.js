$('.slider').slick({
    arrows: false,
    dots: false,
    autoplay: false,
    autoplaySpeed: 3000
});

$('.select').select2({
    minimumResultsForSearch: -1
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
    $('body').on('click', ".selects-item .select2", function(){
        $('.select2-container').addClass('main-select');
    });
});

$(document).ready(function () {
    $('body').on('click', ".footer__select .select2", function(){
        $('.select2-container--open').addClass('footer-select');
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

$('.form-item-number').mask('000 00 00');

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
    focusOnSelect: true,
    responsive: [
        {
            breakpoint: 1367,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 993,
            settings: {
                slidesToShow: 2
            }
        }
    ]
});

$('.one-partner-item__photo_link').on('click', function () {
    setTimeout(function () {
        $('.slider-nav, .slider-for').slick('setPosition');
    }, 100);
});

$(document).ready(function(){
    $('.scrollbar-inner').scrollbar();
});

$(function(){
    $('#nav').slicknav({
        'beforeOpen': function () {
            $('html, body').animate({scrollTop: 0}, 100);
            $('html, body').css('position', 'fixed');
            var win_height = $(window).height();
            $('.slicknav_nav').height(win_height - 132);
            $('body').css('overflow', 'hidden');
            $('ul .nav-item__link_sms').remove();
            $('.slicknav_menu').append('<a class="nav-item__link nav-item__link_sms nav-item__link_active" href="#" role="menuitem" tabindex="0"><span>Pulsuz SMS</span></a>')
        },
        'beforeClose': function () {
            $('html, body').css('position', 'static');
            $('.slicknav_menu .nav-item__link_sms').remove();
            $('body').css('overflow', 'auto');
        }
    });
});


$('#bar').on('click', function(){ $("#nav").slicknav('toggle');});

AOS.init();

var inputs = document.querySelectorAll( '.inputfile' );
Array.prototype.forEach.call( inputs, function( input )
{
    var label	 = input.nextElementSibling,
        labelVal = label.innerHTML;
    var namePlaceHolder = label.nextElementSibling;

    input.addEventListener( 'change', function( e )
    {
        var fileName = '';
        if( this.files && this.files.length > 1 )
            fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length );
        else
            fileName = e.target.value.split( '\\' ).pop();

        if(fileName.length > 14){
            var extension = fileName.substr(fileName.length - 4);
            var cut_name = fileName.slice(0, 6);
            fileName = cut_name + '...' + extension;
        }

        if( fileName ){
            /*label.querySelector( 'span' ).innerHTML = fileName;*/
            namePlaceHolder.innerHTML = fileName;
        }
        else
            label.innerHTML = labelVal;
    });
});

$('body').on('click', '#sorting-filter .selection', function () {
    $('.select2-container').css({
        'left': 'auto',
        'right': '0px'
    });
    /* $('.select2-container').style('right', '0px', 'important')*/
});

$('.show-filter').on('click', function () {
    $('html, body').animate({scrollTop: 0}, 100);
    $('.sort-modal, .sort-backdrop').show();
    $('body').addClass('body-show-filter');
    $('html, body').css('position', 'fixed');
    setTimeout(function () {
        var height_filter = $('.sort-dialog').height();
        $('.sort-filter-wrap').height(height_filter - 101);
    }, 100)
});

$(window).on('resize', function () {
    if ($('.sort-modal').length > 0 ) {
        var height_filter = $('.sort-dialog').height();
        $('.sort-filter-wrap').height(height_filter - 101);

        var win_height = $(window).height();
        $('.slicknav_nav').height(win_height - 132);
        $('body').css('overflow', 'hidden');
    }
});

$('.sort-close__btn').on('click', function(){
    $('.sort-modal, .sort-backdrop').hide();
    $('body').removeClass('body-show-filter');
    $('html, body').css('position', 'static');
});

$('.sort-filter__header').on('click', function () {
    if($(this).parent().find('.sort-list').is(':visible')){
        $(this).removeClass('open-chevron');
        $(this).parent().find('.sort-list').slideUp(300);
        if($(this).next().text() != ''){
            $(this).next().show();
        }
    } else{
        $(this).parent().find('.sort-list').slideDown();
        $(this).addClass('open-chevron');
        $(this).next().hide();
    }
});

$('.sort-list__item').on('click', function(){
    $(this).parent().prev('.sort-filter__chosen').text($(this).text());
    $(this).addClass('choosen_filter');
});

$('.choosen_filter').each(function(){
    var attr_filter = $(this).attr('for');
    $('#'+attr_filter).prop( "checked", true );
    $(this).parent().prev('.sort-filter__chosen').text($(this).text());
    $('.sort-filter__chosen').show();
});

$('button.sms-1-submit').on('click', function(){
    if($('#confirm').is(':checked') && $('.form-item-number').val().length == 9){
        $('.accept').hide();
        $(this).hide();
        $('input.sms-1-submit, .form-item-code-accept').show();
    } else{
        alert('Укажите телефон, и подтвердите условия');
    }
});

$('.app-tabs').tabslet({
    mouseevent: 'click',
    attribute: 'href',
    animation: true,
    autorotate: true,
    delay: 3000,
    container: '#tabs_container'
});

$('.tabs-2').tabslet({
});

$('.nav-link-img').on('click', function(){
    if($('.search').is(':visible')){
        $('.search').fadeOut();
    } else{
        $('.search').fadeIn();
    }
});

$('.search__close').on('click', function(){
    $('.search').fadeOut();
});

$(document).keyup(function(e) {
    if (e.keyCode === 27){
        $('.search').fadeOut();
    }
});

$(function() {
    $("form[name='form']").validate({
        errorPlacement: function(error, element) {
            element.attr("placeholder",error.text());
        },
        highlight: function (element, errorClass, validClass) {
            if (element.type === "radio") {
                this.findByName(element.name).addClass(errorClass).removeClass(validClass);
            } else {
                $(element).parent().addClass(errorClass).removeClass(validClass);
            }
        },
        unhighlight: function (element, errorClass, validClass) {
            if (element.type === "radio") {
                this.findByName(element.name).removeClass(errorClass).addClass(validClass);
            } else {
                $(element).parent().removeClass(errorClass).addClass(validClass);
            }
        },
        rules: {
            field1: "required"
        },
        messages: {
            field1: "Xananı doldurmaq vacibdir"
        },
        submitHandler: function(form) {
            form.submit();
        }
    });
});

$(document).ready(function(){
    var ussd_str = '';
    $('.ussd').each(function(){
        var ussd_cur = $(this).text();
        var ussd_cur_count = $(this).text().length;
        for(var i = 0; i < +ussd_cur_count; i++){
            if(ussd_cur[i] == '$'){
                ussd_str += '<i class="mob-btn mob-btn_call"></i>';
            } else if(ussd_cur[i] == '*'){
                ussd_str += '<i class="mob-btn mob-btn_star"></i>';
            } else{
                ussd_str += '<i class="mob-btn">' + ussd_cur[i] + '</i>';
            }
        }
        $(this).html(ussd_str);
        i = 0; ussd_str = '';
    });
});

