$(function() {
	//加载导航介绍
	$('.introduction').load('introduction.html');
	$(".uls li").mouseenter(function() {
		var a = $(this).index() - 1;
		if(a >= 0) {
			$(".item").eq(a).show().siblings(".item").hide();
			$("b").eq(a).show().siblings("b").hide();
		}
	}).mouseleave(function() {
		$(".item").hide();
		$("b").hide();
	});
	$(".item").mouseover(function() {
		var b = $(this).index() - 1;
		if(b >= 0) {
			$(this).show();
			$("b").eq(b).show().siblings("b").hide();
		}
	}).mouseout(function() {
		$(this).hide();
		$("b").hide();
	});
	$(".tools .login a").mouseover(function() {
		$("#ico1").attr('src', 'img/login/ico_tools_search2-1.png');
		$(".loginbox").show();
	}).mouseout(function() {
		$("#ico1").attr('src', 'img/login/ico_tools_search2-2.png');
		$(".loginbox").hide();
	});
	$(".loginbox").mouseover(function() {
		$(".loginbox").show();
	}).mouseout(function() {
		$(".loginbox").hide();
	});
	$(".lang").click(function() {
		$(".introduction").show();
	});
});