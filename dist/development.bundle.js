webpackJsonp([0],{

/***/ 0:
/*!****************************!*\
  !*** ./src/development.js ***!
  \****************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {
	///////////////
	// development.js //
	///////////////
	
	/* ------------------------------------------------------------
	 * 依赖模块
	 * ------------------------------------------------------------ */
	 __webpack_require__(/*! ./css/animation.css */ 2);
	 __webpack_require__(/*! ./css/base.css */ 6);
	  __webpack_require__(/*! ./css/rotateHeads.css */ 13);
	 __webpack_require__(/*! ./css/development.css */ 15);
	__webpack_require__(/*! ./js/transition.js */ 77);
	 __webpack_require__(/*! ./js/collapse.js */ 76);
	__webpack_require__(/*! ./js/base.js */ 17);
	__webpack_require__(/*! ./js/rotateHeads.js */ 32);
	
	/* ------------------------------------------------------------
	 *	头部的图片轮播
	 * ------------------------------------------------------------ */
	
	$(function () {
	    $('#toggleHeads').rotateHeads([
	        './images/1.png',
	        './images/2.png',
	        './images/3.png',
	        './images/4.png',
	        './images/5.png',
	    ]);
	})
	
	
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
	exports.push([module.id, "div[data-role=\"cyt-turnPage-3d\"] {height: 100%;}\ndiv[data-role=\"cyt-turnPage-3d\"] .box {\n    position: relative;\n    width: 100%;\n    height: 100%;\n\t-webkit-transform-style: preserve-3d;\n\t        transform-style: preserve-3d;\n    -webkit-transform: perspective(3500px) rotateX(0deg);\n            transform: perspective(3500px) rotateX(0deg);\n}\ndiv[data-role=\"cyt-turnPage-3d\"] .page {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    left: 0;\n    top: 0;\n    display: none;\n}\n", ""]);
	
	// exports


/***/ },

/***/ 15:
/*!*********************************!*\
  !*** ./src/css/development.css ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !./../../~/css-loader!./../../~/postcss-loader!./development.css */ 16);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../~/style-loader/addStyles.js */ 5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./development.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./development.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 16:
/*!*******************************************************************!*\
  !*** ./~/css-loader!./~/postcss-loader!./src/css/development.css ***!
  \*******************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../~/css-loader/lib/css-base.js */ 4)();
	// imports
	
	
	// module
	exports.push([module.id, ".header {\n    height: 270px;\n}\n.Liz-devel-nav {\n    text-align: center;\n    cursor: pointer;\n}\n.Liz-devel-nav>li {\n    margin: 0 20px;\n    padding: 10px 0;\n    color: #000000;\n    color: rgba(0, 0, 0, .6);\n    text-decoration: none;\n    background: #C0C0C0;\n}\n.Liz-devel-nav>li.active {\n    background: #44bcbc;\n    color: #FFFFFF;\n}\n.panel-heading:hover {\n    background: #44bcbc!important;\n}\n.panel-heading:hover .panel-a>pre {\n    color: #FFFFFF;\n    text-transform: capitalize;\n    -webkit-animation: comeRight 0.3s ease both;\n            animation: comeRight 0.3s ease both;\n}\n.panel-title>a {\n    list-style-type: none;\n    text-decoration: none;\n    text-transform: uppercase;\n}\n.panel-body {\n    padding: 50px 0!important;\n}\n.panel-a>pre {\n    font-size: 16px;\n    -webkit-animation: comeLeft 0.3s ease both;\n            animation: comeLeft 0.3s ease both;\n}\n.employTitleUp {\n    text-transform: uppercase;\n    /*英文字母全部大写*/\n}\n", ""]);
	
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

/***/ 76:
/*!****************************!*\
  !*** ./src/js/collapse.js ***!
  \****************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(jQuery) {/* ========================================================================
	 * Bootstrap: collapse.js v3.3.6
	 * http://getbootstrap.com/javascript/#collapse
	 * ========================================================================
	 * Copyright 2011-2016 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * ======================================================================== */
	
	
	+function ($) {
	  'use strict';
	
	  // COLLAPSE PUBLIC CLASS DEFINITION
	  // ================================
	
	  var Collapse = function (element, options) {
	    this.$element      = $(element)
	    this.options       = $.extend({}, Collapse.DEFAULTS, options)
	    this.$trigger      = $('[data-toggle="collapse"][href="#' + element.id + '"],' +
	                           '[data-toggle="collapse"][data-target="#' + element.id + '"]')
	    this.transitioning = null
	
	    if (this.options.parent) {
	      this.$parent = this.getParent()
	    } else {
	      this.addAriaAndCollapsedClass(this.$element, this.$trigger)
	    }
	
	    if (this.options.toggle) this.toggle()
	  }
	
	  Collapse.VERSION  = '3.3.6'
	
	  Collapse.TRANSITION_DURATION = 350
	
	  Collapse.DEFAULTS = {
	    toggle: true
	  }
	
	  Collapse.prototype.dimension = function () {
	    var hasWidth = this.$element.hasClass('width')
	    return hasWidth ? 'width' : 'height'
	  }
	
	  Collapse.prototype.show = function () {
	    if (this.transitioning || this.$element.hasClass('in')) return
	
	    var activesData
	    var actives = this.$parent && this.$parent.children('.panel').children('.in, .collapsing')
	
	    if (actives && actives.length) {
	      activesData = actives.data('bs.collapse')
	      if (activesData && activesData.transitioning) return
	    }
	
	    var startEvent = $.Event('show.bs.collapse')
	    this.$element.trigger(startEvent)
	    if (startEvent.isDefaultPrevented()) return
	
	    if (actives && actives.length) {
	      Plugin.call(actives, 'hide')
	      activesData || actives.data('bs.collapse', null)
	    }
	
	    var dimension = this.dimension()
	
	    this.$element
	      .removeClass('collapse')
	      .addClass('collapsing')[dimension](0)
	      .attr('aria-expanded', true)
	
	    this.$trigger
	      .removeClass('collapsed')
	      .attr('aria-expanded', true)
	
	    this.transitioning = 1
	
	    var complete = function () {
	      this.$element
	        .removeClass('collapsing')
	        .addClass('collapse in')[dimension]('')
	      this.transitioning = 0
	      this.$element
	        .trigger('shown.bs.collapse')
	    }
	
	    if (!$.support.transition) return complete.call(this)
	
	    var scrollSize = $.camelCase(['scroll', dimension].join('-'))
	
	    this.$element
	      .one('bsTransitionEnd', $.proxy(complete, this))
	      .emulateTransitionEnd(Collapse.TRANSITION_DURATION)[dimension](this.$element[0][scrollSize])
	  }
	
	  Collapse.prototype.hide = function () {
	    if (this.transitioning || !this.$element.hasClass('in')) return
	
	    var startEvent = $.Event('hide.bs.collapse')
	    this.$element.trigger(startEvent)
	    if (startEvent.isDefaultPrevented()) return
	
	    var dimension = this.dimension()
	
	    this.$element[dimension](this.$element[dimension]())[0].offsetHeight
	
	    this.$element
	      .addClass('collapsing')
	      .removeClass('collapse in')
	      .attr('aria-expanded', false)
	
	    this.$trigger
	      .addClass('collapsed')
	      .attr('aria-expanded', false)
	
	    this.transitioning = 1
	
	    var complete = function () {
	      this.transitioning = 0
	      this.$element
	        .removeClass('collapsing')
	        .addClass('collapse')
	        .trigger('hidden.bs.collapse')
	    }
	
	    if (!$.support.transition) return complete.call(this)
	
	    this.$element
	      [dimension](0)
	      .one('bsTransitionEnd', $.proxy(complete, this))
	      .emulateTransitionEnd(Collapse.TRANSITION_DURATION)
	  }
	
	  Collapse.prototype.toggle = function () {
	    this[this.$element.hasClass('in') ? 'hide' : 'show']()
	  }
	
	  Collapse.prototype.getParent = function () {
	    return $(this.options.parent)
	      .find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]')
	      .each($.proxy(function (i, element) {
	        var $element = $(element)
	        this.addAriaAndCollapsedClass(getTargetFromTrigger($element), $element)
	      }, this))
	      .end()
	  }
	
	  Collapse.prototype.addAriaAndCollapsedClass = function ($element, $trigger) {
	    var isOpen = $element.hasClass('in')
	
	    $element.attr('aria-expanded', isOpen)
	    $trigger
	      .toggleClass('collapsed', !isOpen)
	      .attr('aria-expanded', isOpen)
	  }
	
	  function getTargetFromTrigger($trigger) {
	    var href
	    var target = $trigger.attr('data-target')
	      || (href = $trigger.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '') // strip for ie7
	
	    return $(target)
	  }
	
	
	  // COLLAPSE PLUGIN DEFINITION
	  // ==========================
	
	  function Plugin(option) {
	    return this.each(function () {
	      var $this   = $(this)
	      var data    = $this.data('bs.collapse')
	      var options = $.extend({}, Collapse.DEFAULTS, $this.data(), typeof option == 'object' && option)
	
	      if (!data && options.toggle && /show|hide/.test(option)) options.toggle = false
	      if (!data) $this.data('bs.collapse', (data = new Collapse(this, options)))
	      if (typeof option == 'string') data[option]()
	    })
	  }
	
	  var old = $.fn.collapse
	
	  $.fn.collapse             = Plugin
	  $.fn.collapse.Constructor = Collapse
	
	
	  // COLLAPSE NO CONFLICT
	  // ====================
	
	  $.fn.collapse.noConflict = function () {
	    $.fn.collapse = old
	    return this
	  }
	
	
	  // COLLAPSE DATA-API
	  // =================
	
	  $(document).on('click.bs.collapse.data-api', '[data-toggle="collapse"]', function (e) {
	    var $this   = $(this)
	
	    if (!$this.attr('data-target')) e.preventDefault()
	
	    var $target = getTargetFromTrigger($this)
	    var data    = $target.data('bs.collapse')
	    var option  = data ? 'toggle' : $this.data()
	
	    Plugin.call($target, option)
	  })
	
	}(jQuery);
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! jquery */ 1)))

/***/ },

/***/ 77:
/*!******************************!*\
  !*** ./src/js/transition.js ***!
  \******************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(jQuery) {/* ========================================================================
	 * Bootstrap: transition.js v3.3.6
	 * http://getbootstrap.com/javascript/#transitions
	 * ========================================================================
	 * Copyright 2011-2016 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * ======================================================================== */
	
	
	+function ($) {
	  'use strict';
	
	  // CSS TRANSITION SUPPORT (Shoutout: http://www.modernizr.com/)
	  // ============================================================
	
	  function transitionEnd() {
	    var el = document.createElement('bootstrap')
	
	    var transEndEventNames = {
	      WebkitTransition : 'webkitTransitionEnd',
	      MozTransition    : 'transitionend',
	      OTransition      : 'oTransitionEnd otransitionend',
	      transition       : 'transitionend'
	    }
	
	    for (var name in transEndEventNames) {
	      if (el.style[name] !== undefined) {
	        return { end: transEndEventNames[name] }
	      }
	    }
	
	    return false // explicit for ie8 (  ._.)
	  }
	
	  // http://blog.alexmaccaw.com/css-transitions
	  $.fn.emulateTransitionEnd = function (duration) {
	    var called = false
	    var $el = this
	    $(this).one('bsTransitionEnd', function () { called = true })
	    var callback = function () { if (!called) $($el).trigger($.support.transition.end) }
	    setTimeout(callback, duration)
	    return this
	  }
	
	  $(function () {
	    $.support.transition = transitionEnd()
	
	    if (!$.support.transition) return
	
	    $.event.special.bsTransitionEnd = {
	      bindType: $.support.transition.end,
	      delegateType: $.support.transition.end,
	      handle: function (e) {
	        if ($(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
	      }
	    }
	  })
	
	}(jQuery);
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! jquery */ 1)))

/***/ }

});
//# sourceMappingURL=development.bundle.js.map