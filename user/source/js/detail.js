$(document).ready(function() {

    // vr play btn click event
    $('.playBtn i').click(function(){
        $(this).removeClass('xi-play-circle-o').addClass('xi-spinner-1 xi-spin');
        setTimeout(function(){
            $('iframe').css({'z-index':0})
        },3000)
    })
    
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

    // 시작일 먼저 선택 - > 종료일 선택 제한
    var startDate = $('#start-date');
    var startTime = $('#start-date-time');
    var endDate = $('#end-date');
    var endTime = $('#end-date-time');
    var setStartDate = $('#setStartDate');
    var setStartTime = $('#setStartTime');
    var setEndDate = $('#setEndDate');
    var setEndTime = $('#setEndTime');
    startDate.datepicker({
        dateFormat: 'yy.mm.dd',
        minDate: 'today',
        onClose: function (selectedDate ) {
            setStartDate.html(selectedDate);
            setStartDate.css({'display':'inline-block'});
            var max = $(this).datepicker('getDate');
            if(max == null) {
                endDate.datepicker('option', 'minDate', 'today' );
            } else if(getFormatDate($(this).datepicker('getDate')) == getFormatDate(new Date())) {
                startTime.timepicker('option','minTime',new Date())
            }else {
                endDate.datepicker('option', 'minDate', selectedDate );
                max.setDate(max.getDate() + 1);
                endDate.datepicker('option', 'maxDate', max);
            }
        }
    });

    startTime.timepicker({
        interval: 60,
        timeFormat: 'HH:mm',
        change: function(time) {
            setStartTime.html($(this).val());
            setStartTime.css({'display':'inline-block'});
        }
    });

    // 종료일 먼저 선택 -> 시작일 선택 제한
    endDate.datepicker({
        dateFormat: 'yy.mm.dd',
        minDate: 'today',
        onClose: function (selectedDate) {
            var today = new Date();
            var min = $(this).datepicker('getDate');
            setEndDate.html(selectedDate);
            setEndDate.css({'display':'inline-block'});

            if(min == null) {
                startDate.datepicker('option','minDate','today');
            } else if(getFormatDate(min) == getFormatDate(today)) {
                startDate.datepicker('option','minDate', selectedDate);
                startDate.datepicker('option','maxDate', selectedDate );
                endTime.timepicker('option','minTime',startTime.val());
            } else if(getFormatDate(min) == getFormatDate(startDate.datepicker('getDate'))) {
                endTime.timepicker('option','minTime',startTime.val());
            } else {
                min.setDate(min.getDate() - 1);
                startDate.datepicker('option','minDate', min);
                startDate.datepicker('option','maxDate', selectedDate );
            }
        }
    });

    
    endTime.timepicker({
        interval: 60,
        timeFormat: 'HH:mm',
        change: function(time) {
            setEndTime.html($(this).val());
            setEndTime.css({'display':'inline-block'});
        }
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