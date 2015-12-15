(function(){
$(document).ready(function(){
	var tbodys = $(".orderList-tbody");
	tbodys.each(function(i,e){
		var length = $(e).find('.orderList-tr').size() - 1;
		$(e).find('.orderList-tr').eq(1).find('.orderList-td')[3].rowSpan = length;
		$(e).find('.orderList-tr').eq(1).find('.orderList-td')[4].rowSpan = length;
	});
});
}());
