;(function(){
$(document).ready(function(){
	var weChatObj = new WxLogin({
		id:"login_container",
		appid: "wx6dee0381d1c35685",
		redirect_uri: "http%3a%2f%2fwww.ytx.com%2flogin%2fcallback",
		scope: "snsapi_login",
		state: "123",
		style: "",
		href: "https://ytx-g0.oss-cn-hangzhou.aliyuncs.com/weChat.css"
	});
	
	var $J_loginTab = $("#J_loginTab"),
		$J_tabCon = $("#J_tabCon").find('.loginMain-content'),
		$J_login = $("#J_login"),
		$J_alert = $("#J_alert");
	
	$J_loginTab.delegate('.loginMain-tab', 'click', loginTab);
	$J_login.bind('click', login);
	
	function loginTab() {
		if($(this).hasClass('active')){
			return;
		};
		$(this).siblings().removeClass('active');
		$(this).addClass('active');
		var n = $(this).index();
		$J_tabCon.hide();
		$J_tabCon.eq(n).show();
	};
	
	function login() {
		var userName = $("#userName").val();
		var passWord = $("#passWord").val();
		var redirect = $("#redirect").val();
		var _data={
			userName:userName,
			passWord:passWord,
			redirect:redirect
		};
		$.ajax({
			type:"post",
			url:"/login/email",
			data: JSON.stringify(_data),
		    dataType: "json",
		    contentType: "application/json; charset=utf-8",
		    success: function(data){
				//判断data里面有redirect就跳转 没有就首页
				//info 如果是success才能装转
				if(data.info)
				{
					$alert.html(data.info);
				}else
				{
	
					if(data.redirect!="")
					{
						window.location.href=data.redirect;
					}else
					{
						window.location.href="http://ytx.com";
					}
				}
		    }
		});
	}
});
}());
