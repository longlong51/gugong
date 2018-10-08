$(document).ready(function() {
	//加载脚本、验证码和导航栏
	$('.configFoot').load('foot.html');
	$('.text_img').load('yzm1.html');
	$('.nav').load('nav.html');
	//内容正确，信息提示框自动消失，否则显示
	/*用户名*/
	$("#username").blur(username);
	var i1 = 0; //用户名
	function username() {
		var username = $("#username").val();
		var pattern = /^[A-Za-z0-9\u4e00-\u9fa5]{2,10}$/;
		var matchResult = username.match(pattern);
		if(matchResult == null) {
			i1 = 0;
			$("#username").siblings(".test_info").html("* 用户名可包含大写、小写英文字母，数字，中文，长度为2至10位<span></span>");
			$("#username").siblings(".test_info").show();
		} else {
			i1 = 1;
			$("#username").siblings(".test_info").fadeOut();
		}
	}
	/*密码*/
	$("#password").blur(pass);
	var i2 = 0; //密码
	function pass() {
		var pass = $("#password").val();
		var pattern = /^[A-Za-z0-9/s]{6,16}$/;
		var matchResult = pass.match(pattern);
		if(matchResult == null) {
			i2 = 0;
			$("#password").siblings(".test_info").html("* 密码可包含大写、小写英文字母，数字，长度为6至16位<span></span>");
			$("#password").siblings(".test_info").show();
		} else {
			i2 = 1;
			$("#password").siblings(".test_info").fadeOut();
		}
	}
	/*验证码*/
	$("#verify").blur(verify);
	var i3 = 0; //验证码
	function verify() {
		var verify = $("#verify").val();
		var res = verifyCode.validate(verify);
		if(!res) {
			i3 = 0;
			$("#verify").siblings(".test_info").html("* 验证码错误<span></span>");
			$("#verify").siblings(".test_info").show();
		} else {
			i3 = 1;
			$("#verify").siblings(".test_info").fadeOut();
		}
	}
	/*确认登录按钮*/
	$("#reg_style").click(function() {
		username();
		pass();
		verify();
		var username1 = $("#username").val();
		var password1 = $("#password").val();
		//方法一
		/*var i4 = 0;
		$.ajax({
			type: "post",
			url: "login.php",
			async: false,
			data: {
				username1: username1,
				password1: password1
			},
			success: function(msg) {

				if(msg) {
					i4 = 1;
				} else {
					i4 = 0;
					$("#reg_style").siblings(".test_info").html("* 账号或密码错误，请重新填写<span></span>");
					$("#reg_style").siblings(".test_info").show();
				}
			}
		});
		alert(i4 + "i4")
		if(i3&&i4){
			return true;
		}else{
			return false;
		}*/
		//简化版ajax--post(目的地址，数据，回调函数(返回值))
		//方法二
		if(i3 == 1) {
			$.post("login.php", {
				username1: username1,
				password1: password1
			}, function(msg) {

				if(msg) {
					$("form").submit();
				} else {
					$("#reg_style").siblings(".test_info").html("* 账号或密码错误，请重新填写<span></span>");
					$("#reg_style").siblings(".test_info").show();
				}
			});
			return false;
		} else {
			return false;
		}
	});
});