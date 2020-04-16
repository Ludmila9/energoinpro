// scroll - start
	
	
	$("a.scroll-to").on("click", function(e){
		e.preventDefault();
		var anchor = $(this).attr('href');
		$('html, body').stop().animate({
			scrollTop: $(anchor).offset().top - 60
		}, 800);
	});

// scroll - end

// slider - start
;(function($) {
	"use strict";
	
$('.about-slider').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	dots: true,
	arrows: true,
	infinity: true,
	autoplay: true,
	autoplaySpeed: 6000,
	cssEase: 'ease-out',
	speed: 2500,
	appendDots: '.about-slider__dots',
	prevArrow: '.slick-prev__arrow',
	nextArrow: '.slick-next__arrow',
});

// slider - end

// counter - start
	
	var time = 2, qty = 1;
	$(window).scroll(function(){
		$('#progress').each(function(){
			var
			position = $(this).offset().top,
			topWindow = $(window).scrollTop();

			if (position < topWindow + 800) {
				
				if (qty < 2) {
					$('.progress__qty').addClass('progress__qtyOpacity');
					$('div').each(function(){
						var 
						i = 1,
						num = $(this).data('num'),
						step = 1000 * time / num,
						that = $(this),
						int = setInterval(function(){
							if (i <= num) {
								that.html(i);
							} else {
								qty = qty + 2;
								clearInterval(int);
							}
							i++;
						},step);
					});
				};
			};
		});
	});

	// counter - end

	// burger menu - start

	function burgerMenu(selector){
		let menu = $(selector);
		let button = menu.find('.burger-menu__btn');
		let links = menu.find('.burger-menu__link');
		let overlay = menu.find('.burger-menu__overlay');

		button.on('click', (e) => {
			e.preventDefault();
			toggleMenu();
		});

		links.on('click', () => toggleMenu());
		overlay.on('click', () => toggleMenu());

		function toggleMenu() {
			menu.toggleClass('burger-menu_active');

			if (menu.hasClass('burger-menu_active')) {
				$('body').css('overflow', 'hidden');
			} else {
				$('body').css('overflow', 'visible');
			}
		}
	}

	burgerMenu('.burger-menu');

	// burger menu - end

	(function () {
		"use strict";

		var el = document.createElement('div');
		el.style.cssText = 'pointer-events:auto';

		if (el.style.pointerEvents !== 'auto') {
			el = null;

			var _lock = function (evt) {
				evt = evt || window.event;
				var el = evt.target || evt.srcElement;
				if (el && /\slocked\s/.test(' ' + el.className + ' ')) {
					if (evt.stopPropagation) {
						evt.preventDefault();
						evt.stopPropagation();
					} else {
						evt.returnValue = true;
						evt.cancelBubble = true;
					}
				}
			};

			if (document.addEventListener) {
				document.addEventListener('mousedown', _lock, false);
				document.addEventListener('contextmenu', _lock, false);
			} else {
				document.attachEvent('onmousedown', _lock);
				document.attachEvent('oncontextmenu', _lock);
			}
		}
	})();

	var $page = $('html, body');
	$('a[href*="#"]').click(function() {
		$page.animate({
			scrollTop: $($.attr(this, 'href')).offset().top
		}, 1800);
		return false;
	});

	// hide and show .fixed-btn - start

	$(window).scroll(function() {
		if ($(this).scrollTop() > $(this).height()) {
			$('.top').addClass('active');
			$('.soc-menu').addClass('soc-active');
		} else {
			$('.top').removeClass('active');
			$('.soc-menu').removeClass('soc-active');
		}
	});

	$('.top').click(function() {
		$('html, body').stop().animate({scrollTop: 0}, 'slow', 'swing');
	});


		$(window).on('load', function() {
			$('.preloader').delay(800).fadeOut('slow');
		});

	// hide and show .fixed-btn - start 
	


})(jQuery);


(function(){
	var d = document,
	accordionToggles = d.querySelectorAll('.js-accordionTrigger'),
	setAria,
	setAccordionAria,
	switchAccordion,
	touchSupported = ('ontouchstart' in window),
	pointerSupported = ('pointerdown' in window);
	
	skipClickDelay = function(e){
		e.preventDefault();
		e.target.click();
	}

		setAriaAttr = function(el, ariaType, newProperty){
		el.setAttribute(ariaType, newProperty);
	};
	setAccordionAria = function(el1, el2, expanded){
		switch(expanded) {
			case "true":
				setAriaAttr(el1, 'aria-expanded', 'true');
				setAriaAttr(el2, 'aria-hidden', 'false');
				break;
			case "false":
				setAriaAttr(el1, 'aria-expanded', 'false');
				setAriaAttr(el2, 'aria-hidden', 'true');
				break;
			default:
				break;
		}
	};
	//function
	switchAccordion = function(e) {
		console.log("triggered");
		e.preventDefault();
		var thisAnswer = e.target.parentNode.nextElementSibling;
		var thisQuestion = e.target;
		if(thisAnswer.classList.contains('is-collapsed')) {
			setAccordionAria(thisQuestion, thisAnswer, 'true');
		} else {
			setAccordionAria(thisQuestion, thisAnswer, 'false');
		}
			thisQuestion.classList.toggle('is-collapsed');
			thisQuestion.classList.toggle('is-expanded');
			thisAnswer.classList.toggle('is-collapsed');
			thisAnswer.classList.toggle('is-expanded');
		
			thisAnswer.classList.toggle('animateIn');
		};
		for (var i=0,len=accordionToggles.length; i<len; i++) {
			if(touchSupported) {
				accordionToggles[i].addEventListener('touchstart', skipClickDelay, false);
			}
			if(pointerSupported){
				accordionToggles[i].addEventListener('pointerdown', skipClickDelay, false);
			}
			accordionToggles[i].addEventListener('click', switchAccordion, false);
		}
	})();
	$('.description').hide();


	$('.region').hover (
		function() {
			$('.description').html($(this).attr('description-data'));
			$('.description').show();
		},
		function() {
			$('.description').hide();
		},
	);

	// - show anower news - start
	$(function(){
		$(".box-news").slice(0, 4).show();
		$("#loadMore").on('click', function(e){
			e.preventDefault();
			$(".box-news:hidden").slice(0, 4).slideDown();
		})
	});
	// - show anower news - end

// MAP - start

// var map;
// function initMap() {
//	 var myLatLng = { lat: 50.008336, lng: 30.008356 };
//	 var myLatLngCenter = { lat: 50.008324, lng: 36.237821 };
//	 var map = new google.maps.Map(document.getElementById('map'), {
//		 zoom: 14,
//		 center: myLatLngCenter,
//		 styles: [
//	 {
//		 "elementType": "geometry",
//		 "stylers": [
//			 {
//				 "color": "#f5f5f5"
//			 }
//		 ]
//	 },
//	 {
//		 "elementType": "geometry.stroke",
//		 "stylers": [
//			 {
//				 "color": "#2681ff"
//			 }
//		 ]
//	 },
//	 {
//		 "elementType": "labels.icon",
//		 "stylers": [
//			 {
//				 "color": "#8080ff"
//			 },
//			 {
//				 "saturation": 10
//			 },
//			 {
//				 "visibility": "off"
//			 },
//			 {
//				 "weight": 4
//			 }
//		 ]
//	 },
//	 {
//		 "elementType": "labels.text",
//		 "stylers": [
//			 {
//				 "color": "#2681ff"
//			 }
//		 ]
//	 },
//	 {
//		 "elementType": "labels.text.fill",
//		 "stylers": [
//			 {
//				 "color": "#343573"
//			 }
//		 ]
//	 },
//	 {
//		 "elementType": "labels.text.stroke",
//		 "stylers": [
//			 {
//				 "color": "#f5f5f5"
//			 }
//		 ]
//	 },
//	 {
//		 "featureType": "administrative.land_parcel",
//		 "elementType": "labels.text.fill",
//		 "stylers": [
//			 {
//				 "color": "#bdbdbd"
//			 }
//		 ]
//	 },
//	 {
//		 "featureType": "poi",
//		 "elementType": "geometry",
//		 "stylers": [
//			 {
//				 "color": "#eeeeee"
//			 }
//		 ]
//	 },
//	 {
//		 "featureType": "poi",
//		 "elementType": "labels.text.fill",
//		 "stylers": [
//			 {
//				 "color": "#757575"
//			 }
//		 ]
//	 },
//	 {
//		 "featureType": "poi.park",
//		 "elementType": "geometry",
//		 "stylers": [
//			 {
//				 "color": "#e5e5e5"
//			 }
//		 ]
//	 },
//	 {
//		 "featureType": "poi.park",
//		 "elementType": "labels.text.fill",
//		 "stylers": [
//			 {
//				 "color": "#9e9e9e"
//			 }
//		 ]
//	 },
//	 {
//		 "featureType": "road",
//		 "elementType": "geometry",
//		 "stylers": [
//			 {
//				 "color": "#ffffff"
//			 }
//		 ]
//	 },
//	 {
//		 "featureType": "road.arterial",
//		 "elementType": "labels.text.fill",
//		 "stylers": [
//			 {
//				 "color": "#757575"
//			 }
//		 ]
//	 },
//	 {
//		 "featureType": "road.highway",
//		 "elementType": "geometry",
//		 "stylers": [
//			 {
//				 "color": "#dadada"
//			 }
//		 ]
//	 },
//	 {
//		 "featureType": "road.highway",
//		 "elementType": "geometry.fill",
//		 "stylers": [
//			 {
//				 "saturation": -15
//			 },
//			 {
//				 "lightness": 20
//			 }
//		 ]
//	 },
//	 {
//		 "featureType": "road.highway",
//		 "elementType": "labels.text.fill",
//		 "stylers": [
//			 {
//				 "color": "#616161"
//			 }
//		 ]
//	 },
//	 {
//		 "featureType": "road.local",
//		 "elementType": "labels.text.fill",
//		 "stylers": [
//			 {
//				 "color": "#9e9e9e"
//			 }
//		 ]
//	 },
//	 {
//		 "featureType": "transit.line",
//		 "elementType": "geometry",
//		 "stylers": [
//			 {
//				 "color": "#e5e5e5"
//			 }
//		 ]
//	 },
//	 {
//		 "featureType": "transit.station",
//		 "elementType": "geometry",
//		 "stylers": [
//			 {
//				 "color": "#eeeeee"
//			 }
//		 ]
//	 },
//	 {
//		 "featureType": "water",
//		 "elementType": "geometry",
//		 "stylers": [
//			 {
//				 "color": "#c9c9c9"
//			 }
//		 ]
//	 },
//	 {
//		 "featureType": "water",
//		 "elementType": "geometry.fill",
//		 "stylers": [
//			 {
//				 "color": "#8080ff"
//			 },
//			 {
//				 "lightness": 30
//			 }
//		 ]
//	 },
//	 {
//		 "featureType": "water",
//		 "elementType": "labels.text.fill",
//		 "stylers": [
//			 {
//				 "color": "#9e9e9e"
//			 }
//		 ]
//	 }
// ]
//	});
//	var marker = new google.maps.Marker({
//		position: new google.maps.LatLng(50.008336, 40.008356),
//		icon: '../img/marker-map.png',
//		map: map,
//		title: 'title'
//	});
// }



// const googleMapsScript = document.createElement('script');
// googleMapsScript.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyB29GFItZiDCx4QqCTDLLAOG30ryMUMxik&callback=initMap';
// document.head.appendChild(googleMapsScript);
// MAP - end

