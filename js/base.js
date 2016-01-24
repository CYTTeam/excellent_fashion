/**
 * 点击下拉
 */
var dropdown_toggle = $(".dropdown-toggle");
var dropdown_menu=$(".dropdown-menu");
dropdown_toggle.click(function() {
    dropdown_menu.toggle();
});