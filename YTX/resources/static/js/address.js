$(document).ready(function(){
(function(){
	var $submitAdd = $("#submitAdd"),
		$addressTable = $("#addressTable"),
		provinceCode = $("#provinceCode"),
		cityCode = $("#cityCode"),
		areaCode = $("#areaCode"),
		address = $("#address"),
		consignee = $("#consignee"),
		mobile = $("#mobile");
	
	$submitAdd.bind('click', submitAddress);
	mobile.bind('blur', mobileCheck);
	address.bind('blur', addressCheck);
	consignee.bind('blur', consigneeCheck);
	
	function consigneeCheck() {
		if($(this).val() === ''){
			consignee.parent().parent().find('.alert').text('请填写收货人！');
		}else{
			consignee.parent().parent().find('.alert').text('');
		};
	};
	
	function addressCheck() {
		if($(this).val() === ''){
			address.parent().find('.alert').text('请填写详细地址！');
		}else{
			address.parent().find('.alert').text('');
		};
	};
	
	function mobileCheck() {
		var regExp = /^[1-9]\d{5,19}$/;
		if(mobile.val() == ''){
			mobile.parent().parent().find('.alert').text('请填写手机号码！');
		}else if(!regExp.test($(this).val())){
			mobile.parent().parent().find('.alert').text('请填写6到20位数字的手机号码格式！');
		}else{
			mobile.parent().parent().find('.alert').text('');
		};
	};
	
	function submitAddress() {
		var formFlag = true;
		if(provinceCode.val() == '' || cityCode.val() == '' || areaCode.val() == ''){
			//未填写省市区
			provinceCode.parent().parent().find('.alert').text('请选择省市区！');
			formFlag = false;
		};
		if(address.val() == ''){
			address.parent().find('.alert').text('请填写详细地址！');
			formFlag = false;
		};
		if(consignee.val() == ''){
			consignee.parent().parent().find('.alert').text('请填写姓名！');
			formFlag = false;
		};
		var regExp = /^[1-9]\d{5,19}$/;
		if(mobile.val() == ''){
			mobile.parent().parent().find('.alert').text('请填写手机号码！');
			formFlag = false;
		}else if(!regExp.test(mobile.val())){
			mobile.parent().parent().find('.alert').text('请填写6到20位数字的手机号码格式！');
			formFlag = false;
		};
		if(formFlag){
			$.ajax({
				type: "post",
				url: "",
				async: true,
				data: {
					"provinceCode": provinceCode.val(),
					"cityCode": cityCode.val(),
					"areaCode": areaCode.val(),
					"address": address.val(),
					"consignee": consignee.val(),
					"mobile": mobile.val(),
					"zip": $("#zip").val()
				},
				success: function(){
					//添加节点
					var tr = document.createElement('tr');
					tr.className = 'tr clearfix';
					tr.innerHTML = '<td class="td td-name">'+ consignee.val() +'</td>' +
						'<td class="td td-area">'+ provinceCode.text() + cityCode.text() + cityCode.text() +'</td>' +
						'<td class="td td-address">'+ address.val() +'</td>' +
						'<td class="td td-zipCode">'+ $("#zip").val() +'</td>' +
						'<td class="td td-tel">'+ mobile.val() +'</td>' +
						'<td class="td td-action"><a href="#" class="actions">修改</a> | <a href="#" class="actions">删除</a></td>' +
						'<td class="td td-controler"><div class="default">默认地址</div></td>';
					$addressTable[0].appendChild(tr);
				}
			});
		};
	};
}());
});
