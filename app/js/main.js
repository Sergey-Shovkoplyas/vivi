$( document ).ready(function() {

	// -------------------- initialize sliders ---------------------

	$('.home__collections-slider').slick({
		dots: false,
		arrows: true,
		infinite: true,
		variableWidth: true,
		slidesToShow: 3,
		slidesToScroll: 3,
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

	// -------------------- footer mobile menu ---------------------

	$(window).on('load', function() {

		if ( $(window).width() < 768 ) {
			console.log('run script!!!');
			$('.footer__title').on('click', function() {
				$(this).toggleClass('active');
				$(this).next('.footer__list').slideToggle();
			});
		}

	});

	// -------------------- footer language ---------------------

	$('.footer__language-current').on('click', function(){
		$(this).toggleClass('active');
		$(this).next('.footer__language-list').slideToggle();
	});

	// -------------------- header__search ---------------------

	$('.header__search').on('click', function(){
		$(this).removeClass('active');
		$('.header__search-block').fadeIn();
	});
	$('.header__search-close').on('click', function(){
		$('.header__search').addClass('active');
		$('.header__search-block').fadeOut();
	});

	// -------------------- header__nav toggle ---------------------

	$('.header__nav-btn').on('click', function() {
		// $(this).children('.nav-btn').toggleClass('active');
		$('.header__nav-btn .nav-btn').toggleClass('active');
		$('.header__nav').slideToggle();
	});

});