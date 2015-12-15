;(function(){
$(document).ready(function(){
	/*-----------------init-------------------*/
	var $J_container = $("#J_container");
	
	/*-----------------Listener-------------------*/
	$J_container.delegate('.J_title', 'touchstart', slider);
	/*-----------------Function-------------------*/
	function slider() {
		var parent = $(this).parent();
		if(parent.hasClass('slideUp')){
			parent.removeClass('slideUp');
			parent.find('.J_flex').stop().slideDown(300);
			parent.find('.J_arrow').show();
		}else{
			parent.addClass('slideUp');
			parent.find('.J_flex').stop().slideUp(300, function(){
				parent.find('.J_arrow').hide();
			});
		};
	};
});
}());
