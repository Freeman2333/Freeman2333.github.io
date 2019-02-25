;
// Начинать писать отсюда!!!!
$(document).ready(function () {
	$(".js-index__slider").bxSlider({
		pagerCustom: ".js-index__slider--pager",
		controls: false
	});

	$(".product-item__slider").bxSlider({
		pagerCustom: ".product-item__colors",
		controls: false
	});

	$(".js-product-view-slider").bxSlider({
		pagerCustom: ".js-product-view__pager",
		controls: false
	});


	$(".sizes-list li").click(function () {
		$(this).siblings().removeClass("active");
		$(this).toggleClass("active");
	})

	$(".chose-size__list li").click(function () {
		$(this).siblings().removeClass("active");
		$(this).toggleClass("active");
	})

	$(".new-arrivals .product-item__more").click(function () {
		$(".new-arrivals .product-item:nth-child(n+5)").fadeToggle("slow")
		$(this).toggleClass("show-less")
	});

	$(".all-products .product-item__more").click(function () {
		$(".all-products .product-item:nth-child(n+10)").fadeToggle("slow")
		$(this).toggleClass("show-less")
	});

	$(".stars svg").hover(hoverOn, hoverOff);

	function hoverOn() {
		$(this).addClass("active");
		$(this).prevAll().addClass("active")
	}

	function hoverOff() {
		$(this).removeClass("active");
		$(this).prevAll().removeClass("active")
	}

	$(".stars svg").click(function () {
		$(this).siblings().removeClass("active")
		$(this).addClass("liked");
		$(this).prevAll().addClass("liked")
	});

	$(".hamburger").click(function () {
		$(this).toggleClass("is-active");
		$(".header-nav").slideToggle();
	});

	var productAmount = $(".quantity-count").text();
	$(".quantity-up").click(function () {
		productAmount++
		$(".quantity-count").text(productAmount);

	})
	$(".quantity-down").click(function () {
		if(productAmount==0||productAmount==1){
			productAmount=1;
		}
		productAmount--
		$(".quantity-count").text(productAmount);

	});

	  $(function() {
		 $( "#slider_price" ).slider({
		 range: true,
		 min: 0,
		 max: 1100,
		 values: [ 100, 1000 ],
		 slide: function( event, ui ) {
		 //Поле минимального значения
		 $( "#price" ).val(ui.values[ 0 ]+'$');
		 //Поле максимального значения
		 $("#price2").val(ui.values[1]+'$'); }
		 });
		 //Записываем значения ползунков в момент загрузки страницы
		 //То есть значения по умолчанию

		 $( "#price" ).val($( "#slider_price" ).slider( "values", 0 )+'$');
		 $("#price2").val($("#slider_price").slider( "values", 1 )+"$");
		 });

	  $( "#price" ).keyup(function () {
	  	var value = $(this).val()
	  	var selection = $( "#slider_price" ).slider( "values", 0, value )
	  });

	  $( "#price2" ).keyup(function () {
	  	var value = $(this).val()
	  	var selection = $( "#slider_price" ).slider( "values", 1, value )
	  })

})