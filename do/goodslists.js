const url = require('url');
const goodslistsdb = require('./db/goodslistsdb');
// console.log("进入goodslists.js");
module.exports = function(req,res){
    console.log("进入goodslists.js");
    //1.接收参数
    let urlObj = url.parse(req.url,true);

    //2.处理
    goodslistsdb.getGoodsLists(function(data){
        //3.响应
        res.statusCode = 200;
        res.setHeader("Content-type","text/html;charset=utf-8");
        res.write(JSON.stringify(data));
        res.end();
    });
}