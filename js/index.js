
/**
 * 首页滚动栏
 */
$(function () {
     var owl = $("#carousel-wrap");
    owl.owlCarousel({
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

/**
 * jQuery滚动监听
 */

$(function functionName() {
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
