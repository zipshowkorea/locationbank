$(document).ready(function() {
    $('.cancel').click(function(){
        if(confirm('예약을 취소하시겠습니까?') == true) {
            $(this).parent().remove();
        }
    })
})