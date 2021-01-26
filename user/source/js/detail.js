$(document).ready(function() {
    
    // 스크롤 메뉴 클릭 이벤트
    var menu = $('.scrollMenu li');
    menu.click(function () {
        var idx = $(this).index();
        var scroll_top = $('.place_intro > div').eq(idx + 1).offset().top - 235;
        $(this).siblings('li').removeClass('on');
        $(this).addClass('on');
        $('html, body').stop().animate({scrollTop:scroll_top},3000);
    });

    // 스크롤 시 이벤트
    $(window).scroll(function(){
        var scrollTop = $('html').scrollTop();
        var scroll1 = $('.place_options').offset().top - 260;
        var scroll2 = $('.place_caution').offset().top - 260;
        var scroll3 = $('.place_rule').offset().top - 260;
        var scroll4 = $('.place_gps').offset().top - 260;
        
        if(scroll4 <= scrollTop) {
            menu.siblings().removeClass('on');
            menu.eq(4).addClass('on');
        } else if (scroll3 <= scrollTop) {
            menu.siblings().removeClass('on');
            menu.eq(3).addClass('on');
        } else if (scroll2 <= scrollTop) {
            menu.siblings().removeClass('on');
            menu.eq(2).addClass('on');
        } else if (scroll1 <= scrollTop) {
            menu.siblings().removeClass('on');
            menu.eq(1).addClass('on');
        } else {
            menu.siblings().removeClass('on');
            menu.eq(0).addClass('on');
        }

    });

    // 팝업 메뉴 클릭 이벤트
    var droneBtn = $('.popup .drone');
    var galleryBtn = $('.popup .gallery');
    var closeBtn = $('.xi-close');
    
    droneBtn.click(function(){
        $('.modal').addClass('open');
        $('#drone').addClass('open');
        $('body').css({'overflow':'hidden'});
    });
    
    galleryBtn.click(function() {
        $('.modal').addClass('open');
        $('#gallery').addClass('open');
        $('body').css({'overflow':'hidden'});
    })
    closeBtn.click(function() {
        $('.modal').removeClass('open');
        $('#gallery').removeClass('open');
        $('#drone').removeClass('open');
        $('body').css({'overflow':'scroll'});
    });

    // 예약 이벤트
    $('#start-date').datepicker({
        dateFormat: 'yy-mm-dd',
        minDate: 'today',
        onClose: function (selectedDate ) {
            var max = $(this).datepicker('getDate');
            if(max == null) {
                $("#end-date").datepicker('option', 'minDate', 'today' );
                
            } else {
                $("#end-date").datepicker('option', 'minDate', selectedDate );
                max.setDate(max.getDate() + 1);
                $('#end-date').datepicker('option', 'maxDate', max);
            }
        }
    });

    $('#start-date-time').timepicker({
        interval: 60,
        timeFormat: 'HH:mm',
        minTime: new Date(),
    }).on('changeTime', function(){
        var startTime = $(this).val();
        $('#end-date-time').timepicker('option','minTIme',startTime +2)
    })    
    $('#end-date').datepicker({
        dateFormat: 'yy-mm-dd',
        minDate: 'today',
        onClose: function (selectedDate) {
            var today = new Date();
            var min = $(this).datepicker('getDate');
            if(min == null) {
                $("#start-date").datepicker('option','minDate','today');
            } else if(getFormatDate(min) == getFormatDate(today)) {
                $("#start-date").datepicker('option','minDate', selectedDate);
                $("#start-date").datepicker('option','maxDate', selectedDate );
            }else {
                min.setDate(min.getDate() - 1);
                $("#start-date").datepicker('option','minDate', min);
                $("#start-date").datepicker('option','maxDate', selectedDate );
            }
        }
    });
    $('#end-date-time').timepicker({
        interval: 60,
        timeFormat: 'HH:mm',
        
    });

    $('#openInfo').click(function () {
        $(this).css({'display':'none'})
        $('.userInfo').css({'display':'block'});
        $('button[form=userReserv]').css({'display':'block'});
    });
    
});

function getFormatDate(date) {
    var year = date.getFullYear();
    var month = date.getMonth() +1;
    month = month >= 10 ? month : '0' + month;
    var day = date.getDate();
    day = day >= 10 ? day: '0' + day;
    return year + month + day
}