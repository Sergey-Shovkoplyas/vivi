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
					slidesToScroll: 1,
					arrows: false
				}
			},
			
		]
	});
	console.log( 'JQuery!!!' );

});