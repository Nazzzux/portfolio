$(function(){
	$(".menu a, .header__link, .logo").on("click", function (event) {
		event.preventDefault();
		var id = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top - 65}, 1500);
	});

   $('[data-fancybox="gallery"]').fancybox({
		selector : '.imglist a:visible',
	});

	$('.menu__btn, .menu__link').on('click', function(){
		$('.menu__list,.menu__row,.menu').toggleClass('active');
	});

	$(window).scroll(function() {
		if ($(document).scrollTop() > 74) {
		   $('.menu').addClass('menu--fixed');
			$('.header').addClass('header__content--max');
		} else {
		   $('.menu').removeClass('menu--fixed');
		   $('.header').removeClass('header__content--max');
		}
	});

	$('.reviews__popup-link').magnificPopup({
		disableOn: 100,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false
	});

	var mixer = mixitup('.work__gallery');
});

