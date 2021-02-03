$(document).ready(function(){

    var allCheck = $('#allCheck');
    var normalCheck = $('.normal');
    allCheck.change(function(){
        var checked = $(this).is(':checked');
        if(checked) {
            $(".normal").prop('checked',true)
        } else {
            $(".normal").prop('checked',false)
        }
    })
    
    normalCheck.change(function(){
        var checked = $(this).is(':checked');
        var normalLength = normalCheck.length;
        var checkedLehgth = $('.normal:checked').length;
        var selectAll = (normalLength == checkedLehgth);
        
        if(!checked) {
            allCheck.prop('checked',false);
        }
        if(selectAll) {
            allCheck.prop('checked',true);
        }
    });
    
});

function joinBtn() {
    var boxLength =  $('input.essential').length;
    var checkedLehgth = $('.essential:checked').length;
    var selectAll = (boxLength == checkedLehgth);
    if(!selectAll) {
        alert('필수 항목을 동의해 주세요');
    } else {
        $('.modal').css({'display':'block'});
        $('body').css({'overflow':'hidden'});
    }
};