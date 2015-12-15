;(function(){
	$(document).ready(function(){
		var $fixBar = $("#fixBar"),
			$J_myCenter = $("#J_myCenter"),
			$J_scrollTop = $("#J_scrollTop"),
			$J_myCart = $("#J_myCart"),
			windouHeight = $(window).height();
			
		$J_scrollTop.hide();
		scrollTopDisplay();
		rightBarDisplay();
		
		$fixBar.bind('mouseleave', rightBarOut);
		//scrollTop
		$J_scrollTop.bind('click', scrollTopHandler);
		//scrollTop display
		$(window).bind('scroll', scrollTopDisplay);
		//rightBar display
		$(window).bind('resize', rightBarDisplay);
		//rightBar myCenter
		$J_myCenter.bind('mouseenter', myCenterIn);
		$J_myCenter.bind('mouseleave', myCenterOut);
		//rightBar show
		$J_myCart.bind('mouseenter', rightBarIn);
		
		function myCenterIn() {
			var obj = $(this).find('.rightBar-myCenter-desc');
			obj.css({display: "block"}).animate({opacity: "1", right: "35"});
		};
		
		function myCenterOut() {
			var obj = $(this).find('.rightBar-myCenter-desc');
			obj.animate({opacity: "0", right: "80"}, function(){
				$(this).css({display: "none"});
			});
		};
		
		function scrollTopHandler() {
			$("html,body").animate({scrollTop:0});
		}
		
		function scrollTopDisplay() {
			var scrollTop = $(document).scrollTop();
			if(scrollTop > windouHeight){
				$J_scrollTop.fadeIn(300);
			}else{
				$J_scrollTop.fadeOut(300);
			};
		};
		
		function rightBarIn() {
			if(parseInt($fixBar.css('right')) === 0){
				return;
			}
			$(this).stop().animate({left: 0}, 200);
			$fixBar.stop().animate({right: 0}, 200);
			$J_scrollTop.stop().animate({left:0}, 200);
		}
		
		function rightBarOut() {
			var windowWidth =  $(window).width();
			if(windowWidth < 1280){
				$J_myCart.stop().animate({left: -35}, 200);
				$(this).stop().animate({right: -35}, 200);
				$J_scrollTop.stop().animate({left:-35}, 200);
			}
		}
		
		function rightBarDisplay() {
			var windowWidth =  $(window).width();
			if(windowWidth < 1280){
				$fixBar.stop().animate({right:-35}, 200);
				$J_myCart.stop().animate({left:-35}, 200);
				$J_scrollTop.stop().animate({left:-35}, 200);
				$J_myCart.find('.rightBar-mycart-border').hide();
				scrollTopDisplay();
				return;
			}
			$fixBar.stop().animate({right:0}, 200);
			$J_myCart.stop().animate({left:0}, 200);
			$J_scrollTop.stop().animate({left:0}, 200);
			$J_myCart.find('.rightBar-mycart-border').show();
			scrollTopDisplay();
		};	
	});
}());
