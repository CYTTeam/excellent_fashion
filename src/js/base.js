
/////////////
// base.js //
/////////////



/* ------------------------------------------------------------
 * 公共依赖模块
 * ------------------------------------------------------------ */

require('./jquery.headroom.min.js');
require('./headroom.min.js');

/* ------------------------------------------------------------
*	加载footer
* ------------------------------------------------------------ */
var footer = require('../tpl/footer.html');
$(function () {
    $('#footer').html(footer);
})

/* ------------------------------------------------------------
*	加载navbar
* ------------------------------------------------------------ */

var navbar = require('../tpl/navbar.html');
$(function () {
    $('#Liz-navbar').html(navbar);
})

/* ------------------------------------------------------------
 * 点击下拉
 * ------------------------------------------------------------ */

$(function () {
    var dropdown = $(".dropdown");
    dropdown.hover(function() {
        var dropdown_menu = $(this).find(".dropdown-menu");
        dropdown_menu.stop(true, true).slideDown(300);
        return false;
    }, function() {
        var dropdown_menu = $(this).find(".dropdown-menu");
        dropdown_menu.stop(true, true).slideUp(100);
        return false;
    });

})



/* ------------------------------------------------------------
 * 返回顶部
 * ------------------------------------------------------------ */
smoothScroll('.go-header', '#header');

function smoothScroll(btn, target) {
    var animationTime = 500;
    $(document).on('click', btn, function() {
        var position = $(target).offset().top;
        $('html, body').animate({scrollTop: position}, animationTime);
    })
}

/* ------------------------------------------------------------
 * 切换导航栏
 * ------------------------------------------------------------ */

$(function() {
    $('#Liz-navbar').headroom({
        offset : 100,
        onTop: function() {
            $('.navicon').show();
        },
        onNotTop: function () {
            $('.navicon').hide();
        }
    });
    $('#nav-toggle').click(function () {
        $('#Liz-navbar').removeClass('headroom--top').addClass('headroom--not-top');
        $('.navicon').hide();
    })
})
