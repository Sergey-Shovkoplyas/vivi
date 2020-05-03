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
		prevArrow: $('.home__look-slider-arrows .slider-arrows__prev'),
		nextArrow: $('.home__look-slider-arrows .slider-arrows__next'),
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
		prevArrow: $('.home__popular-slider-arrows .slider-arrows__prev'),
		nextArrow: $('.home__popular-slider-arrows .slider-arrows__next'),
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

	$('.header__search').on('click', function (e) {
		e.preventDefault();
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
		$(this).next('.header-submenu').toggleClass('active');
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




	// -------------------- initialize products-card__sliders/cart-card__slider ---------------------

	$('.products-card__slider, .cart-card__slider').each(function () {
		$(this).slick({
			dots: false,
			arrows: false,
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 700,

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

	// -------------------- initialize home__welcome-slider(animated) ------------------

	$('.home__welcome-slider').slick({
		fade: true,
		speed: 500,
		autoplay: false,
		prevArrow: $('.home__welcome-prev'),
		nextArrow: $('.home__welcome-next'),
		infinite: false
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


	// -------------------- initialize home__catalog-collaction-slider(animated) ------------------

	$('.home__catalog-collaction-slider').slick({
		swipe: false,
		fade: true,
		speed: 500,
		arrows: false,
		dots: false,
		appendDots: $('.home__catalog-col-2'),
		dotsClass: 'home__catalog-list',
		asNavFor: '.home__catalog-collaction-slider-right'
	});

	$('.home__catalog-collaction-slider-right').slick({
		swipe: false,
		fade: true,
		speed: 500,
		arrows: false,
		dots: false,
		appendDots: $('.home__catalog-col-2'),
		dotsClass: 'home__catalog-list'

	});

	$('.home__catalog-collaction-slider').on('beforeChange', function (e, slick, currentSlide, nextSlide) {
		var $animatingElements = $('div.home__catalog-collaction[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
		var $animatingElementsOut = $('div.home__catalog-collaction[data-slick-index="' + currentSlide + '"]').find('[data-animation]');

		doAnimationsOut($animatingElementsOut);
		doAnimations($animatingElements);

	});

	$(window).on('load resize ', function () {
		let viewport = $(window).width();

		if ( viewport < 768) {
			$('.home__catalog-list li').on('click', function () {
				let slideIndex = $(this).index();
				$('.home__catalog-collaction-slider').slick('slickGoTo', slideIndex);
				$(this).find('a').addClass('active');
				$(this).parent('.home__catalog-list').find('li').not(this).find('a').removeClass('active');
			});
		} else {
			$('.home__catalog-list li').on('mouseover', function () {
				let slideIndex = $(this).index();
				$('.home__catalog-collaction-slider').slick('slickGoTo', slideIndex);
				$(this).find('a').addClass('active');
				$(this).parent('.home__catalog-list').find('li').not(this).find('a').removeClass('active');
			});
		}

	});

	// -------------------- functions for animated sliders ------------------

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

	// -------------------- filter on products page (open/close view more) ------------------

	$('.filter__more').on('click', function(e){
		e.preventDefault();
		$(this).toggleClass('more');
		$(this).prev('.filter__size-list').find('.filter__more-items').slideToggle();
	});

	// -------------------- filter range__slider ------------------

	$('.filter__range').ionRangeSlider({
		type: "double",
		skin: "round",
		min: 15,
		max: 500,
		from: 15,
		to: 500,
		postfix: ' RON',
		hide_min_max: true
	});











	// -------------------- registration-form-masked-input --------------------------

	/* 	$('#input-cvv').mask("999");
		$('#input-date').mask("99/99");
		$('#input-card').mask("9999    9999   9999    9999"); */






});