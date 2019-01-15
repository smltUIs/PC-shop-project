
//参数：验证的数据类型
//要验证的字符串

function checkAll(type,value){ 		 //type是你要验证的类型（自定），value验证该值
    switch(type) {				//判断该类型       
		  case 'Phone':   			//如果类型是Phone的话，就执行下面的判断  
			  var reg = /^1[34578]\d{9}$/;
			  break;  
		  case 'Email':  
			  var reg =/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
			  break; 
	      case 'card':
			  var reg = /^61\d{8}(0[1-9]|1[0-2])\d{2}\d{3}[\dX]$/; 		
		  default:;
	}
	return reg.test(value);
	/*
	if(reg.test(value)==true){
		return true;
	}else{
		return false;
	}
	*/
} 
