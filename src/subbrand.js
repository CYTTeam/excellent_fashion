require('./js/base.js');
require('./css/subbrand.css');
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