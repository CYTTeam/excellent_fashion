webpackJsonp([1],{

/***/ 0:
/*!***************************!*\
  !*** ./src/groupIntro.js ***!
  \***************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {///////////////
	// groupIntro.js //
	///////////////
	
	/* ------------------------------------------------------------
	 * 依赖模块
	 * ------------------------------------------------------------ */
	__webpack_require__(/*! ./css/animation.css */ 2);
	__webpack_require__(/*! ./css/base.css */ 6);
	__webpack_require__(/*! ./css/rotateHeads.css */ 13);
	__webpack_require__(/*! ./css/groupIntro.css */ 35);
	
	__webpack_require__(/*! ./js/tab.js */ 39);
	__webpack_require__(/*! ./js/jquery.waypoints.min.js */ 40);
	__webpack_require__(/*! ./js/base.js */ 19);
	__webpack_require__(/*! ./js/rotateHeads.js */ 34);
	
	
	/* ------------------------------------------------------------
	 *	头部的图片轮播
	 * ------------------------------------------------------------ */
	
	$(function() {
	    $('#toggleHeads').rotateHeads([
	        './images/1.png',
	        './images/2.png',
	        './images/3.png',
	        './images/4.png',
	        './images/5.png',
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
	                index = 4;
	            };
	            showPoint();
	            animate(-1200);
	        }
	    });
	    arrow_l.addEventListener('click', function() {
	
	        if (!animated) {
	            index--;
	            if (index == 0) {
	                index = 4;
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
	                    ul.style.left = -4800 + 'px';
	                };
	                if (left < -4800) {
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
	$(function() {
	    var timeData = [
	        [1997, '在杭州凯旋路北口创办杭州三彩服饰有限公司'],
	        [1997, '5月1号, 三彩服饰创办'],
	        [1999, '第一家直营店在新声路上的杭派服装市场四区顺利开业'],
	        [1999, '公司迁至秋涛路298号'],
	        [2000, '公司第一批加盟合作伙伴正式签约'],
	        [2000, '被中国社会调查所评为“中国名牌”称号'],
	        [2000, '在大连国际服装博览会夺得“双十佳”称号'],
	        [2001, '在浙江理工大学设立三彩奖学金'],
	        [2001, '为回馈社会，公司在浙江理工大学设立“三彩奖学金'],
	        [2001, '公司搬迁至石桥天堂经济开发区13幢'],
	        [2001, '被浙江省产品质量管理中心授予“浙江省新世纪质量服务双优企业”'],
	        [2001, '在浙江理工大学设立三彩奖学金'],
	        [2002, '正式更名为浙江三彩服饰有限公司'],
	        [2002, '正式注册更名为浙江三彩服饰有限公司'],
	        [2003, '公司规模扩大数倍，开始引领杭州女装行业发展'],
	        [2004, '三彩品牌获得国际质量体系认证'],
	        [2005, '成立伊布都品牌，开始多品牌运作'],
	        [2005, '杭州三彩服饰成为浙江省服装行业协会理事单位'],
	        [2006, '卓尚服饰（杭州）有限公司正式成立；并在开发区兴建现代化生产基地'],
	        [2006, '7月成立卓尚服饰（杭州）有限公司'],
	        [2006, '10月经市政府批准，在杭州经济开发区兴建建筑面积为45亩的现代化生产基地'],
	        [2007, '浙江三彩服饰首次亮相香港会展中心时装节'],
	        [2007, '三彩服饰首次亮相香港会展中心时装节'],
	        [2007, '浙江三彩服饰首次亮相香港会展中心时装节'],
	        [2007, '2007年，卓尚公司10周年庆在浙理工大学举行。'],
	        [2008, '荣获浙江残疾人福利基金会“爱心奖”，这是对我们“善待他人”价值观的认可'],
	        [2008, 'Luxury(丽诗)品牌成立。'],
	        [2009, '11月20日，举办第一届员工生日会。'],
	        [2009, '3月18日，卓尚服饰有限公司董事长丁武杰，总经理徐招海，应邀出席了浙江理工大学的“三彩奖学金”颁奖典礼暨服装学院“学生成长指导中心”成立仪式。'],
	        [2009, '11月18日，杭州职业技术学院举行了荣誉教授聘任仪式，卓尚服饰（杭州）有限公司董事长丁武杰、总经理徐招海，被授予杭州职业技术学院荣誉教授。'],
	        [2009, '12月3日，卓尚服饰（杭州）有限公司总经理徐招海和工会主席金方红出席了由浙江省残疾人福利基金会开展的“爱心、希望、圆梦”爱心助残活动，并代表卓尚服饰（杭州）有限公司接受残疾人福利基金会颁发的荣誉奖牌。'],
	        [2009, '12月22日，丁董、徐总应邀至中国美院授课'],
	        [2009, '公司迁至下沙经济技术开发区，卓尚的未来又踏下坚实的一步'],
	        [2009, '卓尚服饰（杭州）有限公司被评为社会责任建设先进企业'],
	        [2009, '卓尚服饰（杭州）有限公司获得“浙江省服装行业理事单位”证书'],
	        [2009, '总部搬迁至杭州经济技术开发区'],
	        [2009, '被杭州经济技术开发区评选为A级信用登记单位'],
	        [2009, '卓尚服饰（杭州）有限公司成为“社会责任建设先进企业”'],
	        [2010, '2月21日，各位总监和经理在丁董的带领下，向公司的每位员工，发放新年红包。'],
	        [2010, '3月31日，丁董、徐总及公司各位领导参加了在太虚湖酒店举行的2010秋装发布会之总代理座谈会。'],
	        [2010, '成立丽雪品牌，卓尚家族再添新成员'],
	        [2011, '卓尚服饰和浙江理工大学服装学院设立“三彩（三COLOUR）教育奖”。在今后十年，卓尚服饰将每年出资30万元，累计共计300万元，来支持服装教育的发展'],
	        [2011, '推行TOC经营模式，我们开始引领行业发展模式'],
	        [2011, '三COLOUR.KIDS（童装）品牌成立'],
	        [2011, '卓尚服饰（杭州）有限公司纺织品检测实验室获得“能力验证合格实验室证书”和“能力验证结果证书“'],
	        [2011, '卓尚服饰（杭州）有限公司被评为第二届全国服装标准化技术委员会标准化工作先进单位'],
	        [2011, '卓尚服饰（杭州）有限公司在第二十七届健峰全国品管圈大会荣获”石川奖“和”健峰奖“'],
	        [2012, '2月26日，卓尚服饰（杭州）有限公司十五周年庆'],
	        [2012, '3月1号，三彩营运中心举办“追求梦想成功路” 徽杭徒步挑战行'],
	        [2012, '3月27日—4月，卓尚大学“诵出爱家的心”朗诵比赛。'],
	        [2012, '3月21日，企管举办11期奖励交流会--“不走寻常路”'],
	        [2012, '6月28日，企管举办12期奖励交流会--“寻找职场幸福”'],
	        [2012, '9月21日，企管举办13期奖励交流会--“家的文化”'],
	        [2012, '2012年5月，《三彩服饰》全国特聘记者招募'],
	        [2012, '6月 ，卓尚大学举办了卓尚“越辩越美丽”辩论赛'],
	        [2012, '卓尚大学举办每半月一次的电影播放活动。'],
	        [2012, '8月18日晚，由卓尚党支部组织策划、都市快报全程打造的七夕相亲大会在运河广场拉开帷幕。'],
	        [2012, '8月8号-20号，《名嘴风尚，谁是秋晚主持人》主持人大赛。'],
	        [2012, '8月15日卓尚举行了质量问题商品销毁活动'],
	        [2012, '7月10日，卓尚礼仪社团成立'],
	        [2012, '2012年4月20日，开展卓尚趣味运动会'],
	        [2012, '2012年9月14日，舞蹈社团成立'],
	        [2012, '9月26日，卓尚·月圆·悦亲2012中秋晚会'],
	        [2012, '10月15日开始了为期23天的卓尚服饰第七届羽乒赛'],
	        [2012, '4月，ibudu“一呼百应·时尚革命”全国推广会'],
	        [2012, '7月19日河北石家庄招商会召开'],
	        [2012, '3月7日中国国际贸易促进委员会杭州市分会杨志毅会长协同杭州各兄弟服装企业的负责人莅临卓尚参观交流。'],
	        [2012, '三COLOUR品牌董事长接受《世界都市iTalk》(2012年10月号）的采访'],
	        [2012, '成立卓尚大学，为公司发展提供智慧支持'],
	        [2012, '3月12日，卓尚服饰方桥新生产基地开业庆典暨杭州伊布都服饰有限公司乔迁仪式在杭州市乔司镇方桥举行。'],
	        [2012, '4月，ibudu“一呼百应·时尚革命”全国推广会'],
	        [2012, '6月，卓尚服饰（杭州）有限公司成为“纺织服装供应链联盟战略合作伙伴”'],
	        [2013, '6月，卓尚青年志愿者社团成立'],
	        [2013, '7月I尚麦克风唱歌大赛'],
	        [2013, '7月26日第16期奖励交流会'],
	        [2013, '5月29日尚学堂首期课程开班'],
	        [2013, '6月28日卓尚服饰——二期MTP管理精英打造班论文答辩暨结业典礼'],
	        [2013, '7月27日 “ILT首期-物流专业系统提升班”第一阶课程实施'],
	        [2013, '6月4日卓尚服饰浙江理工大学服装学院“三彩教育奖”奖学金颁奖活动'],
	        [2013, '收购爱浦特，公司将建设现代化物流基地'],
	        [2013, '3月1日-31日，卓尚大学举办“卓尚首期雏鹰计划—大学生实习培训”'],
	        [2013, '9月18日CELL-CLUB(细胞俱乐部)第1期活动'],
	        [2014, '5月26日生产部拓展'],
	        [2014, '6月7日行走的力量'],
	        [2014, '7月9日，“与道同行，谁与争锋”项目启动'],
	        [2014, '7月23日上半年度奖励交流会'],
	        [2014, '8月11日，《卓尚视界》创刊，企业文化再增新载体'],
	        [2014, '9月2日中秋活动'],
	        [2014, '9月12日中秋颁奖盛典'],
	        [2014, '第二届篮球赛开始9月15日开幕式，10月9日闭幕式'],
	        [2014, '11月22日行走的力量'],
	        [2014, '11月27日，“Go with感恩，Go to幸福”文化主题活动'],
	        [2014, '11月28日，伊布都团建'],
	        [2014, '12月17日，研发团建'],
	        [2014, '7月22日，卓尚服饰（杭州）有限公司董事长丁武杰先生与金螳螂建筑装饰股份有限公司常务副总裁严多林先生共同签署了战略合作框架协议书。'],
	        [2014, '1月30日，“与奋斗者共享未来”卓尚服饰2015合作伙伴交流大会在九里云松度假酒店举行'],
	        [2014, '首个多品牌集合店在上海正大广场正式揭幕'],
	        [2014, '8月11日，《卓尚视界》创刊，企业文化再增新载体'],
	        [2015, '1月28日，“IN成长TO共享”新春团拜会'],
	        [2015, 'XIN力量校招生项目'],
	        [2015, '3月22日，通讯员团队启动仪式暨第一期新闻采写学习交流在伊布都五楼举行'],
	        [2015, '6月，全员点赞'],
	        [2015, '2015年7月10日，核心价值观“善待他人”正式更改为“成就他人”'],
	        [2015, '2015年7月10日，第二十期奖励交流会暨百万重奖颁奖盛典'],
	        [2015, '2015年7月，全面推行“5S”管理'],
	        [2015, '4月2日，开发区党工委副书记邵立春一行来公司调研'],
	        [2015, '4月15日，丁武杰董事长和胡智丰校长、张助参加卓尚服饰浙江理工大学服装学院“三彩教育奖”奖学金颁奖活动'],
	        [2015, '4月18日，童装事业部举办第一次大型VIP品鉴会'],
	        [2015, '5月5日，卓尚服饰18周年庆典'],
	        [2015, '3COLOUR,丽雪，伊布都订货会'],
	        [2015, '7月，卓尚服饰为《冰与火的青春》全程提供服装赞助'],
	        [2015, '7月15日，3COLOUR品牌在杭州成功举办2016春季新品发布会'],
	        [2015, '2015年1月28日，“IN成长TO共享”新春团拜会'],
	        [2015, '2015年7月10日，第二十期奖励交流会暨百万重奖颁奖盛典'],
	        [2015, '2015年7月10日，企业文化核心价值观第三条“善待他人”正式更改为“成就他人”'],
	        [2015, '2015年9月22日-11月6日，终端“成你之美 成你所愿”'],
	        [2015, '2015年10月9日，“十年成就 你我共享”第十届羽乒赛'],
	        [2015, '2015年10月28日，“十年成就 你我共享”第十届羽乒赛之聋哑人羽毛球赛'],
	        [2015, '2015年10月23日，下沙中学50周年庆典暨卓尚奖学金捐赠仪式（30万元，分6年进行）'],
	        [2015, '2015年10月29日，首届工程技术比武大赛'],
	        [2015, '2015年11月，杭州经济技术开发区第六届职工运动会乒乓球混合团体赛第二名'],
	        [2015, '2015年11月11日，ULLU首开合伙人项目——“与奋斗者共享未来”序幕正式拉开'],
	        [2015, '2015年11月14-15日，行走的力量第三期']
	    ];
	
	    timeData.forEach(function (data, index) {
	        var li = $('<li class="time-year">' + data[0] + '</li>')
	        $('.time-years').append(li);
	
	        li.click(function () {
	            var text = timeData[index][1];
	            var offset = -120 * index;
	            $('.time-label').text(text);
	            $('.time-years').css('left', offset);
	            $('.time-year').filter('.active')
	                .removeClass("active");
	            $(this).addClass("active");
	        })
	    })
	
	    $('.time-years').width(timeData.length * 120);
	    $('.time-year:eq(0)').trigger('click');
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
	
	$(function() {
	    window.setTimeout(function() {
	        var author = location.hash;
	        var position = author && $(author).offset().top;
	        $('html, body').animate({
	            scrollTop: position
	        }, 500);
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

/***/ 34:
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

/***/ 35:
/*!********************************!*\
  !*** ./src/css/groupIntro.css ***!
  \********************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !./../../~/css-loader!./../../~/postcss-loader!./groupIntro.css */ 36);
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

/***/ 36:
/*!******************************************************************!*\
  !*** ./~/css-loader!./~/postcss-loader!./src/css/groupIntro.css ***!
  \******************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../~/css-loader/lib/css-base.js */ 4)();
	// imports
	
	
	// module
	exports.push([module.id, ".header {\r\n    height: 270px;\r\n}\r\n\r\n/**\r\n * chairmen\r\n */\r\n\r\n.chairmanText {\r\n    max-height: 553px;\r\n    overflow: auto;\r\n}\r\n\r\n/**\r\n *group honor\r\n */\r\n\r\n#slider {\r\n    width: 1200px;\r\n    height: 390px;\r\n    margin: 0 auto;\r\n    position: relative;\r\n    overflow: hidden;\r\n    font-size: 16px;\r\n    -webkit-user-select: none;\r\n       -moz-user-select: none;\r\n        -ms-user-select: none;\r\n            user-select: none;\r\n}\r\n#slider ul {\r\n    width: 6000px;\r\n    position: absolute;\r\n}\r\n#slider ul li {\r\n    width: 1200px;\r\n    float: left;\r\n}\r\n#point {\r\n    position: absolute;\r\n    display: inline-block;\r\n    float: left;\r\n    top: 360px;\r\n    left: 567px;\r\n    font-size: 60px;\r\n    z-index: 2;\r\n}\r\n#point span {\r\n    float: left;\r\n    height: 8px;\r\n    width: 8px;\r\n    border: 1px solid #44bcbc;\r\n    border-radius: 5px;\r\n    background: #ffffff;\r\n    margin-left: 10px;\r\n}\r\n#point .on {\r\n    background: #44bcbc;\r\n}\r\n\r\n/**\r\n * development history\r\n */\r\n\r\n#time-axis {\r\n    overflow: hidden;\r\n}\r\n.time-axis {\r\n    margin-top: 15%;\r\n    margin-bottom: 5%;\r\n    background-image: url(" + __webpack_require__(/*! ../images/page1/line.png */ 37) + ");\r\n    background-repeat: repeat-x;\r\n    height: 10px;\r\n    -webkit-transition: all 0.4s ease-out;\r\n            transition: all 0.4s ease-out;\r\n    background-position: 76px 0;\r\n}\r\n.time-years {\r\n    font-size: 0;\r\n    -webkit-transition: all 0.4s ease-out;\r\n            transition: all 0.4s ease-out;\r\n    left: 0;\r\n    margin-left: 550px;\r\n    position: relative;\r\n}\r\n.time-years li {\r\n    cursor: pointer;\r\n    display: inline-block;\r\n    text-align: center;\r\n    font-size: 16px;\r\n    padding-bottom: 55px;\r\n    margin-top: -30px;\r\n    width: 120px;\r\n}\r\n.time-years li.active {\r\n    font-size: 20px;\r\n    color: #44bcbc;\r\n}\r\n.time-arrow {\r\n    height: 10px;\r\n    width: 15px;\r\n    position: absolute;\r\n    top: 168px;\r\n    left: 50%;\r\n    background: url(" + __webpack_require__(/*! ../images/page1/top-angle.png */ 38) + ") no-repeat;\r\n    -webkit-transition: all 0.4s ease-out;\r\n            transition: all 0.4s ease-out;\r\n}\r\n\r\n.time-label {\r\n    margin-left: -80px;\r\n    width: 300px;\r\n    line-height: 24px;\r\n    font-size: 20px;\r\n    color: #888;\r\n    position: absolute;\r\n    bottom: 167px;\r\n    left: 50%;\r\n    -webkit-transition: all 0.4s ease-out;\r\n            transition: all 0.4s ease-out;\r\n}\r\n\r\n/**\r\n * group culture\r\n */\r\n\r\n.Liz-scroll {\r\n    margin-right: 20px;\r\n    padding-right: 20px;\r\n}\r\n\r\n/* 滚动条整体部分width,height,background,border */\r\n\r\n.Liz-scroll::-webkit-scrollbar {\r\n    width: 5px;\r\n    height: 10px;\r\n}\r\n\r\n/* 滚动条两端的按钮。可以用display:none让其不显示 */\r\n\r\n.Liz-scroll::-webkit-scrollbar-button {\r\n    display: none;\r\n}\r\n\r\n/*   内层轨道，滚动条中间部分（除去） */\r\n\r\n.Liz-scroll::-webkit-scrollbar-track-piece {\r\n    background: #C0C0C0;\r\n}\r\n\r\n/*  滚动条里面可以拖动的那部分 */\r\n\r\n.Liz-scroll::-webkit-scrollbar-thumb {\r\n    background: #44bcbc;\r\n    border-radius: 4px;\r\n}\r\n", ""]);
	
	// exports


/***/ },

/***/ 37:
/*!***********************************!*\
  !*** ./src/images/page1/line.png ***!
  \***********************************/
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABLAAAAALCAYAAABvY3RqAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjVEM0JDM0M2QkRGMzExRTU4OERERDc3QTNENzBCNkEwIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjVEM0JDM0M3QkRGMzExRTU4OERERDc3QTNENzBCNkEwIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NUQzQkMzQzRCREYzMTFFNTg4RERENzdBM0Q3MEI2QTAiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NUQzQkMzQzVCREYzMTFFNTg4RERENzdBM0Q3MEI2QTAiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6ZvmqgAAABCUlEQVR42uzcXYrCMBiG0aQ7yR67jN52e+lSokULFUQU/Pkaz4HCwLyDNM9dmJlca20JAAAAAIIazk++Pmn39aMn9G6e5y7ew05ffZ2Lvnb62ulrp6+dvnb66utcLk+utW6XWetvYuVSyt2brmVZQu/GcbzZTdN0yPew01dfffV1fp/c7bZf7fvuz/3V+/7b5+qrr3PW1znrq6++UT53SAAAAAAQmAssAAAAAEJzgQUAAABAaPsLrPzkz0TfpU7ew05ffZ2Lvnb62ulrp6+dvnb66utc1m+21lIPXvknZ+iLvuiLvuirr776oi/6Hoc/IQQAAAAgNBdYAAAAAITmAgsAAACA0E4CDACF2SThZsQNowAAAABJRU5ErkJggg=="

/***/ },

/***/ 38:
/*!****************************************!*\
  !*** ./src/images/page1/top-angle.png ***!
  \****************************************/
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAMCAYAAABr5z2BAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjg1QzY1MzNFQkRGMzExRTVCNEY3Q0RFOUIxQTE3QjAxIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjg1QzY1MzNGQkRGMzExRTVCNEY3Q0RFOUIxQTE3QjAxIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ODVDNjUzM0NCREYzMTFFNUI0RjdDREU5QjFBMTdCMDEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6ODVDNjUzM0RCREYzMTFFNUI0RjdDREU5QjFBMTdCMDEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6swMOgAAAAe0lEQVR42mJ02bOHAQ8IgdJrcClgwaNZBIinQtkHgfg1NkVMeAyYDsRiUDwNlyImPE4PwcPHawCy05EBSEyUGANgTkcHWL3CRMDphLyGYgAup2Pzihg2A3A5HZtXpqIbQMjpOL3CBA3ZqQykA7BXmKAhK0aGAWCvAAQYAFEAEng2j5i5AAAAAElFTkSuQmCC"

/***/ },

/***/ 39:
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

/***/ 40:
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