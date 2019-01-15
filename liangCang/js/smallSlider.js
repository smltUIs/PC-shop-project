	//当前序号
	let currOrd = 0;
	let myTimer = null;
	let direction = -1;//默认向左移动
	let currLeft = 0;

	function showImg(inOrd,outOrd){
		let imgs = $(".bigPer");
		if(inOrd == outOrd){
			return;
		}

		//1)滑入滑出前的准备工作
		imgs[inOrd].style.left = 350 + 'px';

		//2)滑入滑出效果
		moveObj03(imgs[inOrd],"left",0,300);
		moveObj03(imgs[outOrd],"left",-350,300);
	}

	//小轮播图
	function changeSmallImg(count) {
		for (let i = 0; i < $(".per").length; i++) {
			$(".per")[i].style.border = 'none';
		}
		$(".per")[count].style.borderWidth = '1px';
		$(".per")[count].style.borderStyle = 'solid';
		$(".per")[count].style.borderColor = 'black';
	}
	//自动播放图片
	function playImg(){
		if(myTimer != null){			
			clearInterval(myTimer);
		}
		myTimer = setInterval(function(){
			//1)数据：改变图片的当前序号（加加），并考虑边界
			let outOrd = currOrd;//将当前图片淡出
			currOrd++;//让当前图片下标向后移动，即下一张图片
			if(currOrd > 4){
				currOrd = 0;
			}
			currLeft = currLeft + direction * 5;
			//2)边界
			if(direction == -1){
				if(currLeft <= -2880){
					currLeft = 0;
				}
			}else if(direction == 1){
				if(currLeft >= 0){
					currLeft = -2880;
				}
			}
			//3)外观
			//a)改图片
			showImg(currOrd,outOrd);
			changeSmallImg(currOrd);
		},2000)
	}
	//改变方向
	function changeDirection(directionSign){
		direction = directionSign;
	}
	//2.停止播放
	function stopImg(){
		window.clearInterval(myTimer);
	}

	//3.继续播放（调用playImg）

	//4.跳转到指定位置的图片
	function goImg(transOrd){
		let outOrd = currOrd;//让当前图片淡出
		//1)数据：把transOrd赋给当前图片的序号
		currOrd = transOrd;

		//2）外观
		//a)改图片
		showImg(currOrd,outOrd);	
		changeSmallImg(currOrd);
	}

	window.onload = function(){
		playImg();
		$('.picBox')[0].onmouseover = stopImg;
		$('.picBox')[0].onmouseout = playImg;
		//通过点击点点，获取图片的下标
		let lis = $('.s_img');
		for(var i=0;i<lis.length;i++){
			lis[i].setAttribute("index",i);
			lis[i].onclick = function(){
				let index = parseInt(this.getAttribute("index"));
				goImg(index);
			}
		}
		
		$('#prev').onclick = function(){
//			changeDirection(-1);
			playImg();
		}
		$('#next').onclick = function(){
//			changeDirection(1);
			playImg();
		}
	}