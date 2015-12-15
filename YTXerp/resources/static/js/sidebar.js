function sidebar(){
	var sidebar = document.getElementById('sidebar'),
		titles = sidebar.getElementsByTagName('h3');
		
	for(var i=0, j= titles.length; i < j; i++){
		addListener(titles[i], 'click', showMenu);
	};
	
	function showMenu() {
		var menuList = this.parentNode.getElementsByTagName('ul')[0],
			menuItem = menuList.getElementsByTagName('li'),
			menuHeight = menuItem.length * menuItem[0].offsetHeight;
			
		if(menuList.style.height == 0 || menuList.style.height == '0px'){
			move(menuList,{height:menuHeight});
			this.style.background = 'url(../static/images/icon_1.png) 177px center no-repeat';
		}else{
			move(menuList,{height:0});
			this.style.background = 'url(../static/images/icon_2.png) 177px center no-repeat';
		};
	};
	
	function move(obj, json, fn){
		clearInterval(obj.iTimer);
		var iSpeed = 0;
		var iCur = 0;
		var flag = new Boolean;
		
		obj.iTimer = setInterval(function(){
			flag = true;
			for (attr in json){
				if(attr === 'opacity'){
					iCur = Math.round(css(obj, attr) * 100)
				}else{
					iCur = parseInt(css(obj, attr));
				};
				iSpeed = (json[attr] - iCur) / 6;
				iSpeed = iSpeed < 0?Math.floor(iSpeed):Math.ceil(iSpeed);
				
				if(iCur != json[attr]){
					flag = false;
					if(attr === 'opacity'){
						obj.style.opacity = (iCur + iSpeed) / 100;
						obj.style.filter = 'alpha(opacity=' + (iCur + iSpeed) + ')';
					}else{
						obj.style[attr] = iCur + iSpeed + 'px';
					};
				};
			};
			if(flag){
				clearInterval(obj.iTimer);
				obj.iTimer = null
				fn && fn.call(obj);
			};
		},30);
	};
	
	function css(obj, attr){
		return obj.currentStyle?obj.currentStyle[attr]:getComputedStyle(obj)[attr];
	};
}
