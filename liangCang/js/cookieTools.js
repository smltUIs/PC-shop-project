//功能：添加cookie
//参数：键，值，有效期（天）
//返回值：无
function setCookie(key,value,days) {
	var d = new Date();
	d.setDate(d.getDate() + days);
	//保存
	document.cookie = key + '=' + escape(value) + ';expires=' + d.toGMTString();
}

//功能：获取cookie
//参数：键
//返回值：值（返回null，表示该值没有存储在cookie中）
function getCookie(key){
	var str = unescape(document.cookie);//username=jzm; userpass=123; yhm=baobao
	//1.将字符串用;符号分割成数组
	var arr = str.split(';'); //["username=jzm","userpass=123","yhm=baobao"]
	//2、循环数组，找以key+"="开头的数组元素
	for(var i in arr){
		if(arr[i].indexOf(key + '=') == 0){
			return arr[i].substring((key+'=').length);
		}
	}
	return null;
}

//功能：删除cookie
//参数：键
//返回值：无
function removeCookie(key){
	//只需要将有效期设置为负数即可删除cookie
	setCookie("username","",-1);
}

//	检查cookie函数
/*功能:检查cookie值
参数: 键
返回值: 无*/		
function checkCookie(key){
	var user = getCookie(key);
//		先获取我们想要的cookie值
//		判断是否存在
//		如果存在,弹出值,不存在,让用户输入一个值,进行存储
	if(user != null){
		alert("欢迎回来 " + user);
	}else{
		var username = window.prompt("Please Enter Your Name:","");
//			判断用户是否输入,输入的值是否符合要求
		if(username!=null){
			setCookie("yhm",username,3);
		}
	}
}