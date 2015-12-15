;(function(){
	function formcheck(){
		var userName = document.getElementById('userName'),
			userTel = document.getElementById('userTel'),
			userEmail = document.getElementById('userEmail'),
			agreementBtn = document.getElementById('agreementBtn'),
			checkFlag = false;
			
		addListener(userName, 'blur', nameCheck);
		addListener(userTel, 'blur', telCheck);
		addListener(userEmail, 'blur', emailCheck);
		addListener(agreementBtn, 'click', checkNext);
		
		function nameCheck() {
			var value = this.value,
				regExp = /^[A-Za-z\u4e00-\u9fa5]+$/,
				obj = this.parentNode.getElementsByTagName('p')[0];
			if(value == ''){
				obj.innerHTML = '姓名不能为空！';
				checkFlag = false;
				return;
			}
			if(!regExp.test(value)){
				obj.innerHTML = '请输入正确的姓名！';
				checkFlag = false;
				return;
			}else{
				obj.innerHTML = '';
				checkFlag = true;
			};
		};
		
		function telCheck() {
			var value = this.value,
				regExp = /0?(13|14|15|18)[0-9]{9}/,
				obj = this.parentNode.getElementsByTagName('p')[0];
			if(value == ''){
				obj.innerHTML = '手机号不能为空！';
				checkFlag = false;
				return;
			}
			if(!regExp.test(value)){
				obj.innerHTML = '请输入正确的手机号码！';
				checkFlag = false;
				return;
			}else{
				obj.innerHTML = '';
				checkFlag = true;
			};
		};
		
		function emailCheck() {
			var value = this.value,
				regExp = /\w+((-w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+/,
				obj = this.parentNode.getElementsByTagName('p')[0];
			if(value == ''){
				obj.innerHTML = '邮箱地址不能为空！';
				checkFlag = false;
				return;
			}
			if(!regExp.test(value)){
				obj.innerHTML = '请输入正确的邮箱地址！';
				checkFlag = false;
				return;
			}else{
				obj.innerHTML = '';
				checkFlag = true;
			};
		};
		
		function checkNext() {
			nameCheck.call(userName);
			if(!checkFlag){
				return;
			}
			telCheck.call(userTel);
			if(!checkFlag){
				return;
			}
			emailCheck.call(userEmail);
			if(checkFlag){
				//提交表单
				
			}
		};
	};
	window.formcheck = formcheck;
}());
