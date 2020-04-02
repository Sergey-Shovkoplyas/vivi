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

	console.log( 'JQuery!!!' );

});