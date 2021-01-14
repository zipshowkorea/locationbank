$(document).ready(function(){

    // 카테고리 선택 이벤트
    $('.create_category label').click(function(){
        $(this).siblings().removeClass('selected');
        $(this).addClass('selected');
    });

    
});

function tagAdd() {
    var tag = document.getElementById('place_tag').value;
    $('.tag_list').append('<li>' + tag + '</li>');
    document.getElementById("place_tag").value = null;
}

function imgAdd() {
    var tag = document.getElementById('place_img_path').value;
    $('.tag_list').append('<li>' + tag + '</li>');
    document.getElementById("place_tag").value = null;
}

function fileUpload() {
    var file = document.getElementById('img_file');
    var fileList = ""
    if('files' in file) {
        if(file.files.length > 10) {
            alert('최대 10개만 사용이 가능합니다.');
            document.getElementById('img_file').value = "";
            return;
        } else {
            for (var i = 0; i < file.files.length; i++) {
                var img = file.files[i];
                $('.img_list').append(
                    fileList = '<li><input type="radio" name="Thumb" id="' + $('.img_list li').length + '"><label for ="' + $('.img_list li').length + '">' + img.name+ '</label></li>'
                );
            }
        }
    }
}

/* 이미지 파일 업로드시 파일 경로 노출
var fileTarget = $('#img_file');
fileTarget.on('change', function(){
    var imgIndex = document.getElementsByName
    var cur = $('#img_file').val();
    $('#place_img_path').val(cur);

    $('.img_list').append('<li><input type="radio" name="Thumb" id="'+ $('.img_list li').length +'"><label for ="' + $('.img_list li').length + '">' + cur + '</label></li>');
});
*/