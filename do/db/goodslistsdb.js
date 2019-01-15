// 此文件是针对集合goodslists的所有数据库操作

const mongoose = require('mongoose');
const dbconfig = require('./dbconfig');

//定义模板（定义一个JavaScript对象）
let goodsListsSchema = new mongoose.Schema({
    'goodsBigImg':String,
    'imgTitle':String,
    'goodsMoney':Number,
    'goodsTitl':String,
    'goodsTxt':String,
    'goodsDiscImg':String,
    'goodsSImg':String,
    'sImgCon':String,
    'goodsFavCount':Number
});

//定义模型（吧模板对象和集合连接起来）
let goodslistsModel = mongoose.model("goodslists",goodsListsSchema);

module.exports = {
    //增

    //删
     
    //改

    //查
    getGoodsLists:function(condation,func){
        //2.处理（连接数据库）
        mongoose.connect(dbconfig.connect).then(
            function(){
                //3.增删改查，就是使用模型对象来操作
                //1)查询
                goodslistsModel.find(condation,(err,data)=>{
                    mongoose.disconnect();
                    if(err){
                        func([]);
                    }else{
                        func(data);
                    }
                });
            }
        );
    }
}
