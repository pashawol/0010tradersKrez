"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var $ = jQuery;
var JSCCommon = {
	// часть вызов скриптов здесь, для использования при AJAX
	btnToggleMenuMobile: [].slice.call(document.querySelectorAll(".toggle-menu-mobile--js")),
	menuMobile: document.querySelector(".menu-mobile--js"),
	menuMobileLink: [].slice.call(document.querySelectorAll(".menu-mobile--js ul li a")),
	body: document.querySelector("body"),
	modalCall: function modalCall() {
		$(".link-modal").fancybox({
			arrows: false,
			infobar: false,
			touch: false,
			type: 'inline',
			autoFocus: false,
			i18n: {
				en: {
					CLOSE: "Закрыть",
					NEXT: "Вперед",
					PREV: "Назад" // PLAY_START: "Start slideshow",
					// PLAY_STOP: "Pause slideshow",
					// FULL_SCREEN: "Full screen",
					// THUMBS: "Thumbnails",
					// DOWNLOAD: "Download",
					// SHARE: "Share",
					// ZOOM: "Zoom"

				}
			}
		});
		$(".modal-close-js").click(function () {
			$.fancybox.close();
		});
		$.fancybox.defaults.backFocus = false;
		$(".link-modal").click(function () {
			var th = $(this);
			var modal = $(th.attr('href'));
			var content = {
				title: th.data('title'),
				text: th.data('text'),
				btn: th.data('btn'),
				order: th.data('order')
			};
			modal.find('.ttu').html(content.title);
			modal.find('.after-headline').html(content.text);
			modal.find('.btn').val(content.btn);
			modal.find('.order').val(content.order);
		});
	},
	// /magnificPopupCall
	toggleMenu: function toggleMenu() {
		var _this = this;

		if (_this.btnToggleMenuMobile) {
			_this.btnToggleMenuMobile.forEach(function (element) {
				element.addEventListener('click', function () {
					_this.btnToggleMenuMobile.forEach(function (element) {
						element.classList.toggle("on");
					});

					_this.menuMobile.classList.toggle("active");

					_this.body.classList.toggle("fixed");

					return false;
				});
			});
		}
	},
	closeMenu: function closeMenu() {
		var _this = this;

		if (_this.menuMobile) {
			_this.btnToggleMenuMobile.forEach(function (element) {
				element.classList.remove("on");
			});

			_this.menuMobile.classList.remove("active");

			_this.body.classList.remove("fixed");
		}
	},
	mobileMenu: function mobileMenu() {
		// закрыть/открыть мобильное меню
		var _this = this;

		if (_this.menuMobileLink) {
			_this.toggleMenu();

			document.addEventListener('mouseup', function (event) {
				var container = event.target.closest(".menu-mobile--js.active"); // (1)

				if (!container) {
					_this.closeMenu();
				}
			}, {
				passive: true
			});
		}
	},
	// /mobileMenu
	// табы  . 
	tabscostume: function tabscostume(tab) {
		$('.' + tab + '__caption').on('click', '.' + tab + '__btn:not(.active)', function (e) {
			$(this).addClass('active').siblings().removeClass('active').closest('.' + tab).find('.' + tab + '__content').hide().removeClass('active').eq($(this).index()).show().addClass('active');
		});
	},
	// /табы  
	inputMask: function inputMask() {
		// mask for input
		$('input[type="tel"]').attr("pattern", "[+][0-9]{1}[(][0-9]{3}[)][0-9]{3}-[0-9]{2}-[0-9]{2}").inputmask("+9(999)999-99-99");
	} // /inputMask

};

function eventHandler() {
	var _defaultSl;

	JSCCommon.modalCall();
	JSCCommon.tabscostume('tabs');
	JSCCommon.mobileMenu();
	JSCCommon.inputMask(); // JSCCommon.CustomInputFile();
	// добавляет подложку для pixel perfect

	$(".main-wrapper").after('<div class="pixel-perfect" style="background-image: url(screen/main.jpg);"></div>'); // /добавляет подложку для pixel perfect
	// /закрыть/открыть мобильное меню

	function heightses() {
		if (document.body.classList.contains('page-without-menu-js')) return; // скрывает моб меню

		var topH = document.querySelector('header').scrollHeight;
		var stickyElement = document.querySelector('.top-nav');

		window.onscroll = function () {
			if ($(window).scrollTop() > topH) {
				stickyElement.classList.add('fixed');
			} else {
				stickyElement.classList.remove('fixed');
			}
		}; // конец добавил


		if (window.matchMedia("(min-width: 992px)").matches) {
			JSCCommon.closeMenu();
		}
	}

	window.addEventListener('resize', function () {
		heightses();
	}, {
		passive: true
	});
	heightses(); // листалка по стр

	$(" .top-nav li a, .scroll-link").click(function () {
		var elementClick = $(this).attr("href");
		var destination = $(elementClick).offset().top;
		$('html, body').animate({
			scrollTop: destination
		}, 1100);
		return false;
	}); //mob menu

	$(".menu-mobile__link").click(function () {
		var elementClick = $(this).attr("href");
		var destination = $(elementClick).offset().top - $('.top-nav').outerHeight();
		JSCCommon.closeMenu();
		window.setTimeout(function () {
			$('html, body').animate({
				scrollTop: destination
			}, 1100);
		}, 75);
		return false;
	}); //for footer

	function smoothScroll(qSelector) {
		var elements = document.querySelectorAll(qSelector);
		if (elements.length === 0) return;

		var _iterator = _createForOfIteratorHelper(elements),
				_step;

		try {
			for (_iterator.s(); !(_step = _iterator.n()).done;) {
				var elem = _step.value;
				console.log(document.body.classList.contains('tarif-page'));
				elem.addEventListener('click', function () {
					var destinyID = this.getAttribute('href'); //this.attributes.href.nodeValue

					if (document.body.classList.contains('tarif-page')) {
						this.setAttribute('href', '/' + destinyID);
						return;
					} else {
						event.preventDefault();
					}

					var destinyElem = document.querySelector(destinyID);
					if (!destinyElem) return;
					var destinyTop = getCoords(destinyElem).top;
					window.scrollTo({
						top: destinyTop,
						behavior: "smooth"
					});
				});
			}
		} catch (err) {
			_iterator.e(err);
		} finally {
			_iterator.f();
		}
	}

	smoothScroll('.ancor-js');

	function getCoords(elem) {
		// crossbrowser version
		var box = elem.getBoundingClientRect();
		var body = document.body;
		var docEl = document.documentElement;
		var scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
		var scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;
		var clientTop = docEl.clientTop || body.clientTop || 0;
		var clientLeft = docEl.clientLeft || body.clientLeft || 0;
		var top = box.top + scrollTop - clientTop;
		var left = box.left + scrollLeft - clientLeft;
		return {
			top: Math.round(top),
			left: Math.round(left)
		};
	} //


	var defaultSl = (_defaultSl = {
		spaceBetween: 0,
		lazy: {
			loadPrevNext: true
		},
		watchOverflow: true
	}, _defineProperty(_defaultSl, "spaceBetween", 0), _defineProperty(_defaultSl, "loop", true), _defineProperty(_defaultSl, "navigation", {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	}), _defineProperty(_defaultSl, "pagination", {
		el: ' .swiper-pagination',
		type: 'bullets',
		clickable: true // renderBullet: function (index, className) {
		// 	return '<span class="' + className + '">' + (index + 1) + '</span>';
		// }

	}), _defaultSl);
	var swiper4 = new Swiper('.color-slider', _objectSpread(_objectSpread({}, defaultSl), {}, {
		slidesPerView: 'auto',
		freeMode: true,
		loopFillGroupWithBlank: true,
		touchRatio: 0.2,
		slideToClickedSlide: true,
		freeModeMomentum: true
	})); // modal window

	var studentsSlider = new Swiper('.students-slider-js', {
		slidesPerView: 1,
		loop: true,
		autoHeight: true,
		spaceBetween: 20,
		//nav
		navigation: {
			nextEl: '.sliderRews-next',
			prevEl: '.sliderRews-prev'
		},
		//pugin
		pagination: {
			el: $(this).find('.swiper-pugin'),
			clickable: true
		},
		//lazy
		lazy: {
			loadPrevNext: true //loadPrevNextAmount: 2,

		}
	});

	var gets = function () {
		var a = window.location.search;
		var b = new Object();
		var c;
		a = a.substring(1).split("&");

		for (var i = 0; i < a.length; i++) {
			c = a[i].split("=");
			b[c[0]] = c[1];
		}

		return b;
	}(); // form


	$("form").submit(function (e) {
		e.preventDefault();
		var th = $(this);
		var data = th.serialize();
		th.find('.utm_source').val(decodeURIComponent(gets['utm_source'] || ''));
		th.find('.utm_term').val(decodeURIComponent(gets['utm_term'] || ''));
		th.find('.utm_medium').val(decodeURIComponent(gets['utm_medium'] || ''));
		th.find('.utm_campaign').val(decodeURIComponent(gets['utm_campaign'] || ''));
		$.ajax({
			url: 'action.php',
			type: 'POST',
			data: data
		}).done(function (data) {
			$.fancybox.close();
			$.fancybox.open({
				src: '#modal-thanks',
				type: 'inline'
			}); // window.location.replace("/thanks.html");

			setTimeout(function () {
				// Done Functions
				th.trigger("reset"); // $.magnificPopup.close();
				// ym(53383120, 'reachGoal', 'zakaz');
				// yaCounter55828534.reachGoal('zakaz');
			}, 4000);
		}).fail(function () {});
	}); //luckyone Js

	function fixedStip() {
		var fixedStrip = document.querySelector('.bottom-fixed-strip');
		if (!fixedStrip) return;
		var fixedHook = document.querySelector('.fixed-hook-js');
		if (!fixedHook) return;
		window.addEventListener("scroll", toggleFixedStrip.bind(undefined, fixedHook, fixedStrip), {
			passive: true
		});
	}

	fixedStip();

	function toggleFixedStrip(fixedHook, fixedStrip) {
		var hookTop = $(fixedHook)[0].getBoundingClientRect().top + $(window)['scrollTop']();
		var hookHeight = fixedHook.offsetHeight;
		var hookBot = hookTop + hookHeight;
		var footerTop = $('.footer')[0].getBoundingClientRect().top + $(window)['scrollTop']();
		var windowHeight = calcVh(100); //positions

		if (hookBot > window.scrollY) {
			$(fixedStrip).removeClass('fixed');
		} else {
			$(fixedStrip).addClass('fixed');
		}

		if (hookBot / 2 > window.scrollY || window.scrollY > hookBot * 1.2) {
			$(fixedStrip).removeClass('hidden-top');
		} else {
			$(fixedStrip).addClass('hidden-top');
		}
	}

	function calcVh(v) {
		var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
		return v * h / 100;
	} //subtitles slider


	var subtitleSlider = new Swiper('.subtitles-slider-js', {
		loop: true,
		breakpoints: {
			1200: {
				slidesPerView: 3,
				spaceBetween: 36
			},
			992: {
				slidesPerView: 3,
				spaceBetween: 30
			},
			576: {
				slidesPerView: 2,
				spaceBetween: 30
			},
			320: {
				slidesPerView: 1,
				spaceBetween: 20
			}
		},
		//lazy
		lazy: {
			loadPrevNext: true,
			loadPrevNextAmount: 4
		},
		//
		navigation: {
			nextEl: '.subtitle-swiper-next',
			prevEl: '.subtitle-swiper-prev'
		}
	});
	$('.block-header-js').click(function () {
		$(this).toggleClass('active');
		$(this.parentElement).find('.block-content-js').slideToggle(function () {
			$(this).toggleClass('active');
		});
	});

	function tikTak(parentQselector) {
		//html elements
		var parent = document.querySelector(parentQselector);
		if (!parent) return;
		var days = parent.querySelector('.days');
		var hours = parent.querySelector('.hours');
		var minutes = parent.querySelector('.minutes');
		var seconds = parent.querySelector('.seconds'); //date elements

		var now = new Date(); // d === days.innerHtml + now.getDate... others the same way

		var d = getTime(days, now.getDate());
		var h = getTime(hours, now.getHours());
		var m = getTime(minutes, now.getMinutes());
		var s = getTime(seconds, now.getSeconds()); //let targetDate = new Date(now.getFullYear(), now.getMonth(), d, h, m, s);
		//force date

		var targetDate = new Date(2020, 7, 21); //interval

		tikTakReadOut(parent, targetDate, ThisReadOutID, days, hours, minutes, seconds);
		var ThisReadOutID = window.setInterval(tikTakReadOut.bind(null, parent, targetDate, ThisReadOutID, days, hours, minutes, seconds), 1000);
	}

	tikTak('.timer-box-js'); //additional funcs to tikTak

	function tikTakReadOut(parent, targetDate, ReadOutID, days, hours, minutes, seconds) {
		var now = new Date();
		var timeLeft = (targetDate - now) / 1000;

		if (timeLeft < 1) {
			window.clearInterval(ReadOutID); //to do something after timer ends

			$(parent).fadeOut();
		}

		days.innerHTML = Math.floor(timeLeft / 60 / 60 / 24);
		timeLeft = (timeLeft / 60 / 60 / 24 - Math.floor(timeLeft / 60 / 60 / 24)) * 60 * 60 * 24;
		hours.innerHTML = Math.floor(timeLeft / 60 / 60);
		timeLeft = (timeLeft / 60 / 60 - Math.floor(timeLeft / 60 / 60)) * 60 * 60;
		minutes.innerHTML = Math.floor(timeLeft / 60);
		timeLeft = (timeLeft / 60 - Math.floor(timeLeft / 60)) * 60;
		seconds.innerHTML = Math.floor(timeLeft);
	}

	function getTime(htmlEl, currentTimeItem) {
		var timeItem = Number(htmlEl.innerHTML);

		if (timeItem) {
			timeItem += currentTimeItem;
		} else {
			timeItem = currentTimeItem;
		}

		return timeItem;
	} //end luckyone js


	var isIE11 = !!window.MSInputMethodContext && !!document.documentMode;

	if (isIE11) {
		$("body").prepend("<p   class=\"browsehappy container\">\u041A \u0441\u043E\u0436\u0430\u043B\u0435\u043D\u0438\u044E, \u0432\u044B \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0435 \u0443\u0441\u0442\u0430\u0440\u0435\u0432\u0448\u0438\u0439 \u0431\u0440\u0430\u0443\u0437\u0435\u0440. \u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, <a href=\"http://browsehappy.com/\" target=\"_blank\">\u043E\u0431\u043D\u043E\u0432\u0438\u0442\u0435 \u0432\u0430\u0448 \u0431\u0440\u0430\u0443\u0437\u0435\u0440</a>, \u0447\u0442\u043E\u0431\u044B \u0443\u043B\u0443\u0447\u0448\u0438\u0442\u044C \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C, \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u043E \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0430\u0435\u043C\u043E\u0433\u043E \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u0430 \u0438 \u043F\u043E\u0432\u044B\u0441\u0438\u0442\u044C \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u044C.</p>");
	} // First we get the viewport height and we multiple it by 1% to get a value for a vh unit


	var vh = window.innerHeight * 0.01; // Then we set the value in the --vh custom property to the root of the document

	document.documentElement.style.setProperty('--vh', "".concat(vh, "px")); // We listen to the resize event

	window.addEventListener('resize', function () {
		// We execute the same script as before
		var vh = window.innerHeight * 0.01;
		document.documentElement.style.setProperty('--vh', "".concat(vh, "px"));
	}, {
		passive: true
	});
}

;

if (document.readyState !== 'loading') {
	eventHandler();
} else {
	document.addEventListener('DOMContentLoaded', eventHandler);
}