

///////////////
// index.js //
///////////////

/* ------------------------------------------------------------
 * 依赖模块
 * ------------------------------------------------------------ */

require('./js/owl.carousel.min.js');
require('./js/jquery.waypoints.min.js');
require('./js/base.js');
require('./css/rotateHeads.css');
require('./js/rotateHeads.js');
require('./css/index.css');

/* ------------------------------------------------------------
 *	头部的图片轮播
 * ------------------------------------------------------------ */

$(function () {
    $('#header').height(document.documentElement.clientHeight);
    $('#toggleHeads').rotateHeads([
        './images/page7/1.png',
        './images/page7/2.png',
        './images/page7/3.png',
        './images/page7/4.png',
        './images/page7/5.png',
    ]);
})


/* ------------------------------------------------------------
 * 滚动轮
 * ------------------------------------------------------------ */
$(function () {
     var owl = $("#carousel-wrap");
    owl.owlCarousel({
        autoPlay: 5000,
        items : 4,
        itemsDesktop: false,
        itemsDesktopSmall: false,
        itemsTablet: false,
        itemsTabletSmall: false,
        itemsMobile: false,
    });
    $('.navigation-prev').click(function () {
        owl.trigger('owl.prev');
    })
    $('.navigation-next').click(function () {
        owl.trigger('owl.next');
    })
})


 /* ------------------------------------------------------------
  * jQuery滚动监听
  * ------------------------------------------------------------ */

$(function functionName() {
    $('#header').waypoint(function(direction) {
        if (direction === 'down') {
            $('#header .overlayer').removeClass('active');
        } else if (direction === 'up') {
            $('#header .overlayer').addClass('active');
        }
    }, {offset: -200});

    $('#section1').waypoint(function(direction) {
        if (direction === 'down') {
            $('#section1').addClass('animation-slide-up');
            $('#section2').addClass('animation-slide-up');
        }
    }, {offset: '50%'});
    $('#section3').waypoint(function(direction) {
        if (direction === 'down') {
            $('#section3').addClass('animation-slide-up');
            $('#section4').addClass('animation-slide-up');
        }
    }, {offset: '50%'});
    $('#footer').waypoint(function(direction) {
        if (direction === 'down') {
            $('#footer').addClass('animation-slide-up');
        }
    }, {offset: '100%'});
})
