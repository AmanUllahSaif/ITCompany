;(function ($) {
"use strict";

function soPanelInit() {
	$('.page-full .panel-row-style:not(".panel-full")').each(function() {
		var $expanded = 0;
		if ($('body').outerWidth() > 1200 ) {
			$expanded = ($('body').outerWidth() - 1200) / 2;
		}
		$(this).css({
		   'margin-left' : -$expanded + 'px',
		   'margin-right' : -$expanded + 'px',
		   'padding-left' : $expanded + 'px',
		   'padding-right' : $expanded + 'px'
		});
	});
	
	$('.page-full .panel-full').each(function() {
		var $expanded = 0;
		if ($('body').outerWidth() > 1200 ) {
			$expanded = ($('body').outerWidth() - 1200) / 2;
		}
		$(this).parent('.panel-grid').css({
			'width' : $('body').outerWidth() + 'px',
			'margin-left' : -$expanded + 'px',
			'margin-right' : -$expanded + 'px',
		});
	});
	
}



/**
 * On Load
 */
$(window).load(function() {



	// Mansonry Gallery
	$('.gallery-mansonry').masonry({
		itemSelector: '.gallery-box',
		isAnimated: true
	});

	// Mansonry Blog
	$('.blog-mansonry').masonry({
		itemSelector: '.blog-box',
		isAnimated: true
	});
	
	soPanelInit();

});

/**
 * On Resize
 */
$(window).on('resize', function() {
	
	soPanelInit();
});


/**
 * On Ready
 */	
$(document).ready(function() {
	
	soPanelInit();
	
	// Match Height
	$('.row-equal').each(function() {
		$(this).children('.column-equal').matchHeight({});
	});
	$('ul.products').each(function() {
		$(this).children('li.product').matchHeight({});
	});	
	
	// Gallery Sortable
	$('.gallery-sortable').each(function() {
		var $that = $(this);
		var $filterType = $(this).find('.gallery-filter > ul > li.active > a').attr('data-type');
		var $holder = $(this).find('.gallery-list .gallery-row');
		var $data = $holder.clone();

		$(this).find('.gallery-filter ul li a').on( 'click', function(e) {
			$that.find('.gallery-filter ul li').removeClass('active');

			var $filterType = $(this).attr('data-type');
			$(this).parent().addClass('active');
			var $filteredData;
			if ($filterType == 'all') {
				$filteredData = $data.find('.gallery-full');
			} else {
				$filteredData = $data.find('.gallery-full[data-type=' + $filterType + ']');
			}
			$holder.quicksand($filteredData, {
				duration: 1000,
				useScaling: true,
				easing: 'easeInOutQuad'
			});
			return false;
		});
	});
	
	// Bootstrap Slider
	$('#slider-main').carousel({
		interval: 36000,
		pause: 'hover',
		wrap: true
	});
	
	// Bootstrap Alert
	$('.alert').alert();
	

	// Mobile Menu
	$('nav#mobile-navigation').mmenu({
		offCanvas: {
		position: 'right'
	},
		header	: {
			add		: true,
			update	: true,
			title	: 'Menu'
		}
	});
	var $mobile_menu = $('nav#mobile-navigation'),
	$html = $('html, body');
	$mobile_menu.mmenu({classes:'mm-slide'});
	$mobile_menu.find('li > a').on('click', function() {
		var e = $(this).attr('href');if(e.slice(0,1) == "#") {
			$mobile_menu.one('closed.mm',function() {
				setTimeout(function() {
					$html.animate({scrollTop:$(e).offset().top});}, 10);
				}
			)
		}
	});
	
	// Smooth Scroll To
	$('.scroll-to').on( 'click', function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html, body').animate({
					scrollTop: target.offset().top -0
				}, 1000);
				return false;
			}
		}
	});

	// Sub Menu Shop Toggle
	$('#button-shop').live('hover', function() {
		$(this).find('.menu-shop-sub').toggle();
		//$(this).find('.menu-shop-sub').show();
	});

	// Sub Menu Toggle
	if ($(window).width() > 1023) {
		$('#site-navigation .menu-item-has-children').hover(
			function () {
				$(this).find('.sub-menu').show();
				$(this).find('.sub-menu .menu-item-has-children .sub-menu').css({display:'none'});
			},
			function () {
				$(this).find('.menu-item-has-children > .menu-item-has-children > .sub-menu').css({display:'none'});
				$(this).find('.sub-menu').hide();
			}
		);
		$('#site-navigation .menu-item-has-children.menu.current-menu-ancestor').hover(
			function () {
				$(this).find('.sub-menu').show();
			},
			function () {
				$(this).find('.sub-menu').hide();
			}
		);
	} else if ($(window).width() <= 1023) {
		$('#site-navigation .menu-item-has-children').on( 'click', function() {
			$(this).find('.sub-menu').toggle();
			$(this).find('.sub-menu .menu-item-has-children .sub-menu').css({display:'none'});
		});
		$('#site-navigation .menu-item-has-children.menu.current-menu-ancestor').on( 'click', function() {
			$(this).find('.sub-menu').hide();
		});
	}
	
	// Menu Search Toggle
	$('#button-search').on( 'click', function() {
		$('#site-search').slideToggle();
		$('#branding').toggleClass('branding-dock');
		$('#slider-main').toggleClass('branding-dock');
	});
	
	// Waypoint Scroll
	$('.fx-start').waypoint(function() {
		var vr_data_animation = $(this).attr("data-animation");
		$(this).addClass(vr_data_animation);
		$(this).addClass('fx-end');
		$(this).addClass($(this).data('fx-end'));
		$(this).removeClass('fx-start');
	}, {offset: '100%'});
	
	// Slider Gallery
	$('.entry-gallery .slider-gallery').owlCarousel({
		slideSpeed: 1000,
		autoPlay: 36000,
		paginationSpeed: 1000,
		pagination: false,
		singleItem: true,
		stopOnHover: true,
		lazyLoad: true,
		navigationText:['<a class="slider-prev"><i class="fa fa-chevron-left"></i></a>', '<a class="slider-next"><i class="fa fa-chevron-right"></i></a>'],
		items: 1,
		navigation: true
	});
	
	// Testimonial Slider
	$('.testimonial-slider .slider-body').owlCarousel({
		slideSpeed: 1000,
		autoPlay: 36000,
		paginationSpeed: 1000,
		singleItem: false,
		pagination:	true,
		paginationNumbers: false,
		responsive:	true,
		items: 3,
		itemsDesktop: [1199, 3],
		itemsDesktopSmall: [979, 2],
		itemsTablet: [768, 1],
		itemsMobile: [479, 1],
		navigation: false
	});
	
	// Client Slider
	$('.client-slider .slider-body').owlCarousel({
		slideSpeed: 1000,
		autoPlay: 36000,
		paginationSpeed: 1000,
		singleItem: false,
		pagination:	true,
		paginationNumbers: false,
		responsive:	true,
		items: 4,
		itemsDesktop:[1199, 4],
		itemsDesktopSmall:[979, 3],
		itemsTablet:[768, 2],
		itemsMobile:[479, 1],
		navigation: false
	});
	
	// Counter Animation
	$('.counter').waypoint(function() {
		if ($(this).hasClass('fx-counter')) {
			var $endNum = parseInt($(this).find('.counter-number').text());
			$(this).find('.counter-number').countTo({
				from: 0,
				to: $endNum,
				speed: 1000,
				refreshInterval: 10,
				onComplete: function() {
				    $(this).parent().parent().removeClass('fx-counter');
				}
			});
		}
	}, {offset: '100%'});

	// Module Bar Animation
	$('.bar').waypoint(function() {
	
		if ($(this).hasClass('fx-bar')) {
			var percent = $(this).find('span').attr('data-width');
			var $endNum = parseInt($(this).find('strong b').text());
			var $that = $(this);
			
			$(this).find('span').animate({
				'width' : percent + '%'
			}, 1600, 'easeOutCirc',function() { } );
			
			$(this).find('strong b').countTo({
				from: 0,
				to: $endNum,
				speed: 1000,
				refreshInterval: 10,
				onComplete: function() {
					$(this).parent().parent().parent().removeClass('fx-bar');
				}
			});
			if (percent == '100') {
				$that.find('strong').addClass('full');
			}
		}
	}, {offset: '100%'});
	
	// Waypoint Parallax
	/*
	$('.panel-parallax').waypoint(function() {
		$(this).scrolly({bgParallax: true});
	}, {offset: '80%'});
	*/

	// Retina Ready Half Image Size
	$(window).load(function() {

		$('[data-retina]').each(function() {
		
			var img = new Image();
			img.src = $(this).attr('data-retina');
			var width = img.width;
			var height = img.height;

			if (window.devicePixelRatio > 1) {
				$(this).width(width / 2);
				$(this).height(height / 2);
				$(this).attr('src', $(this).attr('data-retina'));
			}
		});
	});
	
	// Slider Widget With Arrow
	$(".widget-slider .slider-item").owlCarousel({
		slideSpeed: 1000,
		autoPlay: 36000,
		paginationSpeed: 1000,
		pagination:	false,
		paginationNumbers: false,
		singleItem: true,
		stopOnHover: true,
		navigationText:['<a class="slider-prev"><i class="fa fa-chevron-left"></i></a>', '<a class="slider-next"><i class="fa fa-chevron-right"></i></a>'],
		items: 1,
		navigation: true
	});

	// Slider Client With Arrow
	$('.slider-client-nav .slider-item').owlCarousel({
		slideSpeed: 1000,
		autoPlay: 36000,
		paginationSpeed: 1000,
		singleItem: false,
		pagination:	false,
		paginationNumbers: false,
		responsive:	true,
		items: 4,
		itemsDesktop: [1199, 4],
		itemsDesktopSmall: [979, 3],
		itemsTablet: [768, 2],
		itemsMobile: [479, 1],
		navigation: true,
		navigationText: ['<a class="slider-prev"><i class="fa fa-chevron-left"></i></a>', '<a class="slider-next"><i class="fa fa-chevron-right"></i></a>']
	});
	
	// Slider Testimonial With Arrow
	$('.slider-testimonial-nav .slider-item').owlCarousel({
		slideSpeed: 1000,
		autoPlay: 36000,
		paginationSpeed: 1000,
		singleItem: false,
		pagination:	false,
		paginationNumbers: false,
		responsive:	true,
		navigation: true,
		items: 2,
		itemsDesktop: [1199, 2],
		itemsDesktopSmall: [979, 1],
		itemsTablet: [768, 1],
		itemsMobile: [479, 1],
		navigationText: ['<a class="slider-prev"><i class="fa fa-chevron-left"></i></a>', '<a class="slider-next"><i class="fa fa-chevron-right"></i></a>']
	});

	// Slider With Thumbnail
	$('.slider-thumb .slider-item').owlCarousel({
		slideSpeed: 1000,
		autoPlay: 36000,
		paginationSpeed: 1000,
		pagination: false,
		lazyLoad: true,
		singleItem: true,
		stopOnHover: true
	});
	$('.slider-thumb .slider-item-2 .slider-item-0').on( 'click', function() { $(this).parent().parent().find('.slider-item').trigger("owl.goTo", 0); });
	$('.slider-thumb .slider-item-2 .slider-item-1').on( 'click', function() { $(this).parent().parent().find('.slider-item').trigger("owl.goTo", 1); });
	$('.slider-thumb .slider-item-2 .slider-item-2').on( 'click', function() { $(this).parent().parent().find('.slider-item').trigger("owl.goTo", 2); });
	$('.slider-thumb .slider-item-2 .slider-item-3').on( 'click', function() { $(this).parent().parent().find('.slider-item').trigger("owl.goTo", 3); });
	$('.slider-thumb .slider-item-2 .slider-item-4').on( 'click', function() { $(this).parent().parent().find('.slider-item').trigger("owl.goTo", 4); });
	$('.slider-thumb .slider-item-2 .slider-item-5').on( 'click', function() { $(this).parent().parent().find('.slider-item').trigger("owl.goTo", 5); });
	$('.slider-thumb .slider-item-2 .slider-item-6').on( 'click', function() { $(this).parent().parent().find('.slider-item').trigger("owl.goTo", 6); });
	$('.slider-thumb .slider-item-2 .slider-item-7').on( 'click', function() { $(this).parent().parent().find('.slider-item').trigger("owl.goTo", 7); });
	$('.slider-thumb .slider-item-2 .slider-item-8').on( 'click', function() { $(this).parent().parent().find('.slider-item').trigger("owl.goTo", 8); });
	$('.slider-thumb .slider-item-2 .slider-item-9').on( 'click', function() { $(this).parent().parent().find('.slider-item').trigger("owl.goTo", 9); });
	$('.slider-thumb .slider-item-2 .slider-item-10').on( 'click', function() { $(this).parent().parent().find('.slider-item').trigger("owl.goTo", 10); });
	$('.slider-thumb .slider-item-2 .slider-item-11').on( 'click', function() { $(this).parent().parent().find('.slider-item').trigger("owl.goTo", 11); });
	
	// Piechart
	$('.pie-center').waypoint(function() {
		if ($(this).hasClass('fx-pie')) {
			$(this).find('.chart').easyPieChart({
				size:	120,
				barColor : $(this).find('.chart').data('color'),
				trackColor : $(this).find('.chart').data('background'),
				easing: 'easeIn',
				lineCap: 'square',
				onStep: function(from, to, percent) {
					$(this.el).find('.percent').text( Math.round( percent ) );
				},
				onComplete: function() {
					$(this).parent().removeClass('fx-pie');
					console.log('done');
				}
			});
		}
	}, {offset: '100%'});
	
});


// Browser Agent
var doc = document.documentElement; doc.setAttribute('data-useragent', navigator.userAgent);

}(jQuery));