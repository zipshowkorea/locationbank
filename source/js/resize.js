$(document).ready(function(){

    // main padding-top 조절
    var headerHeight = $('header').height();
    var main = $('main');
    main.css({"padding-top":headerHeight});

    // category 높이 조절
    var category = $("#category ul li");
    var categroyWidth = category.width();
    category.height(categroyWidth);

    // subcategory 사이즈 조절
    var subcategory = $("#subcategory > ul");
    subcategory.children().width(categroyWidth*0.8).height(categroyWidth*0.5);    

    // md's pick 높이 조절
    var recommend = $('#recommended .wrap > div');
    var recommend_list = $('.recommend_list li');
    var listInfo = $('.list-info')
    var recommendWidth = recommend_list.width();
    recommend_list.height(recommendWidth);
    recommend.height(recommendWidth);
    listInfo.height(recommendWidth - 60);


    // popular place 높이 조절
    var popular_list = $('.thumb');
    var popularWidth = popular_list.width();
    popular_list.height(popularWidth*0.7);

    // service 페이지 contents 높이 조절
    var contents_list = $("#contents ul li a");
    var contetnsWidth = contents_list.width();
    contents_list.height(contetnsWidth);

    // deatail 페이지 iframe 높이 조절
    var iframe = $('#detail iframe');
    var iframeWidth = iframe.width();
    iframe.height(iframeWidth*0.75);

    // detail 페이지 지도 사이즈 조절
    var mapIframe = $("#detail-intro iframe");
    var mapIframeWidth = mapIframe.width();
    mapIframe.height(mapIframeWidth);
    
    $(window).resize(function(){
        
        // main padding-top 조절
        var headerHeight = $('header').height();
        var main = $('main');
        main.css({"padding-top":headerHeight});

        // category 높이 조절
        var category = $("#category ul li");
        var categroyWidth = category.width();
        category.height(categroyWidth);
        
        
        // md's pick 높이 조절
        var recommend_list = $('.recommend_list li a');
        var recommendWidth = recommend_list.width();
        recommend_list.height(recommendWidth);
        var leftBtn = $('.recommend_list:before');
        var rightBtn = $('.recommend_list:after');
        
        // popular place 높이 조절
        var popular_list = $('.thumb');
        var popularWidth = popular_list.width();
        popular_list.height(popularWidth*0.7);

        // service 페이지 contents 높이 조절
        var contents_list = $("#contents ul li a");
        var contetnsWidth = contents_list.width();
        contents_list.height(contetnsWidth);

        // deatail 페이지 iframe 높이 조절
        var iframe = $('#detail iframe');
        var iframeWidth = iframe.width();
        iframe.height(iframeWidth*0.7);
    });
});