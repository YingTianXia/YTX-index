;(function(){
function PageControler(opts) {
	console.log(opts)
	var _this = this;
	this.totalItems = parseInt(opts.totalItems);
	this.pageItems = parseInt(opts.pageItems);
	this.pages = Math.ceil(this.totalItems / this.pageItems);
	this.prev = $("#prevPage");
	this.next = $("#nextPage");
	this.orderStatus = opts.pageUrl;
	
	var $pageTotal = $("#pageTotal"),
		$pageSkipTo = $("#pageSkipTo"),
		$pageBtn = $("#pageBtn"),
		jumpPages = this.pages,
		$pagecontent = $("#pagecontent"),
		currentPage = $pagecontent.attr('data-pagenumber');
		
	$pageBtn.bind('click', pageJump);	
	this.prev.bind('click', prevPage);
	this.next.bind('click', nextPage);
	
	$pageTotal.text(this.pages);
	this.init(currentPage, this.orderStatus);
	
	
	function prevPage() {
		if($(this).hasClass('disabled')){
			return;
		};
		currentPage--;
		_this.jumpPage(currentPage, _this.orderStatus);
	};
	
	function nextPage() {
		if($(this).hasClass('disabled')){
			return;
		};
		currentPage++;
		_this.jumpPage(currentPage, _this.orderStatus);
	};
	
	function pageJump() {
		var pageIndex = parseInt($pageSkipTo.val()),
			regExp = /^[1-9]\d*$/;
		if(pageIndex == ''){
			return;
		};
		if(!regExp.test(pageIndex)){
			$pageSkipTo.val('');
			return;
		};
		pageIndex = pageIndex > jumpPages? jumpPages : pageIndex;
		_this.jumpPage(pageIndex, _this.orderStatus);
		$pageSkipTo.val('');
	};
}
PageControler.prototype.jumpPage = function(curPage, pageURL){
	window.location.href = pageURL + curPage;
};

PageControler.prototype.init = function(curPage, pageURL) {
	curPage *=1;
	var $pagecontent = $("#pagecontent");
	var totalPages = this.pages;
	//输出页码列表
	$pagecontent.empty();
	if(curPage <= 3){
		if(curPage + 3 < totalPages){
			for (var i = 1; i <= curPage + 2; i++){
				if(i == curPage){
					$pagecontent.append('<a class="rate-page active" href="'+pageURL+i+'">'+ i +'</a>');
				}else{
					$pagecontent.append('<a class="rate-page" href="'+pageURL+i+'">'+ i +'</a>');
				};
			};
			if(curPage + 3 != totalPages){
				$pagecontent.append('<span class="rate-page-break">...</span>');
			};
			$pagecontent.append('<a class="rate-page" href="'+pageURL+totalPages+'">'+ totalPages +'</a>');
		}else{
			for (var i = 1; i <= totalPages; i++){
				if(i == curPage){
					$pagecontent.append('<a class="rate-page active" href="'+pageURL+i+'">'+ i +'</a>');
				}else{
					$pagecontent.append('<a class="rate-page" href="'+pageURL+i+'">'+ i +'</a>');
				};
			};
		};
	}else{
		$pagecontent.append('<a class="rate-page" href="'+ pageURL +'1">'+ 1 +'</a>');
		if(curPage - 3 != 1){
			$pagecontent.append('<span class="rate-page-break">...</span>');
		};
		if(curPage + 3 < totalPages){
			for (var i = curPage - 2; i <= curPage + 2; i++){
				if(i == curPage){
					$pagecontent.append('<a class="rate-page active" href="'+pageURL+i+'">'+ i +'</a>');
				}else{
					$pagecontent.append('<a class="rate-page" href="'+pageURL+i+'">'+ i +'</a>');
				};
			};
			$pagecontent.append('<span class="rate-page-break">...</span>');
			$pagecontent.append('<a class="rate-page" href="'+pageURL+totalPages+'">'+ totalPages +'</a>');
		}else{
			for (var i = curPage - 2; i <= totalPages; i++){
				if(i == curPage){
					$pagecontent.append('<a class="rate-page active" href="'+pageURL+i+'">'+ i +'</a>');
				}else{
					$pagecontent.append('<a class="rate-page" href="'+pageURL+i+'">'+ i +'</a>');
				}
			};
		};
	};
	//判断上下页按钮状态
	if(curPage == 1){
		this.prev.addClass('disabled');
	}else{
		this.prev.removeClass('disabled');
	};
	if(curPage == totalPages){
		this.next.addClass('disabled');
	}else{
		this.next.removeClass('disabled');
	};
	if(this.totalItems == 0){
		this.next.addClass('disabled');
		this.prev.addClass('disabled');
		$("#pageSkipTo")[0].disabled = true;
	}else{
		$("#pageSkipTo")[0].disabled = false;
	}
};

window.PageControler = PageControler;
}());
