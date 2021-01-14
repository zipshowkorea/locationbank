$(document).ready(function(){

    // 카테고리 선택 이벤트
    $('.create_category label').click(function(){
        $(this).siblings().removeClass('selected');
        $(this).addClass('selected');
    });
});

function tagAdd() {
    var tag = document.getElementById('place_tag').value;
    var tagList = $('.tag_list');
    tagList.append('<li>' + tag + '<button type="button" id="del">X</button></li>');
    document.getElementById("place_tag").value = null;

    tagList.on('click', "#del", function(){
        $(this).parent().remove();
    })
}


function fileUpload() {
    var file = document.getElementById('img_file');
    var fileList = ""
    var imgList = $('.img_list');

    if('files' in file) {
       
        if(file.files.length > 10) {
            alert('최대 10개만 사용이 가능합니다.');
            return;

        } else {
            for (var i = 0; i < file.files.length; i++) {
                var img = file.files[i];
                $('.img_list').append(
                    fileList = '<li><input type="radio" name="Thumb" id="' + $('.img_list li').length + '"><label for ="' + $('.img_list li').length + '">' + img.name+ '</label><button type="button" id="del">X</button></li>'
                );
            }
            
        }
        
    }

    imgList.on('click', "#del", function(){
        $(this).parent().remove();
    });

}