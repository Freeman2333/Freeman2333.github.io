;
// Начинать писать отсюда!!!!

$(document).ready(function () {
	$('.sandwich').click(function () {
		var menu = $('.header-nav__list');
		$(this).toggleClass('active');
		menu.slideToggle()
	});

	$('.js-reviews-slider').slick({
	  dots: true,
	  infinite: true,
	  speed: 300,
	  slidesToShow: 2,
	  slidesToScroll: 1,
	  prevArrow: ".reviews-slider__prev",
	  nextArrow: ".reviews-slider__next",
	  responsive: [
	    {
	      breakpoint: 1000,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1,
	        infinite: true,
	        dots: true
	      }
	  	}
	  ]
	})

	$('.js-price-item__wrap').slick({
	  infinite: true,
	  speed: 300,
	  slidesToShow: 3,
	  adaptiveHeight: true,
	  slidesToScroll: 1,
	  prevArrow: ".price-slider__prev",
	  nextArrow: ".price-slider__next",
	  responsive: [
	    {
	      breakpoint: 1200,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 1,
	        infinite: true
	      }
	  	},
	  	{
	      breakpoint: 900,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1,
	        infinite: true
	      }
	  	}
	  ]
	})
	$('.price-item').equalHeights();
	$('.reviews-item').equalHeights();
	
	$(".scroll").click(function (){
				var dest = $(this).attr("href");
                $('html, body').animate({
                    scrollTop: $(dest).offset().top
                }, 1000);
            });
	$('form').on('submit', function () {
		var formId = '#' + $(this).attr("id");
		$(formId).validate({
			rules: {
				name: 'required',
				phone: 'required'
			},
			messages: {
				name:'Введите коректные данные',
				phone:'Введите коректные данные'
			}
		});
		if ($(formId).valid()) {
			$(this).hide();
			$(this).parent().find('.success-form').addClass('success-show')

		}
		return false;
	})
	$('.popup-link').magnificPopup({
		type: 'inline',
		});
	$('#close-popup').on('click',function () {
		$.magnificPopup.close();
	})
});
