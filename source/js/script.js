$(document).ready(function(){

    // 햄버거 버튼 클릭시 gnb 노출 및 스크롤 잠금
    var bodyLock = document.getElementsByTagName('body')[0];
    $('.ham_btn').click(function(){
        $('#gnb').toggleClass('on');
        $('body').toggleClass('scrollLock');
    });

    // 스크롤 시 헤더 검색바 노출
    $(window).scroll(function(){
        var searchTop = $("#searchTop");
        if($(this).scrollTop()>0){
            searchTop.css({"margin":"auto","margin-top":"10px"});
        } else {
            searchTop.css({"margin":"auto","margin-top":"-60px"});
        }
    });

     // 카테고리 필터링
     var categoryPrimary = $("#primary-category li");
     categoryPrimary.click(function(){
 
         
         // 카테고리 활성화 & 비활성화
         var subcategory = $('#subcategory ul');
         categoryPrimary.removeClass('active');
         $(this).toggleClass('active');
         
         // 서브카테고리 활성화 & 비활성화
         var filterBy = $(this).attr('data-filter');
         subcategory.removeClass('flex');
         var subFilter = $("#subcategory").find("ul[data-filter='"+filterBy+"']");
         subFilter.toggleClass('flex');
         
         // 컨텐츠 활성화 & 비활성화
         var contents = $("#contents ul");
         if(filterBy == "*") {
             contents.children("li").removeClass('none');
         } else {
             contents.children("li").addClass('none')
             contents.find("li[data-filter='"+filterBy+"']").removeClass('none');
         }
         
         // 서브카테고리에 따른 컨텐츠 활성화 & 비활성화
         subcategory.children("li").click(function(){
             subcategory.children("li").removeClass('active');
             $(this).toggleClass('active');
             var contents2 = $("#contents ul");
             var filterBy2 = $(this).attr('data-second-filter');
 
             if(filterBy2=="*") {
                 contents2.children("li").removeClass('none');
             } else {
                 contents2.children("li").addClass('none');
                 contents2.find("li[data-second-filter='"+filterBy2+"']").removeClass('none');
             }
         });
 
     });

    $(window).scroll(function(){
        var topOffset = $("#reservation-schedule").offset().top;
        var setTop = topOffset + 25;
        $(".ui-timepicker-wrapper").css({"top":setTop});
    });


    // 가격 설정
    $(".price").html($("#price strong").html());
    $("#user").html(document.form.amount.value);

    // 예약 서비스 기능

    var reservation = $("#reservation-schedule");
    reservation.each(function(){
        var date = new Date();
        var tomorrow = date.getFullYear()+"-"+("0"+(date.getMonth()+1)).slice(-2)+"-"+(date.getDate()+1);
        var calendars = $(this).find('.col-lg-3');
        calendars.datepicker({
            format:"yyyy.mm.dd",
            yearSuffix:"년",
            yearFirst: true,
            months:['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],   
            monthsShort:['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
            daysMin:['일','월','화','수','목','금','토'],
            startDate: tomorrow,
            pickedClass: "picked",
            autoPick: false,
        });

        var startDate = $('#start-date');
        var endDate = $('#end-date');
        var setStartDay = $("#setStartDay");
        var setEndDay = $("#setEndDay");

        startDate.on('change',function(){
            endDate.datepicker('setStartDate',startDate.datepicker('getDate'));
            setStartDay.html(startDate.datepicker('getDate',{format: "yyyy.mm.dd"}));
        });

        endDate.on('change',function(){
            startDate.datepicker('setEndDate',endDate.datepicker('getDate'));
            setEndDay.html(endDate.datepicker('getDate',{format: "yyyy.mm.dd"}));
        });
        

        var times = $(this).find('.col-lg-2');
        times.timepicker({
            timeFormat: "H:i",
            step: 60
        });

        var startTime = $("#start-time");
        var endTime =$("#end-time");
        var setStartTime = $("#setStartTime");
        var setEndTime = $("#setEndTime");

        
        startTime.on('changeTime',function(){
            setStartTime.html(("0"+ startTime.timepicker('getTime').getHours()).slice(-2) + ":" + ("0" + startTime.timepicker('getTime').getMinutes()).slice(-2));
        });
        
        endTime.on('changeTime',function(){
            setEndTime.html(("0" + endTime.timepicker('getTime').getHours()).slice(-2) + ":" + ("0" + startTime.timepicker('getTime').getMinutes()).slice(-2));
            
            var day1 = new Date(setStartDay.html() + " " + setStartTime.html()) ;
            var day2 = new Date(setEndDay.html() + " " + setEndTime.html()) ;
            var gap = 1000*60*60;
            var terms = (day2 - day1) / gap;

            $(".terms").html(terms + " 시간")
        });
    });

    // 3D 모델 클릭시 모달창

    var view3D = $("#model3D");
    view3D.click(function() {
        var modal = $("#modal");
        modal.css({display:'block'});
        $('body').css({overflow:'hidden'});

        $("button[name='close']").click(function(){
            modal.css({display:'none'});
            $('body').css({overflow:'auto'});
        });
    });   
});

// 좌우 버튼
function prev() {
    var list = $('.recommend_list');
    var listPosition = list.position().left;
    var moving = list.children('li').width() + 21;
    if(listPosition<0){
        list.animate({right:'-='+moving});
    } else {
        false;
    }
}


function next() {
    var list = $('.recommend_list');
    var listPosition = list.position().left;
    var moving = list.children('li').width() + 21;
    if(-(moving*4) < listPosition) {
        list.animate({right: '+='+ moving});
    } else {
        false;
    }
}