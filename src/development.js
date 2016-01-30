
///////////////
// development.js //
///////////////

/* ------------------------------------------------------------
 * 依赖模块
 * ------------------------------------------------------------ */

require('./js/base.js');
require('./css/development.css');



var panel_heading = $(".panel-heading");
var panel_a= $(".panel-a");
panel_a.click(function(e) {
    panel_a.parent('h4').parent('div').filter('.Liz-bg-blue')
        .addClass('Liz-bg-default')
        .addClass('Liz-bg-blue')
        .removeClass('Liz-bg-blue')
        .children('h4')
        .children(".Liz-fullWidth")
        .children("a")
        .children(".Liz-massage")
        .attr("src", "images/page4/massage2.png");
    $(this).parent('h4').parent('div')
        .addClass('Liz-bg-default')
        .addClass('Liz-bg-blue')
        .removeClass('Liz-bg-default')
        .children('h4')
        .children(".Liz-fullWidth")
        .children("a")
        .children(".Liz-massage")
        .attr("src", "images/page4/massage1.png");
    $(this).children("pre")
        .addClass("Liz-text-white")
        .removeClass("Liz-text-black");
    panel_a.parent('h4').parent('div').filter('.Liz-bg-default')
    	.children('h4')
    	.children('a')
        .children("pre")
        .addClass("Liz-text-white")
        .addClass("Liz-text-black")
        .removeClass("Liz-text-white");
});