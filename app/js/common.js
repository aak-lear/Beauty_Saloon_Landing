$(function () {

	$('#my-menu').mmenu({
		extensions: ['widescreen', 'theme-black', 'effect-menu-slide', 'pagedim-black'],
		navbar: {
			title: '<img src="./img/logo-1.svg" alt="Салон красоты S&Mitler">'
		},
		offCanvas: {
			position: 'right'
		}
	});

	var api = $('#my-menu').data('mmenu');
	api.bind('opened', function () {
		$('.hamburger').addClass('is-active');
	}).bind('closed', function () {
		$('.hamburger').removeClass('is-active');
	});

	$('.carousel-services').on('initialized.owl.carousel', function () {
		setTimeout(function () {
			carouselService()
		}, 100);
	});
	$('.carousel-services').owlCarousel({
		loop: true,
		nav: true,
		smartSpeed: 700,
		navText: ['<i class="fa fa-angle-double-left"></i>', '<i class="fa fa-angle-double-right"></i>'],
		responsiveClass: true,
		dots: false,
		responsive: {
			0: {
				items: 1
			},
			768: {
				items: 2
			},
			992: {
				items: 3
			}
		}
	});


	function carouselService() {
		$('.carousel-services-item').each(function () {
			var ths = $(this),
				thsh = ths.find('.carousel-services-item-content').outerHeight();
			ths.find('.carousel-services-item-img').css('min-height', thsh);
		});
	} carouselService();

	$('.carousel-services-item-composition .h3').each(function () {
		var ths = $(this);
		ths.html(ths.html().replace(/(\S+)\s*$/, '<span>$1</span>'));
	});

	$('section .h2').each(function () {
		var ths = $(this);
		ths.html(ths.html().replace(/(\S+)/, '<span>$1</span>'));
	});

	$('.reviews').owlCarousel({
		loop: true,
		items: 1,
		smartSpeed: 700,
		dots: true,
		autoHeight: true
	});

	$('.partners').owlCarousel({
		loop: true,
		items: 3,
		smartSpeed: 700,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1
			},
			768: {
				items: 2
			},
			992: {
				items: 3
			},
			1200: {
				items: 4
			}
		},
		dots: false,
		nav: true,
		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
	});

	$(window).scroll(function () {
		if ($(this).scrollTop() > $(this).height()) {
			$('.top').addClass('active');
		} else {
			$('.top').removeClass('active');
		}
	});
	$('.top').click(function () {
		$('html, body').stop().animate({ scrollTop: 0 }, 1000, 'swing');

	});
	$('.about-us').click(function () {
		$('html, body').stop().animate({ scrollTop: $('.s-royal').offset().top }, 1000, 'swing');

	});

	//E-mail Ajax Send
	$("form.callback").submit(function () { //Change
		var th = $(this);
		$(th).find('.success').addClass('active').css('display', 'flex').hide().fadeIn();
		setTimeout(function () {
			$(th).find('.success').removeClass('active').fadeOut();
			// Done Functions
			th.trigger("reset");
		}, 4000);
		return false;
	});

	// Resize Window
	function onResize() {
		$('.carousel-services-item-content').equalHeights();
	};
	window.onresize = () => { onResize() };

	$(window).load(() => {
		$('.preloader').delay(1000).fadeOut('slow');
	});

});
