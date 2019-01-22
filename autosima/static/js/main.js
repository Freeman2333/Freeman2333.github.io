;
// Начинать писать отсюда!!!!

$(document).ready(function () {
	$('.js-main_slider').bxSlider({
		pagerCustom: ".js-main_slider__pager" ,
		nextText: '' ,
		prevText: '' ,
		prevSelector: '.js-main_slider__prev',
		nextSelector: '.js-main_slider__next'
	});
	$('.popup-form__link').magnificPopup({
		type: 'inline',
	})
	$(document).on('click', '.js-hide-main-nav--toggle', function () {
		$(this).toggleClass('active');
		$('.main-nav-mobile__list').toggleClass('active');
		$('.wrapper-inner').toggleClass('slide-right');
	})
})