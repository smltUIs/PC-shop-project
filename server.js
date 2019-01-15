const http = require('http');
const url = require('url');
const path = require('path');

const router = require('./router');

//1.创建服务器
const serverObj = http.createServer((req,res)=>{
    if(req.url != "/favicon.ico"){
        let urlObj = url.parse(req.url);
        // console.log(urlObj);
        let urlStr = urlObj.pathname.substring(1);
        let extname = path.extname(urlStr).substring(1);
        console.log("extname="+extname);
        try{
        // console.log(urlStr+"1222");

            router[extname](req,res,urlStr);
        }catch{
            router['error'](req,res);
        }
    }
});

//2.监听
serverObj.listen(706,"localhost",()=>{
    console.log("等待中......");
});