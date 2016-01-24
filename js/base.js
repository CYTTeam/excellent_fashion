/* ------------------------------------------------------------
 * 点击下拉
 * ------------------------------------------------------------ */
var dropdown_toggle = $(".dropdown-toggle");
var dropdown_menu=$(".dropdown-menu");
dropdown_toggle.click(function() {
    dropdown_menu.toggle();
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
