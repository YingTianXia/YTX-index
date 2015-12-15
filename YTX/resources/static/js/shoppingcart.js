var data = {
    "url": "1.png",
    "props": [{
        "title": "商品尺寸",
        "prop": ["S", "M", "L", "XL"]
    },{
        "title": "商品颜色",
        "prop": ["黑色", "蓝色", "黄色", "红色", "橘红色", "橘黄色", "白色"]
    }]
};

function cart() {
    //兴趣轮播图
    var IwrapCon = document.getElementById('IwrapCon'),
        pageAction = document.getElementById('pageAction'),
        pageWidth = IwrapCon.getElementsByTagName('div')[0].offsetWidth,
        IpagesLength = getByClass('IwrapCon', 'interest-wrap').length - 1,
        pageIdx = 0,
        IActionBtns = document.getElementById('IAction').getElementsByTagName('span'),
        Ipages = pageAction.getElementsByTagName('dd'),
        IpagesBtns = pageAction.getElementsByTagName('dt');

    addListener(IActionBtns[0], 'click', function(){
        slideHandler(-1);
    });
    addListener(IActionBtns[1], 'click', function(){
        slideHandler(1);
    });
    addListener(IpagesBtns[0], 'click', function(){
        slideHandler(-1);
    });
    addListener(IpagesBtns[1], 'click', function(){
        slideHandler(1);
    });
    for(var m = 0, n = Ipages.length; m < n; m++){
        (function(arg){
            addListener(Ipages[arg], 'click', function(){
                pageIdx = arg;
                pagesControler();
            });
        }(m));
    };

    function slideHandler(val){
        pageIdx += val;
        if(pageIdx < 0){
            pageIdx = IpagesLength;
        }else if(pageIdx > IpagesLength){
            pageIdx = 0;
        }
        pagesControler();
    }

    function pagesControler() {
        var movePosition = - pageWidth * pageIdx;
        move(IwrapCon, {'marginLeft': movePosition}, 10);
        for(var i = 0, j = Ipages.length; i < j; i++){
            Ipages[i].className = 'detail-interest-page';
        }
        Ipages[pageIdx].className = 'detail-interest-page active';
    };
};

function cal(){
    var itemsAcount = document.getElementById('Y_SelecteditemsCount'),
        total = document.getElementById('Y_Total'),
        headSelectedAllCon = document.getElementById('headSelectedAll'),
        headSelectedAll = headSelectedAllCon.getElementsByTagName('input')[0],
        floatSelectAllCon = document.getElementById('floatSelectAll'),
        floatSelectAll = floatSelectAllCon.getElementsByTagName('input')[0],
        orderBody = document.getElementById('orderBody'),
        checkboxes = orderBody.getElementsByTagName('input'),
        submitOrder = document.getElementById('submitOrder'),
        deleteSelected = document.getElementById('deleteSelected'),
        floatBar = document.getElementById('floatBar'),
        floatCon = document.getElementById('floatCon'),
        windowHeight = viewHeight(),
        valueInputs = getByClassDom(orderBody, 'cart-amount');

    for(var a = 0, b = valueInputs.length; a < b; a++){
        if(document.addEventListener){
            addListener(valueInputs[a], 'input', inputCalculate);
        }else{
            addListener(valueInputs[a], 'propertychange', inputCalculate);
        }
    };

    for(var a = 0, b = valueInputs.length; a < b; a++){
        addListener(valueInputs[a], 'blur', inputCalculate);
    };

    //根据初始数量判断此时减号按钮状态
    var minus = getByClassDom(orderBody, 'cart-minus no-minus');
    for (var a = 0, b = minus.length; a < b; a++){
        if(minus[a].parentNode.getElementsByTagName('input')[0].value > 1){
            minus[a].className = 'cart-minus';
        };
    };

    addListener(orderBody, 'click', orderHandler);
    addListener(headSelectedAll, 'click', selectedAllHandler);
    addListener(floatSelectAll, 'click', floatSelectedAllHandler);
    addListener(deleteSelected, 'click', deleteSelectedHandler);
    addListener(submitOrder, 'click', submitOrderHandler);

    floatBarPosition();
    function submitOrderHandler() {
        if(this.className === ''){
            return;
        };
        checkedItems = getByClassDom(orderBody, 'checkbox-item');
        var div = document.createElement('div'),
            form = document.createElement('form');
        form.action = '/shoppingCart/shoppingCartSubmit';
        form.method = 'GET';
        for (var i = 0, j = checkedItems.length; i < j; i++){
            if(checkedItems[i].checked){
                var orderInput = getByClassDom(checkedItems[i].parentNode.parentNode, 'cart-amount')[0];
                var inputTag = document.createElement('input');
                inputTag.name = 'itemskuId';
                inputTag.value = orderInput.getAttribute('data-itemskuid');
                form.appendChild(inputTag);
            };
        };
        var submitBtn = document.createElement('input');
        submitBtn.type = 'submit';
        form.appendChild(submitBtn);
        div.appendChild(form);
        div.style.display = 'none';
        document.body.appendChild(div);
        submitBtn.click();
    };


    window.onscroll = function(){
        var sTop = floatCon.offsetTop;
        if(sTop > (scrollTop()+viewHeight())){
            floatBar.style.position = 'fixed';
            console.log(sTop - (scrollTop()+viewHeight()))
        }else{
            floatBar.style.position = 'static';
        }
    }

    function inputCalculate() {
        var reg = /^[1-9]\d*$/;
        if(!reg.test(this.value)){
            this.value = 1;
        }
        if(this.value <= 1){
            this.value = 1;
            this.parentNode.getElementsByTagName('span')[0].className = 'cart-minus no-minus';
        }else{
            this.parentNode.getElementsByTagName('span')[0].className = 'cart-minus';
        }
        var lis = this.parentNode.parentNode.getElementsByTagName('li');
        var price = parseFloat(lis[lis.length-2].getAttribute('data-price')).toFixed(2);
        lis[lis.length-2].innerHTML = (price * (this.value * 1)).toFixed(2);
        calculate();
    };


    function floatBarPosition() {
        var sTop = floatCon.offsetTop;
        if(sTop > windowHeight){
            floatBar.style.position = 'fixed';
        }else{
            floatBar.style.position = 'static';
        };
    };

    function deleteSelectedHandler() {
        var d_Items = getByClassDom(orderBody, 'checkbox-item'),
            $items = $(".item-content"),
            itemSkuId = [];
        $items.each(function(i, e){
            if($(e).find('.checkbox-item')[0].checked){
                itemSkuId.push($(e).find('.cart-amount').eq(0).attr('data-itemskuid'));
            };
        });
        $.ajax({
            type: "post",
            url: "/shoppingCart/remove",
            async: true,
            contentType: "application/json",
            data: JSON.stringify({"itemSkuIdData": itemSkuId}),
            success: function (){
                //删除条目
                for (var i = 0, j = d_Items.length; i < j; i++){
                    if (d_Items[i].checked){
                        var outer = d_Items[i].parentNode.parentNode;
                        (function(dom){
                            move(dom, {"opacity": 0}, 4, function(){
                                move(dom, {"height": 0}, 4, function(){
                                    var parent = dom.parentNode;
                                    parent.removeChild(dom);
                                    checkStatus(parent);
                                    calculate();
                                    floatBarPosition();
                                });
                            });
                        })(outer);
                    };
                };

            }
        });
    };

    function floatSelectedAllHandler() {
        checkAll(this, headSelectedAll);
        checkBg(orderBody);
        calculate();
    }

    function selectedAllHandler() {
        checkAll(this, floatSelectAll);
        checkBg(orderBody);
        calculate();
    }

    function checkAll(that, other) {
        if(that.checked){
            for (var i = 0, j = checkboxes.length; i < j; i++){
                if (checkboxes[i].className === 'checkbox-item' || checkboxes[i].className === 'checkbox-shop'){
                    checkboxes[i].checked = true;
                }
            }
            other.checked = true;
        }else{
            for (var i = 0, j = checkboxes.length; i < j; i++){
                if (checkboxes[i].className === 'checkbox-item' || checkboxes[i].className === 'checkbox-shop'){
                    checkboxes[i].checked = false;
                };
            };
            other.checked = false;
        };
    };

    function orderHandler(e) {
        e = e || window.event;
        obj = e.srcElement || e.target;
        switch (obj.className){
            case 'checkbox-shop':
                shopSelectAll();
                calculate();
                break;

            case 'checkbox-item':
                itemSelect();
                calculate();
                break;

            case 'cart-plus':
                acountBtn(1);
                calculate();
                break;

            case 'cart-minus':
                acountBtn(-1);
                calculate();
                break;

            case 'cart-op-delete':
                deleteItem();
                break;

            case 'cart-item-attr-editBtn':
                editAttr();//修改商品属性
                break;

            default:
                return;
        };
    };

    function editAttr() {
        if(document.getElementById('skuPopup')){
            document.body.removeChild(document.getElementById('skuPopup'));
        };
        //得到当前点击的修改框的位置
        var top = obj.parentNode.offsetTop + obj.parentNode.offsetHeight,
            left = obj.parentNode.offsetLeft;

        //创建一个属性弹出框架
        var popup = document.createElement('div');
        popup.className = 'sku-edit-popup clearfix';
        popup.id = 'skuPopup';
        popup.innerHTML = '<span class="arrow"></span>';

        var content = document.createElement('div');
        content.className = 'sku-edit-content';
        popup.appendChild(content);
        //属性数据传入,解析json
        for(var i = 0; i < data.props.length; i ++){
            var dl = document.createElement('dl');
            dl.className = 'sku-edit-prop';
            var dt = document.createElement('dt');
            dt.innerHTML = data.props[i].title;
            var dd = document.createElement('dd');
            dd.className = 'zoom';
            var ul = document.createElement('ul');
            ul.className = 'clearfix';
            for(var m = 0, n = data.props[i].prop.length; m < n; m++){
                var li = document.createElement('li');
                li.className = 'prop-blcok';
                li.innerHTML = '<span>'+ data.props[i].prop[m] +'</span>';
                ul.appendChild(li);
            };
            dd.appendChild(ul);
            dl.appendChild(dt);
            dl.appendChild(dd);
            content.appendChild(dl);

            //创建图片框
            var pic = document.createElement('div');
            pic.className = 'skuItemPic';
            var picInner = document.createElement('div');
            picInner.className = 'skuItemPic160';
            var a = document.createElement('a');
            var img = document.createElement('img');
            img.src = data.url;
            a.appendChild(img);
            picInner.appendChild(a);
            pic.appendChild(picInner);
        };
        //创建操作按钮
        var operation = document.createElement('div');
        operation.className = 'operation';
        var addCart = document.createElement('span');
        addCart.className = 'addCart';
        addCart.innerHTML = '确定';
        var cancel = document.createElement('span');
        cancel.className = 'cancel';
        cancel.innerHTML = '取消';
        //添加操作按钮
        operation.appendChild(addCart);
        operation.appendChild(cancel);
        content.appendChild(operation);
        popup.appendChild(content);


        document.body.appendChild(popup);
        pic.style.height = content.offsetHeight + 'px';
        popup.appendChild(pic);
        popup.style.cssText = 'left:'+ left +'px;top:'+ top + 'px;';

        cancel.onclick = closeSkuEdit;
    };

    function closeSkuEdit() {
        document.body.removeChild(document.getElementById('skuPopup'));
        this.onclick = null;
    }

    function deleteItem() {
        var deleteBtn = obj,
            d_Item = deleteBtn.parentNode.parentNode.parentNode,
            skuItemId =  $(d_Item).find(".cart-amount").eq(0).attr("data-itemskuid");
        var dataskuitemid = [];
        dataskuitemid.push(skuItemId);
        //删除提交ajax
        $.ajax({
            type:"post",
            url:"/shoppingCart/remove",
            async:true,
            contentType: "application/json",
            data: JSON.stringify({"itemSkuIdData": dataskuitemid}),
            success: function (){
                move(d_Item, {"opacity": 0}, 5, function(){
                    move(d_Item, {"height": 0}, 5, function(){
                        //保存删除节点的父节点
                        var itemParent = d_Item.parentNode;
                        //移除已删除的html
                        itemParent.removeChild(d_Item);
                        checkStatus(itemParent);
                        floatBarPosition();
                        calculate();
                    });
                });
            }
        });
    };

    function checkStatus(dom) {
        var checks = getByClassDom(dom, 'checkbox-item'),
            checkNum = 0;
        if(checks.length === 0){
            //则当前目录下没有商品需要删除整个商铺节点
            move(dom.parentNode.parentNode, {"opacity": 0}, 4, function(){
                dom.parentNode.parentNode.parentNode.removeChild(dom.parentNode.parentNode);
            });
            return;
        };
        for (var i = 0; i < checks.length; i++){
            if(checks[i].checked){
                checkNum++;
            };
        };
        if(checkNum === checks.length){
            dom.parentNode.parentNode.getElementsByTagName('input')[0].checked = true;
        };
    };

    function acountBtn(num) {
        var btn = obj,
            val = btn.parentNode.getElementsByTagName('input')[0],
            lis = btn.parentNode.parentNode.getElementsByTagName('li'),
            itemPrice = parseFloat(lis[lis.length-2].getAttribute('data-price'));
        val.value = val.value * 1 + num * 1;
        $.ajax({
            type: "post",
            url: "/shoppingCart/modify",
            async: true,
            contentType: "application/json",
            data: JSON.stringify({'number': val.value, 'itemSkuId' : val.getAttribute('data-itemskuId')}),
            success: function (){
                lis[lis.length-2].innerHTML = (itemPrice * val.value).toFixed(2);
                //值大于1则开启减少数量按钮
                if(val.value > 1){
                    btn.parentNode.getElementsByTagName('span')[0].className = 'cart-minus';
                }else{
                    btn.parentNode.getElementsByTagName('span')[0].className = 'cart-minus no-minus';
                };

            }
        });
    };

    function shopSelectAll() {
        var S_Shop = obj,
            outer = S_Shop.parentNode.parentNode.parentNode,
            checkItems = getByClassDom(outer, 'checkbox-item');
        if(S_Shop.checked){
            //选中
            for(var i = 0; i < checkItems.length; i++){
                checkItems[i].checked = true;
            };
        }else{
            //取消选中
            for(var i = 0; i < checkItems.length; i++){
                checkItems[i].checked = false;
            };
        };
        checkboxAll();
        checkBg(outer)
    };

    function itemSelect() {
        var S_Item = obj
        //判断此类目商铺下是否已全部选中
        var content = S_Item.parentNode.parentNode.parentNode,
            checkItems = getByClassDom(content, 'checkbox-item'),
            S_selectedAll = content.parentNode.parentNode.getElementsByTagName('input')[0],
            checkIdx = 0;
        for (var i = 0; i < checkItems.length; i++){
            if(checkItems[i].checked){
                checkIdx++;
            };
        };

        if(checkIdx === checkItems.length){
            //此时当前商店的已全部选中，需要勾选该商店的全选checkbox
            S_selectedAll.checked = true;
        }else{
            S_selectedAll.checked = false;
        };
        checkboxAll();
        checkBg(content);
    };

    function checkboxAll() {
        var S_checkbox = getByClassDom(orderBody, 'checkbox-shop'),
            checkAllIndex = 0;
        for (var j = 0; j < S_checkbox.length; j++){
            if(S_checkbox[j].checked){
                checkAllIndex++
            };
        };
        if(checkAllIndex === S_checkbox.length){
            //所有商品全部选中了
            headSelectedAll.checked = true;
            floatSelectAll.checked = true;
        }else{
            headSelectedAll.checked = false;
            floatSelectAll.checked = false;
        };
    };

    function calculate() {
        var items = getByClassDom(orderBody, 'checkbox-item'),
            curPrice = 0,
            acount = 0,
            checkFlag = false;
        for (var m = 0, n = items.length; m < n; m++){
            var check = items[m];
            if(check.checked){
                var ul = check.parentNode.parentNode,
                    attrs = ul.getElementsByTagName('li'),
                    price = parseFloat(attrs[attrs.length-2].innerHTML).toFixed(2);
                curPrice += parseFloat(price);
                acount += parseFloat(attrs[attrs.length-3].getElementsByTagName('input')[0].value);
                checkFlag = true;
            };
        };
        if(checkFlag){
            submitOrder.className = 'submit-Btn-enable';
        }else{
            submitOrder.className = '';
        };
        curPrice = curPrice.toFixed(2);
        total.innerHTML = curPrice;
        itemsAcount.innerHTML = acount;
    };

    function checkBg(dom) {
        var checkBgs = getByClassDom(dom, 'checkbox-item');
        for(var l = 0; l < checkBgs.length; l++){
            if(checkBgs[l].checked){
                checkBgs[l].parentNode.parentNode.style.background = '#fffaf2';
            }else{
                checkBgs[l].parentNode.parentNode.style.background = '#fff';
            };
        };
    };
};
