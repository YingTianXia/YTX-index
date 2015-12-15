var start = {
    elem: '#timeStart',
    max: '2099-06-16 23:59:59', //最大日期
    istime: true,
    istoday: false,
    choose: function(datas){
         end.min = datas; //开始日选好后，重置结束日的最小日期
         end.start = datas //将结束日的初始值设定为开始日
    }
};
var end = {
    elem: '#timeEnd',
    max: '2099-06-16 23:59:59',
    istime: true,
    istoday: false,
    choose: function(datas){
        start.max = datas; //结束日选好后，重置开始日的最大日期
    }
};
laydate(start);
laydate(end);

var authStart = {
	elem: '#authStart',
    max: '2099-06-16 23:59:59', //最大日期
    istime: true,
    istoday: false,
    choose: function(datas){
         authEnd.min = datas; //开始日选好后，重置结束日的最小日期
         authEnd.start = datas //将结束日的初始值设定为开始日
    }
}

var authEnd = {
	elem: '#authEnd',
    max: '2099-06-16 23:59:59', //最大日期
    istime: true,
    istoday: false,
    choose: function(datas){
         authEnd.min = datas; //开始日选好后，重置结束日的最小日期
         authEnd.start = datas //将结束日的初始值设定为开始日
    }
}

laydate(authStart);
laydate(authEnd);

var validStart = {
	elem: '#validStart',
    max: '2099-06-16 23:59:59', //最大日期
    istime: true,
    istoday: false,
    choose: function(datas){
         validEnd.min = datas; //开始日选好后，重置结束日的最小日期
         validEnd.start = datas //将结束日的初始值设定为开始日
    }
}

var validEnd = {
	elem: '#validEnd',
    max: '2099-06-16 23:59:59', //最大日期
    istime: true,
    istoday: false,
    choose: function(datas){
         validEnd.min = datas; //开始日选好后，重置结束日的最小日期
         validEnd.start = datas //将结束日的初始值设定为开始日
    }
}

laydate(validStart);
laydate(validEnd);
$(document).ready(function(){
;(function(){
	var $checkStatus = $("#checkStatus").val();
	if($checkStatus != ''){
		var formList = $(".form-list");
		for (var i = 0, j = $checkStatus.length; i < j; i++){
			var status = $checkStatus.slice(i, i+1);
			if(status == 1){
				formList.eq(i).append('<i class="J_pass"></i>');
			}
		}
	};
	
	
	var $type = $("#type"),
		$form = $("#form"),
		$form1 = $("#form1");
	$type.bind('change', typeChange);
	
	
	function typeChange() {
		var value = $(this).val();
		if(value === 'self'){
			$form.show();
			$form1.hide();
		}else if(value === 'agent'){
			$form.hide();
			$form1.show();
		}
	};
	
	var validate_Self, validate_Agent;
	
	validate_Self = $form.validate({
		debug: true,
		errorClass: "form-alert",
		errorElement: "p",
		rules: {
			name: {
				required: true
			},
			regCertNum:{
				required: true
			},
			regCertFile_hidden: {
				required: true,
				imgTest: true
			},
			qualityReportFile_hidden: {
				required: true,
				imgTest: true
			},
			logoRegFile_hidden: {
				required: true,
				imgTest: true
			},
			timeStart: {
				required: true
			},
			timeEnd: {
				required: true
			},
			logo_hidden: {
				required: true,
				imgTest: true
			},
			introduce: {
				required: true
			}
		},
		messages: {
			name: {
				required: "请输入品牌名称！"
			},
			regCertNum: {
				required: "请输入商标注册证号！"
			},
			regCertFile_hidden: {
				required: "请上传商标注册注册证/商标受理通知书复件"
			},
			qualityReportFile_hidden: {
				required: "请上传检测报告"
			},
			logoRegFile_hidden: {
				required: "请上传商标注册证复印件"
			},
			timeStart: {
				required: "请输入有效期起始日期"
			},
			timeEnd: {
				required: "请输入有效期结束日期"
			},
			logo_hidden: {
				required: "请上传 品牌LOGO"
			},
			introduce: {
				required: "请输入品牌介绍"
			}
		}
	});
	validate_Agent = $form1.validate({
		debug: true,
		errorClass: "form-alert",
		errorElement: "p",
		rules: {
			name1: {
				required: true
			},
			regCertNum1: {
				required: true
			},
			regCertFile_hidden1: {
				required: true,
				imgTest: true
			},
			authFile1_hidden: {
				required: true,
				imgTest: true
			},
			authStart: {
				required: true
			},
			authEnd: {
				required: true
			},
			qualityReportFile_hidden: {
				required: true,
				imgTest: true
			},
			applicationCertFile_hidden: {
				required: true,
				imgTest: true
			},
			validStart: {
				required: true
			},
			validEnd: {
				required: true
			},
			logoFile_hidden: {
				required: true,
				imgTest: true
			},
			introduce1: {
				required: true
			}
		},
		messages: {
			name1: {
				required: "请输入品牌名称!"
			},
			regCertNum1: {
				required: "输入商标注册证号!"
			},
			regCertFile_hidden1: {
				required: "请上传商标注册注册证/商标受理通知书复件!"
			},
			authFile1_hidden: {
				required: "请上传品牌授权书!"
			},
			authStart: {
				required: "请输入授权起始时间!"
			},
			authEnd: {
				required: "请输入授权结束时间!"
			},
			qualityReportFile_hidden: {
				required: "请上传检测报告!"
			},
			applicationCertFile_hidden: {
				required: "请上传商标注册证复印件!"
			},
			validStart: {
				required: "请输入有效期起始时间！"
			},
			validEnd: {
				required: "请输入有效期结束时间！"
			},
			logoFile_hidden: {
				required: "请上传品牌logo！"
			},
			introduce1: {
				required: "请输入品牌介绍！"
			}
		}
	});
})();
});
