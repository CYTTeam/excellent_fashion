
///////////////
// groupIntro.js //
///////////////

/* ------------------------------------------------------------
 * 依赖模块
 * ------------------------------------------------------------ */
 require('./css/animation.css');
 require('./css/base.css');
 require('./css/rotateHeads.css');
 require('./css/groupIntro.css');

require('./js/tab.js');
require('./js/jquery.waypoints.min.js');
require('./js/base.js');
require('./js/rotateHeads.js');


/* ------------------------------------------------------------
 *	头部的图片轮播
 * ------------------------------------------------------------ */

$(function () {
    $('#toggleHeads').rotateHeads([
        './images/page7/1.png',
        './images/page7/2.png',
        './images/page7/3.png',
        './images/page7/4.png',
        './images/page7/5.png',
    ]);
})


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

}

/* ------------------------------------------------------------
 * 历史发展轴
 * ------------------------------------------------------------ */
 $(function () {
     var timeData = {
         2006: [20, '2006:卓尚服饰全年销售增加265%'],
         2007: [30, '2007:卓尚服饰全年销售增加265%'],
         2008: [40, '2008:卓尚服饰全年销售增加265%'],
         2009: [50, '2009:卓尚服饰全年销售增加265%'],
         2010: [60, '2010:卓尚服饰全年销售增加265%'],
         2011: [70, '2011:卓尚服饰全年销售增加265%'],
         2012: [80, '2012:卓尚服饰全年销售增加265%'],
         2013: [90, '2013:卓尚服饰全年销售增加265%']
     };

     $('#time-axis').on('click', '.time-year', function() {
         var year = $(this).text();
         var percent = timeData[year][0];
         var width = $('.time-axis').width();
         var offset = (60 - percent) * 8;
         $('.time-label').text(timeData[year][1]).css('left', percent * width / 100 + offset);
         $('.time-axis').css('background-position', percent * width / 100 + offset + 'px 0');
         $('.time-arrow').css('left', percent * width / 100 + offset);
         $('.time-years').css('left', offset);
         $('.time-year').filter('.active')
         .removeClass("active");
         $(this).addClass("active");
     });

     $('.time-year:eq(2)').trigger('click');
 })

/* ------------------------------------------------------------
 * jQuery滚动监听
 * ------------------------------------------------------------ */

$(function functionName() {
   $('.section1, .section2, .section3').waypoint(function(direction) {
       if (direction === 'down') {
           $(this.element).addClass('animation-slide-up');
       }
   }, {
      offset: '50%'
   });
   $('#footer').waypoint(function(direction) {
       if (direction === 'down') {
           $(this.element).addClass('animation-slide-up');
       }
   }, {
      offset: '100%'
   });
})

/* ------------------------------------------------------------
 * 初始化（滚动到响应的位置）
 * ------------------------------------------------------------ */

$(function () {
    window.setTimeout(function () {
        var author = location.hash;
        var position = author && $(author).offset().top;
        $('html, body').animate({scrollTop: position}, 500);
    }, 500);
})
