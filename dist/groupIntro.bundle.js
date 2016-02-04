webpackJsonp([1],[
/* 0 */
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
	 __webpack_require__(/*! ./css/bootstrap.min.css */ 2);
	__webpack_require__(/*! ./css/animation.css */ 6);
	__webpack_require__(/*! ./css/base.css */ 8);
	__webpack_require__(/*! ./css/rotateHeads.css */ 15);
	__webpack_require__(/*! ./css/groupIntro.css */ 37);
	
	__webpack_require__(/*! ./js/tab.js */ 41);
	__webpack_require__(/*! ./js/jquery.waypoints.min.js */ 42);
	__webpack_require__(/*! ./js/base.js */ 21);
	__webpack_require__(/*! ./js/rotateHeads.js */ 36);
	
	
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
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */
/*!*********************************!*\
  !*** ./src/css/rotateHeads.css ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !./../../~/css-loader!./../../~/postcss-loader!./rotateHeads.css */ 16);
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
/* 16 */
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
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */
/*!************************!*\
  !*** ./src/js/base.js ***!
  \************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {
	/////////////
	// base.js //
	/////////////
	
	
	
	/* ------------------------------------------------------------
	 * 公共依赖模块
	 * ------------------------------------------------------------ */
	
	__webpack_require__(/*! ./jquery.headroom.min.js */ 22);
	__webpack_require__(/*! ./headroom.min.js */ 23);
	
	
	/* ------------------------------------------------------------
	 * 点击下拉
	 * ------------------------------------------------------------ */
	var dropdown_toggle = $(".dropdown");
	var dropdown_menu=$(".dropdown-menu");
	dropdown_toggle.hover(function() {
	    dropdown_menu.stop(true, true).slideDown();
	    return false;
	}, function() {
	    dropdown_menu.stop(true, true).slideUp();
	    return false;
	});
	
	
	
	/* ------------------------------------------------------------
	 * 返回顶部
	 * ------------------------------------------------------------ */
	smoothScroll('.go-header', '#header');
	
	function smoothScroll(btn, target) {
	    var animationTime = 500;
	    $(document).on('click', btn, function() {
	        var position = $(target).offset().top;
	        $('html, body').animate({scrollTop: position}, animationTime);
	    })
	}
	
	/* ------------------------------------------------------------
	 * 切换导航栏
	 * ------------------------------------------------------------ */
	
	$(function() {
	    $('#Liz-navbar').headroom({
	        offset : 100,
	        onTop: function() {
	            $('.navicon').show();
	        },
	        onNotTop: function () {
	            $('.navicon').hide();
	        }
	    });
	    $('#nav-toggle').click(function () {
	        $('#Liz-navbar').removeClass('headroom--top').addClass('headroom--not-top');
	        $('.navicon').hide();
	    })
	})
	
	/* ------------------------------------------------------------
	 *	加载footer
	 * ------------------------------------------------------------ */
	 var footer = __webpack_require__(/*! ../tpl/footer.html */ 24);
	$(function () {
	    $('#footer').html(footer);
	})
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! jquery */ 1)))

/***/ },
/* 22 */
/*!***************************************!*\
  !*** ./src/js/jquery.headroom.min.js ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__webpack_provided_window_dot_jQuery) {!function(a){a&&(a.fn.headroom=function(b){return this.each(function(){var c=a(this),d=c.data("headroom"),e="object"==typeof b&&b;e=a.extend(!0,{},Headroom.options,e),d||(d=new Headroom(this,e),d.init(),c.data("headroom",d)),"string"==typeof b&&d[b]()})},a("[data-headroom]").each(function(){var b=a(this);b.headroom(b.data())}))}(window.Zepto||__webpack_provided_window_dot_jQuery);
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! jquery */ 1)))

/***/ },
/* 23 */
/*!********************************!*\
  !*** ./src/js/headroom.min.js ***!
  \********************************/
/***/ function(module, exports) {

	/*!
	 * headroom.js v0.7.0 - Give your page some headroom. Hide your header until you need it
	 * Copyright (c) 2014 Nick Williams - http://wicky.nillia.ms/headroom.js
	 * License: MIT
	 */
	!function(a,b){"use strict";function c(a){this.callback=a,this.ticking=!1}function d(b){return b&&"undefined"!=typeof a&&(b===a||b.nodeType)}function e(a){if(arguments.length<=0)throw new Error("Missing arguments in extend function");var b,c,f=a||{};for(c=1;c<arguments.length;c++){var g=arguments[c]||{};for(b in g)f[b]="object"!=typeof f[b]||d(f[b])?f[b]||g[b]:e(f[b],g[b])}return f}function f(a){return a===Object(a)?a:{down:a,up:a}}function g(a,b){b=e(b,g.options),this.lastKnownScrollY=0,this.elem=a,this.debouncer=new c(this.update.bind(this)),this.tolerance=f(b.tolerance),this.classes=b.classes,this.offset=b.offset,this.scroller=b.scroller,this.initialised=!1,this.onPin=b.onPin,this.onUnpin=b.onUnpin,this.onTop=b.onTop,this.onNotTop=b.onNotTop}var h={bind:!!function(){}.bind,classList:"classList"in b.documentElement,rAF:!!(a.requestAnimationFrame||a.webkitRequestAnimationFrame||a.mozRequestAnimationFrame)};a.requestAnimationFrame=a.requestAnimationFrame||a.webkitRequestAnimationFrame||a.mozRequestAnimationFrame,c.prototype={constructor:c,update:function(){this.callback&&this.callback(),this.ticking=!1},requestTick:function(){this.ticking||(requestAnimationFrame(this.rafCallback||(this.rafCallback=this.update.bind(this))),this.ticking=!0)},handleEvent:function(){this.requestTick()}},g.prototype={constructor:g,init:function(){return g.cutsTheMustard?(this.elem.classList.add(this.classes.initial),setTimeout(this.attachEvent.bind(this),100),this):void 0},destroy:function(){var a=this.classes;this.initialised=!1,this.elem.classList.remove(a.unpinned,a.pinned,a.top,a.initial),this.scroller.removeEventListener("scroll",this.debouncer,!1)},attachEvent:function(){this.initialised||(this.lastKnownScrollY=this.getScrollY(),this.initialised=!0,this.scroller.addEventListener("scroll",this.debouncer,!1),this.debouncer.handleEvent())},unpin:function(){var a=this.elem.classList,b=this.classes;(a.contains(b.pinned)||!a.contains(b.unpinned))&&(a.add(b.unpinned),a.remove(b.pinned),this.onUnpin&&this.onUnpin.call(this))},pin:function(){var a=this.elem.classList,b=this.classes;a.contains(b.unpinned)&&(a.remove(b.unpinned),a.add(b.pinned),this.onPin&&this.onPin.call(this))},top:function(){var a=this.elem.classList,b=this.classes;a.contains(b.top)||(a.add(b.top),a.remove(b.notTop),this.onTop&&this.onTop.call(this))},notTop:function(){var a=this.elem.classList,b=this.classes;a.contains(b.notTop)||(a.add(b.notTop),a.remove(b.top),this.onNotTop&&this.onNotTop.call(this))},getScrollY:function(){return void 0!==this.scroller.pageYOffset?this.scroller.pageYOffset:void 0!==this.scroller.scrollTop?this.scroller.scrollTop:(b.documentElement||b.body.parentNode||b.body).scrollTop},getViewportHeight:function(){return a.innerHeight||b.documentElement.clientHeight||b.body.clientHeight},getDocumentHeight:function(){var a=b.body,c=b.documentElement;return Math.max(a.scrollHeight,c.scrollHeight,a.offsetHeight,c.offsetHeight,a.clientHeight,c.clientHeight)},getElementHeight:function(a){return Math.max(a.scrollHeight,a.offsetHeight,a.clientHeight)},getScrollerHeight:function(){return this.scroller===a||this.scroller===b.body?this.getDocumentHeight():this.getElementHeight(this.scroller)},isOutOfBounds:function(a){var b=0>a,c=a+this.getViewportHeight()>this.getScrollerHeight();return b||c},toleranceExceeded:function(a,b){return Math.abs(a-this.lastKnownScrollY)>=this.tolerance[b]},shouldUnpin:function(a,b){var c=a>this.lastKnownScrollY,d=a>=this.offset;return c&&d&&b},shouldPin:function(a,b){var c=a<this.lastKnownScrollY,d=a<=this.offset;return c&&b||d},update:function(){var a=this.getScrollY(),b=a>this.lastKnownScrollY?"down":"up",c=this.toleranceExceeded(a,b);this.isOutOfBounds(a)||(a<=this.offset?this.top():this.notTop(),this.shouldUnpin(a,c)?this.unpin():this.shouldPin(a,c)&&this.pin(),this.lastKnownScrollY=a)}},g.options={tolerance:{up:0,down:0},offset:0,scroller:a,classes:{pinned:"headroom--pinned",unpinned:"headroom--unpinned",top:"headroom--top",notTop:"headroom--not-top",initial:"headroom"}},g.cutsTheMustard="undefined"!=typeof h&&h.rAF&&h.bind&&h.classList,a.Headroom=g}(window,document);


/***/ },
/* 24 */
/*!*****************************!*\
  !*** ./src/tpl/footer.html ***!
  \*****************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<div class=section><div class=Liz-container><div class=\"Liz-flex footerLogList\"><div class=\"Liz-flex-1 Liz-border-right\"><img src=" + __webpack_require__(/*! ../images/page1/logo1.png */ 25) + "></div><div class=\"Liz-flex-1 Liz-border-right Liz-text-center\"><img src=" + __webpack_require__(/*! ../images/page1/logo2.png */ 26) + "></div><div class=\"Liz-flex-1 Liz-text-center\"><img src=" + __webpack_require__(/*! ../images/page1/logo4.png */ 27) + "></div><div class=\"Liz-flex-1 Liz-border-horizontal Liz-text-center\"><img src=" + __webpack_require__(/*! ../images/page1/logo3.png */ 28) + "></div><div class=\"Liz-flex-1 text-right\"><img src=" + __webpack_require__(/*! ../images/page1/logo5.png */ 29) + "></div></div></div></div><div class=\"section Liz-border-vertical Liz-bg-default\"><div class=\"Liz-container Liz-margin-vertical-lg\"><div class=\"Liz-flex Liz-flex-justify-center\"><img id=go-header class=go-header src=" + __webpack_require__(/*! ../images/page1/top.png */ 30) + "></div></div></div><footer class=section><div class=Liz-container style=\"padding-top: 20px;padding-bottom: 50px\"><div class=Liz-flex><div class=\"Liz-flex-1 Liz-flex\"><ul class=\"footList Liz-flex-1\"><li class=Liz-text-lg><a href=./groupIntro.html>关于卓尚</a></li><hr><li class=Liz-padding-top-10px><a href=./groupIntro.html#culture>集团文化</a></li><li><a href=./groupIntro.html#history>发展历史</a></li><li><a href=./groupIntro.html#honor>集团荣誉</a></li><li><a href=./groupIntro.html#chairman>董事长致词</a></li></ul><ul class=\"footList-brand Liz-flex-1\"><li class=Liz-text-lg><a href=./subbrand.html>旗下品牌</a></li><hr><li class=Liz-padding-top-10px>三彩 3COLOUR</li><li><a href=./subbrand.html>丽雪 Leisure</a></li><li><a href=./subbrand.html>伊布都 ibudu</a></li><li><a href=./subbrand.html>优露 ullu</a></li><li><a href=./subbrand.html>Aline de rose</a></li></ul><ul class=\"footList Liz-flex-1\"><li class=Liz-text-lg><a href=./news.html>新闻中心</a></li><hr><li class=Liz-padding-top-10px><a href=./news.html>集团新闻</a></li><li>公益事业</li><li>员工关怀</li></ul><ul class=\"footList Liz-flex-1\"><li class=Liz-text-lg><a href=./development.html>人才发展</a></li><hr><li class=Liz-padding-top-10px><a href=./development.html>加入我们</a></li><li><a href=./payment.html>薪酬福利</a></li><li><a href=./learn.html>学习发展</a></li></ul></div><div class=\"Liz-flex-1 Liz-flex Liz-flex-justify-right\"><div class=Liz-flex-1 style=\"padding-top: 15px;\"><a href=# class=Liz-cf><img src=" + __webpack_require__(/*! ../images/page1/footor-logo.png */ 31) + " class=\"img-responsive Liz-fr\"></a><br><a href=# class=Liz-cf><img src=" + __webpack_require__(/*! ../images/page1/address.png */ 32) + " class=\"img-responsive Liz-fr\"></a><br><a href=# class=Liz-cf><img src=" + __webpack_require__(/*! ../images/page1/phone.png */ 33) + " class=\"img-responsive Liz-fr\"></a></div></div></div></div></footer><hr><div class=section><div class=\"Liz-container footerDesign Liz-flex\"><div class=Liz-flex-1><img src=" + __webpack_require__(/*! ../images/page1/copy.png */ 34) + " class=img-responsive></div><div class=Liz-flex-1><img src=" + __webpack_require__(/*! ../images/page1/design.png */ 35) + " class=\"img-responsive Liz-fr\"></div></div></div>";

/***/ },
/* 25 */
/*!************************************!*\
  !*** ./src/images/page1/logo1.png ***!
  \************************************/
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJIAAAAdCAYAAABBnTWDAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkMxQURDMENBQkRGMDExRTVBN0VBRTJERTVFODJCQjdBIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkMxQURDMENCQkRGMDExRTVBN0VBRTJERTVFODJCQjdBIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QzFBREMwQzhCREYwMTFFNUE3RUFFMkRFNUU4MkJCN0EiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QzFBREMwQzlCREYwMTFFNUE3RUFFMkRFNUU4MkJCN0EiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5DNZnKAAAFB0lEQVR42uxba4hVVRTe5/rIdNIix3fgo6ekTKKISNYPMxofDQW9MFKQkDD6URFE0aD+kKRS9IcFQTYgBFKa5QszRE0rjNEyRRwz823lyERjOs3tW55v42577p3r3fvAucP+4GMz68xde5911l5rn332ivL5vOoIURQpD7gRvAU8A/6r/KIabAf/UNlGb/Am8BTH6wujwC7gMfBP61oN28PgX2ne3JoiXFiKo5XwkD8F20BRdhKc5mnsd4HfUa/wa3CIo865YCN1+0JPsIETSMb5KzjFo/5m6p2VcE3b5kEH/UcNPZfpG9VJ/2TzBH/0iqMjdQP3UNdX4DvgBbAVHOFovD6cgS3gInApeAn8GbzBQW89x1vj8UGvps5V4Bsc90VwtCf9r3bgSDsdbSI+cQ5cAq6lzu/B3NVe4Cg2gZkMvYMdHelZdvqhIXuMsrcdjfcW9dQaslmUzc2QI42jvuWGbBgn01pPfdR14EgfOeo/yiitsZx6H9aCXIEfiiNtgxOdcBzAdHb4piET4/3uGGq18STvrzdkDVwjPJ6hdZEeyxJD9gvt8AjTXqWhge2kgo6EhXU/NJMZhl0hM+8410Uask7YBw531D2SaUxZug+B92TI6COZcg9b8v1M/cMr0JH2sx1QLCI9wQey2kOH3RLeIgRnwVsddXcHzxfQXZWxN7WzCfIW43qlQb/9dSnmSJLWNiCtnU9xIAPBn8AeKejOZ9DwxbY7/ladAF2ttCZvUuPBJ1Pu911wF99cAjqbIwFPM+SuS7nfz4PpOxdyCWntM6S11mCagBJQdY0jIa2NUfFu7qpgn4ASA1B7UkR6hheGwqmGBFsFFMHdbI/9z5HgODk6krQrwCbIng/2CigA/eXgBzsiySuzbJzJ1/nbwS3g+3Cm+4PNAgzIJ68vwBfBA8rYa7ziSPkYzWQTF93/gC8H2wUYkDX0VHCjij9xXSr01qboWLIZuRecGGwXYGAN2yPK2q3PFfmRHBvoG2wXYECOBMm300dlaV2qI7UFuwXYyUrFpxYGg2NLdaSAgGLprS4LjiSDaQ7PpCKxjc8uE44UULm4zC0A2S66IzhSgNf0louiqBEcm2KnaTpr1wRZj4wZXRaoPVO2S2sBnVVGFPGJTSo+AlRn3oxUMvRP+OebVbwp6QLpbECCvMq4+XIh574HJchvU3EVTFYg36OqExx8IFsftXiH2N5pyfXfTZ7vSU5IytePCdp3xJHkPPUo878Qobrz9e6AY4f7aES7Rkxy6xlH3Tt4I2Z9lRzMk/Pa36TgEHLgr5zz1TvZTrOikewQ/0a6QooJ5Ex4rRWVdMTYkFJ6k72kGVrwiYrLTfob5UgLGJJfdyxHmkQ9sqWu66p0Zcl7jjcyhXo2c+bdq+JiSTnBMMZBbz31yilRKUmScqLnVHw+fEYZ+vow6siEfYBRVJfzvObxwc6mzo85wV5gRtnoQbf4R6MlkyIROUK8mw51xejyzaSFs+cgB/Qj2MtDpe1S6jsNfsvOjxdIS9eLZepqBahmvaPO+gSdmkPL1Ck7wW2Wrq3KrWjRRsTJafaxRyVUxF4n+nIZ0phwbTv7mR+JoyCV3Yc/XuJ6qZmpYTGuXWCqc73JWs5mqZiQEqIPVHJlRTl4immjndH1S0d9NapwceRKVX5xgUzYOSqunpEJu0IZHz09YjTHf47rGNeFtpwGmcd152LrmqTnhyTo/CfAABtaaxoptnDgAAAAAElFTkSuQmCC"

/***/ },
/* 26 */
/*!************************************!*\
  !*** ./src/images/page1/logo2.png ***!
  \************************************/
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGUAAAAfCAYAAAD+xQNoAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkMwQjk3MEIwQkRGMDExRTU5NjEwQjk3Q0FBODJCODA2IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkMwQjk3MEIxQkRGMDExRTU5NjEwQjk3Q0FBODJCODA2Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QzBCOTcwQUVCREYwMTFFNTk2MTBCOTdDQUE4MkI4MDYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QzBCOTcwQUZCREYwMTFFNTk2MTBCOTdDQUE4MkI4MDYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7iKZ+aAAAFP0lEQVR42uyaa2wUVRTHB+qjBSsqIogCLdrio6AYNYioVSEYSC00RE00oh80iPERCMFEK8aIEtFEEo0Q/SCQCAFfCYiIvIwWigYEX0hSMQq11vqICizvek72N+F03J2dyWzbrTsn+afd3XvvnDn/e89rppvT9aWnoJ+gmM9HBX8LmgWHuuINdeuCOvcW3CG4RXCFoL/PWCXmO8FXgjrBOkGLE0vWpEDwjGC/oNUDPR2Ngi2CjWCzYI/gmBl3XPAxpHaPTRpdlniI+EswT1ApKPKZd5KgDCLmCD6DqHdjk0aT0R5CFgrOirDemYLLY7NGk+cMIbP/7zfbVfxqgfm/Id6juSGaYe3lpGj2NCg2SW7IJYaYbwR9YpPkhpQIdkGM1h7nxyZJn3I+LKjpoOtp5rQGYrQOqYgpaCt9KNTUQKs6OPDP5braUhkfU5GUc3Ehbqp6dyfoUAMpWgzW5nuVrifkW8EvEPJJJxqknMCvenwgODsfCekl2A4RGwS/5UDAPU2wDGJ+EozIJ0JOcZKdViVFe0eHBdfniG7a8Z4BMarXbflAiN70YifZkXWbere38zUrMXSPEHPug5hl+UBKLTf7I3+ndND1tNVeFGLeeYKEYEWO2K1QUOUkHztMc9q2jCLJRAyU4KQ8EGBOcUQFnhb84ySfKoZJlT9C15c7mYxTBY8Tc22H+55sLH6ZYJ/x1ZN9xo7GxTUxvjGkUb0SNpN61dz8qIBzxtIpCCKnY48g2elW9FBbTBW8x+e5UQnpZ9zV7z5Bva/gQ5P9vC74M6Rx3O5ATUh35Z6Q+YaQRQHnPE9srEhTh3m7FG+yMct91lXdv0CPt7Chq5s++bwmCiEaXLew2JeCUh9CGhjXTFaWoKh7NOQG2MhN3xxinj6zX20IWRWA1P6mEzHH89tAJ/lEM8Hvvfn+BnMNbYw+KbhXMAuyBjPuJcaoG50k2MnnQ4yPnPrqYuupA9LVB+uNsgcJzA854Z4MlkBs2IyuGhfZytxnOW1eF3i1qaWqjJ9fYeJeKTv6sLmfrc6Jl0ved/77boDiAJviAsEQYq53jNpoWNQT4u681RCUyrfONi6qlTS5KMDa5bjBCU7ykawWo9+zxuSAOlZwIuzO1YLxKsGDgjcEO4iFaqQFuKPXzJzN6FPG+KOml6Z/9QWNS7neAFyPfr+GYF2NoQtNPG1w2r5DsCCqu3Kr9TrnRAe2V5px7ksMXwuWG0W0F/aK4Cl27Xx24w5DoN70Jo78VHPcg2R0IwXvGAP5oYmYUUIh2Ujc28mpulWw1Kz1A8a+n89PmOvO47ufcdfeGLIwxfUvDFH/XUSJoba4yxsbtrNjjhGsvYFxLP5ex44xR3uSCW5e7Obmp7DDvT0yvc5MH6XVx09Ht0xE7GPDjDNuSdfehts6J8UcdWWPGI8wiu9vNCfgiOBXwdAU+s0ya31qYtGLgpPTbPybKIo1EWgxbnCb3QxluJBmlNnDjhoBES+w894WnJGhcLuOOcNNkAwjStqVGLM+ABHNuKXx1Aap6gVXejLeJeOxFPGyO329kWyGBMnLgDT6luEJ7mSTVpkSQg2+VrASD7TXo3s9Ogzz1nRDmbzJXHi6OdYHUKqyHRuc7s7RXP6PDCQkuNGZkBe2O92XTRMk7a72IcNPhuBmj6Q4yStJhAb6+bNF+NtaXJdVvgcn5GAWSbgWf34x7qw0w/gWkoh6gnNdlvVpTymGoEJO6G5CQ8YgUxBkYBZlGv7WK5rH7wL6/q8+r/kct5pX0lkveE8ksO7nJDThb487sTj/CjAAzj+4oWtARGYAAAAASUVORK5CYII="

/***/ },
/* 27 */
/*!************************************!*\
  !*** ./src/images/page1/logo4.png ***!
  \************************************/
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGEAAAAeCAYAAAA8cnC3AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkJFRjE1NzBCQkRGMDExRTVBMjE1QjhGNTI5OUQzMzc1IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkJFRjE1NzBDQkRGMDExRTVBMjE1QjhGNTI5OUQzMzc1Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QkVGMTU3MDlCREYwMTFFNUEyMTVCOEY1Mjk5RDMzNzUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QkVGMTU3MEFCREYwMTFFNUEyMTVCOEY1Mjk5RDMzNzUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5Hu/MrAAAEqUlEQVR42uxaaUhVURC+ppWGG6ZlJG3SKkVllFmG2uYP6Uf2I4hW+xNEhG2EoUGLlUVIRNGPCqEFImihBZIy+2G2QNGe7dmepqWZmdkMzqvTeO659z71Pr068ME7782dM2fmnDkzc5+mNY3CALMAczTnkT8gCbC8tSkWDpgN2AO4C6gn5DvA6EGAZEA24CrgF62tvKUn7iR87gbIBVQDSgBzJfxD6PdIQJTDdv5AMnwIYBzA2xNKbBZ2NqIOMFiHtyvgo8NOgkgFwtpsPQkxkt+idZ6rAdzWnEtFdk4mOqGQ/fYbcFPxbJWDnVDlKSdsYnfCPMAjrYNanHyEz98B8wkd5KGT0EEOdIJPG7KBtycV8JFUiRMBkwBdACstyusBWAFIAfSnvPsZ4CRgF+CNCRk471hAHOXuixS8WNvEAuJprvUm9cQ6YCFgOiCC7IAp93XACYCfBQeOoPljSGa1Yl2jiXcQX1eipEpE3DJQ4ASrE7CSrmC1hohv1OKQ0RhAJiCP7iZVjp4A2EL61lqsVQIBR4RnimleNEgW4J1Eb65DJG3OU4AyxhvMeEcC1plZFz7YE5DOBFpxwlcyMsroR8e7FyAVUMoKwBSJrBDSYRnxqJwQRrs3m+lr5ARc5x2BP5eKTh4JThk4AR0ZSuuoMHBCCEWHJSbW9ZduuOkEPMrDFO2Az8xhEQq5py1Uqw8tOEGUW6i4s/zZiSi30GUIVvAe05PJL+bHbt4t9wkyKqYd7qIAwGqFrKcW5i02yYfd0GRhvIZCr4wqAYeaeX6lbbkTfrZQAnAU8EoY4wXm2wxy60zypQufXwOuGPBXmpRbb0HXWk/XCdgCOceOfLRNc2NMniCM8ywaz1HFGr9jRtk0L6a6XsK41TUe7XRCiSRzsIPC2bi0PTuBx1k/m+YNcDPeO9IJPH37ZNO8pZI8v906gYcFu9rkz9h4gJOcYDWcDGfp2mWrqZybVMhkxjVz1ieSj91O6GqRP0n4fFwRm7+yOZp6Wr9TteyieK2hudgcVMHG3RW8Xi0djqIMnJIkhIEfgAyT4cNXkcoOBUwRxl0UMrPZmneqjMLaKqo293M2Hq/Dh84R/73SWWXM80J/45PBwvJZ3yRLhy+QSnYX3yIDh/bW/m92XZRU14mkn9iTwh3fVyF3H9N3t8QYaPCNWuNOaqKOTOQX+0y4gcIkG/Su1rjZN1lj1Su+P1jLFi+2qEMlChRJlN3BUkLstd/U/nVQ00yerP1MLjpxK8m/Rt+tAhxkfOiYvVrjf464TspZxo99qu2k1zatof9VJuHDdwSH6UTxDZHGeD8AcrSGdvsFujdQzw2MDzcNdnJnumJkvQEW6FTA+NtiwFLAExrj32HuAV4Iz+M4wUJ4w5c1Z3R0eQCYRnwHmKHe0lyzFTs3g+4jmWyMBJHE4/oOw+d7raFje5U2LZeZoyMPT0kq8Ykyf5KzUGamF93o/iYuN97cK6CFTxcuHnw5g2/m+tDOe02nqcjNfk0syfMnHfDN1yUhKwmiLK2cjGWWUN4Mytjw5L6k3X9PyPwCSW6NSZnYyp9K8R9tdYecWiPIxC7BF1pLm6wzHEt/BBgAa4qYZvr1UV8AAAAASUVORK5CYII="

/***/ },
/* 28 */
/*!************************************!*\
  !*** ./src/images/page1/logo3.png ***!
  \************************************/
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFEAAAAvCAYAAACbpyaHAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkJGRDUwMURDQkRGMDExRTVCQzMzOTBBOUI1MTRCOTdCIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkJGRDUwMUREQkRGMDExRTVCQzMzOTBBOUI1MTRCOTdCIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QkZENTAxREFCREYwMTFFNUJDMzM5MEE5QjUxNEI5N0IiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QkZENTAxREJCREYwMTFFNUJDMzM5MEE5QjUxNEI5N0IiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7lPsmUAAAGeklEQVR42uxb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"

/***/ },
/* 29 */
/*!************************************!*\
  !*** ./src/images/page1/logo5.png ***!
  \************************************/
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJsAAAAYCAYAAADtRY/6AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkJERjA3QTk5QkRGMDExRTU5QzI4QTM3ODg3Mjk5QTIyIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkJERjA3QTlBQkRGMDExRTU5QzI4QTM3ODg3Mjk5QTIyIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QkRGMDdBOTdCREYwMTFFNTlDMjhBMzc4ODcyOTlBMjIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QkRGMDdBOThCREYwMTFFNTlDMjhBMzc4ODcyOTlBMjIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6PRXYRAAAIM0lEQVR42uya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"

/***/ },
/* 30 */
/*!**********************************!*\
  !*** ./src/images/page1/top.png ***!
  \**********************************/
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAANCAYAAACzbK7QAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjIxNDUwNkY1QkU1MTExRTVCNDA2RUFCQkE0RTJGNUY1IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjIxNDUwNkY2QkU1MTExRTVCNDA2RUFCQkE0RTJGNUY1Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MjE0NTA2RjNCRTUxMTFFNUI0MDZFQUJCQTRFMkY1RjUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MjE0NTA2RjRCRTUxMTFFNUI0MDZFQUJCQTRFMkY1RjUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7g44gWAAABAklEQVR42mIsKi5mIAHUAjEjEDcRq4GFBMPLgDgGyv4BxF3UtKAQiFOB2BHKPwDEv4G4nxoW5EKxPRA/gYo5QS35C8STKLEgDYhLgNgBiB8jiT8CYmeoJT+BeCY5FiQBcQ3UtfexyN+HWrIPGlzzSLEgHppSQIbfweMIkJwrEO+FBtdCYiyIAOIOqOtuERFHN4HYDWrJLyBejs+CEGjKAGm4RkISvgbVswuI/wDxamwWBALxZCD2BOLLDKQDkB4vIN4OtWQ9sgXe0JQAUnCBgXxwHoh9gHgbNLi2MgEJdyCeD8R+QHyGgXJwBmoWyEwPkAVx0OA5wUA9ADIrCJQaAQIMAMJPOhRfI+6mAAAAAElFTkSuQmCC"

/***/ },
/* 31 */
/*!******************************************!*\
  !*** ./src/images/page1/footor-logo.png ***!
  \******************************************/
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKoAAAAbCAYAAADs4BRSAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjBFNEQ3ODY1QkRGMTExRTU4QUQ2QzRCNDE0MTMxRDcyIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjBFNEQ3ODY2QkRGMTExRTU4QUQ2QzRCNDE0MTMxRDcyIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MEU0RDc4NjNCREYxMTFFNThBRDZDNEI0MTQxMzFENzIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MEU0RDc4NjRCREYxMTFFNThBRDZDNEI0MTQxMzFENzIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5MIDvGAAAHxklEQVR42uxb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"

/***/ },
/* 32 */
/*!**************************************!*\
  !*** ./src/images/page1/address.png ***!
  \**************************************/
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALAAAAALCAYAAADfugfoAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjFFODU3MzlBQkRGMTExRTU4MDMwQzk1QjQ5NUY5MDFBIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjFFODU3MzlCQkRGMTExRTU4MDMwQzk1QjQ5NUY5MDFBIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MUU4NTczOThCREYxMTFFNTgwMzBDOTVCNDk1RjkwMUEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MUU4NTczOTlCREYxMTFFNTgwMzBDOTVCNDk1RjkwMUEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4nchgRAAADKUlEQVR42uxZ7XHkIAwlW4q3hLQAJbgFuYTUsCXYLbgE3EJKwK349ge+eaORhHB28+eOGWYSowD64OlJCeH/aI35OUlZi895OGdsnFOYTKzfgnF2Nu6Z2X7E5HEcDhtYd8mKrsWht2c/PudT8Cb8YVEU4JuQw5nZITN3rFvnW2vvHPtzfjTmfmHf7TkfRtC9YlC118QCTfL10PBvqrpuEDMDC0Zyxhvux+eCQjchwIISABvb6EsxLnfcYcikelY09pjAqBN8H5nBtbXeITlPesCtBy49QCuITmdn9rfRAITwQz2/ICi2zkc5GXsPVa8F5AME3+xAfQ2FSQtgqkpszgC4w0W1MdVLZwNl9rpPaKTLnb2+5Fh7BaIu7HFIiDox+cXp6ACy572TETQJnDsKafrTSQeOut/d8C1SG4JzM9w7CQEX690mhtpJsNdq3NOFwEG4aBQ426wEIX6PivHwO5ch9ns0HGBRgx7akBtIVhwcuDCeSgYCk4MLEkN2vl8R9D058MltZ/iZOjmwhYBRuWsW+HYR7GTROmpw6+a4gSMGSCW7E4W/Hei5MXqCaXoE9Gnx2clIPZMzLb1rLAICBwUxskBDRsgiWdgzCJkSz0bbrsx3pNCRQ+G0p/zKOC3XdYfgS0wuK7TOmx28k7QqU/r91QgchZcZO5TMnWtXObA2tU7BDLy3CGmeOyBCMRMBSWcjK0iI2tOFiA4bFW8nAM7CLoSnE2MhcOlBYF5lkoPfnoZYGzKj8IpPZF5qIdEzzlcdBYNYa+/kwLzS5oWZlJFOxB1qtwF1+DTSOgHfXS/quBnFOvJg5N6bo4jbGWqj/NbZuhwameJvAJNCmlvFXBGKJ62HmoxgDM5KPV9Yu8KB784C1lNwfAi6J1ZALYJzByM4d9B7D9dHquDxmy3HXpBqdj9ugJDciA+GZDwtPJTARJlB4bj8HDL6kLk6eWffJ0Bxbe03xuCgG0PHfsRQkp+11Qe/XdQRqdvdyU09YwRbkODH+CJ7jz98uP/caP0nzsPVPP+RKsZ+hXUjDsc9s9BJOoz7Ymr21gFZ6UpId8wXg/iwOjJ/BBgA/XvZDc/CVdgAAAAASUVORK5CYII="

/***/ },
/* 33 */
/*!************************************!*\
  !*** ./src/images/page1/phone.png ***!
  \************************************/
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAN4AAAAUCAYAAADiFINlAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkZGQjIxRDI5QkU1NzExRTU4OUFCOTE1MTdBNDE2RUFDIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkZGQjIxRDJBQkU1NzExRTU4OUFCOTE1MTdBNDE2RUFDIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RkZCMjFEMjdCRTU3MTFFNTg5QUI5MTUxN0E0MTZFQUMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RkZCMjFEMjhCRTU3MTFFNTg5QUI5MTUxN0E0MTZFQUMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7sW0DyAAAFrklEQVR42uxcgbGjOAw1O9sALXAl0AK/BLYEUgJXAlcCv4RcCaQEUgIpgZSQhRuTE4olWbbz588smmH+Bmwj23qW/GQ2ezwe5k+WLMtct3N7rXITmiiXqwJlL8t193h1aD1fyW37hf29tn9V6rXKvx5jAGV9Xw1+32wbKQS2fbft3oX585Gb4z1edVz4WWzqRc+l3F7PteKffBEyrUNj/3JGsJXDV/uGehrpiPYnxqhKRq/Jwxi5fg0JFpGRaPvsKN8QZamrQvVHofzkwo+k567sAbwXaV0D7DCy2ZZZ//bW2KHhNQnraaQHbY22P/DeTOgFn5+tXiO6T4GvcgCtte1MCYA3IaC1tk0KfI3VV7q2fuXE+6h6IwE8Uc8DeDTwZg/gncFzPGkDY+Ch9TSegfKeEPSdAzgzChGhJ5wZ75KD56MyxPORlgE+9Gylst2RGAsIoEpqBNjRTk9kYzs9D+C9Ag8CgwJeLninkngeWk8jjbBgtMTzQggle6bds0dYHiPbgtQHAIiSWljkHgHAe+pJ2NlTz/X3D3MIXPVruxn+FIzbMOWuYLNeJagXIhQZcmfKcwTKlSAdcuAl/3nz/Eh90njazlPny7v0PIC3X9VX+VtgFytkjJyhlgnqhUx6GaE7FcK6jEpaTFICrmJIIQ1IGruA3AnglV+i5xFq7kKpwSNkm4TQB7KKc4J6oaHZQIRXMfuhgQgzB/Se1v5Nsd+De8g2QZg7CQxypWkTMZpPPZGNPfU8yJX/B6V2bN5jgQc307H1QmQEfRoRYaQNY6FONTMWjYLuD9kGQBZyAL8nBcAbj4WtJvqxsb05lY7z0RMu+BOxmXdNEs7TNMwznMOh3gPvV4LBVw7K/GlQAaCDTF/jSVL45NxcAAqtF5tSwPknjbdrBQBN4Bk0tgHZQ2w6oWDyY0OAt+s850DM+znsidQTR1o+wKuI1dp1ryIMRwu8XgDeEBsqI8MxSuA1gcBr3gw8mIPq7Jg1CAg+Xu/s4bUkz9ZHeFpsT9t8tHbx6JA30bSjDYFz85oLzVGo6aWnFngDESJVjkFNATxXu0mBJ1Dk3y3UnJjVl6L9CwYIs+BdYGjKeYeHR3uuHGDP9KdhvKoRvG7I3jc07O4Q8J56SIv8+vunYtX5IOjWm/E726aRi2XJ1gn6K6SBLMsqO8gfS0cv6FkLJvjk0L8g/u17ZrEQ6HttvavnuyG17yp/AqRH62D1amDAdzvnV4HJKwRG8WrtJ0f3Lh50fA0YyF9E+ZOd561fd4HRjTk3+mnHrYAh+2JPTz0XWxP1XMrnP8EK1EfQqKVJLyfgIU6Ut90OOS8dzpQrF1wJOSBMYDH4AMZWeADo5jBSbT3DGB0ej9yDWt+A4DoF0gPj/KUYz3uAAX969klq/4Io+wuxV02V9nA5GlHPdfEHB/LLH8DIM3RpVumreY+crEFUxIBnK+BcoFs7ap9dCEORLldZCApusSmBkZvIeqEUvNbTdgAUvqCLzTt+ldSJxhWObfSXJN9xj4dj8+kd5ArzdQK3x6sEogQ+LxPU08gs7MuonNhGpIwRxEdJvC/mywtI7Rce+65c2IvGHkAvcX9QSuo/PQk7e9HzO7Ka1MB5Aw8uComBZ8w+T1YgQ5uYTXxoPV85Myxijt6vJYwkFtWVTxtN/IEALl9XGf4Aty94oXTEIgIPi88gstrsyJmvc+T3ziF5PImBkoDnYuR8gNc7gPeiyxcCDzN/g9l//kF9QhNaLwQIMK82CvM2G/9v13rG68E+xSTtufZH85on5MatV4J/MHxOcjaOPJ5Gz+PkSjjwIPHycAx48YZ6GtEm0B8RwNu8wWTiE/bcmHEfwuYJ0whcqmPAc6RIoJ+hJ8yO//ohS2EUpd1sXxWb7tB6Wt0wSfROgX2SvngIJTZyB2H1zr5spMyNYCtdNrXTcynzUve3AAMAqa0E+twuweEAAAAASUVORK5CYII="

/***/ },
/* 34 */
/*!***********************************!*\
  !*** ./src/images/page1/copy.png ***!
  \***********************************/
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAlgAAAANCAYAAAB1uhCxAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkY3MDJFOEIzQkRGMDExRTVBQjBFOUY4QzA1MDYzMTlCIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkY3MDJFOEI0QkRGMDExRTVBQjBFOUY4QzA1MDYzMTlCIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RjcwMkU4QjFCREYwMTFFNUFCMEU5RjhDMDUwNjMxOUIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RjcwMkU4QjJCREYwMTFFNUFCMEU5RjhDMDUwNjMxOUIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4R2B4QAAAKnUlEQVR42uxd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"

/***/ },
/* 35 */
/*!*************************************!*\
  !*** ./src/images/page1/design.png ***!
  \*************************************/
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIgAAAAKCAYAAABvwhaBAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkY1RTdDNEU3QkRGMDExRTVCQzAyODBDMUNBRDU4OTgzIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkY1RTdDNEU4QkRGMDExRTVCQzAyODBDMUNBRDU4OTgzIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RjVFN0M0RTVCREYwMTFFNUJDMDI4MEMxQ0FENTg5ODMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RjVFN0M0RTZCREYwMTFFNUJDMDI4MEMxQ0FENTg5ODMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4NGoXWAAACWElEQVR42sxYi42DMAxFp1uAFdIRWCGMwI3AjdCOQEegI9AR6Ah0hHQEOgKXSs93lpUvPZVGsgTE+PNiG5uiKAptabE0CposGUv74m8ZPB891IJf8tG1stTjmlbFdBH/47pjPGRjX/iXgf7cVeJdn+we+y75HezSDltMQGfP/NxCbw72v+C7lhJOxA6hsTR79jT2uJEtnlUO/o45SzbOAf1rA4T8dMkm+5RH/sySQdoyi8NwHdRWenOwDwYIRdnCMm1tgEgjK/DqAO8Ifs0yZvG8YyLBYyJ2Sdla2CflU6Us8Z5y2OKrEPygttCbg300QKTiNoF3CignIwdQrPwrYSNFfvnPASKzSma2cdzvGZiDg9dXIWSpf7XeZOw/E0vwjZWiFpXCtY6WdihRPQy9Wrpg7y4q0zGi9w7iWXJi385dov2pfFz2CeQLpILZf8A7pfDxgdsXDuUGHN5BbzL2qQEinTlFeA4g+uxQhsSMUqI0lnCmFnzfrKmqi/9dyhGUcj0y+Mzur6AOtvF1wbMBgXp/M71B7D8yQLuuBPyMQ6zhoGLOVY5KVTMKBVTtcOrZRVVvF5CtsdewTxf1BE0gqc6OpnIrvVnYx3oQndGkxr5tho3UKQ3tKJrT0PTxzBQjJwfXZEPyp0BQGjYBtB5/Rs808Uq9Odgnjbn7zDG3Coy5IwNnCGRVB/4lYmPqCGwiSeDq6vmEQTgsHv/4YccaZsJhK7052Ed/lDUZP8o6z8+XCVR5Ongpl8a0MiFASMayMkBUJLg4+HNC9z9HbFHsoLbSm4z9jwADAEz0gQ+fOwatAAAAAElFTkSuQmCC"

/***/ },
/* 36 */
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
/* 37 */
/*!********************************!*\
  !*** ./src/css/groupIntro.css ***!
  \********************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !./../../~/css-loader!./../../~/postcss-loader!./groupIntro.css */ 38);
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
/* 38 */
/*!******************************************************************!*\
  !*** ./~/css-loader!./~/postcss-loader!./src/css/groupIntro.css ***!
  \******************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../~/css-loader/lib/css-base.js */ 4)();
	// imports
	
	
	// module
	exports.push([module.id, ".header {\n    height: 270px;\n}\n\n/**\n * chairmen\n */\n\n.chairmanText {\n    max-height: 553px;\n    overflow: auto;\n}\n\n/**\n *group honor\n */\n\n#slider {\n    width: 1200px;\n    height: 390px;\n    margin: 0 auto;\n    position: relative;\n    overflow: hidden;\n    font-size: 16px;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n}\n#slider ul {\n    width: 6000px;\n    position: absolute;\n}\n#slider ul li {\n    width: 1200px;\n    float: left;\n}\n#point {\n    position: absolute;\n    display: inline-block;\n    float: left;\n    top: 360px;\n    left: 567px;\n    font-size: 60px;\n    z-index: 2;\n}\n#point span {\n    float: left;\n    height: 8px;\n    width: 8px;\n    border: 1px solid #44bcbc;\n    border-radius: 5px;\n    background: #ffffff;\n    margin-left: 10px;\n}\n#point .on {\n    background: #44bcbc;\n}\n\n/**\n * development history\n */\n\n#time-axis {\n    overflow: hidden;\n}\n.time-axis {\n    margin-top: 15%;\n    margin-bottom: 5%;\n    background-image: url(" + __webpack_require__(/*! ../images/page1/line.png */ 39) + ");\n    background-repeat: repeat-x;\n    height: 10px;\n    -webkit-transition: all 0.4s ease-out;\n            transition: all 0.4s ease-out;\n    background-position: 76px 0;\n}\n.time-years {\n    font-size: 0;\n    -webkit-transition: all 0.4s ease-out;\n            transition: all 0.4s ease-out;\n    left: 0;\n    margin-left: 550px;\n    position: relative;\n}\n.time-years li {\n    cursor: pointer;\n    display: inline-block;\n    text-align: center;\n    font-size: 16px;\n    padding-bottom: 55px;\n    margin-top: -30px;\n    width: 120px;\n}\n.time-years li.active {\n    font-size: 20px;\n    color: #44bcbc;\n}\n.time-arrow {\n    height: 10px;\n    width: 15px;\n    position: absolute;\n    top: 168px;\n    left: 50%;\n    background: url(" + __webpack_require__(/*! ../images/page1/top-angle.png */ 40) + ") no-repeat;\n    -webkit-transition: all 0.4s ease-out;\n            transition: all 0.4s ease-out;\n}\n\n.time-label {\n    margin-left: -80px;\n    width: 300px;\n    line-height: 24px;\n    font-size: 20px;\n    color: #888;\n    position: absolute;\n    bottom: 167px;\n    left: 50%;\n    -webkit-transition: all 0.4s ease-out;\n            transition: all 0.4s ease-out;\n}\n\n/**\n * group culture\n */\n\n.Liz-scroll {\n    margin-right: 20px;\n    padding-right: 20px;\n}\n\n/* 滚动条整体部分width,height,background,border */\n\n.Liz-scroll::-webkit-scrollbar {\n    width: 5px;\n    height: 10px;\n}\n\n/* 滚动条两端的按钮。可以用display:none让其不显示 */\n\n.Liz-scroll::-webkit-scrollbar-button {\n    display: none;\n}\n\n/*   内层轨道，滚动条中间部分（除去） */\n\n.Liz-scroll::-webkit-scrollbar-track-piece {\n    background: #C0C0C0;\n}\n\n/*  滚动条里面可以拖动的那部分 */\n\n.Liz-scroll::-webkit-scrollbar-thumb {\n    background: #44bcbc;\n    border-radius: 4px;\n}\n", ""]);
	
	// exports


/***/ },
/* 39 */
/*!***********************************!*\
  !*** ./src/images/page1/line.png ***!
  \***********************************/
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABLAAAAALCAYAAABvY3RqAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjVEM0JDM0M2QkRGMzExRTU4OERERDc3QTNENzBCNkEwIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjVEM0JDM0M3QkRGMzExRTU4OERERDc3QTNENzBCNkEwIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NUQzQkMzQzRCREYzMTFFNTg4RERENzdBM0Q3MEI2QTAiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NUQzQkMzQzVCREYzMTFFNTg4RERENzdBM0Q3MEI2QTAiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6ZvmqgAAABCUlEQVR42uzcXYrCMBiG0aQ7yR67jN52e+lSokULFUQU/Pkaz4HCwLyDNM9dmJlca20JAAAAAIIazk++Pmn39aMn9G6e5y7ew05ffZ2Lvnb62ulrp6+dvnb66utcLk+utW6XWetvYuVSyt2brmVZQu/GcbzZTdN0yPew01dfffV1fp/c7bZf7fvuz/3V+/7b5+qrr3PW1znrq6++UT53SAAAAAAQmAssAAAAAEJzgQUAAABAaPsLrPzkz0TfpU7ew05ffZ2Lvnb62ulrp6+dvnb66utc1m+21lIPXvknZ+iLvuiLvuirr776oi/6Hoc/IQQAAAAgNBdYAAAAAITmAgsAAACA0E4CDACF2SThZsQNowAAAABJRU5ErkJggg=="

/***/ },
/* 40 */
/*!****************************************!*\
  !*** ./src/images/page1/top-angle.png ***!
  \****************************************/
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAMCAYAAABr5z2BAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjg1QzY1MzNFQkRGMzExRTVCNEY3Q0RFOUIxQTE3QjAxIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjg1QzY1MzNGQkRGMzExRTVCNEY3Q0RFOUIxQTE3QjAxIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ODVDNjUzM0NCREYzMTFFNUI0RjdDREU5QjFBMTdCMDEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6ODVDNjUzM0RCREYzMTFFNUI0RjdDREU5QjFBMTdCMDEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6swMOgAAAAe0lEQVR42mJ02bOHAQ8IgdJrcClgwaNZBIinQtkHgfg1NkVMeAyYDsRiUDwNlyImPE4PwcPHawCy05EBSEyUGANgTkcHWL3CRMDphLyGYgAup2Pzihg2A3A5HZtXpqIbQMjpOL3CBA3ZqQykA7BXmKAhK0aGAWCvAAQYAFEAEng2j5i5AAAAAElFTkSuQmCC"

/***/ },
/* 41 */
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
/* 42 */
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
]);
//# sourceMappingURL=groupIntro.bundle.js.map