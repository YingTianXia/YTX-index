;(function(){
$(document).ready(function(){
	var validate;
	validate = $("#form").validate({
		debug: true,
		errorClass: "form-alert",
		errorElement: "p",
		rules: {
			name: {required: true},
			domain: {required: true},
			mainType: {required: true},
			secondType: {required: true},
			operatorNum: {required: true, number: true, min: 1},
			warehouse: {required: true},
			hasERP: {required: true},
			deliveryCapability: {required: true, number: true, min: 1},
			principal: {required: true, legalTest: true},
			principalPosition: {required: true},
			principalMobile: {required: true, number: true,},
			principalEmail: {required: true, email: true}
		},
		messages: {
			name: {required: "请输入店铺名"},
			domain: {required: "请输入域名"},
			mainType: {required: "请选择主营类目"},
			secondType: {required: "请选择二级类目"},
			operatorNum: {required: "请输入运营人数", number: "请输入正确的人数", min: "请输入正确的人数"},
			warehouse: {required: "请输入仓库情况"},
			hasERP: {required: "请输入erp情况"},
			deliveryCapability: {required: "请输入每日发货能力", number: "请输入正确的每日发货能力", min: "请输入正确的每日发货能力"},
			principal: {required: "请输入姓名"},
			principalPosition: {required: "请输入地址"},
			principalMobile: {required: "请输入手机号码", number: "请输入正确的手机号码"},
			principalEmail: {required: "请输入邮箱号", email: "请输入正确的邮箱号"}
		}
	});
});
})();
