//点击的那个标签
//	console.log($(".instantReg"));
		$(".instantReg").click(function(){
				console.log(133);
				$.ajax({
					type:"post",//这个不用多说
					url:"php/reg.php",//php的地址
					async:true,//是否异步
					data:{
						'phone' : $("#phone").val(),  //input中的值
						'password' : $("#password").val()
					},
					success:function(data){    //data  代表php中echo的值
//						console.log(data)
						if(data==0){
							alert("注册失败");
						}else if(data==1){
							let kk = confirm("恭喜您，注册成功，点击确定去登录");
							if(kk){
								location.href="login.html";
							}
						}else if(data == 2){
							alert("用户名已存在");
						}
					},
				})	
			})
