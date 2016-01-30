(function ($) {
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
            options.forEach((value, index) => {
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
            this._setTransition(box);
            box.css('transform', 'perspective(3500px) rotateX(90deg)');
            box.one('transitionend', function() {
                pages.hide();
                _instance._clearTransition(box);
                box.css('transform', 'perspective(3500px) rotateX(0deg)');
                prePage = pages.slice(pre, pre + 1).show();
                nowPage = pages.slice(now, now + 1).show();
                nextPage = pages.slice(next, next + 1).show();
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
