$(document).ready(function(){
	$('.slider__row').slick({
		arrows:false,
		dots:true,
		adaptiveHeight: true,
		slidesToShow: 3,
		slidesToScroll: 3,
		speed: 1000,
		autoplay: true,
		autiplaySpeed: 1000,
		pausedOnFocus: true,
		pausedOnHover: true,
		pausedOnDotsHover: true,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
				}
			},
		]
	});
	// $('.slider__row').slick('setPosition');
});