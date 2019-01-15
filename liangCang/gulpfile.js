var gulp = require("gulp");  //相当于引入一个gulp.js文件
var concat = require("gulp-concat"); 
var uglify = require("gulp-uglify");
var rename = require("gulp-rename");
var sass = require("gulp-sass");


let  basepath = "F:\\phpStudy\\WWW\\liangcang";
//定义一个复制文件的任务
//task函数的第一个参数：copyHtml是任务名
//task函数的第二个参数function是任务copyHtml对应的功能
gulp.task("copy-html",function(){
    gulp.src("*.html")  //当前目录下的所有.html文件
    .pipe(gulp.dest("F:\\phpStudy\\WWW\\liangcang"));
});

//复制图片文件
gulp.task("copy-img",function(){
    gulp.src("img/**/*")  //当前目录下的所有.html文件
    .pipe(gulp.dest("F:\\phpStudy\\WWW\\liangcang\\img"));
});

gulp.task("copy-image",function(){
    gulp.src("image/**/*")  //当前目录下的所有.html文件
    .pipe(gulp.dest("F:\\phpStudy\\WWW\\liangcang\\image"));
});
//复制css文件
gulp.task("copy-css",function(){
    gulp.src("css/**/*")  //当前目录下的所有.html文件
    .pipe(gulp.dest("F:\\phpStudy\\WWW\\liangcang\\css"));
});
//复制js文件
gulp.task("copy-js",function(){
    gulp.src("js/**/*")  //当前目录下的所有.html文件
    .pipe(gulp.dest("F:\\phpStudy\\WWW\\liangcang\\js"));
});

//合并js文件
gulp.task("concat-js",function(){
    gulp.src(["js/cookieTools.js","js/eventTools.js"])
    .pipe(concat("common.js"))
    .pipe(gulp.dest(basepath + "\\js"));
});

//最后交项目的时候再压缩文件
//合并并且压缩js文件
gulp.task("concatAndUglify-js",function(){
    gulp.src(["js/cookieTools.js","js/eventTools.js"])
    .pipe(concat("common.js"))
    .pipe(uglify())
    .pipe(gulp.dest(basepath + "\\js"));
});

//合并并且压缩重命名js文件
gulp.task("concatAndUglifyAndRename-js",function(){
    gulp.src(["js/cookieTools.js","js/eventTools.js"])
    .pipe(concat("common.js"))
    .pipe(gulp.dest(basepath + "\\js"))
    .pipe(uglify())
    .pipe(rename("common.min.js"))
    .pipe(gulp.dest(basepath + "\\js"));
});
//sass的编译
gulp.task("sass",function(){
    gulp.src("sass/*.scss")
    .pipe(sass())
    .pipe(gulp.dest(basepath + "\\css"));
});

//监听
gulp.task("watchall",function(){
    //一旦根目录下任何html文件的内容发生改变，那么就立即执行任务copy-html
    gulp.watch("*.html",["copy-html"]);
    gulp.watch("img/**/*",["copy-img"]);
    gulp.watch("image/**/*",["copy-image"]);
    gulp.watch("css/**/*",["copy-css"]);
    gulp.watch("php/**/*",["copy-php"]);
    gulp.watch("js/**/*",["copy-js"]);
});