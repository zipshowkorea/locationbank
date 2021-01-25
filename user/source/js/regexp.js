function checkEmail() {
    var email = document.getElementById('user_email').value;
    var regExp = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;

    if(regExp.test(email) == false){
        $('#user_email').addClass('invalid');
        $('#user_email').focus();
        $('.emailRegExp').html('이메일 형식이 올바르지 않습니다.')
    } else {
        $('#user_email').removeClass('invalid');
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
    var pw = document.getElementById('user_password').value;
    var confirmPw = document.getElementById('user_password2').value;

    if(pw.length < 5 || pw.length > 17) {
        $('.pwRegExp').html('비밀번호는 6자 이상, 16자 이하만 이용 가능합니다.');
        $('#user_password').addClass('invalid')
        $('#user_password').focus();
    } else {
        $('.pwRegExp').html('');
        $('#user_password').removeClass('invalid');

        if(pw != confirmPw) {
            $('.pwConfirm').html('비밀번호 불일치');
            $('#user_password2').addClass('invalid');
            $('#user_password2').focus();
        } else {
            $('.pwConfirm').html('');
            $('#user_password2').removeClass('invalid');
        }
    }
}