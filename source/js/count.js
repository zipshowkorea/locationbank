var price;
var amount;

function init () {
	amount = document.form.amount.value;
	change();
}

function add () {
	hm = document.form.amount;
	hm.value ++ ;
	sum = parseInt(hm.value) - 5;
	price = document.form.price.value;
	
	$('#user').html(hm.value);
	$("#addPay").html(sum*price);
	if(sum<=0) {
		$("#addPay").html("0");
	}
}

function del () {
	hm = document.form.amount;
	price = document.form.price.value;
	if (1<hm.value) {
		hm.value --;
		sum = parseInt(hm.value) - 5;
		$("#addPay").html(sum*price);
		$('#user').html(hm.value);
		if(hm.value<6){
			$("#addPay").html("0");
		}
	} 
}

function change () {
	hm = document.form.amount.value;
	price = document.form.price.value;
	$("#user").html(hm);
	if(hm>5) {
		sum = parseInt(hm) - 5;
		$("#addPay").html(sum*price);
	}

}

var termsTotal = $('.terms').text().replace()
var totalPay = $('#total');
totalPay.html()
