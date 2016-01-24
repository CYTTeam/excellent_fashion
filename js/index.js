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

    $('#section3').waypoint(function(direction) {
        if (direction === 'down') {
            $('#section3').addClass('animation-slide-up');
            $('#section4').addClass('animation-slide-up');
        }
    }, {
        offset: function() {
          return $(window).height();
        }
    });
    $('#footer').waypoint(function(direction) {
        if (direction === 'down') {
            $('#footer').addClass('animation-slide-up');
        }
    }, {
        offset: function() {
          return $(window).height();
        }
    });
})

/* ------------------------------------------------------------
 * 切换导航栏
 * ------------------------------------------------------------ */

$(function() {
    $('#Liz-navbar').headroom({
        offset : 400,
    });
    $('#nav-toggle').click(function () {
        $('#Liz-navbar').toggleClass('headroom--top').toggleClass('headroom--not-top');
    })
})
