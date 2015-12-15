function myReady(e){function t(e){var t=window.document,n=!1,o=function(){n||(n=!0,e())};!function(){try{t.documentElement.doScroll("left")}catch(e){return void setTimeout(arguments.callee,50)}o()}(),t.onreadystatechange=function(){"complete"==t.readyState&&(t.onreadystatechange=null,o())}}document.addEventListener?document.addEventListener("DOMContentLoaded",e,!1):t(e)}
function addListener(target, type, fn){
	if(document.addEventListener){
		target.addEventListener(type, fn, false);
	}else if(document.attachEvent){
		target.attachEvent('on' + type, function(e){
			fn.call(target, arguments)
		})
	}else{
		target['on'+type] = fn;
	}
};
