;(function(){
$(document).ready(function(){
	tableAlign();
	
	var $tabs = $("#floatBar").find(".tab");
	
	$tabs.on('click', tabselect);
	
	function tabselect() {
		$tabs.removeClass('active');
		$(this).addClass('active');
		var orderStatus = $(this).attr('data-orderStatus');
		orderStatus = 'link'+ orderStatus + '/1';
		window.location.href = orderStatus;
	}
	
	var $pagecontent = $("#pagecontent"),
		total = parseInt($pagecontent.attr('data-total')),
		pageSize = parseInt($pagecontent.attr('data-pagesize')),
		J_orderStatus = $pagecontent.attr('data-orderStatus');
	var pageControl = new PageControler({
		"totalItems": 2631,
		"pageItems": pageSize,
		"pageUrl": 'link' + J_orderStatus + '/'
	});
	window.pageControl = pageControl;
});

function tableAlign() {
	var orderTable = document.getElementById('orderTable'),
		orders = getByClassDom(orderTable, 'body clearfix');
	
	for(var i = 0, j = orders.length; i < j; i++){
		var height = orders[i].offsetHeight;
		orders[i].style.height = height + 'px';
	};
};
}());

