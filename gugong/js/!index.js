$(window).ready(function() {
	//加载底部脚本和导航栏
	$('.configFoot').load('foot.html');
	$('.nav').load('nav.html');
	//初始化轮播图标为未选中状态
	$(".ctrdot i").addClass("after");
	//初始首页显示
	$(".ctrdot i").eq(0).removeClass("after").addClass("now");
	$("#box .pic").eq(0).fadeIn(1000, function() {
		$("#box .pic").eq(0).addClass("add");
	});
	/*方法一*/
	/*var x = 0;
	function fad() {
		var m = x % 4;
		var n = (x + 1) % 4;
		//每次播放前都要先隐藏所有图片，去除图片和轮播图标的样式，避免叠加出现
		$("#box").children(".pic").hide();
		$("#box .pic").removeClass("add");
		$(".ctrdot i").removeClass("now").addClass("after");
		//m表示当前图片，在进行同胞图片处理
		$("#box .pic").eq(m).siblings().fadeOut(50, function() {
			$("#box .pic").eq(m).siblings().removeClass("add");
			$(".ctrdot i").eq(m).removeClass("after").addClass("now");
			$("#box .pic").eq(m).fadeIn(1000, function() {
				$("#box .pic").eq(m).addClass("add");
			});
		});
	};
	function autofad() {
		x++;
		if(x > 3) {
			x = 0;
		}
		fad();
	}
	int = setInterval(autofad, 5000);
	//每次点击都关闭间隔调用计时器，获取点击轮播图标的下标后直接调用函数播放这一张图片，这时间隔调用计时器刚好自动播放下一张
	$(".ctrdot i").click(function() {
		clearInterval(int);
		x = $(this).index();
		fad();
		int = setInterval(autofad, 5000);
	});*/
	/*方法二*/
	//默认-1，否则x++会先渐出1，渐进2
	var x = -1;
	function fad() {
		var m = x % 4;
		var n = (x + 1) % 4;
		$("#box").children(".pic").hide();
		$("#box .pic").removeClass("add");
		$(".ctrdot i").removeClass("now").addClass("after");
		//渐出前一张，渐出下一张
		$("#box .pic").eq(m).fadeOut(250, function() {
			$("#box .pic").eq(m).removeClass("add");
			$(".ctrdot i").eq(n).removeClass("after").addClass("now");
			$("#box .pic").eq(n).fadeIn(1000, function() {
				$("#box .pic").eq(n).addClass("add");
			});
		});
	};

	function autofad() {
		x++;
		if(x > 3) {
			x = 0;
		}
		fad();
	}
	int = setInterval(autofad, 5000);

	$(".ctrdot i").click(function() {
		clearInterval(int);
		x = $(this).index()-1;
		fad();
		int = setInterval(autofad, 5000);
	})
});