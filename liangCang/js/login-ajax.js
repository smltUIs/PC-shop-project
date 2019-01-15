//点击的那个标签
//	console.log($("#login"));
		$(".loginBtn").click(function(){
//			console.log(123);
				$.ajax({
					type:"post",//这个不用多说
					url:"php/login.php",//php的地址
					async:true,//是否异步
					data:{
						'phone' : $("#phoneId").val(),  //input中的值
						'password' : $("#passwordId").val()
					},
					success:function(data){    //data  代表php中echo的值
						// console.log(data)
						if(data==0){
							alert("登录失败");
						}else if(data==1){
							let kk = confirm("登录成功！");
							if(kk){
								location.href="index.html";
							}
						}else if(data == 2){
							alert("用户名不存在");
						}
					},
				})	
			})

	