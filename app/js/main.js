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


	console.log( 'JQuery!!!' );

});