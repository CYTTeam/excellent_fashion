webpackJsonp([1],{

/***/ 0:
/*!***************************!*\
  !*** ./src/groupIntro.js ***!
  \***************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {
	///////////////
	// groupIntro.js //
	///////////////
	
	/* ------------------------------------------------------------
	 * 依赖模块
	 * ------------------------------------------------------------ */
	 __webpack_require__(/*! ./css/animation.css */ 2);
	 __webpack_require__(/*! ./css/base.css */ 6);
	 __webpack_require__(/*! ./css/rotateHeads.css */ 13);
	 __webpack_require__(/*! ./css/groupIntro.css */ 33);
	
	__webpack_require__(/*! ./js/tab.js */ 37);
	__webpack_require__(/*! ./js/jquery.waypoints.min.js */ 38);
	__webpack_require__(/*! ./js/base.js */ 17);
	__webpack_require__(/*! ./js/rotateHeads.js */ 32);
	
	
	/* ------------------------------------------------------------
	 *	头部的图片轮播
	 * ------------------------------------------------------------ */
	
	$(function () {
	    $('#toggleHeads').rotateHeads([
	        './images/page7/1.png',
	        './images/page7/2.png',
	        './images/page7/3.png',
	        './images/page7/4.png',
	        './images/page7/5.png',
	    ]);
	})
	
	
	window.onload = function() {
	    var index = 1; //记录点击
	    var timer;
	    var animated = false;
	    var slider = document.getElementById('slider');
	    var point = document.getElementById('point').getElementsByTagName('span');
	    var arrow_l = document.getElementById('arrow_l');
	    var arrow_r = document.getElementById('arrow_r');
	    var Children = getChild(slider);
	    var ul = Children[0];
	    point[0].className = 'on';
	    arrow_r.addEventListener('click', function() {
	
	        if (!animated) {
	            index++;
	            if (index == 4) {
	                index = 1;
	            };
	            if (index == 0) {
	                index = 3;
	            };
	            showPoint();
	            animate(-1200);
	        }
	    });
	    arrow_l.addEventListener('click', function() {
	
	        if (!animated) {
	            index--;
	            if (index == 0) {
	                index = 3;
	            };
	            if (index == 4) {
	                index = 1;
	            };
	            showPoint();
	            animate(1200);
	        }
	    });
	    slider.onmouseover = stopAuto;
	    slider.onmouseout = autoPlay;
	    for (var i = 0; i < point.length; i++) {
	        point[i].onmouseover = function() {
	            if (!animated) {
	                var indexData = parseInt(this.getAttribute('index')); //获得自定义属性
	                var wid = -1200 * (indexData - index);
	                animate(wid);
	                index = indexData;
	                showPoint();
	            };
	        };
	    };
	
	    function autoPlay() {
	        timer = setInterval(function() {
	            arrow_r.click();
	        }, 3000)
	    };
	
	    function stopAuto() {
	        clearInterval(timer)
	    };
	
	    function showPoint() {
	        for (var i = 0; i < point.length; i++) {
	            point[i].className = ''; //删除class
	        };
	        point[index - 1].className = "on"; //添加class
	    };
	
	    function animate(wid) {
	        if (wid == 0) {
	            return
	        };
	        var time = 120;
	        var interval = 1;
	        var speed = wid / (time / interval);
	        var left = parseInt(ul.style.left) + wid; //目的左移
	        animated = true;
	
	        function goMove() {
	
	            if ((speed < 0 && parseInt(ul.style.left) > left) || (speed > 0 && parseInt(ul.style.left) < left)) {
	                ul.style.left = parseInt(ul.style.left) + speed + 'px';
	                setTimeout(goMove, interval);
	            } else {
	                animated = false;
	                if (left > -1200) {
	                    ul.style.left = -3600 + 'px';
	                };
	                if (left < -3600) {
	                    ul.style.left = -1200 + 'px';
	                };
	            }
	        };
	
	        goMove();
	    };
	
	    function getChild(elem) {
	        var children = elem.childNodes;
	        for (var i = 0; i < children.length; i++) {
	            if (children[i].nodeType == 3) {
	                elem.removeChild(children[i]);
	            }
	        }
	        return children;
	    };
	
	}
	
	/* ------------------------------------------------------------
	 * 历史发展轴
	 * ------------------------------------------------------------ */
	 $(function () {
	     var timeData = {
	         2006: [20, '2006:卓尚服饰全年销售增加265%'],
	         2007: [30, '2007:卓尚服饰全年销售增加265%'],
	         2008: [40, '2008:卓尚服饰全年销售增加265%'],
	         2009: [50, '2009:卓尚服饰全年销售增加265%'],
	         2010: [60, '2010:卓尚服饰全年销售增加265%'],
	         2011: [70, '2011:卓尚服饰全年销售增加265%'],
	         2012: [80, '2012:卓尚服饰全年销售增加265%'],
	         2013: [90, '2013:卓尚服饰全年销售增加265%']
	     };
	
	     $('#time-axis').on('click', '.time-year', function() {
	         var year = $(this).text();
	         var percent = timeData[year][0];
	         var width = $('.time-axis').width();
	         var offset = (60 - percent) * 8;
	         $('.time-label').text(timeData[year][1]).css('left', percent * width / 100 + offset);
	         $('.time-axis').css('background-position', percent * width / 100 + offset + 'px 0');
	         $('.time-arrow').css('left', percent * width / 100 + offset);
	         $('.time-years').css('left', offset);
	         $('.time-year').filter('.active')
	         .removeClass("active");
	         $(this).addClass("active");
	     });
	
	     $('.time-year:eq(2)').trigger('click');
	 })
	
	/* ------------------------------------------------------------
	 * jQuery滚动监听
	 * ------------------------------------------------------------ */
	
	$(function functionName() {
	   $('.section1, .section2, .section3').waypoint(function(direction) {
	       if (direction === 'down') {
	           $(this.element).addClass('animation-slide-up');
	       }
	   }, {
	      offset: '50%'
	   });
	   $('#footer').waypoint(function(direction) {
	       if (direction === 'down') {
	           $(this.element).addClass('animation-slide-up');
	       }
	   }, {
	      offset: '100%'
	   });
	})
	
	/* ------------------------------------------------------------
	 * 初始化（滚动到响应的位置）
	 * ------------------------------------------------------------ */
	
	$(function () {
	    window.setTimeout(function () {
	        var author = location.hash;
	        var position = author && $(author).offset().top;
	        $('html, body').animate({scrollTop: position}, 500);
	    }, 500);
	})
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! jquery */ 1)))

/***/ },

/***/ 13:
/*!*********************************!*\
  !*** ./src/css/rotateHeads.css ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !./../../~/css-loader!./../../~/postcss-loader!./rotateHeads.css */ 14);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../~/style-loader/addStyles.js */ 5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./rotateHeads.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./rotateHeads.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 14:
/*!*******************************************************************!*\
  !*** ./~/css-loader!./~/postcss-loader!./src/css/rotateHeads.css ***!
  \*******************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../~/css-loader/lib/css-base.js */ 4)();
	// imports
	
	
	// module
	exports.push([module.id, "div[data-role=\"cyt-turnPage-3d\"] {height: 100%;}\r\ndiv[data-role=\"cyt-turnPage-3d\"] .box {\r\n    position: relative;\r\n    width: 100%;\r\n    height: 100%;\r\n\t-webkit-transform-style: preserve-3d;\r\n\t        transform-style: preserve-3d;\r\n    -webkit-transform: perspective(3500px) rotateX(0deg);\r\n            transform: perspective(3500px) rotateX(0deg);\r\n}\r\ndiv[data-role=\"cyt-turnPage-3d\"] .page {\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    left: 0;\r\n    top: 0;\r\n    display: none;\r\n}\r\n", ""]);
	
	// exports


/***/ },

/***/ 32:
/*!*******************************!*\
  !*** ./src/js/rotateHeads.js ***!
  \*******************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(jQuery) {(function ($) {
	    function RotateHeads() {
	        this.number = 0;
	        this.index = 1;
	        this.target = null;
	        this.height = 0;
	    }
	
	    RotateHeads.prototype = {
	        _attachPlugin: function (target, options) {
	            var target = this.target = $(target); //匹配的对象
	            var pages = target.find('.page');
	            var height = this.height = pages.height(); //每一页的高
	            var number = this.number = pages.length;
	            var _instance = this;
	            var counter = 0;
	            var scale = this.scale = (3500 - height / 2) / 3500; //视距（屏幕后的视点到屏幕的距离）减去translatez除视距,求出3dbox的缩放比例
	            target.css('transform', 'scale(' + scale + ',' + scale + ')');
	            options.forEach(function (value, index) {
	                var img = $('<img class="header-img" />');
	                img.attr('src', value);
	                pages
	                    .slice(index, index + 1)
	                    .css('background-image', 'url(' + img.attr('src') + ')');
	
	                img.load(function() {
	                    counter ++;
	                    if (counter === number) {
	                        pages.slice(0, 1)
	                            .css('transform', ' rotateX(0deg) translateZ(' + height / 2 + 'px)')
	                            .addClass('active')
	                            .show();
	                        pages.slice(1, 2)
	                            .css('transform', ' rotateX(-90deg) translateZ(' + height / 2 + 'px)')
	                            .show();
	                        _instance._addTimer();
	                    }
	                });
	            })
	        },
	
	
	        _addTimer: function () {
	            var _instance = this;
	            var pre, now, next;
	
	            window.setInterval(function () {
	                if (_instance.index < _instance.number - 1) {
	                    pre = _instance.index - 1;
	                    now = _instance.index;
	                    next = _instance.index + 1;
	                    _instance.index ++;
	                } else if (_instance.index === _instance.number - 1) {
	                    pre = _instance.index - 1;
	                    now = _instance.index;
	                    next = 0;
	                    _instance.index = _instance.number;
	                } else if (_instance.index === _instance.number) {
	                    pre = _instance.number - 1;
	                    now = 0;
	                    next = 1;
	                    _instance.index = 1;
	                }
	
	                _instance._rotateHead(pre, now, next);
	            }, 6500);
	        },
	
	
	        _setTransition: function(target) {
	            target.css('transition', 'all 1.5s ease-out');
	        },
	
	
	        _clearTransition: function(target) {
	            target.css('transition', 'none');
	        },
	
	        _rotateHead: function (pre, now, next) {
	            var pages = this.target.find('.page');
	            var rotate, prePage, nextPage;
	            var box = this.target.children('.box');
	            var _instance = this;
	            prePage = pages.slice(pre, pre + 1).removeClass('active');
	            nowPage = pages.slice(now, now + 1).addClass('active');
	            nextPage = pages.slice(next, next + 1);
	            this._setTransition(box);
	            box.css('transform', 'perspective(3500px) rotateX(90deg)');
	            box.one('transitionend', function() {
	                pages.hide();
	                _instance._clearTransition(box);
	                box.css('transform', 'perspective(3500px) rotateX(0deg)');
	                prePage.show();
	                nowPage.show();
	                nextPage.show();
	                prePage.css('transform', 'rotateX(90deg) translateZ(' + _instance.height / 2 + 'px)');
	                nowPage.css('transform', 'rotateX(0deg) translateZ(' + _instance.height / 2 + 'px)');
	                nextPage.css('transform', 'rotateX(-90deg) translateZ(' + _instance.height / 2 + 'px)');
	            });
	        }
	
	    }
	
	
	
	    $.extend($.fn, {
	        rotateHeads: function (options) {
	            return this.each(function () {
	                plugin._attachPlugin(this, options || {});
	            });
	        }
	    })
	
	
	    var plugin = new RotateHeads();
	}(jQuery));
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! jquery */ 1)))

/***/ },

/***/ 33:
/*!********************************!*\
  !*** ./src/css/groupIntro.css ***!
  \********************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !./../../~/css-loader!./../../~/postcss-loader!./groupIntro.css */ 34);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../~/style-loader/addStyles.js */ 5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./groupIntro.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./groupIntro.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 34:
/*!******************************************************************!*\
  !*** ./~/css-loader!./~/postcss-loader!./src/css/groupIntro.css ***!
  \******************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../~/css-loader/lib/css-base.js */ 4)();
	// imports
	
	
	// module
	exports.push([module.id, ".header {\n    height: 270px;\n}\n\n/**\n * chairmen\n */\n\n.chairmanText {\n    max-height: 553px;\n    overflow: auto;\n}\n\n/**\n *group honor\n */\n\n#slider {\n    width: 1200px;\n    height: 390px;\n    margin: 0 auto;\n    position: relative;\n    overflow: hidden;\n    font-size: 16px;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n}\n#slider ul {\n    width: 6000px;\n    position: absolute;\n}\n#slider ul li {\n    width: 1200px;\n    float: left;\n}\n#point {\n    position: absolute;\n    display: inline-block;\n    float: left;\n    top: 360px;\n    left: 567px;\n    font-size: 60px;\n    z-index: 2;\n}\n#point span {\n    float: left;\n    height: 8px;\n    width: 8px;\n    border: 1px solid #44bcbc;\n    border-radius: 5px;\n    background: #ffffff;\n    margin-left: 10px;\n}\n#point .on {\n    background: #44bcbc;\n}\n\n/**\n * development history\n */\n\n#time-axis {\n    overflow: hidden;\n}\n.time-axis {\n    margin-top: 15%;\n    margin-bottom: 5%;\n    background-image: url(" + __webpack_require__(/*! ../images/page1/line.png */ 35) + ");\n    background-repeat: repeat-x;\n    height: 10px;\n    -webkit-transition: all 0.4s ease-out;\n            transition: all 0.4s ease-out;\n}\n.time-years {\n    font-size: 0;\n    -webkit-transition: all 0.4s ease-out;\n            transition: all 0.4s ease-out;\n    left: 0;\n}\n.time-years li {\n    display: inline-block;\n    text-align: center;\n    font-size: 16px;\n    padding-bottom: 55px;\n    margin-top: -30px;\n}\n.time-years li.active {\n    font-size: 20px;\n    color: #44bcbc;\n}\n.time-arrow {\n    height: 10px;\n    width: 15px;\n    position: absolute;\n    top: 168px;\n    margin-left: 7px;\n    background: url(" + __webpack_require__(/*! ../images/page1/top-angle.png */ 36) + ") no-repeat;\n    -webkit-transition: all 0.4s ease-out;\n            transition: all 0.4s ease-out;\n    margin-left: 45px;\n    left: 0;\n}\n.time-label {\n    width: 205px;\n    line-height: 24px;\n    font-size: 20px;\n    color: #888;\n    position: absolute;\n    top: 56px;\n    left: 0;\n    -webkit-transition: all 0.4s ease-out;\n            transition: all 0.4s ease-out;\n}\n\n/**\n * group culture\n */\n\n.time-year {\n    margin-left: -53px;\n    padding-left: 71px;\n    overflow: auto;\n}\n.Liz-scroll {\n    margin-right: 20px;\n    padding-right: 20px;\n}\n\n/* 滚动条整体部分width,height,background,border */\n\n.Liz-scroll::-webkit-scrollbar {\n    width: 5px;\n    height: 10px;\n}\n\n/* 滚动条两端的按钮。可以用display:none让其不显示 */\n\n.Liz-scroll::-webkit-scrollbar-button {\n    display: none;\n}\n\n/*   内层轨道，滚动条中间部分（除去） */\n\n.Liz-scroll::-webkit-scrollbar-track-piece {\n    background: #C0C0C0;\n}\n\n/*  滚动条里面可以拖动的那部分 */\n\n.Liz-scroll::-webkit-scrollbar-thumb {\n    background: #44bcbc;\n    border-radius: 4px;\n}\n", ""]);
	
	// exports


/***/ },

/***/ 35:
/*!***********************************!*\
  !*** ./src/images/page1/line.png ***!
  \***********************************/
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABLAAAAALCAYAAABvY3RqAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjVEM0JDM0M2QkRGMzExRTU4OERERDc3QTNENzBCNkEwIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjVEM0JDM0M3QkRGMzExRTU4OERERDc3QTNENzBCNkEwIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NUQzQkMzQzRCREYzMTFFNTg4RERENzdBM0Q3MEI2QTAiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NUQzQkMzQzVCREYzMTFFNTg4RERENzdBM0Q3MEI2QTAiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6ZvmqgAAABCUlEQVR42uzcXYrCMBiG0aQ7yR67jN52e+lSokULFUQU/Pkaz4HCwLyDNM9dmJlca20JAAAAAIIazk++Pmn39aMn9G6e5y7ew05ffZ2Lvnb62ulrp6+dvnb66utcLk+utW6XWetvYuVSyt2brmVZQu/GcbzZTdN0yPew01dfffV1fp/c7bZf7fvuz/3V+/7b5+qrr3PW1znrq6++UT53SAAAAAAQmAssAAAAAEJzgQUAAABAaPsLrPzkz0TfpU7ew05ffZ2Lvnb62ulrp6+dvnb66utc1m+21lIPXvknZ+iLvuiLvuirr776oi/6Hoc/IQQAAAAgNBdYAAAAAITmAgsAAACA0E4CDACF2SThZsQNowAAAABJRU5ErkJggg=="

/***/ },

/***/ 36:
/*!****************************************!*\
  !*** ./src/images/page1/top-angle.png ***!
  \****************************************/
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAMCAYAAABr5z2BAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjg1QzY1MzNFQkRGMzExRTVCNEY3Q0RFOUIxQTE3QjAxIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjg1QzY1MzNGQkRGMzExRTVCNEY3Q0RFOUIxQTE3QjAxIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ODVDNjUzM0NCREYzMTFFNUI0RjdDREU5QjFBMTdCMDEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6ODVDNjUzM0RCREYzMTFFNUI0RjdDREU5QjFBMTdCMDEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6swMOgAAAAe0lEQVR42mJ02bOHAQ8IgdJrcClgwaNZBIinQtkHgfg1NkVMeAyYDsRiUDwNlyImPE4PwcPHawCy05EBSEyUGANgTkcHWL3CRMDphLyGYgAup2Pzihg2A3A5HZtXpqIbQMjpOL3CBA3ZqQykA7BXmKAhK0aGAWCvAAQYAFEAEng2j5i5AAAAAElFTkSuQmCC"

/***/ },

/***/ 37:
/*!***********************!*\
  !*** ./src/js/tab.js ***!
  \***********************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(jQuery) {/* ========================================================================
	 * Bootstrap: tab.js v3.3.6
	 * http://getbootstrap.com/javascript/#tabs
	 * ========================================================================
	 * Copyright 2011-2015 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * ======================================================================== */
	
	
	+function ($) {
	  'use strict';
	
	  // TAB CLASS DEFINITION
	  // ====================
	
	  var Tab = function (element) {
	    // jscs:disable requireDollarBeforejQueryAssignment
	    this.element = $(element)
	    // jscs:enable requireDollarBeforejQueryAssignment
	  }
	
	  Tab.VERSION = '3.3.6'
	
	  Tab.TRANSITION_DURATION = 150
	
	  Tab.prototype.show = function () {
	    var $this    = this.element
	    var $ul      = $this.closest('ul:not(.dropdown-menu)')
	    var selector = $this.data('target')
	
	    if (!selector) {
	      selector = $this.attr('href')
	      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
	    }
	
	    if ($this.parent('li').hasClass('active')) return
	
	    var $previous = $ul.find('.active:last a')
	    var hideEvent = $.Event('hide.bs.tab', {
	      relatedTarget: $this[0]
	    })
	    var showEvent = $.Event('show.bs.tab', {
	      relatedTarget: $previous[0]
	    })
	
	    $previous.trigger(hideEvent)
	    $this.trigger(showEvent)
	
	    if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) return
	
	    var $target = $(selector)
	
	    this.activate($this.closest('li'), $ul)
	    this.activate($target, $target.parent(), function () {
	      $previous.trigger({
	        type: 'hidden.bs.tab',
	        relatedTarget: $this[0]
	      })
	      $this.trigger({
	        type: 'shown.bs.tab',
	        relatedTarget: $previous[0]
	      })
	    })
	  }
	
	  Tab.prototype.activate = function (element, container, callback) {
	    var $active    = container.find('> .active')
	    var transition = callback
	      && $.support.transition
	      && ($active.length && $active.hasClass('fade') || !!container.find('> .fade').length)
	
	    function next() {
	      $active
	        .removeClass('active')
	        .find('> .dropdown-menu > .active')
	          .removeClass('active')
	        .end()
	        .find('[data-toggle="tab"]')
	          .attr('aria-expanded', false)
	
	      element
	        .addClass('active')
	        .find('[data-toggle="tab"]')
	          .attr('aria-expanded', true)
	
	      if (transition) {
	        element[0].offsetWidth // reflow for transition
	        element.addClass('in')
	      } else {
	        element.removeClass('fade')
	      }
	
	      if (element.parent('.dropdown-menu').length) {
	        element
	          .closest('li.dropdown')
	            .addClass('active')
	          .end()
	          .find('[data-toggle="tab"]')
	            .attr('aria-expanded', true)
	      }
	
	      callback && callback()
	    }
	
	    $active.length && transition ?
	      $active
	        .one('bsTransitionEnd', next)
	        .emulateTransitionEnd(Tab.TRANSITION_DURATION) :
	      next()
	
	    $active.removeClass('in')
	  }
	
	
	  // TAB PLUGIN DEFINITION
	  // =====================
	
	  function Plugin(option) {
	    return this.each(function () {
	      var $this = $(this)
	      var data  = $this.data('bs.tab')
	
	      if (!data) $this.data('bs.tab', (data = new Tab(this)))
	      if (typeof option == 'string') data[option]()
	    })
	  }
	
	  var old = $.fn.tab
	
	  $.fn.tab             = Plugin
	  $.fn.tab.Constructor = Tab
	
	
	  // TAB NO CONFLICT
	  // ===============
	
	  $.fn.tab.noConflict = function () {
	    $.fn.tab = old
	    return this
	  }
	
	
	  // TAB DATA-API
	  // ============
	
	  var clickHandler = function (e) {
	    e.preventDefault()
	    Plugin.call($(this), 'show')
	  }
	
	  $(document)
	    .on('click.bs.tab.data-api', '[data-toggle="tab"]', clickHandler)
	    .on('click.bs.tab.data-api', '[data-toggle="pill"]', clickHandler)
	
	}(jQuery);
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! jquery */ 1)))

/***/ },

/***/ 38:
/*!****************************************!*\
  !*** ./src/js/jquery.waypoints.min.js ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__webpack_provided_window_dot_jQuery) {/*!
	Waypoints - 4.0.0
	Copyright © 2011-2015 Caleb Troughton
	Licensed under the MIT license.
	https://github.com/imakewebthings/waypoints/blob/master/licenses.txt
	*/
	!function(){"use strict";function t(o){if(!o)throw new Error("No options passed to Waypoint constructor");if(!o.element)throw new Error("No element option passed to Waypoint constructor");if(!o.handler)throw new Error("No handler option passed to Waypoint constructor");this.key="waypoint-"+e,this.options=t.Adapter.extend({},t.defaults,o),this.element=this.options.element,this.adapter=new t.Adapter(this.element),this.callback=o.handler,this.axis=this.options.horizontal?"horizontal":"vertical",this.enabled=this.options.enabled,this.triggerPoint=null,this.group=t.Group.findOrCreate({name:this.options.group,axis:this.axis}),this.context=t.Context.findOrCreateByElement(this.options.context),t.offsetAliases[this.options.offset]&&(this.options.offset=t.offsetAliases[this.options.offset]),this.group.add(this),this.context.add(this),i[this.key]=this,e+=1}var e=0,i={};t.prototype.queueTrigger=function(t){this.group.queueTrigger(this,t)},t.prototype.trigger=function(t){this.enabled&&this.callback&&this.callback.apply(this,t)},t.prototype.destroy=function(){this.context.remove(this),this.group.remove(this),delete i[this.key]},t.prototype.disable=function(){return this.enabled=!1,this},t.prototype.enable=function(){return this.context.refresh(),this.enabled=!0,this},t.prototype.next=function(){return this.group.next(this)},t.prototype.previous=function(){return this.group.previous(this)},t.invokeAll=function(t){var e=[];for(var o in i)e.push(i[o]);for(var n=0,r=e.length;r>n;n++)e[n][t]()},t.destroyAll=function(){t.invokeAll("destroy")},t.disableAll=function(){t.invokeAll("disable")},t.enableAll=function(){t.invokeAll("enable")},t.refreshAll=function(){t.Context.refreshAll()},t.viewportHeight=function(){return window.innerHeight||document.documentElement.clientHeight},t.viewportWidth=function(){return document.documentElement.clientWidth},t.adapters=[],t.defaults={context:window,continuous:!0,enabled:!0,group:"default",horizontal:!1,offset:0},t.offsetAliases={"bottom-in-view":function(){return this.context.innerHeight()-this.adapter.outerHeight()},"right-in-view":function(){return this.context.innerWidth()-this.adapter.outerWidth()}},window.Waypoint=t}(),function(){"use strict";function t(t){window.setTimeout(t,1e3/60)}function e(t){this.element=t,this.Adapter=n.Adapter,this.adapter=new this.Adapter(t),this.key="waypoint-context-"+i,this.didScroll=!1,this.didResize=!1,this.oldScroll={x:this.adapter.scrollLeft(),y:this.adapter.scrollTop()},this.waypoints={vertical:{},horizontal:{}},t.waypointContextKey=this.key,o[t.waypointContextKey]=this,i+=1,this.createThrottledScrollHandler(),this.createThrottledResizeHandler()}var i=0,o={},n=window.Waypoint,r=window.onload;e.prototype.add=function(t){var e=t.options.horizontal?"horizontal":"vertical";this.waypoints[e][t.key]=t,this.refresh()},e.prototype.checkEmpty=function(){var t=this.Adapter.isEmptyObject(this.waypoints.horizontal),e=this.Adapter.isEmptyObject(this.waypoints.vertical);t&&e&&(this.adapter.off(".waypoints"),delete o[this.key])},e.prototype.createThrottledResizeHandler=function(){function t(){e.handleResize(),e.didResize=!1}var e=this;this.adapter.on("resize.waypoints",function(){e.didResize||(e.didResize=!0,n.requestAnimationFrame(t))})},e.prototype.createThrottledScrollHandler=function(){function t(){e.handleScroll(),e.didScroll=!1}var e=this;this.adapter.on("scroll.waypoints",function(){(!e.didScroll||n.isTouch)&&(e.didScroll=!0,n.requestAnimationFrame(t))})},e.prototype.handleResize=function(){n.Context.refreshAll()},e.prototype.handleScroll=function(){var t={},e={horizontal:{newScroll:this.adapter.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.adapter.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}};for(var i in e){var o=e[i],n=o.newScroll>o.oldScroll,r=n?o.forward:o.backward;for(var s in this.waypoints[i]){var a=this.waypoints[i][s],l=o.oldScroll<a.triggerPoint,h=o.newScroll>=a.triggerPoint,p=l&&h,u=!l&&!h;(p||u)&&(a.queueTrigger(r),t[a.group.id]=a.group)}}for(var c in t)t[c].flushTriggers();this.oldScroll={x:e.horizontal.newScroll,y:e.vertical.newScroll}},e.prototype.innerHeight=function(){return this.element==this.element.window?n.viewportHeight():this.adapter.innerHeight()},e.prototype.remove=function(t){delete this.waypoints[t.axis][t.key],this.checkEmpty()},e.prototype.innerWidth=function(){return this.element==this.element.window?n.viewportWidth():this.adapter.innerWidth()},e.prototype.destroy=function(){var t=[];for(var e in this.waypoints)for(var i in this.waypoints[e])t.push(this.waypoints[e][i]);for(var o=0,n=t.length;n>o;o++)t[o].destroy()},e.prototype.refresh=function(){var t,e=this.element==this.element.window,i=e?void 0:this.adapter.offset(),o={};this.handleScroll(),t={horizontal:{contextOffset:e?0:i.left,contextScroll:e?0:this.oldScroll.x,contextDimension:this.innerWidth(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:e?0:i.top,contextScroll:e?0:this.oldScroll.y,contextDimension:this.innerHeight(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}};for(var r in t){var s=t[r];for(var a in this.waypoints[r]){var l,h,p,u,c,d=this.waypoints[r][a],f=d.options.offset,w=d.triggerPoint,y=0,g=null==w;d.element!==d.element.window&&(y=d.adapter.offset()[s.offsetProp]),"function"==typeof f?f=f.apply(d):"string"==typeof f&&(f=parseFloat(f),d.options.offset.indexOf("%")>-1&&(f=Math.ceil(s.contextDimension*f/100))),l=s.contextScroll-s.contextOffset,d.triggerPoint=y+l-f,h=w<s.oldScroll,p=d.triggerPoint>=s.oldScroll,u=h&&p,c=!h&&!p,!g&&u?(d.queueTrigger(s.backward),o[d.group.id]=d.group):!g&&c?(d.queueTrigger(s.forward),o[d.group.id]=d.group):g&&s.oldScroll>=d.triggerPoint&&(d.queueTrigger(s.forward),o[d.group.id]=d.group)}}return n.requestAnimationFrame(function(){for(var t in o)o[t].flushTriggers()}),this},e.findOrCreateByElement=function(t){return e.findByElement(t)||new e(t)},e.refreshAll=function(){for(var t in o)o[t].refresh()},e.findByElement=function(t){return o[t.waypointContextKey]},window.onload=function(){r&&r(),e.refreshAll()},n.requestAnimationFrame=function(e){var i=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||t;i.call(window,e)},n.Context=e}(),function(){"use strict";function t(t,e){return t.triggerPoint-e.triggerPoint}function e(t,e){return e.triggerPoint-t.triggerPoint}function i(t){this.name=t.name,this.axis=t.axis,this.id=this.name+"-"+this.axis,this.waypoints=[],this.clearTriggerQueues(),o[this.axis][this.name]=this}var o={vertical:{},horizontal:{}},n=window.Waypoint;i.prototype.add=function(t){this.waypoints.push(t)},i.prototype.clearTriggerQueues=function(){this.triggerQueues={up:[],down:[],left:[],right:[]}},i.prototype.flushTriggers=function(){for(var i in this.triggerQueues){var o=this.triggerQueues[i],n="up"===i||"left"===i;o.sort(n?e:t);for(var r=0,s=o.length;s>r;r+=1){var a=o[r];(a.options.continuous||r===o.length-1)&&a.trigger([i])}}this.clearTriggerQueues()},i.prototype.next=function(e){this.waypoints.sort(t);var i=n.Adapter.inArray(e,this.waypoints),o=i===this.waypoints.length-1;return o?null:this.waypoints[i+1]},i.prototype.previous=function(e){this.waypoints.sort(t);var i=n.Adapter.inArray(e,this.waypoints);return i?this.waypoints[i-1]:null},i.prototype.queueTrigger=function(t,e){this.triggerQueues[e].push(t)},i.prototype.remove=function(t){var e=n.Adapter.inArray(t,this.waypoints);e>-1&&this.waypoints.splice(e,1)},i.prototype.first=function(){return this.waypoints[0]},i.prototype.last=function(){return this.waypoints[this.waypoints.length-1]},i.findOrCreate=function(t){return o[t.axis][t.name]||new i(t)},n.Group=i}(),function(){"use strict";function t(t){this.$element=e(t)}var e=__webpack_provided_window_dot_jQuery,i=window.Waypoint;e.each(["innerHeight","innerWidth","off","offset","on","outerHeight","outerWidth","scrollLeft","scrollTop"],function(e,i){t.prototype[i]=function(){var t=Array.prototype.slice.call(arguments);return this.$element[i].apply(this.$element,t)}}),e.each(["extend","inArray","isEmptyObject"],function(i,o){t[o]=e[o]}),i.adapters.push({name:"jquery",Adapter:t}),i.Adapter=t}(),function(){"use strict";function t(t){return function(){var i=[],o=arguments[0];return t.isFunction(arguments[0])&&(o=t.extend({},arguments[1]),o.handler=arguments[0]),this.each(function(){var n=t.extend({},o,{element:this});"string"==typeof n.context&&(n.context=t(this).closest(n.context)[0]),i.push(new e(n))}),i}}var e=window.Waypoint;__webpack_provided_window_dot_jQuery&&(__webpack_provided_window_dot_jQuery.fn.waypoint=t(__webpack_provided_window_dot_jQuery)),window.Zepto&&(window.Zepto.fn.waypoint=t(window.Zepto))}();
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! jquery */ 1)))

/***/ }

});
//# sourceMappingURL=groupIntro.bundle.js.map