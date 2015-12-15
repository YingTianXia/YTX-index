;(function(){
myReady(function(){
	var galleryTabs = document.getElementById('galleryTab').getElementsByTagName('img'),
		galleryTabcons = document.getElementById('galleryTab').getElementsByTagName('li'),
		galleryMain = document.getElementById('galleryMain'),
		galleryTimer = null,
		scrollTimer = null,
		SKUID;
		
	//解析json渲染尺码表
	var sizeCon = $("#sizeCon"),
		sizeData = '',
		sizeIndex = 0;
	if(document.getElementById('sizeTemplateId').value != null && document.getElementById('sizeTemplateId').value != '' && document.getElementById('sizeTemplateId').value!= undefined){
		var sizeTemplateJson = JSON.parse(document.getElementById('sizeTemplateId').value);
	}
	try{
		$.each(sizeTemplateJson, function(i, e) {
			if(sizeIndex < 1){
				//输出thead
				sizeData += '<thead><tr>';
				$.each(e, function(index, element){
					sizeData += '<th>' + index + '</th>'
				});
				sizeData += '</tr></thead><tbody>';
				sizeIndex++;
			};
			sizeData += '<tr>';
			$.each(e, function(index, element) {
				sizeData += '<td>' + element + '</td>';
			});
			sizeData += '</tr>';
		});
		sizeData += '</tbody>';
		sizeCon.append(sizeData);
	}catch(e){}
	
	//点击商品图切换主图
	for (var i = 0,j = galleryTabs.length; i < j; i++){
		addListener(galleryTabs[i], 'mouseover', galleryHandler);
	};
	for (var i = 0,j = galleryTabs.length; i < j; i++){
		addListener(galleryTabs[i], 'mouseout', clearGallery);
	};
	
	//选项卡跟随视窗移动
	var tabBar = document.getElementById('tabBar'),
		tabBars = tabBar.getElementsByTagName('li'),
		tabCons = getByClass('tabContainer', 'detail-tab-con'),
		fixAddCart = document.getElementById('fixAddCart');
	tabBar.style.position = 'relative';
	var tabBarTop = tabBar.offsetTop;
	tabBar.style.position = 'static';
	
	window.onscroll = function(){
		var currentTop = scrollTop();
		if(currentTop > tabBarTop){
			tabBar.style.position = 'fixed';
			tabBars[tabBars.length-1].style.display = 'block';
		}else{
			tabBar.style.position = 'static';
			tabBars[tabBars.length-1].style.display = 'none';
		};
	};
	
//	//点击购物车弹出层sku出现
//	addListener(fixAddCart, 'click', fixAddCartShow);
//	
//	var fixClose = document.getElementById('fixClose');
//	addListener(fixClose, 'click', fixSkuHide);

	//点击选项卡切换内容
	for(i = 0, j = tabBars.length-2; i < j; i++){
		(function(arg){
			addListener(tabBars[arg], 'click', function(){
				tabHandler(arg, this)
			});
		})(i);
	};
	////兴趣轮播图
	//var IwrapCon = document.getElementById('IwrapCon'),
	//	interestCon = document.getElementById('interestCon'),
	//	pageAction = document.getElementById('pageAction'),
	//	pageWidth = IwrapCon.getElementsByTagName('div')[0].offsetWidth,
	//	IpagesLength = getByClass('IwrapCon', 'interest-wrap').length - 1,
	//	pageIdx = 0,
	//	IActionBtns = document.getElementById('IAction').getElementsByTagName('span'),
	//	Ipages = pageAction.getElementsByTagName('dd'),
	//	IpagesBtns = pageAction.getElementsByTagName('dt'),
	//	Atimer = null;
	//
	//addListener(IActionBtns[0], 'click', function(){
	//	slideHandler(-1);
	//});
	//addListener(IActionBtns[1], 'click', function(){
	//	slideHandler(1);
	//});
	//addListener(IpagesBtns[0], 'click', function(){
	//	slideHandler(-1);
	//});
	//addListener(IpagesBtns[1], 'click', function(){
	//	slideHandler(1);
	//});
	//for(var m = 0, n = Ipages.length; m < n; m++){
	//	(function(arg){
	//		addListener(Ipages[arg], 'click', function(){
	//			pageIdx = arg;
	//			pagesControler();
	//		});
	//	}(m));
	//};
	//Atimer = setInterval(function(){
	//	slideHandler(1);
	//}, 4000);
	//interestCon.onmouseover = function (){
	//	clearInterval(Atimer);
	//};
	//interestCon.onmouseout = function(){
	//	Atimer = setInterval(function(){
	//		slideHandler(1);
	//	}, 4000);
	//}
	////还浏览过轮播图
	//var browseWrap = document.getElementById('browseWrap'),
	//	userBrowseCon = document.getElementById('userBrowseCon'),
	//	browsePages = document.getElementById('browsePages'),
	//	browseBtns = document.getElementById('browseAction').getElementsByTagName('span'),
	//	BpageIdx = 0,
	//	BpageWidth = browseWrap.getElementsByTagName('div')[0].offsetWidth,
	//	BpageLength = getByClass('browseWrap', 'user-browse-other-wrap').length - 1,
	//	Btimer = null;
	//
	//addListener(browseBtns[0], 'click', function(){
	//	BslideHandler(-1);
	//});
	//addListener(browseBtns[1], 'click', function(){
	//	BslideHandler(1);
	//});
	//Btimer = setInterval(function(){
	//	BslideHandler(1);
	//}, 4000);
	//userBrowseCon.onmouseover = function(){
	//	clearInterval(Btimer);
	//};
	//userBrowseCon.onmouseout = function(){
	//	Btimer = setInterval(function(){
	//		BslideHandler(1);
	//	}, 4000);
	//}
	
	/*
	 * skuStart
	 * skuStart
	 */
	var skuSizeKey = document.getElementById('skuSizeKey').value;
	skuSizeKey = stringToJson(skuSizeKey);
	if(document.getElementById('skuColorKey') && document.getElementById('skuColorKey').value != ''){
		skuColorKey = document.getElementById('skuColorKey').value;
		skuColorKey = stringToJson(skuColorKey);
	}
	
	var $J_skuSize = $("#J_skuSize"),
		$J_skuColor = $("#J_skuColor"),
		SIZE = {},
		COLOR = {},
		$J_currentPrice = $("#J_currentPrice");
		
	
	$J_skuSize.delegate('.item-sku-size-item', 'click', chooseSize);
	if($J_skuColor.length){
		$J_skuColor.delegate('.J_skuColor', 'click', chooseColor);
	}
	
	/*
	 * skuEnd
	 * skuEnd
	 */
	
	
	
	//商品数量加减
	var itemValue = document.getElementById('itemValue'),
		inputValue = itemValue.getElementsByTagName('input')[0];
	
	addListener(itemValue, 'click', itemValueHandler);
	
	
	//addCart
	var $J_addCart = $("#J_addCart");
	
	$J_addCart.bind('click', addCart);
	
	
	/*
	 * function
	 * function
	 * function
	 */
	
	function addCart() {
		var flag = true;
		if($J_skuColor.length){
			//两一sku属性
			if(!$J_skuSize.find('.active').length){
				$("#J_sizeAlert").text('请选择尺码');
				flag = false;
			}
			if(!$J_skuColor.find('.item-sku-color-item-selected').length){
				$("#J_colorAlert").text('请选择颜色');
				flag = false;
			}
		}else{
			//单一sku属性
			if(!$J_skuSize.find('.active').length){
				$("#J_sizeAlert").text('请选择尺码');
				flag = false;
			}
		};
		if(!flag){
			return;
		}
		var cartLink = '/shoppingCart/add?itemSkuId='+ SKUID + '&number=' + $(".item-sku-qtyValue").val();
		window.location.href = cartLink;
	};
	
	function checkSku() {
		var hasSize = $J_skuSize.find('.active'),
			hasColor  = $J_skuColor.find('.item-sku-color-item-selected'),
			sizeValue = hasSize.text();
			
		if(document.getElementById('skuColorKey')){
			var colorValue = hasColor.find('.J_skuColor').text();
			//此时有两个sku
			if(hasSize.length && hasColor.length){
				//此时选中了两个sku
				for (var i = 0, j = skuSizeKey.length; i < j; i++){
					if(skuSizeKey[i].key == sizeValue){
						for (var m = 0, n = skuSizeKey[i].skuList.length; m < n; m++){
							var obj = skuSizeKey[i].skuList[m];
							if(obj.skuCode == colorValue){
								$J_currentPrice.text(obj.price);
								SKUID = obj.id;
							};
						};
					};
				};
			}
		}else{
			//此时只有一个sku
			for (var i = 0, j = skuSizeKey.length; i < j; i++){
				if(skuSizeKey[i].key == sizeValue){
					$J_currentPrice.text(skuSizeKey[i].skuList[0].price);
					SKUID = skuSizeKey[i].skuList[0].id;
				};
			};
		};
	};
	
	function chooseSize() {
		var _this = $(this);
		if(_this.hasClass('disabled')){
			return;
		};
		if(_this.hasClass('active')){
			_this.removeClass('active');
			SIZE.name = '';
		}else{
			_this.siblings('li').removeClass('active');
			_this.addClass('active');
			SIZE.name = _this.text();
			$("#J_sizeAlert").text('');
		};
		var colorArray = [],
			$skuColorList = $J_skuColor.find('.J_skuColor');
		for (var i = 0, j = skuSizeKey.length; i < j; i++){
			var sizeObj = skuSizeKey[i];
			if(sizeObj.key == SIZE.name){
				for (var m = 0, n = sizeObj.skuList.length; m < n; m++){
					colorArray.push(sizeObj.skuList[m].skuCode);
				};
			};
		};
		if(colorArray[0]){
			for (var i = 0, j = $skuColorList.length; i < j; i++){
				var colorNode = $skuColorList[i],
					colorFlag = false;
				for (var m = 0, n = colorArray.length; m < n; m++){
					if(colorNode.innerHTML == colorArray[m]){
						colorFlag = true;
						break;
					};
				};
				if(!colorFlag){
					$(colorNode.parentNode).addClass('item-sku-color-item-disabled');
				}else{
					$(colorNode.parentNode).removeClass('item-sku-color-item-disabled');
				};
			};
		}else{
			$skuColorList.parent().removeClass('item-sku-color-item-disabled');
		}
		checkSku();
	};
	
	function chooseColor() {
		var _this = $(this),
			outer = _this.parent(); 
		if(outer.hasClass('item-sku-color-item-disabled')){
			return;
		};
		if(outer.hasClass('item-sku-color-item-selected')){
			outer.removeClass('item-sku-color-item-selected');
			COLOR.name = '';
			$("#J_colorAlert").text('')
		}else{
			outer.siblings('li').removeClass('item-sku-color-item-selected')
			outer.addClass('item-sku-color-item-selected');
			COLOR.name = _this.text();
			var imgUrl = outer[0].style.backgroundImage;
			if(imgUrl != ''){
				imgUrl = imgUrl.substring(4, imgUrl.lastIndexOf(')'));
				$(galleryMain).css({'opacity': 0});
				galleryMain.src = imgUrl;
				$(galleryMain).stop().animate({'opacity': 1}, 200);
			};
		};
		
		var sizeArray =[],
			$skuSizeList = $J_skuSize.find('.J_skuSize');
		for (var i = 0, j = skuColorKey.length; i < j; i++){
			var colorObj = skuColorKey[i];
			if(colorObj.key == COLOR.name){
				for (var m = 0, n = colorObj.skuList.length; m < n; m++){
					sizeArray.push(colorObj.skuList[m].skuCode);
				};
			};
		};
		if(sizeArray[0]){
			for (var i = 0, j = $skuSizeList.length; i < j; i++){
				var sizeNode = $skuSizeList[i],
					sizeFlag = false;
				for (var m = 0, n = sizeArray.length; m < n; m++){
					if(sizeNode.innerHTML == sizeArray[m]){
						sizeFlag = true;
						break;
					};
				};
				if(!sizeFlag){
					$(sizeNode).addClass('disabled');
				}else{
					$(sizeNode).removeClass('disabled');
				};
			};
		}else{
			$skuSizeList.removeClass('disabled');
		};
		checkSku();
	};
	
	function stringToJson(string) {
		if(string && string != ''){
			return parseJson(string);
		};
	};
	
	function parseJson(text){
	try{
		return JSON.parse(text);
	}catch(e){
		return eval('('+text+')');
	};
}
	
	function itemValueHandler(e) {
		e = e || window.event;
		obj = e.srcElement || e.target;
		if(obj.nodeName !== 'SPAN'){
			return;
		};
		if(obj.className === 'item-sku-qtyIncrease'){
			inputValue.value--;
			if(inputValue.value < 2){
				obj.className = 'item-sku-qtyIncrease disabled-minus';
			};
		}else if(obj.className === 'item-sku-qtyDecrease'){
			inputValue.value++;
			itemValue.getElementsByTagName('span')[0].className = 'item-sku-qtyIncrease';
		};
	};
	$(inputValue).bind('input', valueChangeHandler)
	
	function valueChangeHandler() {
		var val = this.value;
		if(val < 2){
			itemValue.getElementsByTagName('span')[0].className = 'item-sku-qtyIncrease disabled-minus';
		}else{
			itemValue.getElementsByTagName('span')[0].className = 'item-sku-qtyIncrease';
		}
		if(isNaN(val) || val < 1){
			this.value = 1;
			itemValue.getElementsByTagName('span')[0].className = 'item-sku-qtyIncrease disabled-minus';
		}
	}
	
//	function skuColorChoose(e) {
//		e = e || window.event;
//		obj = e.srcElement || e.target;
//		if(!$(obj).hasClass('J_skuColor')){
//			return;
//		}
//		var colors = skuColor.getElementsByTagName('li');
//		for(var i = 0, j = colors.length; i < j; i++){
//			if(colors[i].className == 'item-sku-color-item-disabled'){
//				continue;
//			};
//			colors[i].className = 'item-sku-color-item';
//		};
//		obj.parentNode.className = 'item-sku-color-item-selected';
//		if($(skuColor).hasClass('skuNoImg')){
//			return;
//		};
//		if(obj.parentNode.className === 'item-sku-color-item-selected'){
//			galleryMain.style.opacity = 0;
//			galleryMain.style.filter = 'alpha(opacity=0)';
//			var imgUrl = obj.parentNode.style.backgroundImage;
//			var imgUrlLength = imgUrl.lastIndexOf(')');
//			imgUrl = imgUrl.substr(4,imgUrlLength-4);
//			galleryMain.src = imgUrl;
//			move(galleryMain, {'opacity': 100}, 10);
//		};
//	};
	
	function BslideHandler(val){
		BpageIdx += val;
		if(BpageIdx < 0){
			BpageIdx = BpageLength;
		}else if(BpageIdx > BpageLength){
			BpageIdx = 0;
		};
		var movePosition = - BpageWidth * BpageIdx;
		browsePages.innerHTML = '第'+ (BpageIdx + 1) +'页，共'+ (BpageLength + 1) +'页';
		move(browseWrap, {'marginLeft': movePosition}, 10);
	};
	
	function slideHandler(val){
		pageIdx += val;
		if(pageIdx < 0){
			pageIdx = IpagesLength;
		}else if(pageIdx > IpagesLength){
			pageIdx = 0;
		}
		pagesControler();
	};
	
	function pagesControler() {
		var movePosition = - pageWidth * pageIdx;
		move(IwrapCon, {'marginLeft': movePosition}, 10);
		for(var i = 0, j = Ipages.length; i < j; i++){
			Ipages[i].className = 'detail-interest-page';
		};
		Ipages[pageIdx].className = 'detail-interest-page active';
	};
	
	
	function galleryHandler() {
		var This = this;
		if(this.src == galleryMain.src){
			return;
		};
		galleryTimer = setTimeout(function(){
			galleryMain.style.opacity = 0;
			galleryMain.style.filter = 'alpha(opacity=0)';
			galleryMain.src = This.src;
			for(var m = 0, n = galleryTabcons.length; m < n; m++) {
				galleryTabcons[m].className = 'detail-gallery-item';
			}
			This.parentNode.className += ' active';
			move(galleryMain, {'opacity': 100}, 10);
		},100);
	};
	
	function clearGallery() {
		clearTimeout(galleryTimer);
		galleryTimer = null;
	};
	
	function tabHandler(arg, that) {
		if(tabCons[arg].style.display === 'block'){
			return;
		}
		//点击时回到选项卡位置
		if(scrollTop()>tabBarTop){
			//在选项卡下方，则回到选项卡位置
			scroll(tabBarTop);
		}
		for (var i = 0, j = tabCons.length; i < j; i++){
			tabBars[i].className = 'detail-tab';
			tabCons[i].style.display = 'none';
			tabCons[arg].style.display = 'block';
			tabBars[arg].className += ' active';
		};
	};
	
	function scroll (target){
		clearInterval(scrollTimer);
		scrollTimer = setInterval(function(){
			var cur = scrollTop(),
				speed = (target - cur) / 6;
			speed = speed < 0? Math.floor(speed):Math.ceil(speed);
			document.documentElement.scrollTop = document.body.scrollTop = cur + speed;
			if(cur == target){
				clearInterval(scrollTimer);
			};
		},10);
	};
	
	function fixAddCartShow(){
		var mark = document.createElement('div'),
			fixSku = document.getElementById('fixSku');
		fixSku.className = 'fix-sku-border-animation';
		fixSku.style.cssText = '';
		mark.className = 'mark';
		mark.id = 'fixMark';
		document.body.appendChild(mark);
		var	fixSkuLeft = (viewWidth() - fixSku.offsetWidth)/2,
			fixSkuTop = (viewHeight() - fixSku.offsetHeight)/2;
		fixSku.style.left = fixSkuLeft + 'px';
		fixSku.style.top = fixSkuTop + 'px';
	};
	
	function fixSkuHide(){
		var fixSku = document.getElementById('fixSku'),
			mark = document.getElementById('fixMark');
		document.body.removeChild(mark);
		fixSku.className = 'fix-sku-border-close';
	};
});
})();
