;
// Начинать писать отсюда!!!!


$(document).ready(function () {
	$(".js-main-slider").bxSlider({
		nextText:'',
		nextSelector: '.main-slider__next',
		prevText:'',
		prevSelector: '.main-slider__prev',
		pager: false,
		responsive: false
	});

	$(".js-product-slider").bxSlider({
		pagerCustom: '.product-slider__pager',
		controls: false,
		mode: "fade"
	});


	$(document).on('click','.catalog-list__item',function () {
		$(this).find(".catalog-list__subnav").slideToggle().parent().toggleClass("show-hide-list");
		return false
	})

	$(document).on('click','.hide-main-nav',function () {
		if ($(this).hasClass("active")) {
			$(".main-nav--mobile").removeClass("active");
			$(".hide-main-nav").toggleClass("active");
			$(".wrapper-inner").toggleClass("mmenu-show");
			$("aside").removeClass("catalog--mobile");
			$("header").removeClass("mmenu");
		}
		else{
			$(".hide-main-nav").toggleClass("active");
			$(".wrapper-inner").toggleClass("mmenu-show");
			$(".main-nav--mobile").toggleClass("active");
			$("header").addClass("mmenu");
		}
	});

	$(document).on('click','.main-nav__list--mobile a',function () {
		$(".main-nav--mobile").removeClass('active');
		$("aside").addClass('catalog--mobile');
	})

	var headerHeight = $("header").height();
	var clone = $("<div>").css('height',headerHeight).insertBefore("header").hide();
	$(window).scroll(function () {
		var scroll = $(window).scrollTop();
		if (scroll !== 0) {
			$("header").addClass("header__scroll");
			clone.show();
			// console.log(headerHeight)
		}
		else{
			$("header").removeClass("header__scroll");
			clone.hide();
		}

		$(".product-tabs__list li").click(function () {
			var tabName = $(this).attr('show-tab');
			$(this).addClass("active").siblings().removeClass("active");
			$(".product-tabs ."+ tabName).addClass("active").siblings().removeClass("active");

		})
	})
})