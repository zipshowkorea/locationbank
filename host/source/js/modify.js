$(document).ready(function(){
    $('input').attr('disabled',true);
    $('button').css('cursor','default');
    $('.modify').css('cursor','pointer');
    $('.delete').css('cursor','pointer');

    var offsetTop = $('#host_email').offset().top;
    var offsetRight = $('#host_email').offset().left + $('#host_email').width();
    $('.modify').css({top:offsetTop,left:offsetRight+50});
});

function Modify() {
    $('input').attr('disabled',false);
    $('button').css('cursor','pointer');
    $('.modify').html('수정<br>완료').attr('onclick','Confirm()');
}

function Confirm() {
    $('input').attr('disabled',true);
    $('button').not('.modify').css('cursor','default');
    $('.modify').html('수정<br>하기').attr('onclick','Modify()')
    alert('수정이 완료되었습니다.');
}