$('.nav li a').hover(function () {
    var current_src = $(this).find('img').attr('src');
    var current_src_cut = current_src.replace('.png', '');
    current_src_cut += '-a.png';
    $(this).find('img').attr('src', current_src_cut);
}, function () {
    var current_src = $(this).find('img').attr('src');
    var current_src_cut = current_src.replace('-a.png', '');
    current_src_cut += '.png';
    $(this).find('img').attr('src', current_src_cut);
});

$('.contacts-socials__item_email').click(function (e) {
    e.preventDefault();
    $('.popup').show();
});

$('.popup-close').on('click', function () {
    $('.popup').hide();
});

$('.popup-file-delete').on('click', function () {
    var file = document.getElementById('filesToUpload').files;
    var index = $(this).parent().index();
    delete file[index];
    makeFileList();
});

function center_main() {
    var height_head = $('.index header').height();
    // var height_footer = $('footer').height();
    var height_content = $('.index .content').height();
    var w_height = $(window).height();
    $('.index .content').css({
        'margin-top': ((w_height - (height_head + 43 + height_content)) / 2)
    });
}

function makeFileList() {
    var input = document.getElementById("filesToUpload");
    var ul = document.getElementById("fileList");
    while (ul.hasChildNodes()) {
        ul.removeChild(ul.firstChild);
    }
    for (var i = 0; i < input.files.length; i++) {
        var li = document.createElement("li");
        li.innerHTML = input.files[i].name;
        ul.appendChild(li);
    }
    if(!ul.hasChildNodes()) {
        var li = document.createElement("li");
        li.innerHTML = 'No Files Selected';
        ul.appendChild(li);
    }
}


$(document).ready(function () {
    var w_width = $(window).width();
    if(w_width > 1365){
        center_main()
    }
});

$(window).resize(function () {
    var w_width = $(window).width();
    if(w_width > 1365){
        center_main()
    } else{
        $('.index .content').css({
            'margin': '50px auto 30px'
        });
    }
});

$('.slider').slick({
    slidesToShow: 4,
    infinite: false,
    responsive: [
        {
            breakpoint: 1366,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 993,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1
            }
        }
    ]
});

$('.maket-slider').slick({
    slidesToShow: 3,
    infinite: false,
    buttons: true,
    responsive: [
        {
            breakpoint: 1366,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 993,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1
            }
        }
    ]
});

$('input[name=phone]').mask('+7(000)000-0000');

$.validator.addMethod('customemail', function (value, element) {
    return this.optional(element) || /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value);
});

$("form[name='popup']").validate({
    rules: {
        theme: "required",
        username: "required",
        phone: {
            required: true,
            minlength: 15
        },
        email: {
            required: true,
            customemail: true
        },
        message: "required"
    },
    errorPlacement: function(error, element) {
        return false;
    },
    submitHandler: function(form) {
        console.log('okay');
    }
});

$('.model-tabs').tabslet();

var i = 0;

function contact_bar() {
    $('.contact-bar-item').each(function () {
        console.log(i++);
        var label = $(this).find('.contact-bar-item__label').width();
        $(this).find('.contact-bar-item__content').css('width', 'calc(100% - '+ label +'px - 11px)');
    });
}

$(document).ready(function () {
    contact_bar();
});

$(window).resize(function () {
    contact_bar();
});