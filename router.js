const fs = require('fs');
const path = require('path');
const routerinfo = require('./routerinfo');

module.exports = {
    "nd": function (req, res, filename) {
        console.log(123);
        routerinfo[path.basename(filename, ".nd")](req, res);
    },
    "html": function (req, res, filename) {
        res.statusCode = 200;
        res.setHeader("Content-type", "text/html;charset=utf-8");
        fs.readFile('piaoCheng/' + filename, (err, data) => {
            if (err) {
                res.write(err);
                res.end();
            } else {
                res.write(data);
                res.end();
            }
        });
    },
    "css": function (req, res, filename) {
        // console.info("来了，老弟");
        res.statusCode = 200;
        res.setHeader("Content-type", "text/css;charset=utf-8");
        fs.readFile('piaoCheng/' + filename, (err, data) => {
            if (err) {
                res.write(err);
                res.end();
            } else {
                res.write(data);
                res.end();
            }
        });
    },
    "js": function (req, res, filename) {
        res.statusCode = 200;
        res.setHeader("Content-type", "text/html;charset=utf-8");
        res.write('你又胡写的呢');
        res.end();
    },
    "jpg": function (req, res, filename) {
        res.statusCode = 200;
        res.setHeader("Content-type", "binary", "image/jpeg");
        fs.readFile('piaoCheng/' + filename, (err, data) => {
            if (err) {
                res.write(err);
                res.end();
            } else {
                res.write(data, "binary");
                res.end();
            }
        });
    },
    "png": function (req, res, filename) {
        res.statusCode = 200;
        res.setHeader("Content-type", "binary", "image/png");
        fs.readFile('piaoCheng/' + filename, (err, data) => {
            if (err) {
                res.write(err);
                res.end();
            } else {
                res.write(data, "binary");
                res.end();
            }
        });
    },
    "error": function (req, res) {
        res.statusCode = 404;
        res.setHeader("Content-type", "text/html;charset=utf-8");
        res.write('出错了');
        res.end();
    }
}