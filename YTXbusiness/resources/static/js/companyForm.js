;(function(){
laydate({
    elem: '#startDate',
    format: 'YYYY-MM-DD hh:mm:ss',
    istime: true
});
var start = {
    elem: '#timeStart',
    format: 'YYYY-MM-DD hh:mm:ss',
    min: laydate.now(), //设定最小日期为当前日期
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
    format: 'YYYY-MM-DD hh:mm:ss',
    max: '2099-06-16 23:59:59',
    istime: true,
    istoday: false,
    choose: function(datas){
        start.max = datas; //结束日选好后，重置开始日的最大日期
    }
};
laydate(startDate);
laydate(end);
$(document).ready(function(){
	var validation;
	validation = $("#form").validate({
		debug: true,
		errorClass: "form-alert",
		errorElement: "p",
		rules: {
			companyName: {
				required: true
			},
			licRegNum: {
				required: true,
				licRegNumTest: true
			},
			legal: {
				required: true,
				legalTest: true
			},
			legalCert: {
				required: true,
				legalCertTest: true
			},
			licProvinceCode: {
				required: true
			},
			licCityCode: {
				required: true
			},
			licAreaCode: {
				required: true
			},
			regCapital: {
				required: true,
				number: true,
				min:1
			},
			bizScopeDesc: {
				required: true,
				legalTest: true
			},
			licAddress: {
				required: true
			},
			phone: {
				required: true,
				phoneTest: true
			},
			orgCodeCertNum: {
				required: true,
				orgCodeCertNumTest: true
			},
			taxRegCertNum: {
				required: true
			},
			taxRegType: {
				required: true
			},
			accountName: {
				required: true,
				legalTest: true
			},
			bankAccount: {
				required: true,
				number: true
			},
			subbranchBank: {
				required: true,
				legalTest: true
			},
			subbranchNum: {
				required: true
			},
			companyProvinceCode: {
				required: true
			},
			companyCityCode: {
				required: true
			},
			companyAreaCode: {
				required: true
			},
			subbranchProvinceCode: {
				required: true
			},
			subbranchCityCode: {
				required: true
			},
			subbranchAreaCode: {
				required: true
			},
			legalCertImgFront_hidden: {
				required: true,
				imgTest: true
			},
			legalCertImgOppo_hidden: {
				required: true,
				imgTest: true
			},
			LicImg_hidden: {
				required: true,
				imgTest: true
			},
			orgCodeCertImg_hidden: {
				required: true,
				imgTest: true
			},
			taxRegCertImg_hidden: {
				required: true,
				imgTest: true
			},
			generalTaxPayerCert_hidden: {
				required: true,
				imgTest: true
			},
			accountLicense_hidden: {
				required: true,
				imgTest: true
			}
		},
		messages:{
			companyName: {
				required: "请输入公司名称！"
			},
			licRegNum: {
				required: "请输入工商营业执照注册号！"
			},
			legal: {
				required: "请输入法定代表人姓名"
			},
			legalCert: {
				required: "请输入身份证号码"
			},
			licProvinceCode: {
				required: "请选择省份"
			},
			licCityCode: {
				required: "请选择城市"
			},
			licAreaCode: {
				required: "请选择地区"
			},
			regCapital: {
				required: "请输入注册资本",
				number: "请输入正确的注册资本",
				min: "请输入正确的注册资本"
			},
			bizScopeDesc: {
				required: "请输入经营范围"
			},
			licAddress: {
				required: "请输入详细地址"
			},
			phone: {
				required: "请输入公司电话"
			},
			orgCodeCertNum: {
				required: "请输入组织机构代码"
			},
			taxRegCertNum: {
				required: "请输入税务登记号"
			},
			taxRegType: {
				required: "请选择纳税人类型"
			},
			accountName: {
				required: "请输入银行开户名"
			},
			bankAccount: {
				required: "请输入公司银行账户",
				number: "请输入正确的公司银行账户"
			},
			subbranchBank: {
				required: "请输入开户行支行名称"
			},
			subbranchNum: {
				required: "请输入开户银行支行联行号"
			},
			companyProvinceCode: {
				required: "请选择公司所在省份"
			},
			companyCityCode: {
				required: "请选择公司所在城市"
			},
			companyAreaCode: {
				required: "请选择公司所在地区"
			},
			subbranchProvinceCode: {
				required: "请选择公司开户银行所在省份"
			},
			subbranchCityCode: {
				required: "请选择公司开户银行所在城市"
			},
			subbranchAreaCode: {
				required: "请选择公司开户银行所在地区"
			},
			legalCertImgFront_hidden: {
				required: "请上传法人身份证电子版（正面）"
			},
			legalCertImgOppo_hidden: {
				required: "请上传法人身份证电子版（反面）"
			},
			LicImg_hidden: {
				required: "请上传营业执照电子版"
			},
			orgCodeCertImg_hidden: {
				required: "请上传营业执照副本电子版"
			},
			taxRegCertImg_hidden: {
				required: "请上传税务登记证电子版"
			},
			generalTaxPayerCert_hidden: {
				required: "请上传一般纳税人资格证电子版"
			},
			accountLicense_hidden: {
				required: "银行开户许可证电子版"
			}
		}
	})
});

})();
