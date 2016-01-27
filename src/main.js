
require('./js/base.js');
require('./css/main.css');


var logLeft = $(".arrow-left");
var logRight = $(".arrow-right");
var log = $(".logImg");
var num;
logLeft.click(function() {
    if ($('.logImg:first')[0] === log.filter('.Liz-block')[0]) {
      $('.logImg:first').before($('.logImg:last'));
    }

   log.filter('.Liz-block')
   .addClass("Liz-none")
   .removeClass("Liz-block")
   .prev()
   .addClass('Liz-block')
   .removeClass('Liz-none');
});
logRight.click(function() {
    if ($('.logImg:last')[0] === log.filter('.Liz-block')[0]) {
      $('.logImg:last').after($('.logImg:first'));
    }
    log.filter('.Liz-block')
   .addClass("Liz-none")
   .removeClass("Liz-block")
   .next()
   .addClass('Liz-block')
   .removeClass('Liz-none');
});
