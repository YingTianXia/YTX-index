function myReady(e){function t(e){var t=window.document,n=!1,o=function(){n||(n=!0,e())};!function(){try{t.documentElement.doScroll("left")}catch(e){return void setTimeout(arguments.callee,50)}o()}(),t.onreadystatechange=function(){"complete"==t.readyState&&(t.onreadystatechange=null,o())}}document.addEventListener?document.addEventListener("DOMContentLoaded",e,!1):t(e)}
function addListener(target, type, fn){
	if(document.addEventListener){
		target.addEventListener(type, fn, false);
	}else if(document.attachEvent){
		target.attachEvent('on' + type, function(e){
			fn.call(target, e)
		})
	}else{
		target['on'+type] = fn;
	}
};

function move(obj, json, speed, fn){
	clearInterval(obj.iTimer);
	var iSpeed = 0;
	var iCur = 0;
	obj.flag = new Boolean;
	
	obj.iTimer = setInterval(function(){
		obj.flag = true;
		for (attr in json){
			if(attr === 'opacity'){
				iCur = Math.round(css(obj, attr) * 100);
			}else{
				iCur = parseInt(css(obj, attr));
			};
			iSpeed = (json[attr] - iCur) / speed;
			iSpeed = iSpeed < 0?Math.floor(iSpeed):Math.ceil(iSpeed);
			
			if(iCur != json[attr]){
				obj.flag = false;
				if(attr === 'opacity'){
					obj.style.opacity = (iCur + iSpeed) / 100;
					obj.style.filter = 'alpha(opacity=' + (iCur + iSpeed/100) + ')';
				}else{
					obj.style[attr] = iCur + iSpeed + 'px';
				};
			};
		};
		if(obj.flag){
			clearInterval(obj.iTimer);
			obj.iTimer = null
			fn && fn.call(obj);
		};
	},10);
};

function parseJson(text){
	try{
		return JSON.parse(text);
	}catch(e){
		return eval('('+text+')');
	};
}

function css(obj, attr){
	return obj.currentStyle?obj.currentStyle[attr]:getComputedStyle(obj)[attr];
};

function getByClass(id, className){
	var oparent = id? document.getElementById(id) : document,
		elements = [],
		objs = oparent.getElementsByTagName('*');
	for(var i = 0,j = objs.length; i < j;i++){
		if(objs[i].className == className){
			elements.push(objs[i]);
		};
	};
	return elements;
};

function getByClassDom(dom, className){
	var oparent = dom? dom: document,
		elements = [],
		objs = oparent.getElementsByTagName('*');
	for(var i = 0,j = objs.length; i < j;i++){
		if(objs[i].className == className){
			elements.push(objs[i]);
		};
	};
	return elements;
};

function viewWidth() {
	return document.documentElement.clientWidth || document.body.clientWidth;
};

function viewHeight() {
	return document.documentElement.clientHeight || document.body.clientHeight;
};

function scrollTop(){
	return document.documentElement.scrollTop || document.body.scrollTop;
};