const $ = jQuery;
const JSCCommon = {
	// часть вызов скриптов здесь, для использования при AJAX
	btnToggleMenuMobile: [].slice.call(document.querySelectorAll(".toggle-menu-mobile--js")),
	menuMobile: document.querySelector(".menu-mobile--js"),
	menuMobileLink: [].slice.call(document.querySelectorAll(".menu-mobile--js ul li a")),
	body: document.querySelector("body"),

	modalCall() {
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
					PREV: "Назад",
					// PLAY_START: "Start slideshow",
					// PLAY_STOP: "Pause slideshow",
					// FULL_SCREEN: "Full screen",
					// THUMBS: "Thumbnails",
					// DOWNLOAD: "Download",
					// SHARE: "Share",
					// ZOOM: "Zoom"
				},
			},
		});
		$(".modal-close-js").click(function () {
			$.fancybox.close();
		})
		$.fancybox.defaults.backFocus = false;
		$(".link-modal").click(function () {
			let th = $(this);
			let modal = $(th.attr('href'));
			let content = {
				title: th.data('title'),
				text: th.data('text'),
				btn: th.data('btn'),
				order: th.data('order')
			}
			modal.find('.ttu').html(content.title);
			modal.find('.after-headline').html(content.text);
			modal.find('.btn').val(content.btn);
			modal.find('.order').val(content.order);
		})
	},
	// /magnificPopupCall
	toggleMenu() {
		let _this = this;
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

	closeMenu() {
		let _this = this;
		if (_this.menuMobile) {

			_this.btnToggleMenuMobile.forEach(function (element) {
				element.classList.remove("on");

			});
			_this.menuMobile.classList.remove("active");
			_this.body.classList.remove("fixed");
		}

	},

	mobileMenu() {
		// закрыть/открыть мобильное меню
		let _this = this;
		if (_this.menuMobileLink) {

			_this.toggleMenu();
			document.addEventListener('mouseup', function (event) {
				let container = event.target.closest(".menu-mobile--js.active"); // (1)
				if (!container) {
					_this.closeMenu();

				}
			}, { passive: true });
		}
	},
	// /mobileMenu

	// табы  . 
	tabscostume(tab) {
		$('.' + tab + '__caption').on('click', '.' + tab + '__btn:not(.active)', function (e) {
			$(this)
				.addClass('active').siblings().removeClass('active')
				.closest('.' + tab).find('.' + tab + '__content').hide().removeClass('active')
				.eq($(this).index()).show().addClass('active');

		});
	},
	// /табы  
	inputMask() {
		// mask for input
		$('input[type="tel"]').attr("pattern", "[+][0-9]{1}[(][0-9]{3}[)][0-9]{3}-[0-9]{2}-[0-9]{2}").inputmask("+9(999)999-99-99");
	}
	// /inputMask

};

function eventHandler() { 
	JSCCommon.modalCall();

	JSCCommon.tabscostume('tabs');

	JSCCommon.mobileMenu();

	JSCCommon.inputMask();

	// JSCCommon.CustomInputFile();
	// добавляет подложку для pixel perfect
	// $(".main-wrapper").after('<div class="pixel-perfect" style="background-image: url(screen/02.jpg);"></div>')
	// /добавляет подложку для pixel perfect


	// /закрыть/открыть мобильное меню

	function heightses() {
 		if (document.body.classList.contains('page-without-menu-js')) return
		// скрывает моб меню

		const topH = document.querySelector('header').scrollHeight;
		let stickyElement = document.querySelector('.top-nav')
		window.onscroll = () => {
			if ($(window).scrollTop() > topH) {

				stickyElement.classList.add('fixed');
			} else {
				stickyElement.classList.remove('fixed'); 
			}
		};
		// конец добавил
		if (window.matchMedia("(min-width: 992px)").matches) {
			JSCCommon.closeMenu();
		}
	}

	window.addEventListener('resize', () => {
		heightses();

	}, { passive: true });

	heightses();

	// листалка по стр
	$(" .top-nav li a, .scroll-link").click(function () {
		const elementClick = $(this).attr("href");
		const destination = $(elementClick).offset().top;

		$('html, body').animate({ scrollTop: destination }, 1100);

		return false;
	});

	let defaultSl = {
		spaceBetween: 0,
		lazy: {
			loadPrevNext: true,
		},
		watchOverflow: true,
		spaceBetween: 0,
		loop: true,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		pagination: {
			el: ' .swiper-pagination',
			type: 'bullets',
			clickable: true,
			// renderBullet: function (index, className) {
			// 	return '<span class="' + className + '">' + (index + 1) + '</span>';
			// }
		},
	}

	const swiper4 = new Swiper('.color-slider', {
		// slidesPerView: 5,
		...defaultSl,
		slidesPerView: 'auto', 
		freeMode: true, 
		loopFillGroupWithBlank: true,
		touchRatio: 0.2,
		slideToClickedSlide: true,
		freeModeMomentum: true,
	});
	// modal window

	let studentsSlider = new Swiper('.students-slider-js', {
		slidesPerView: 1,
		loop: true,
		autoHeight: true,
		spaceBetween: 20,
		//nav
		navigation: {
			nextEl: '.sliderRews-next',
			prevEl: '.sliderRews-prev',
		},

		//pugin
		pagination: {
			el: $(this).find('.swiper-pugin'),
			clickable: true,
		},
		//lazy
		lazy: {
			loadPrevNext: true,
			//loadPrevNextAmount: 2,
		},
	});
 

	var gets = (function () {
		var a = window.location.search;
		var b = new Object();
		var c;
		a = a.substring(1).split("&");
		for (var i = 0; i < a.length; i++) {
			c = a[i].split("=");
			b[c[0]] = c[1];
		}
		return b;
	})();
	// form
	$("form").submit(function (e) {
		e.preventDefault();
		const th = $(this);
		var data = th.serialize();
		th.find('.utm_source').val(decodeURIComponent(gets['utm_source'] || ''));
		th.find('.utm_term').val(decodeURIComponent(gets['utm_term'] || ''));
		th.find('.utm_medium').val(decodeURIComponent(gets['utm_medium'] || ''));
		th.find('.utm_campaign').val(decodeURIComponent(gets['utm_campaign'] || ''));
		$.ajax({
			url: 'action.php',
			type: 'POST',
			data: data,
		}).done(function (data) {

			$.fancybox.close();
			$.fancybox.open({
				src: '#modal-thanks',
				type: 'inline'
			});
			// window.location.replace("/thanks.html");
			setTimeout(function () {
				// Done Functions
				th.trigger("reset");
				// $.magnificPopup.close();
				// ym(53383120, 'reachGoal', 'zakaz');
				// yaCounter55828534.reachGoal('zakaz');
			}, 4000);
		}).fail(function () { });

	});

	//luckyone Js
	function fixedStip(){
		let fixedStrip = document.querySelector('.bottom-fixed-strip');
		if(!fixedStrip) return

		let fixedHook = document.querySelector('.fixed-hook-js');
		if(!fixedHook) return

		window.addEventListener("scroll", toggleFixedStrip.bind(undefined, fixedHook, fixedStrip), {passive:  true});
	}
	fixedStip();

	function toggleFixedStrip(fixedHook, fixedStrip){
		let hookTop = $(fixedHook)[0].getBoundingClientRect().top + $(window)['scrollTop']();
		let hookHeight = fixedHook.offsetHeight;
		let hookBot = hookTop + hookHeight;

		let footerTop = $('.footer')[0].getBoundingClientRect().top + $(window)['scrollTop']();
		let windowHeight = calcVh(100);

		//positions
		if (hookBot > window.scrollY){
			$(fixedStrip).removeClass('fixed');
		}
		else {
			$(fixedStrip).addClass('fixed');
		}

		if (hookBot/2 > window.scrollY || window.scrollY >  hookBot * 1.2){
			$(fixedStrip).removeClass('hidden-top');
			console.log('vis');
		}
		else{
			$(fixedStrip).addClass('hidden-top');
			console.log('inv');
		}

		console.log(window.scrollY, hookBot);

	}




	function calcVh(v) {
		var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
		return (v * h) / 100;
	}

	//subtitles slider
	let subtitleSlider = new Swiper('.subtitles-slider-js', {
		loop: true,
		breakpoints: {
			1200 : {
				slidesPerView: 3,
				spaceBetween: 36,
			},
			992 : {
				slidesPerView: 3,
				spaceBetween: 30,
			},
			576 : {
				slidesPerView: 2,
				spaceBetween: 30,
			},
			320 : {
				slidesPerView: 1,
				spaceBetween: 20,
			}
		},

		//lazy
		lazy: {
			loadPrevNext: true,
			loadPrevNextAmount: 4,
		},
		//
		navigation: {
			nextEl: '.subtitle-swiper-next',
			prevEl: '.subtitle-swiper-prev',
		},
	});

	$('.block-header-js').click(function () {
		$(this).toggleClass('active');

		$(this.parentElement).find('.block-content-js').slideToggle(function () {
			$(this).toggleClass('active');
		});

	});


	function tikTak(parentQselector){
		//html elements
		let parent = document.querySelector(parentQselector);
		if (!parent) return

		let days = parent.querySelector('.days');
		let hours = parent.querySelector('.hours');
		let minutes = parent.querySelector('.minutes');
		let seconds = parent.querySelector('.seconds');

		//date elements
		let now = new Date();

		// d === days.innerHtml + now.getDate... others the same way
		let d = getTime(days, now.getDate());
		let h = getTime(hours, now.getHours());
		let m = getTime(minutes, now.getMinutes());
		let s = getTime(seconds, now.getSeconds());

		let targetDate = new Date(now.getFullYear(), now.getMonth(), d, h, m, s);

		//interval
		tikTakReadOut(parent, targetDate, ThisReadOutID, days, hours, minutes, seconds);
		let ThisReadOutID = window.setInterval(tikTakReadOut.bind(null,parent, targetDate, ThisReadOutID, days, hours, minutes, seconds), 1000);
	}
	tikTak('.timer-box-js');
	//additional funcs to tikTak

	function tikTakReadOut(parent,targetDate, ReadOutID, days, hours, minutes, seconds){
		let now = new Date();
		let timeLeft = (targetDate - now) / 1000;

		if (timeLeft < 1) {
			window.clearInterval(ReadOutID);
			//to do something after timer ends
			$(parent).fadeOut();
		}

		days.innerHTML = Math.floor(timeLeft / 60 / 60 / 24);
		timeLeft = ((timeLeft / 60 / 60 / 24) - Math.floor(timeLeft / 60 / 60 / 24)) * 60 * 60 * 24;

		hours.innerHTML = Math.floor(timeLeft / 60 / 60);
		timeLeft = ((timeLeft / 60 / 60) - Math.floor(timeLeft / 60 / 60)) * 60 * 60;

		minutes.innerHTML = Math.floor((timeLeft / 60));
		timeLeft = ((timeLeft / 60) - Math.floor((timeLeft / 60))) * 60;

		seconds.innerHTML = Math.floor(timeLeft);
	}

	function getTime(htmlEl, currentTimeItem) {
		let timeItem = Number(htmlEl.innerHTML);
		if (timeItem) {
			timeItem += currentTimeItem;
		}
		else {
			timeItem = currentTimeItem;
		}
		return timeItem
	}
	//end luckyone js

	var isIE11 = !!window.MSInputMethodContext && !!document.documentMode;
	if (isIE11) {
		$("body").prepend(`<p   class="browsehappy container">К сожалению, вы используете устаревший браузер. Пожалуйста, <a href="http://browsehappy.com/" target="_blank">обновите ваш браузер</a>, чтобы улучшить производительность, качество отображаемого материала и повысить безопасность.</p>`)

	}

	// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
	let vh = window.innerHeight * 0.01;
	// Then we set the value in the --vh custom property to the root of the document
	document.documentElement.style.setProperty('--vh', `${vh}px`);

	// We listen to the resize event
	window.addEventListener('resize', () => {
		// We execute the same script as before
		let vh = window.innerHeight * 0.01;
		document.documentElement.style.setProperty('--vh', `${vh}px`);
	}, { passive: true });
};
if (document.readyState !== 'loading') {
	eventHandler();
} else {
	document.addEventListener('DOMContentLoaded', eventHandler);
}
