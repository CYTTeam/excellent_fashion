window.onload = function() {
    var index = 1; //记录点击
    var timer;
    var animated = false;
    var slider = document.getElementById('slider');
    var point = document.getElementById('point').getElementsByTagName('span');
    var arrow_l = document.getElementById('arrow_l');
    var arrow_r = document.getElementById('arrow_r');
    var Children = getChild(slider);
    var ul = Children[0];
    point[0].className = 'on';
    arrow_r.addEventListener('click', function() {

        if (!animated) {
            index++;
            if (index == 4) {
                index = 1;
            };
            if (index == 0) {
                index = 3;
            };
            showPoint();
            animate(-1200);
        }
    });
    arrow_l.addEventListener('click', function() {

        if (!animated) {
            index--;
            if (index == 0) {
                index = 3;
            };
            if (index == 4) {
                index = 1;
            };
            showPoint();
            animate(1200);
        }
    });
    slider.onmouseover = stopAuto;
    slider.onmouseout = autoPlay;
    for (var i = 0; i < point.length; i++) {
        point[i].onmouseover = function() {
            if (!animated) {
                var indexData = parseInt(this.getAttribute('index')); //获得自定义属性
                var wid = -1200 * (indexData - index);
                animate(wid);
                index = indexData;
                showPoint();
            };
        };
    };

    function autoPlay() {
        timer = setInterval(function() {
            arrow_r.click();
        }, 3000)
    };

    function stopAuto() {
        clearInterval(timer)
    };

    function showPoint() {
        for (var i = 0; i < point.length; i++) {
            point[i].className = ''; //删除class
        };
        point[index - 1].className = "on"; //添加class
    };

    function animate(wid) {
        if (wid == 0) {
            return
        };
        var time = 120;
        var interval = 1;
        var speed = wid / (time / interval);
        var left = parseInt(ul.style.left) + wid; //目的左移
        animated = true;

        function goMove() {

            if ((speed < 0 && parseInt(ul.style.left) > left) || (speed > 0 && parseInt(ul.style.left) < left)) {
                ul.style.left = parseInt(ul.style.left) + speed + 'px';
                setTimeout(goMove, interval);
            } else {
                animated = false;
                if (left > -1200) {
                    ul.style.left = -3600 + 'px';
                };
                if (left < -3600) {
                    ul.style.left = -1200 + 'px';
                };
            }
        };

        goMove();
    };

    function getChild(elem) {
        var children = elem.childNodes;
        for (var i = 0; i < children.length; i++) {
            if (children[i].nodeType == 3) {
                elem.removeChild(children[i]);
            }
        }
        return children;
    };



    var lineListContent=$(".lineListContent");
    lineListContent.click(function() {
       lineListContent.filter('.action')
       .removeClass("action");
       $(this).addClass("action");
    });
}
