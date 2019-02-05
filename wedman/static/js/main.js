;
// Начинать писать отсюда!!!!
$(document).ready(function () {
	$(".js-portfolio-video-slider").slick({
		dots: true,
		infinite: true,
		prevArrow: ".portfolio-video-controls__left",
	  	nextArrow: ".portfolio-video-controls__right",
	  	responsive:[
	  		{
	  			breakpoint:500,
	  			settings: {
	  				arrows: false
	  			}
	  		}
	  	]
	})
	$(".js-portfolio-photo-slider").slick({
		dots: false,
		slidesToShow: 5,
		infinite: true,
		prevArrow: ".portfolio-photo-controls__left",
	  	nextArrow: ".portfolio-photo-controls__right",
	  	responsive: [
	    {
	      breakpoint: 1000,
	      settings: {
	        slidesToShow: 3,
	        slidesToScroll: 1,
	        infinite: true
	      }
	  	},
	  	{
	      breakpoint: 680,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 1,
	        infinite: true
	      }
	  	},
	  	{
	      breakpoint: 500,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1,
	        infinite: true
	      }
	  	}
	  ]
	});
	$(".js-reviews-slider").slick({
		dots: false,
		slidesToShow: 1,
		infinite: true,
		prevArrow: ".review-sliders__left",
	  	nextArrow: ".review-sliders__right"
	});
	$('.popup-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
		}
	});
	function questions() {
		var question = $(".question-title"),
			answer = $(".question-answer");

		question.click(function () {
			var curAnswer = $(this).siblings(answer);
			curAnswer.slideToggle();
			question.toglleClass('active')
		})
	}
	questions();

	$("<div class='clone-header'>").insertBefore("header").css('height', 'headerHeight').hide();
	$(window).scroll(function () {
		var headerHeight = $("header").outerHeight(true);
		if ($(window).scrollTop()>130) {
			$("header").addClass('active');
			$(".clone-header").show()
		} else{
			$("header").removeClass('active')
			$(".clone-header").hide();
		}
	})

	$('.popup-link').magnificPopup({
		type: 'inline',
	});

	$(".popup-close").click(function () {
		$.magnificPopup.close()
	});

	$(".scroll").click(function (){
			var dest = $(this).attr("href");
            $('html, body').animate({
                scrollTop: $(dest).offset().top-30
            }, 1000);
        });

	$("form").on("submit", function () {
		var formId = '#' + $(this).attr("id");
		$(formId).validate({
			rules: {
				name: 'required',
				phone: 'required'
			},
			messages: {
				name: '',
				phone:''
			}
		})
		if ($(formId).valid()) {
			$(formId).parent().hide();
			$(formId).parent().parent().find(".popup-success").addClass('show');
		}
		return false;
	});

	function stagesSlider() {
		if ($(window).width()< 700) {
			$(".js-stages-item__wrap").slick({
		dots: false,
		slidesToShow: 1,
		infinite: true,
		prevArrow: ".stages-item__controls--left",
	  	nextArrow: ".stages-item__controls__right"
			})
		}else{
			$(".js-stages-item__wrap").slick('unslick');
		}
	}

	$(window).resize(function () {
		stagesSlider();
	});

	stagesSlider();
})