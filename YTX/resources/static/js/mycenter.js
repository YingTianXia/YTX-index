function mycenter() {
	var browseWrap = document.getElementById('browseWrap'),
		browseBtns = document.getElementById('browseAction').getElementsByTagName('span'),
		BpageIdx = 0,
		BpageWidth = browseWrap.getElementsByTagName('div')[0].offsetWidth,
		BpageLength = getByClass('browseWrap', 'user-browse-other-wrap').length - 1;
		
	addListener(browseBtns[0], 'click', function(){
		BslideHandler(-1);
	});
	addListener(browseBtns[1], 'click', function(){
		BslideHandler(1);
	});
	
	function BslideHandler(val){
		BpageIdx += val;
		if(BpageIdx < 0){
			BpageIdx = BpageLength;
		}else if(BpageIdx > BpageLength){
			BpageIdx = 0;
		};
		var movePosition = - BpageWidth * BpageIdx;
		move(browseWrap, {'marginLeft': movePosition}, 10);
	}
	
	function getByClass(id, className){
		var oparent = id? document.getElementById(id) : document,
			elements = [],
			objs = oparent.getElementsByTagName('*');
		for(var i = 0,j = objs.length; i < j;i++){
			if(objs[i].className == className){
				elements.push(objs[i]);
			};
		};
		return elements;
	};
};
