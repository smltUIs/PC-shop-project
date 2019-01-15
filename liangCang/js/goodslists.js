function showGoodsLists(){
    $.get('goodslists.nd',function(str){
        let arr = JSON.parse(str);
        let htmlStr = "";
        for(let i in arr){
            htmlStr += '<div class="item">\
            <div class="imgItem">\
                <a href="javascript:;">\
                    <img src="'+arr[i].goodsBigImg+'" alt="奢护养颜保湿修护亮颜银霜 | 长效保湿 重塑轮廓" title="'+arr[i].imgTitle+'" />\
                </a>\
                <!--遮罩层-->\
                <a href="javascript:;" class="goodsInfo">\
                    <p class="money">￥'+arr[i].goodsMoney+'</p>\
                    <p class="tle">'+arr[i].goodsTitl+'</p>\
                    <p class="txt">'+arr[i].goodsTxt+'</p>\
                </a>\
                <span>\
                    <img src="'+arr[i].goodsDiscImg+'"/>\
                </span>\
            </div>\
            <div class="bar">\
                <a href="javascript:;" class="who"><img src="'+arr[i].goodsSImg+'"/>'+arr[i].sImgCon+'</a>\
                <a href="javascript:;" class="goodsFavCount" onclick="goodsAddFavour(event,this);">'+arr[i].goodsFavCount+'</a>\
            </div>\
        </div>';
        }
    })
}
$(function(){
    showGoodsLists();
})