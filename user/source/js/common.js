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
});

function search() {
    var windowWidth = $(window).width();

    if(320 <= windowWidth && windowWidth < 1024) {
        var inputSearch = $('#header_search');
        inputSearch.css({'display':'block'});
    }
}



