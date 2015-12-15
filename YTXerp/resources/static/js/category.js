;(function(){
$(document).ready(function(){
	var $typechoose = $("#typechoose"),
		$typeStatus = $("#typeStatus"),
		$J_submit = $("#J_submit");
	
	/**
	 * Listener
	 * Listener
	 */
	$typechoose.delegate('.category-type-title', 'click', chooseType);
	$typechoose.delegate('.category-type-item', 'click', chooseAttr);
	$J_submit.bind('click', submitHandler);
	
	/**
	 * function
	 * function
	 */
	
	function submitHandler() {
		var itemid = $typechoose.find('.category-step:last').find('.category-type-activeitem').attr('data-itemid');
		var typestring = '';
		$typechoose.find('.category-type-activeitem').each(function(i, e){
			if(i == $typechoose.find('.category-type-activeitem').size()){
				typestring += $(e).text();
			}else{
				typestring += $(e).text() + '&gt;'
			}
		});
		$typechoose.append('<form><input type="hidden" name="name" value="'+ typestring +'"/><input type="hidden" name="pid" value="'+ itemid +'"/><input type="submit" id="submitBtn"/></form>');
		$("#submitBtn").click();
	}
	
	function chooseType() {
		var _this = $(this),
			sibilingDd = _this.siblings('dd');
		if(sibilingDd.css('display') === 'block'){
			sibilingDd.hide();
			this.style.background = 'url(../../static/images/arrow_2.png) 184px center no-repeat';
		}else{
			sibilingDd.show();
			this.style.background = 'url(../../static/images/arrow_1.png) 184px center no-repeat'
		};
	};
	
	
	function chooseAttr() {
		var _this = $(this),
			_thisId = _this.attr('data-itemid'),
			outer = _this.parents('.category-step'),
			type = outer.find('.category-type-activeitem');
		type.removeClass('category-type-activeitem');
		_this.addClass('category-type-activeitem');
		
		$.ajax({
			type:"post",
			url:"",
			async:true,
			contentType: "application/json; charset=utf-8",
			data: JSON.stringify({"typeId": _thisId}),
			success: function(data) {
				var flag = false;
				for(prop in data){
					flag = true;
					break;
				}
				if(flag){
					var dataIn = '<div class="category-step"><ul class="category-type">';
					$.each(data, function(i, e){
						dataIn += '<p class="category-type-item" data-itemid='+ e +'>'+ i +'</p>'
					});
					dataIn += '</ul></div>';
					
					while(outer.next().length){
						outer.next().remove();
					}
					$typechoose.append(dataIn);
					
				}
				var breadLinks = $typechoose.find('.category-type-activeitem'),
					dataStatus = '<span class="category-curStatus-static">您当前的选择是:</span>'
				breadLinks.each(function(i, e){
					if(i == breadLinks.size()-1){
						dataStatus += '<span class="category-curStatus-static">' + $(e).text() + '</span>';
					}else{
						dataStatus += '<span class="category-curStatus-static">' + $(e).text() + '</span><span>&gt;</span>';
					};
				});
				$typeStatus.empty();
				$typeStatus.append(dataStatus);
			}
		});
	};
	
});
}());
