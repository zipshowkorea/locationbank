$(document).ready(function(){

    // 공간 카테고리 이벤트
    $('.create_category label').click(function(){
        $(this).siblings().removeClass('selected');
        $(this).addClass('selected');
    });

    
    // 세부 공간 옵션 이벤트
    var option = $('.option_list label');

    option.click(function(){
        var optionFor = $(this).attr('for');

        if(optionFor != 'power' && optionFor != 'parking'){
            $(this).toggleClass('selected');
        }

    });     
});

function powerValue() {
    var power = document.getElementById('power').value;

    
    if(power != "") {
        $('label[for=power]').addClass('selected');
    } else {
        $('label[for=power]').removeClass('selected');
    }
}

function parkingValue() {
    var parking = document.getElementById('parking').value;
    
    if(parking != "") {
        $('label[for=parking]').addClass('selected');
    } else {
        $('label[for=parking]').removeClass('selected');
    }
}


function tagAdd() {
    var tag = document.getElementById('place_tag').value;
    var tagList = $('.tag_list');

    if(tag  != ""){
        tagList.append('<li>' + tag + '<input type="text" name="tag[]" value="' + tag + '" style="display:none"><button type="button" id="del">X</button></li>');
        document.getElementById("place_tag").value = null;
    } else {
        $('#place_tag').css({'border':'0.1rem solid red'}).focus();;
    }

    tagList.on('click', "#del", function(){
        $(this).parent().remove();
    })
}


function addImg() {
    var file = document.getElementById('img_file1');
    var fileList = ""
    var imgList = $('.img_list');
    var index = imgList.children().length+1;
    var inputList = $(".input_list");
    console.log(index);

    if('files' in file) {
       
        if(file.files.length > 10) {
            alert('최대 10개만 사용이 가능합니다.');
            return;

        } else {
            var i = 0
            for (var i; i < file.files.length; i++) {
                var img = file.files[i];
                $('.img_list').append(
                    fileList = '<li><input type="radio" name="Thumb" id="' + $('.img_list li').length + '"><label for ="' + $('.img_list li').length + '">' + img.name+ '</label><button type="button" id="del">X</button></li>'
                );
                inputList.append('<li><input type="file" accept="image/*" id="img_file' + index + '" onchage="addImg();">');
                $('.img_file').attr('for','img_file' + index);
            }    
        }

        imgList.on('click', "#del", function(){
            $(this).parent().remove();
            $('.input_list').find('#img_id' + index).remove();
            
            
        });
        console.log(file.files)
        
    }
}

function fileUpload() {
    var file = document.getElementById('p_d_img_pk');
    var imgList = $('.img_list');

    if('files' in file) {
        imgList.html('<li><input type="radio" checked>' + file.files[0].name + '<button type="button" id="del">X</button></li>');
        
        imgList.on('click', "#del", function(){
            $(this).parent().remove();
        });
    }


}
