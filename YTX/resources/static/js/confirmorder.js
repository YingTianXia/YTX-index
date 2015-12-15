var data_RP = [{
	"id": "12312333",
	"redPacketName": "5元优惠卷",
	"faceValue": "5"
},{
	"id": "123123",
	"redPacketName": "首单减10元",
	"faceValue": "10"
}];
;(function(){
myReady(function(){
	var addressOuter = document.getElementById('addressOuter'),
		addresses = addressOuter.getElementsByTagName('li'),
		allAddress = document.getElementById('allAddress'),
		createAddr = document.getElementById('createAddr'),
		addressCon = document.getElementById('addressCon'),
		createAddr_cancel = document.getElementById('createAddr_cancel'),
		confirmAddress = document.getElementById('confirmAddress');
		
	if(addresses.length > 3){
		allAddress.style.display = 'block';
		addListener(allAddress, 'click', showAllAddress);
	};
	
	for(var i = 0, j = addresses.length; i < j; i++) {
		addListener(addresses[i], 'click', chooseAddr)
	};
	//添加地址
	addListener(createAddr, 'click', createAddress);
	//取消新增地址
	addListener(createAddr_cancel, 'click', createCancel);
	//确认添加地址
	addListener(confirmAddress, 'click', confirmAddressHandler);

	//计算金额流程
	var Y_total = document.getElementById('Y_total'),
		orderMain = document.getElementById('orderMain'),
		usePoint = document.getElementById('usePoint'),
		bdInput = document.getElementById('bdInput'),
		userPointsCon = document.getElementById('userPoints'),
		userPoints = parseInt(userPointsCon.innerHTML),
		pointDiscount = document.getElementById('pointDiscount'),
		confirmOrder = document.getElementById('confirmOrder'),
		addressList = document.getElementById('addressList'),
		discountselect = getByClassDom(orderMain, 'discount-select');
		RBselect = getByClassDom(orderMain, 'RB-select');
	//进入页面时计算价格	
	calculate();
	//变更优惠卷
	for (var i = 0; i < discountselect.length; i++){
		addListener(discountselect[i], 'change', discountCal);
	}
	//变更红包
	for (var i = 0; i < RBselect.length; i++){
		addListener(RBselect[i], 'change', RPCal);
	}
	//是否使用积分
	addListener(usePoint, 'click', usePointHandler);
	//使用积分
	if(document.addEventListener){
		addListener(bdInput, 'input', bdInputChange);
	}else{
		addListener(bdInput, 'propertychange', bdInputChange);
	};
	//提交订单
	addListener(confirmOrder, 'click', confirmOrderHandler);
	
	//加载红包数据
	loadRP();
	
	/* 方法
	 * 方法
	 * 方法
	 * 方法
	 * */
	
	function loadRP() {
		for (var i = 0, j = RBselect.length; i < j; i++){
			for (var m = 0, n = data_RP.length; m < n; m++){
				var obj = data_RP[m],
					options = document.createElement('option');
				options.innerHTML = obj.redPacketName;
				options.value = obj.id;
				RBselect[i].appendChild(options);
				obj.use = false;
			};
		};
	};
	
	function confirmAddressHandler() {
		var addressData = '{';
		//省市区
		var userArea = addressCon.getElementsByTagName('dl')[0].getElementsByTagName('select');
		addressData += '"area": "'
		for (var i = 0; i < userArea.length; i++){
			addressData += userArea[i].value + ' ';
		};
		addressData += '",';
		//邮编
		addressData += '"zipCode": "' + addressCon.getElementsByTagName('dl')[1].getElementsByTagName('input')[0].value + '",';
		//街道地址
		var addressString = addressCon.getElementsByTagName('dl')[2].getElementsByTagName('textarea')[0].value;
		if(addressString == ''){
			addressCon.getElementsByTagName('dl')[2].getElementsByTagName('p')[0].innerHTML = '请输入详细地址';
			return;
		}
		addressData += '"street": "' + addressString + '",';
		//姓名
		var nameString = addressCon.getElementsByTagName('dl')[3].getElementsByTagName('input')[0].value;
		if(nameString == ''){
			addressCon.getElementsByTagName('dl')[3].getElementsByTagName('p')[0].innerHTML = '请输入姓名';
			return;
		}
		addressData += '"name": "' + nameString + '",';
		//手机号码
		var phoneString = addressCon.getElementsByTagName('dl')[4].getElementsByTagName('input')[0].value;
		if(phoneString == ''){
			addressCon.getElementsByTagName('dl')[4].getElementsByTagName('p')[0].innerHTML = '请输入手机号码';
			return;
		};
		var regExp = /^[1-9]\d*$/;
		if(!regExp.test(phoneString)){
			addressCon.getElementsByTagName('dl')[4].getElementsByTagName('p')[0].innerHTML = '请输入正确的手机号码';
			return;
		};
		addressData += '"phone": "' + phoneString + '"}';
		
		addressData = parseJson(addressData);
		
		createAddressItem(addressData);
	};
	
	function createAddressItem(addressData) {
		var li = document.createElement('li');
		li.className = 'address-item';
		li.innerHTML = '<div class="address-item-main"><dl class="address-item-prop"><dt class="prop-icon-name"></dt><dd class="prop-content">'+ addressData.name +'</dd></dl><dl class="address-item-prop"><dt class="prop-icon-tel"></dt><dd class="prop-content">'+ addressData.phone +'</dd></dl><div class="address-bd">'+ addressData.street +'</div><span class="address-active"></span>';
		addressList.appendChild(li);
		addressOuter.className = 'zoom';
		allAddress.innerHTML = '收起';
		for(var i = 0, j = addresses.length; i < j; i++) {
			addListener(addresses[i], 'click', chooseAddr);
		};
		createCancel();
	};
	
	function confirmOrderHandler(){
		var orderData = '{';
		//获得用户选中的地址
		var user = getByClassDom(addressList, 'address-item active')[0];
		//记录地址	
		orderData += '"user": {' +
		'"name" : "' + user.getElementsByTagName('dl')[0].getElementsByTagName('dd')[0].innerHTML + '",' +
		'"phone": "' + user.getElementsByTagName('dl')[1].getElementsByTagName('dd')[0].innerHTML + '",' +
		'"address": "' + getByClassDom(user, 'address-bd')[0].innerHTML + '"},';
		//记录商家
		var brands = getByClassDom(orderMain, 'order-container');
		for (var i = 0; i < brands.length; i++){
			if(i == 0){
				orderData += '"sellers": [{"seller": {' +
				'"sellerId": "' + brands[i].getAttribute('data-selleracountid') + '",' +
				//记录备注
				'"remark": "' + getByClassDom(brands[i], 'mes-input')[0].value + '",';
				//记录优惠卷
				if((getByClassDom(brands[i], 'discount-select').length !== 0) && (getByClassDom(brands[i], 'discount-select')[0].getAttribute('data-discountid') !== null)){
					orderData += '"discountid": "' + getByClassDom(brands[i], 'discount-select')[0].getAttribute('data-discountid') + '",';
				}else{
					orderData += '"discountid": "",';
				};
				//记录红包
				if((getByClassDom(brands[i], 'RB-select').length !== 0) && (getByClassDom(brands[i], 'RB-select')[0].value !== 0)){
					orderData += '"RPid": "' + getByClassDom(brands[i], 'RB-select')[0].value + '",';
				}else{
					orderData += '"RPid": "",';
				};
				//记录商品
				var items = getByClassDom(brands[i], 'td th-acount');
				for (var m = 0, n = items.length; m < n; m++){
					var dataValue = items[m].getAttribute('data-value'),
						dataItemskuid = items[m].getAttribute('data-itemskuid');
					if(m == 0){
						orderData += '"items": [{' + 
						'"itemskuid": "' + dataItemskuid + '",' +
						'"value": "' + dataValue + '"' +
						'}'
					}else{
						orderData += ',{' + 
						'"itemskuid": "' + dataItemskuid + '",' +
						'"value": "' + dataValue + '"' +
						'}'
					};
				};
				orderData += ']}}';
			}else{
				orderData += ',{"seller": {' +
				'"sellerId": "' + brands[i].getAttribute('data-selleracountid') + '",' +
				'"remark": "' + getByClassDom(brands[i], 'mes-input')[0].value + '",';
				//记录优惠卷
				if((getByClassDom(brands[i], 'discount-select').length !== 0) && (getByClassDom(brands[i], 'discount-select')[0].getAttribute('data-discountid') !== null)){
					orderData += '"discountid": "' + getByClassDom(brands[i], 'discount-select')[0].getAttribute('data-discountid') + '",';
				}else{
					orderData += '"discountid": "",';
				};
				//记录红包
				if((getByClassDom(brands[i], 'RB-select').length !== 0) && (getByClassDom(brands[i], 'RB-select')[0].value !== 0)){
					orderData += '"RPid": "' + getByClassDom(brands[i], 'RB-select')[0].value + '",';
				}else{
					orderData += '"RPid": "",';
				};
				var items = getByClassDom(brands[i], 'td th-acount');
				for (var m = 0, n = items.length; m < n; m++){
					var dataValue = items[m].getAttribute('data-value'),
						dataItemskuid = items[m].getAttribute('data-itemskuid');
					if(m == 0){
						orderData += '"items": [{' + 
						'"itemskuid": "' + dataItemskuid + '",' +
						'"value": "' + dataValue + '"' +
						'}'
						
					}else{
						orderData += ',{' + 
						'"itemskuid": "' + dataItemskuid + '",' +
						'"value": "' + dataValue + '"' +
						'}'
					};
				};
				orderData += ']}}';
			};
		};
		orderData += '],';
		//记录使用积分
		orderData += '"points": "' + bdInput.value + '"}';
		orderData = parseJson(orderData);
		console.log(orderData);
	};

	function bdInputChange() {
		var regExp = /^[1-9]\d*$/;
		if(!regExp.test(this.value)){
			this.value = '';
		};
		if(userPoints >= this.value){
			userPointsCon.innerHTML = userPoints - this.value;
		}else{
			this.value = userPoints;
			userPointsCon.innerHTML = '0';
		}
		pointDiscount.innerHTML = this.value / 100;
		calculate();
	};
	
	function usePointHandler() {
		if(this.checked){
			getByClassDom(this.parentNode.parentNode, 'bd')[0].style.display = 'block';
			return;
		};
		getByClassDom(this.parentNode.parentNode, 'bd')[0].style.display = 'none';
		bdInput.value = '';
		calculate();
	};
	
	//红包变更
	function RPCal() {
		if(this.value === '0'){
			this.setAttribute('data-rp', '0');
			this.parentNode.parentNode.getElementsByTagName('span')[0].innerHTML = '0.00';
			calculate();
			for (var i = 0, j = data_RP.length; i < j; i++){
				var obj = data_RP[i];
				if(obj.id == this.getAttribute('data-id')){
					obj.use = false;
					break;
				};
			};
			this.setAttribute('data-id', '');
		};
		if(this.getAttribute('data-id')){
			for (var i = 0, j = data_RP.length; i < j; i++){
				var obj = data_RP[i];
				if(obj.id == this.getAttribute('data-id')){
					obj.use = false;
				};
			};
		};
		for (var i = 0, j = data_RP.length; i < j; i++){
			var obj = data_RP[i];
			if(obj.id == this.value){
				this.setAttribute('data-rp', obj.faceValue);
				this.parentNode.parentNode.getElementsByTagName('span')[0].innerHTML = parseFloat(obj.faceValue).toFixed(2);
				obj.use = true;
				this.setAttribute('data-id', obj.id);
				break;
			};
		};
		//输出节点
		for (var m = 0, n = RBselect.length; m < n; m++){
			if(this === RBselect[m]){
				continue;
			};
			RBselect[m].innerHTML = '';
			var optionsDefault = document.createElement('option');
			optionsDefault.value = 0;
			optionsDefault.innerHTML = '请选择红包';
			RBselect[m].appendChild(optionsDefault);
			for (var i = 0, j = data_RP.length; i < j; i++){
				var RP = data_RP[i];
				if(!RP.use || RBselect[m].getAttribute('data-id') == RP.id){
					var options = document.createElement('option');
					options.innerHTML = RP.redPacketName;
					options.value = RP.id;
					RBselect[m].appendChild(options);
					if(RBselect[m].getAttribute('data-id') == RP.id){
						options.selected = true;
					};
				};
			};
		};
		calculate();
	};
	
	//优惠卷变更
	function discountCal() {
		this.setAttribute('data-Discount', this.value);
		var options = this.getElementsByTagName('option');
		for (var i = 0, j = options.length; i < j; i++){
			if(this.value === options[i].value){
				this.setAttribute('data-discountid', options[i].getAttribute('data-discountid'));
				break;
			};
		};
		this.parentNode.parentNode.getElementsByTagName('span')[0].innerHTML = this.value;
		calculate();
	};
	
	//计算价格
	function calculate() {
		var totalPrice = 0;
		var stores = getByClassDom(orderMain, 'order-container');
		for (var i = 0; i < stores.length; i++){
			var store = stores[i];
			//计算店铺价格
			var brandValue = getByClassDom(store, 'brand-value')[0],
				items = getByClassDom(store, 'td th-sum'),
				brandPrice = 0;
				
			for (var m = 0, n = items.length; m < n; m++){
				brandPrice += parseFloat(items[m].innerHTML);
			};
			if (getByClassDom(store, 'full-value')[0] && getByClassDom(store, 'full-value')[0] != undefined){
				//品牌满减优惠
				var fullValue = getByClassDom(store, 'full-value')[0].getAttribute('data-full');
				brandPrice -= parseFloat(fullValue);
			};
			if (getByClassDom(store, 'discount-value')[0] && getByClassDom(store, 'discount-value')[0] != undefined){
				//品牌优惠卷
				var discountValue = getByClassDom(store, 'discount-value')[0].getElementsByTagName('span')[0].innerHTML;
				brandPrice -= parseFloat(discountValue);
			};
			if (getByClassDom(store, 'RB-value')[0] && getByClassDom(store, 'RB-value')[0] != undefined){
				//品牌优惠卷
				var RBValue = getByClassDom(store, 'RB-value')[0].getElementsByTagName('span')[0].innerHTML;
				brandPrice -= parseFloat(RBValue);
			};
			brandValue.innerHTML = brandPrice.toFixed(2);
		}
		
		var brandTotal = getByClassDom(orderMain, 'brand-value');
		for (var j = 0; j < brandTotal.length; j++){
			totalPrice += parseFloat(brandTotal[j].innerHTML);
		};
		
		//使用积分
		if(usePoint.checked){
			totalPrice -= parseFloat(pointDiscount.innerHTML);
		}
		
		//最终金额
		Y_total.innerHTML = totalPrice.toFixed(2);
	}
	
	function createCancel() {
		addressCon.style.display = 'none';
	}
	
	function createAddress() {
		if(addressCon.style.display == 'block'){
			return;
		};
		addressCon.style.display = 'block';
		var addrHeight = addressCon.offsetHeight - 11;//11为padding和border高度
		addressCon.style.height = 0;
		move(addressCon, {"height": addrHeight}, 8);
	};
	
	//选择地址
	function chooseAddr() {
		for (var m = 0, n = addressList.getElementsByTagName('li').length; m < n; m++){
			addresses[m].className = 'address-item';
		};
		this.className += ' active';
	};
	
	function showAllAddress(obj) {
		if(addressOuter.className == 'zoom'){
			addressOuter.className = 'add-outer zoom';
			this.innerHTML = '显示全部地址';
			return;
		};
		addressOuter.className = 'zoom';
		this.innerHTML = '收起';
	};
});
})();