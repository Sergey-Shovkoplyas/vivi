$(document).ready(function () {

	// -------------------- initialize sliders ---------------------

	$('.home__collections-slider').slick({
		dots: false,
		arrows: true,
		infinite: true,
		variableWidth: true,
		slidesToShow: 3,
		slidesToScroll: 3,
		prevArrow: $('.home__collections-slider-arrows .slider-arrows__prev'),
		nextArrow: $('.home__collections-slider-arrows .slider-arrows__next'),
		responsive: [
			{
				breakpoint: 992,
				settings: {
					variableWidth: false,
					slidesToShow: 1,
					slidesToScroll: 1
				}
			},

		]
	});

	$('.home__look-slider').slick({
		dots: false,
		arrows: true,
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 1,
				}
			},

		]
	});

	$('.home__popular-slider').slick({
		dots: false,
		arrows: true,
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 1,
				}
			},

		]
	});

	$('.unifromi__partners-slider').slick({
		dots: false,
		arrows: false,
		infinite: true,
		slidesToShow: 7,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 5,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
				}
			},

		]
	});

	// -------------------- footer mobile menu ---------------------

	$(window).on('load', function () {

		if ($(window).width() < 768) {
			console.log('run script!!!');
			$('.footer__title').on('click', function () {
				$(this).toggleClass('active');
				$(this).next('.footer__list').slideToggle();
			});
		}

	});

	// -------------------- footer language ---------------------

	$('.footer__language-current').on('click', function () {
		$(this).toggleClass('active');
		$(this).next('.footer__language-list').slideToggle();
	});

	// -------------------- header__search ---------------------

	$('.header__search').on('click', function () {
		$(this).removeClass('active');
		$('.header__search-block').fadeIn();
	});
	$('.header__search-close').on('click', function () {
		$('.header__search').addClass('active');
		$('.header__search-block').fadeOut();
	});

	// -------------------- header__nav toggle ---------------------

	$('.header__nav-btn').on('click', function () {
		$('.header__nav-btn .nav-btn').toggleClass('active');
		$('.header__nav').slideToggle();
	});

	// -------------------- filter-btn --------------------------

	$('.filter-btn').on('click', function () {
		$(this).children('.filter-btn__close').toggleClass('active');
		$('.filter').slideToggle();
	});

	// -------------------- registration-form--------------------------

	togglePlaceholder();

	$('.registration-form__item').focusin(showPlaceholder)
	$('.registration-form__item').blur(togglePlaceholder)

	function togglePlaceholder() {
		$('.registration-form__item').each(function () {
			let value = $(this).val();
			let $placeholder = $(this).next('.registration-form__item-placeholder');
			if (value) {
				$placeholder.show();
			} else {
				$placeholder.hide();
			}
		});
	}

	function showPlaceholder() {
		$(this).next('.registration-form__item-placeholder').show();
	}

	// -------------------- select-size --------------------------

	$('.select-size').on('click', function () {
		$(this).children('.select-size__list').slideToggle();
	});

	$('.select-size__list li').on('click', function (e) {
		if (!$(this).children('.select-size__stock').length) {
			let sizeItemValue = $(this).children('.select-size__item-value').text();
			let $sizeArea = $(this).parent('.select-size__list').prev('.select-size__value');
			$sizeArea.text(sizeItemValue);
			$sizeArea.addClass('active');
		} else {
			e.stopPropagation();
		}

	});

	// -------------------- view-cart --------------------------

	$('.view-cart__close').on('click', function () {
		$(this).parent('.view-cart').fadeOut();
	});

	// -------------------- account-sidebar --------------------------

	$('.account-sidebar__btn').on('click', function () {
		$('.account-sidebar').toggleClass('active')
	})

	// -------------------- header-submenu --------------------------

	$('.header__nav-list a').on('click', function () {
		$(this).next('.header-submenu').slideToggle();
		$(this).toggleClass('active');
	});

	// -------------------- cart__quantity --------------------------

	$('.product-quantity__bnt--minus').on('click', function () {
		let $input = $(this).next('.product-quantity__input');
		let inputValue = $input.val();
		if (inputValue > 0) {
			inputValue--;
			$input.val(inputValue)
		}
	});

	$('.product-quantity__bnt--plus').on('click', function () {
		let $input = $(this).prev('.product-quantity__input');
		let inputValue = $input.val();
		inputValue++;
		$input.val(inputValue);

	});




	// -------------------- initialize products-card__sliders ---------------------

	$('.products-card__slider').each(function () {
		console.log(this);
		$(this).slick({
			dots: false,
			arrows: false,
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 1000,

			speed: 300,
			fade: true,
			cssEase: 'linear'

		});

		let slickPause = () => {
			$(this).slick('slickPause');
		}

		slickPause();

		$(this).mouseover(function () {
			$(this).slick('slickPlay')
		});
		$(this).mouseout(function () {
			slickPause();
		});
	});

	// -------------------- initialize home__welcome-slider ------------------

	$('.home__welcome-slider').slick({
		fade: true,
		speed: 2000,
		autoplay: false,
		prevArrow: $('.home__welcome-prev'),
		nextArrow: $('.home__welcome-next'),
	});

	// $('.home__welcome-slider').on('init', function (e, slick) {
	// 	var $firstAnimatingElements = $('div.home__welcome:first-child').find('[data-animation]');
	// 	doAnimations($firstAnimatingElements);
	// });

	$('.home__welcome-slider').on('beforeChange', function (e, slick, currentSlide, nextSlide) {
		var $animatingElements = $('div.home__welcome[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
		var $animatingElementsOut = $('div.home__welcome[data-slick-index="' + currentSlide + '"]').find('[data-animation]');
	
		doAnimationsOut($animatingElementsOut);
		doAnimations($animatingElements);
		
		

	});

	function doAnimations(elements) {
		var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
		elements.each(function () {
			var $this = $(this);
			var $animationDelay = $this.data('delay');
			var $animationType = 'animated ' + $this.data('animation');
			$this.css({
				'animation-delay': $animationDelay,
				'-webkit-animation-delay': $animationDelay
			});
			$this.addClass($animationType).one(animationEndEvents, function () {
				$this.removeClass($animationType);
			});
		});
	}

	function doAnimationsOut(elements) {
		var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
		elements.each(function () {
			var $this = $(this);
			var $animationDelay = $this.data('delay');
			var $animationType = 'animated ' + $this.data('animation-out');
			$this.css({
				'animation-delay': $animationDelay,
				'-webkit-animation-delay': $animationDelay
			});
			$this.addClass($animationType).one(animationEndEvents, function () {
				$this.removeClass($animationType);
			});
		});
	}













	// -------------------- registration-form-masked-input --------------------------

	/* 	$('#input-cvv').mask("999");
		$('#input-date').mask("99/99");
		$('#input-card').mask("9999    9999   9999    9999"); */






});