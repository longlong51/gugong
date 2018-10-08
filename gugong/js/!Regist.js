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
		//简化版ajax--post(目的地址，数据，回调函数(返回值))
		$.post("username.php", {
			username: username
		}, function(msg) {
			if(msg) {
				i1 = 0;
				$("#username").siblings(".tel_info").html("* 用户名已存在<span></span>");
			} else if(matchResult == null) {
				i1 = 0;
				$("#username").siblings(".tel_info").html("* 用户名可包含大写、小写英文字母，数字，中文，长度为2至10位<span></span>");
			} else {
				i1 = 1;
				$("#username").siblings(".tel_info").fadeOut();
			}
			if(i1 == 0) {
				$("#username").siblings(".tel_info").show();
			}
		});
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
			$("#password").siblings(".tel_info").html("* 密码可包含大写、小写英文字母，数字，长度为6至16位<span></span>");
			$("#password").siblings(".tel_info").show();
		} else {
			i2 = 1;
			$("#password").siblings(".tel_info").fadeOut();
		}
	}
	/*确认密码*/
	$("#password1").blur(pass1);
	var i3 = 0; //确认密码
	function pass1() {
		var pass = $("#password").val();
		var pass1 = $("#password1").val();
		if(pass != pass1) {
			i3 = 0;
			$("#password1").siblings(".tel_info").html("* 请重新核对密码<span></span>");
			$("#password1").siblings(".tel_info").show();
		} else {
			i3 = 1;
			$("#password1").siblings(".tel_info").fadeOut();
		}
	}
	/*手机号码*/
	$("#phone").blur(phone);
	var i4 = 0; //手机号码
	function phone() {
		var phone = $("#phone").val();
		var pattern = /^1[3|4|5|7|8][0-9]\d{8}$/;
		var matchResult = phone.match(pattern);

		if(matchResult == null) {
			i4 = 0;
			$("#phone").siblings(".tel_info").html("* 无效的手机号码<span></span>");
			$("#phone").siblings(".tel_info").show();
		} else {
			i4 = 1;
			$("#phone").siblings(".tel_info").fadeOut();
		}
	}
	/*邮箱地址*/
	$("#email").blur(email);
	var i5 = 0; //邮箱地址
	function email() {
		var email = $("#email").val();
		var pattern = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/;
		var matchResult = email.match(pattern);

		if(matchResult == null) {
			i5 = 0;
			$("#email").siblings(".tel_info").html("* 邮箱地址无效<span></span>");
			$("#email").siblings(".tel_info").show();
		} else {
			i5 = 1;
			$("#email").siblings(".tel_info").fadeOut();
		}
	}
	/*确认邮箱地址*/
	$("#email1").blur(email1);
	var i6 = 0; //确认邮箱地址
	function email1() {
		var email = $("#email").val();
		var email1 = $("#email1").val();
		if(email != email1) {
			i6 = 0;
			$("#email1").siblings(".tel_info").html("* 请重新核对邮箱地址<span></span>");
			$("#email1").siblings(".tel_info").show();
		} else {
			i6 = 1;
			$("#email1").siblings(".tel_info").fadeOut();
		}
	}
	/*验证码*/
	$("#verify").blur(verify);
	var i7 = 0; //验证码
	function verify() {
		var verify = $("#verify").val();
		var res = verifyCode.validate(verify);
		if(!res) {
			i7 = 0;
			$("#verify").siblings(".test_info").html("* 验证码错误<span></span>");
			$("#verify").siblings(".test_info").show();
		} else {
			i7 = 1;
			$("#verify").siblings(".test_info").fadeOut();
		}
	}
	/*姓名*/
	$("#realname").blur(realname);
	var i8 = 0; //姓名
	function realname() {
		var realname = $("#realname").val();
		var pattern = /^[\u4e00-\u9fa5]{2,10}$/;
		var matchResult = realname.match(pattern);
		if(matchResult == null) {
			i8 = 0;
			$("#realname").siblings(".tel_info").html("* 请输入正确的姓名<span></span>");
			$("#realname").siblings(".tel_info").show();
		} else {
			i8 = 1;
			$("#realname").siblings(".tel_info").fadeOut();
		}
	}
	//所有input的空值判断
	$(".text_style3").blur(function() {
		if($.trim($(this).val()) == null || $.trim($(this).val()) == "") {
			$(this).siblings(".tel_info").show();
		} else {
			$(this).siblings(".tel_info").fadeOut();
		}
	});
	/*确认注册按钮*/
	$(".reg_style").click(function() {
		username();
		pass();
		pass1();
		phone();
		email();
		email1();
		verify();
		realname();
		//确认后判断是是否为空
		//数组初始化
		var a = [];
		for(var i = 0; i < 7; i++) {
			a[i] = 0;
		}
		$(".text_style3").each(function(i, j) {
			if(j.value == "") {
				$(j).siblings(".tel_info").show();
			} else {
				$(j).siblings(".tel_info").fadeOut();
				a[i] = 1;
			}
		});
		if(i1 && i2 && i3 && i4 && i5 && i6 && i7 && i8 && a[0] && a[1] && a[2] && a[3] && a[4] && a[5] && a[6]) {
			return true;
		} else {
			return false;
		}
	});
});