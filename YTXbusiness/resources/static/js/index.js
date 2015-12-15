;(function(){
	function index() {
		var inBtn = document.getElementById('inBtn'),
			loginCon = document.getElementById('loginCon'),
			registerCon = document.getElementById('registerCon'),
			mark = document.getElementById('mark'),
			registerBtn =document.getElementById('registerBtn'),
			closeLogin = document.getElementById('closeLogin'),
			closeRegister = document.getElementById('closeRegister');
			
		addListener(inBtn, 'click', loginShow);
		addListener(registerBtn, 'click', registerShow);
		addListener(closeRegister, 'click', registerHide);
		addListener(closeLogin, 'click', loginHide);
		
		function loginShow() {
			mark.style.display = 'block';
			loginCon.style.display = 'block';
		};
		
		function registerShow() {
			loginCon.style.display = 'none';
			registerCon.style.display = 'block';
		}
		
		function registerHide() {
			mark.style.display = 'none';
			registerCon.style.display = 'none';
		}
		
		function loginHide() {
			mark.style.display = 'none';
			loginCon.style.display = 'none';
		}
	};
	window.index = index;
})();
