
$(function() {

    // Preloader
    var $preloader = $('#page-preloader'),
        $spinner   = $preloader.find('.spinner');
        $spinner.fadeOut();
        $preloader.delay(3050).fadeOut('slow');
 
    // Hamburger
    $('.menu-open').click(function () {
        $('.menu-collapse').toggleClass('d-none').css('order', '1');
        $('.menu').toggleClass('menu-opened');
    })
    $('.menu-opened li a').click(function () {
        $('.menu-collapse').toggleClass('d-none').css('order', '1');
        $('.menu').toggleClass('menu-opened');
    })

    //  To make img a full screen

    // $('.gallery__wrap').click(function(){
    //     var img = $('.gallery__img'); 
    //     var src = img.attr('src'); 
    //     $('.gallery').css('position', 'relative').append("<div class='popup_bg'><img src='"+src+"' class='popup_img'></div>");
    //     $('.gallery__wrap').addClass('popup_bg');
    //     $('.popup_bg').fadeIn(800).click(function (){
    //         $(".gallery__img").fadeOut(800);
    //     })
    // });  

    // Slider

    $('.content__slider').slick({
        dots:true,
        prevArrow:'<button type="button" class="slick-prev"><i class="fa fa-angle-left"></i></button>',
        nextArrow:'<button type="button" class="slick-next"><i class="fa fa-angle-right"></i></button>'
    });  

});

        













