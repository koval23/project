$(function () {


	$('.slider__inner').slick({
		arrows: false,
		dots: true,
	});

	$('.works__inner').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		prevArrow: '<button class="slick-arrow click-prew"><img src="images/slider/arrow-left.svg" alt=""></button>',
		nextArrow: '<button class="slick-arrow click-next"><img src="images/slider/arrow-right.svg" alt=""></button>',
	});


});