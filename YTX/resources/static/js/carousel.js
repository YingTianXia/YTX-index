;(function(){
	var NUM;
	function Carousel(opts) {
		/*
		 * 可配置参数
		 * 外层容器 dom
		 * 幻灯片高度 viewH
		 * 幻灯片宽度 viewW
		 * 是否全屏展示 fullScreen
		 * 自动轮播间隔时间 autoTimer
		 */
		this.fullScreen = opts.fullScreen;
		this.wrapper = opts.dom
		this.outer = this.wrapper.getElementsByTagName('div')[0];
		this.tabs = this.wrapper.getElementsByTagName('div')[1];
		//手动设置宽度
		this.viewWidth = opts.viewW || this.outer.offsetWidth;
		//手动设置高度
		this.viewHeight = opts.viewH;
		this.main = this.outer.getElementsByTagName('ul')[0];
		this.sections = this.main.getElementsByTagName('li');
		this.length = this.sections.length;
		this.prev = this.outer.getElementsByTagName('span')[0];
		this.next = this.outer.getElementsByTagName('span')[1];
		this.idx = 0;
		this.carouselTimer = null;
		this.autoTimer = opts.autoTimer || null;
		
		this.init();
		this.bindDom();
		
	}
	Carousel.prototype.init = function() {
		var This = this,
			imageTest = this.sections[this.idx].getElementsByTagName('img')[0];
		if(this.fullScreen){
			this.viewWidth = this.outer.offsetWidth;
		}
		//判断图片是否已成功加载并设置轮播图高度
		setTimeout(function(){
			if (imageTest.complete){
				This.main.style.height = This.viewHeight?This.viewHeight + 'px': imageTest.offsetHeight + 'px';
			}else{
				imageTest.onload = function() {
					This.main.style.height = This.viewHeight?This.viewHeight + 'px': imageTest.offsetHeight + 'px';
					imageTest = null;
				};
			};
		},4);
		
		this.main.style.width = 3 * this.viewWidth + 'px';
		//隐藏多余的section
		//重置多余的tabs
		this.tabs.innerHTML = '';
		for (var i = 0, j = this.sections.length; i < j; i++){
			var span = document.createElement('span');
			span.className = 'carousel-tabsBtn';
			this.tabs.appendChild(span);
			this.sections[i].style.width = this.viewWidth + 'px';
			if (i > 0) {
				this.sections[i].style.display = 'none';
			};
		};
		this.main.style.left = -this.viewWidth + 'px';
		this.sections[This.idx].style.left = this.viewWidth + 'px';
		this.sections[This.idx].style.display = 'block';
		this.tabs.getElementsByTagName('span')[this.idx].className = 'carousel-tabsBtn carousel-tabsBtn-on';
	};
	
	Carousel.prototype.bindDom = function(){
		var This = this,
			tabBtns = this.tabs.getElementsByTagName('span'),
			tabTimer = null,
			viewWidth = this.viewWidth,
			sections = this.sections;
		this.prev.onclick = function(){
			animation('prev');
		}
		this.next.onclick = function(){
			animation('next');
		}
		this.tabs.onmouseover = function(e){
			var tabIndex;
			e = e || window.event;
			ele = e.srcElement || e.target;
			if(ele.tagName !== 'SPAN'){
				return;
			};
			tabTimer = setTimeout(function(){
				for (m = 0, n = This.length; m < n; m++) {
					if(tabBtns[m] === ele){
						tabIndex = m;
						break;
					};
				};
				animation(tabIndex);
			},100);
			This.tabs.onmouseout = function(){
				clearTimeout(tabTimer);
				tabTimer = null;
			};
		};
		
		if(this.autoTimer === null){
			return;
		};
		this.carouselTimer = setInterval(function(){
			This.next.onclick();
		}, This.autoTimer);
		
		this.wrapper.onmouseover = function(){
			clearInterval(This.carouselTimer);
		};
		this.wrapper.onmouseout = function(){
			This.carouselTimer = setInterval(function(){
				This.next.onclick();
			}, This.autoTimer);
		};
		
		function animation(dir) {
			switch(dir) {
				case 'prev':
					NUM = -1;
					operation();
					move(This.main, {left: 0})
					This.idx--;
					if(This.idx < 0){
						This.idx = This.length - 1;
					};
					tabsControler();
					break;
				case 'next':
					NUM = 1;
					operation();
					move(This.main, {left: - 2 * viewWidth});
					This.idx++;
					if(This.idx > This.length-1){
						This.idx = 0;
					};
					tabsControler();
					break;
				default:
					NUM = dir;
					if(NUM === This.idx){
						break;
					}
					if(NUM > This.idx){
						//往下翻页
						reset();
						sections[NUM].style.display = 'block';
						sections[NUM].style.left = 2 * viewWidth + 'px';
						move(This.main, {left: - 2 * viewWidth});
					}else{
						//往上翻页
						reset();
						sections[NUM].style.display = 'block';
						sections[NUM].style.left = 0;
						move(This.main, {left: 0});
					}
					This.idx = NUM;
					tabsControler();
			};
		};
		
		function operation() {
			reset();
			if(This.idx+NUM < 0){
				sections[This.length+NUM].style.display = 'block';
				sections[This.length+NUM].style.left = 0;
			}else if(This.idx + NUM > This.length-1){
				sections[0].style.display = 'block';
				sections[0].style.left = 2 * viewWidth + 'px';
			}else{
				sections[This.idx+NUM].style.display = 'block';
				sections[This.idx+NUM].style.left = (1 + NUM) * viewWidth + 'px';
			};
		};
		
		function reset() {
			This.main.style.left = -viewWidth + 'px';
			for(var i = 0, j = This.length; i < j; i++){
				sections[i].style.display = 'none';
			}
			sections[This.idx].style.display = 'block';
			sections[This.idx].style.left = viewWidth + 'px';
		}
		
		function tabsControler() {
			for(var m = 0, n = This.length; m < n; m++) {
				tabBtns[m].className = 'carousel-tabsBtn';
			};
			tabBtns[This.idx].className += ' carousel-tabsBtn-on'; 
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
				iSpeed = (json[attr] - iCur) / 20;
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
				obj.iTimer = null;
				fn && fn.call(obj);
			};
		},5);
	};
	
	function css(obj, attr){
		return obj.currentStyle?obj.currentStyle[attr]:getComputedStyle(obj)[attr];
	};
	window.Carousel = Carousel;
}());
