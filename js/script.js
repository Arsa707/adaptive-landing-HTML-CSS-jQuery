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
					slidesToScroll: 2,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			},
		]
	});
	$('.header__burger').click(function(event) {
		$('.header__burger,.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});