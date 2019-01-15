//固定导航栏
var bar = $("#bar");
var _top = bar.offsetTop;//获取导航栏距离顶部的距离
var _left = bar.offsetLeft;
//滚动事件
document.body.onscroll = function(){
	var $top = document.documentElement.scrollTop || document.body.scrollTop;
	if($top >= _top){
		bar.style.position = "fixed";
		bar.style.left = _left + 'px';
	}else{
		bar.style.position = "static";
	}
}

//滚回到顶部
$(".backToTop")[0].style.opacity = 0;
$(".backToTop")[0].onclick = function(){
	var num = document.documentElement.scrollTop;
	toTop();
	function toTop(){
		if(num > 0){
			num -= 100;
			document.documentElement.scrollTop = num;
			setInterval(toTop,20);
		}
	}
}
//滚到一定位置，按钮淡出
document.onscroll = function(){
	var $num = document.documentElement.scrollTop || document.body.scrollTop;
	$(".backToTop")[0].style.opacity = ($num - 200)/400;
}


