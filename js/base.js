/* ------------------------------------------------------------
 * 点击下拉
 * ------------------------------------------------------------ */
var dropdown_toggle = $(".dropdown");
var dropdown_menu=$(".dropdown-menu");
dropdown_toggle.hover(function() {
    dropdown_menu.stop(true, true).slideDown();
    return false;
}, function() {
    dropdown_menu.stop(true, true).slideUp();
    return false;
});



/* ------------------------------------------------------------
 * 返回顶部
 * ------------------------------------------------------------ */
smoothScroll('#go-header', '#header');

function smoothScroll(btn, target) {
    var animationTime = 500;
    $(btn).on('click', function() {
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
    });
    $('#nav-toggle').click(function () {
        $('#Liz-navbar').toggleClass('headroom--top').toggleClass('headroom--not-top');
    })
})
