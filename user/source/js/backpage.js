$(document).ready(function() {
    var windowWidth = $(window).width();
    var backBtn = $('h1 a');

    if (320 <= windowWidth && windowWidth < 1024) {
        backBtn.attr({'href':'javascript:history.back();','class':'xi-angle-left'}).html('');
    }
    
});

$(window).resize(function() {
    var windowWidth = $(window).width();
    var backBtn = $('h1 a');
    
    if (320 <= windowWidth && windowWidth < 1024) {
        backBtn.attr({'href':'javascript:history.back();','class':'xi-angle-left'}).html('');
    } else {
        backBtn.attr({'href':'index.html','class':''}).html('Location Bank');
    }
})