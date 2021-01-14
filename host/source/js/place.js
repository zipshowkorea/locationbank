$(document).ready(function(){
    $('.place_main').on("click", function(){
        var hr = $('.place hr');
        var rooms = $('.place_rooms');        
        var statusIcon = $('.place_main div');

        hr.not($(this).siblings()).hide(300);
        rooms.not($(this).siblings()).hide(300);
        statusIcon.not($(this).children()).removeClass('xi-angle-down-min').addClass('xi-angle-right-min');
        $(this).siblings().toggle(300);
        $(this).find('div').toggleClass('xi-angle-down-min').toggleClass('xi-angle-right-min');
    });
});