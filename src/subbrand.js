require('./css/animation.css');
require('./css/base.css');
require('./css/subbrand.css');
require('./js/base.js');

$(".weixinIco").mouseover(function(){
	console.log("mouseover");
  $(".weixinIco2")
  .addClass('Liz-block')
  .addClass('Liz-none')
  .removeClass('Liz-none');
  $(".weixinIco2").mouseleave(function(){
  $(".weixinIco2")
  .addClass('Liz-block')
  .addClass('Liz-none')
  .removeClass('Liz-block');
});
});
