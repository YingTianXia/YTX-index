function itemlist() {
	var filter = document.getElementById('filter'),
		filterList = filter.getElementsByTagName('ul'),
		multerFlag = false;
	
	//判断每个属性列表是否需要更多按钮
	for (var i = 0 , j = filterList.length; i < j; i++){
		var filterListHeight = filterList[i].offsetHeight;
		if(filterListHeight > 52){
			/*
			 * 52为单行ul高度
			 * 列表高度超过临界值，需要添加更多按钮
			*/
			var moreBtn = document.createElement('i');
			moreBtn.className = 'list-show-more';
			filterList[i].parentNode.appendChild(moreBtn);
		};
	};
	
	addListener(filter, 'click', filterHandler);
	
	function filterHandler(e){
		e = e || window.event;
		obj = e.srcElement || e.target;
		var objClassName = obj.className;
		switch (objClassName){
			case 'multer-select-btn':
				//多选
				multerSelect();
				break;
			case 'list-filter-name':
				//选中属性前的checkbox
				selectCheckbox();
				break;
			case 'list-show-more':
				//展开更多选项
				moreAttr();
				break;
			case 'multer-select-cancel':
				//退出多选
				multerCancel();
				break;
			case 'multer-select-confirm':
				/*
				 * 此处为确定多选处理
				 * 
				 * 
				 * 
				 *
				 */
				
				
				break;
			default:
				return;
		}
	}
	
	function cancelChecked(obj) {
		//obj为属性列表节点
		var checks = obj.getElementsByTagName('input');
		for(var m = 0, n = checks.length; m < n; m++){
			checks[m].checked = false;
		};
	};
	
	function multerCancel(cancelBtn) {
		if(cancelBtn){
			obj = cancelBtn;
		}
		//关闭多选
		var outer1 = obj.parentNode.parentNode,
			checkboxs = outer1.getElementsByTagName('ul')[0].getElementsByTagName('i');
		for (var m = 0, n = checkboxs.length; m < n; m++){
			checkboxs[m].style.display = 'none';
		};
		//如果此时高度已被展开则关闭
		if(outer1.className !== 'list-filter-list-outer close'){
			outer1.className = 'list-filter-list-outer close';
		};
		//显示多选按钮，隐藏多选动作框
		outer1.getElementsByTagName('b')[0].style.display = 'block';
		obj.parentNode.style.display = 'none';
		//退出多选状态
		multerFlag = false;
		//取消已选中的checkbox
		cancelChecked(outer1.getElementsByTagName('ul')[0]);
	}
	
	function selectCheckbox() {
		//当多选状态时才执行
		var iObj = obj.parentNode.getElementsByTagName('i')[0];
		if(iObj.style.display === 'inline-block'){
			/*
			 * 此时为多选属性，记录选中的数据
			 * 
			 * 
			 * 
			 */
			alert(11)
			var checkboxEle = obj.parentNode.getElementsByTagName('input')[0];
			checkboxEle.checked?checkboxEle.checked = false:checkboxEle.checked = true;
		}else{
			/*
			 * 
			 * 此时为单选属性直接选中
			 * 
			 * 
			 * */
			alert(22)
		}
	}
	
	function multerSelect() {
		var curObj = obj;//进入multerCancel以后obj对象改变，先保存
		var outer = obj.parentNode;
		//进入前先清空checkbox
		var clearlist = outer.getElementsByTagName('ul')[0];
		cancelChecked(clearlist);
		//若有打开的多选要先关闭
		if(multerFlag){
			//此时已有打开的多选，需要先关闭
			var multerElements = getByClass('filter', 'multer-select-con');
			for (var k = 0, l = multerElements.length; k < l; k++){
				if(multerElements[k].style.display == 'block'){
					var multerIndex = k;
				}
			}
			var multerCancelBtn = multerElements[multerIndex].getElementsByTagName('span')[1];
			multerCancel(multerCancelBtn);
		}
		obj = curObj;//还原obj对象
		//高度不够则延展高度
		outer.className = 'list-filter-list-outer';
		var checkboxs = outer.getElementsByTagName('ul')[0].getElementsByTagName('i');
		for (var m = 0, n = checkboxs.length; m < n; m++){
			checkboxs[m].style.display = 'inline-block';
		}
		//多选按钮消失
		obj.style.display = 'none';
		//多选动作框出现
		outer.getElementsByTagName('div')[0].style.display = 'block';
		//进入多选状态
		multerFlag = true;
	};
	
	function moreAttr() {
		//正常情况下属性列表高度为53
		var objP = obj.parentNode,
			objHeight = objP.offsetHeight;
		//判断此时是否为多选状态
		var moreFlag = objP.getElementsByTagName('ul')[0].getElementsByTagName('i')[0]
		//若此时正在多选状态，则关闭多选状态
		if(css(moreFlag, 'display') !== 'none'){
			var checkboxs = objP.getElementsByTagName('ul')[0].getElementsByTagName('i');
			for (var m = 0, n = checkboxs.length; m < n; m++){
				checkboxs[m].style.display = 'none';
			};
			//让多选按钮出现，多选动作框隐藏
			objP.getElementsByTagName('b')[0].style.display = 'block';
			//退出多选状态
			multerFlag = false;
			//取消已选中的checkbox
			cancelChecked(objP.getElementsByTagName('ul')[0]);
		};
		if(objHeight > 53){
			//已展开需要关闭
			obj.parentNode.className += ' close';
			return;
		};
		obj.parentNode.className = 'list-filter-list-outer';
	};
};
