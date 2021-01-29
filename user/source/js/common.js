$(document).ready(function(){

    $('.ham').click(function(){
        $('.menu').addClass('on');
        $('.menu:before').addClass('block');

    });

    $('.xi-close').click(function(){
        $('.menu').removeClass('on');
    });

    var category = $('.category ul li');

    if(category.length % 5 != 0){
        var num = 5 - (category.length % 5);
        if(num%2 == 0) {
            $('.category ul').append('<li style="width:calc(20% * ' + num + '); height:4.3rem; position:absolute; bottom:0; right:0"></li>');
        } else {
            $('.category ul').append('<li style="width:calc(20% * ' + num + ' - 0.1rem); height:4.3rem; position:absolute; bottom:0; right:0"></li>');
        }
    }

    if($(window).width() > 758) {
        $('.popular_list').parent().removeClass('swiper-container');
        $('.popular_list').parent().removeClass('swiper-wrapper');
        $('.popular_list').addClass('grid');
        $('.popular_list li').removeClass('swiper-slide');
        $('.search_list').parent().removeClass('swiper-container');
        $('.search_list').parent().removeClass('swiper-wrapper');
        $('.search_list').addClass('grid');
        $('.search_list li').removeClass('swiper-slide');
    }
});