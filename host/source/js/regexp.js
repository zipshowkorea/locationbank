function checkNum(event) {
    if(0 <= event.key && event.key <= 9) {
        return true;
    }
    alert('숫자만 입력해주세요');
    return false;
}

function checkPw() {
    var pw = document.getElementById('host_password').value;
    var confirmPw = document.getElementById('host_password2').value;

    if(pw.length < 5 || pw.length > 17) {
        $('.pwRegExp').html('비밀번호는 6자 이상, 16자 이하만 이용 가능합니다.');
        $('#host_password').addClass('invalid')
        $('#host_password').focus();
    } else {
        $('.pwRegExp').html('');
        $('#host_password').removeClass('invalid');

        if(document.getElementById('host_password').value != document.getElementById('host_password2').value) {
            $('.pwConfirm').html('비밀번호 불일치');
            $('#host_password2').addClass('invalid');
            $('#host_password2').focus();
        } else {
            $('.pwConfirm').html('');
            $('#host_password2').removeClass('invalid');
        }
    }
}