/* ------------------------------------------------------------
 * jQuery滚动监听
 * ------------------------------------------------------------ */

$(function functionName() {
   $('.newList-item').waypoint(function(direction) {
       if (direction === 'down') {
           $(this.element).addClass('animation-slide-up');
       }
   }, {offset: '80%'});
   $('#footer').waypoint(function(direction) {
       if (direction === 'down') {
           $('#footer').addClass('animation-slide-up');
       }
   }, {offset: '80%'});
})
