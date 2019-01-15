//获取表格
	let table = $('.carTab')[0];
	window.onload = function() {
		//获取所有的"+"号按钮
		let addBtn = $('.add');
		let totalCount = 0;
		for(let i=0;i<addBtn.length;i++){
			addEvent(addBtn[i],'click',function(){
				let goodsnum = addBtn[i].previousElementSibling.value;
				let unitprice = addBtn[i].parentNode.nextElementSibling.firstElementChild.innerHTML;
				addBtn[i].previousElementSibling.value = ++goodsnum;
				//计算单价
				addBtn[i].parentNode.nextElementSibling.nextElementSibling.firstElementChild.innerHTML= parseFloat(goodsnum * parseFloat(unitprice)).toFixed(2);
				//折扣
				let subChild = addBtn[i].parentNode.nextElementSibling.lastElementChild.firstElementChild;
				if(subChild){
					let discount = addBtn[i].parentNode.nextElementSibling.lastElementChild.firstElementChild.innerHTML;
					//计算折扣价
					addBtn[i].parentNode.nextElementSibling.nextElementSibling.lastElementChild.firstElementChild.innerHTML= parseFloat(goodsnum * parseFloat(discount)).toFixed(2);
				}	
				let currPrice = addBtn[i].parentNode.nextElementSibling.nextElementSibling.firstElementChild.innerHTML
				totalCount = (parseInt(currPrice + unitprice));
				$(".totalPrice")[0].innerHTML = totalCount;
			},false);	
		}
//		$("#show_price").innerHTML = totalCount;
		//获取所有的"-"号按钮
		let minusBtn = $('.minus');
		for(let i=0;i<minusBtn.length;i++){
			addEvent(minusBtn[i],'click',function(){
				if(minusBtn[i].nextElementSibling.value <= 0){
					minusBtn[i].nextElementSibling.value = 0.00;
				}else if(minusBtn[i].nextElementSibling.value <= 1){					
					minusBtn[i].parentNode.nextElementSibling.nextElementSibling.lastElementChild.firstElementChild.innerHTML = 2196.00;
				}else{
					let goodsnum = minusBtn[i].nextElementSibling.value;
					let unitprice = minusBtn[i].parentNode.nextElementSibling.firstElementChild.innerHTML;
					goodsnum--;
					minusBtn[i].nextElementSibling.value = goodsnum;
				//计算单价
				let sumResult = minusBtn[i].parentNode.nextElementSibling.nextElementSibling.firstElementChild.innerHTML;
				minusBtn[i].parentNode.nextElementSibling.nextElementSibling.firstElementChild.innerHTML= (parseFloat(sumResult-unitprice)).toFixed(2);	
				//折扣
				let subChild = minusBtn[i].parentNode.nextElementSibling.lastElementChild.firstElementChild;
					if(subChild){
						let discount = minusBtn[i].parentNode.nextElementSibling.lastElementChild.firstElementChild.innerHTML;
						//计算折扣价
						let currDis = minusBtn[i].parentNode.nextElementSibling.nextElementSibling.lastElementChild.firstElementChild.innerHTML;
						minusBtn[i].parentNode.nextElementSibling.nextElementSibling.lastElementChild.firstElementChild.innerHTML= (parseFloat(currDis - discount)).toFixed(2);
					}
					let currPrice = minusBtn[i].parentNode.nextElementSibling.nextElementSibling.firstElementChild.innerHTML;
				$(".totalPrice")[0].innerHTML = $(".totalPrice")[0].innerHTML - unitprice;
				}
			},false);
		} 
		
		//点击删除按钮，删除购物车的列表项
		let deletes = $('.del');
		for(let i=0;i<deletes.length;i++){
			addEvent(deletes[i],'click',function(){
				if(confirm("确定要删除吗？")){
					deleteGoods(i,this);
				}
			},false);
		}
	}
//	//计算总价钱
//	function totalMoney(){
//		let totalMoney = 0;
//		let totalCount = 0;
//		let prices = $('.totP');
//		for(let i=0;i<prices.length;i++){
//			totalMoney += parseInt(btns[i].value)*parseFloat(prices[i].lastElementChild.innerHTML);
//			totalCount += parseInt(btns[i].value);
//		}
//		$('#totalMoney').innerHTML = totalMoney.toFixed(2);
//		$('#totalCount').innerHTML = totalCount;
//	}

	//删除商品
	function deleteGoods(num,nodeObj){
		for(let i=0;i<=table.rows[num].cells.length;i++){
			table.rows[num+1].deleteCell(0);
		}
		table.rows[num].cells[0].colSpan = '6';
//		totalMoney();

	}