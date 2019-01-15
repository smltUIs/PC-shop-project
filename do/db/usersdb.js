/*此文件是针对集合goodslists的所有数据库操作*/
const mongoose = require('mongoose');
const dbconfig = reqire('./dbconfig');

//定义模板（定义一个JavaScript对象）
let goodsListsSchema = new mongoose.Schema({

})

//定义模型（把模板的对象和集合连接起来）
let goodslistsModel = mongoose.model("goodslists",goodsListsSchema);

module.exports = {
    //增

    //删

    //改 

    //查
}