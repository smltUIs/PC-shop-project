
   class BigMirror {
        constructor(obj) {
            let defaultObj = {
                boxDom: obj.boxDom,
                mirrorWidth: 120,
                mirrorHeight: 100,
                mirrorOpacity: 0.4,
                mirrorBgColor: 'white',
                multiple: 2,
                bigImg: null
            }
            for (let key in obj) {
                obj[key] && (defaultObj[key] = obj[key]);
            }
            for (let key in defaultObj) {
                this[key] = defaultObj[key];
            }
            this.createUI();
            this.addEvent();
        }
        createUI() {
            //放大镜
            this.mirrorDom = document.createElement('div');
            this.mirrorDom.style.cssText = "position:absolute;display:none;";
            this.mirrorDom.style.width = this.mirrorWidth + 'px';
            this.mirrorDom.style.height = this.mirrorHeight + 'px';
            this.mirrorDom.style.backgroundColor = this.mirrorBgColor;
            this.mirrorDom.style.opacity = this.mirrorOpacity;
            this.boxDom.appendChild(this.mirrorDom);

            //显示框
            this.showBoxDom = document.createElement('div');
            this.showBoxDom.style.cssText = "position:absolute;display:none;";
            this.showBoxDom.style.width = (this.mirrorWidth * this.multiple) + 'px';
            this.showBoxDom.style.height = (this.mirrorHeight * this.multiple) + 'px';
            this.showBoxDom.style.backgroundImage = 'url(' + this.bigImg + ')';
            this.showBoxDom.style.backgroundSize = this.boxDom.offsetWidth * this.multiple + 'px ' + this.boxDom.offsetHeight *
                this.multiple + 'px';
            this.showBoxDom.style.left = (this.boxDom.offsetWidth + 10) + 'px';
            this.showBoxDom.style.top = 0 + 'px';
            this.showBoxDom.className = "showBox";
            this.boxDom.appendChild(this.showBoxDom);
        }
        addEvent() {
            this.boxDom.onmouseover = function () {
                this.mirrorDom.style.display = "block";
                this.showBoxDom.style.display = 'block';
            }.bind(this);
            this.boxDom.onmouseout = function () {
                this.mirrorDom.style.display = "none";
                this.showBoxDom.style.display = 'none';
            }.bind(this);
            this.boxDom.onmousemove = function (ev) {
                var ev = window.event || event;
                //数据
                var currentLeft = ev.pageX - this.boxDom.offsetLeft - this.mirrorWidth / 2;
                var currentTop = ev.pageY - this.boxDom.offsetTop - this.mirrorHeight / 2;
                //判断边界
                if (currentLeft <= 0) {
                    currentLeft = 0;
                } else if (currentLeft >= this.boxDom.offsetWidth - this.mirrorWidth) {
                    currentLeft = this.boxDom.offsetWidth - this.mirrorWidth;
                }
                if (currentTop <= 0) {
                    currentTop = 0;
                } else if (currentTop >= this.boxDom.offsetHeight - this.mirrorHeight) {
                    currentTop = this.boxDom.offsetHeight - this.mirrorHeight;
                }
                //改变外观
                this.mirrorDom.style.left = currentLeft + 'px';
                this.mirrorDom.style.top = currentTop + 'px';
                this.showBoxDom.style.backgroundPosition = (currentLeft * -this.multiple) + 'px ' + (currentTop *
                    -this.multiple) + 'px';
            }.bind(this);

        }
    }
    window.onload = function () {
        new BigMirror({
            boxDom: $(".picBox")[0],
            mirrorWidth: 120,
            mirrorHeight: 100,
            bigImg: 'image/420551.jpg'
        });
        var liBgImg = {
            "0": "image/420551.jpg",
            "1": "image/420552.jpg",
            "2": "image/420553.jpg",
            "3": "image/420554.jpg",
            "4": "image/420555.jpg"
        }
        for (let i = 0; i < $('#s_slider').children.length; i++) {
            $('#s_slider').children[i].style.backgroundImage = "url(" + liBgImg[i] + ")";
        }
        changeBgImg();
        // //播放方向
        $("#prev").onclick = function () {
            changeDirection(1);
            leftMove();
        }
        $("#next").onclick = function () {
            changeDirection(-1);
            leftMove();
        }
        var moveLeft = 0;

        function leftMove() {
            //数据
            moveLeft = moveLeft + directionLeft * 100;
            //边界
            if (directionLeft == -1) {
                if (moveLeft <= -500) {
                    moveLeft = -500;
                }
            } else if (directionLeft == 1) {
                if (moveLeft >= 0) {
                    moveLeft = 0;
                }
            }
            //改变外观
            $("#s_slider").style.left = moveLeft + 'px';
        }



    }
    //点击下面的图片，替换背景图片
    function changeBgImg() {
        for (var i = 0; i < $("#s_slider").children.length; i++) {
            $('#s_slider').children[i].onmouseenter = function () {
                $('.picBox')[0].style.backgroundImage = this.style.backgroundImage;
                $('.showBox')[0].style.backgroundImage = this.style.backgroundImage;
            }
        }
    }
    function changeDirection(direction) {
        directionLeft = direction;
    }