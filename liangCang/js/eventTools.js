//功能：事件的兼容性
//参数：dom对象，事件类型，事件函数，是否冒泡

//添加事件
function  addEvent(domObj,eventType,func,isBubble){
	if(domObj.addEventListener){
		domObj.addEventListener(eventType,func,isBubble);
	}else if(domObj.attachEvent){
		domObj.attachEvent("on" + eventType,func);
	}else{
		domObj["on" + eventType] = func;
	}
}

//删除事件
function removeEvent(domObj,eventType,func,isBubble){
	if(domObj.removeEventListener){
		domObj.removeEventListener(eventType,func,isBubble);
	}else if(domObj.detachEvent){
		domObj.detachEvent("on" + eventType,func);
	}else{
		domObj["on"+ eventType] = null;
	}
}

//功能：取消冒泡事件
function stopPropagation(ev){
	if(ev.stopPropagation){
		ev.stopPropagation();
	}else{
		ev.cancelBubble = true;
	}
}

//功能：取消默认事件
function preventDefault(ev){
	if(ev.preventDefault){
		ev.preventDefault();
	}else{
		ev.returnValue = false;
	}
}