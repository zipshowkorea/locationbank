function checkEmail() {
    var email = document.getElementById('host_email').value;
    var regExp = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;

    if(regExp.test(email) == false){
        $('#host_email').addClass('invalid');
        $('#host_email').focus();
        $('.emailRegExp').html('이메일 형식이 올바르지 않습니다.')
    } else {
        $('#host_email').removeClass('invalid');
        $('.emailRegExp').html('')
    }
}

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

        if(pw != confirmPw) {
            $('.pwConfirm').html('비밀번호 불일치');
            $('#host_password2').addClass('invalid');
            $('#host_password2').focus();
        } else {
            $('.pwConfirm').html('');
            $('#host_password2').removeClass('invalid');
        }
    }
}