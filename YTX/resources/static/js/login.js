var login = {
	init: function() {
		var _this = this;
		$(document).delegate('.J_popClose', 'click', function(){
			_this.popHide();
		});
		$(window).bind('resize', _this.resize);
	},
	popHide: function(el) {
		var _el = el || '.J_pop';
		$(_el).remove();
		$("#J_popMask").remove();
	},
	popShow: function() {
		if($("#J_login").length){
			return;
		};
		var outer = document.createElement("div");
		outer.id = 'J_login';
		outer.className = 'J_pop';
		outer.innerHTML = '<div class="login-content clearfix"><div class="login-code-content" id="login_container"></div><div class="login-popClose J_popClose"></div></div>'
		document.body.appendChild(outer);
		var windowWidth = $(window).width(),
			windowHeight = $(window).height(),
			popWidth = $(outer).innerWidth(),
			popHeight = $(outer).innerHeight();
		outer.style.width = $(outer).width() + 'px';
		outer.style.height = $(outer).height() + 'px';
		outer.style.left = (windowWidth - popWidth)/2 + 'px';
		outer.style.top = (windowHeight - popHeight)/2 + 'px';
		$(outer).fadeIn(100);
		if($("#J_popMask").length){
			$("#J_popMask").show();
		}else{
			$('body').append('<div class="popMask" id="J_popMask"></div>');
			$("#J_popMask").show();
		};
		var weChatObj = new WxLogin({
			id:"login_container",
			appid: "wx6dee0381d1c35685",
			redirect_uri: "http%3a%2f%2fwww.ytx.com%2flogin%2fcallback",
			scope: "snsapi_login",
			state: "123",
			style: "",
			href: ""
		});
	},
	resize: function() {
		if(!$("#J_login").length){
			return;
		};
		var windowWidth = $(window).width(),
			windowHeight = $(window).height(),
			popWidth = $("#J_login").innerWidth(),
			popHeight = $("#J_login").innerHeight();
		$("#J_login").css({left: (windowWidth - popWidth)/2, top: (windowHeight - popHeight)/2});
	}
};
