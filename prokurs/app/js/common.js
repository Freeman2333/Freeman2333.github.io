$(function() {

	function wResize(){
		$('header').css('min-height', $(window).height());
	};
	wResize();
	$(window).resize(function () {
		wResize();
		// console.log($(window).height());
		// console.log($('header').height());
	});
	$('.top_phone .wrapper .tab').click(function () {
		$('.top_phone .wrapper .tab').removeClass('active').eq($(this).index()).addClass('active');
		$('.top_phone .tab_item').hide().eq($(this).index()).fadeIn()
	});
	$('.tabs_header .wrapper .tab').click(function () {
		$('.tabs_header .wrapper .tab').removeClass('active').eq($(this).index()).addClass('active');
		$('.tabs_header .tab_item').hide().eq($(this).index()).fadeIn()
	});
	$('.contacts_top .tab').click(function () {
		$('.contacts_top .tab').removeClass('active').eq($(this).index()).addClass('active');
		$('.s_contacts .tab_item').hide().eq($(this).index()).fadeIn()
	});
	
	$('.bottom_phone .wrapper .tab').click(function () {
		$('.bottom_phone .wrapper .tab').removeClass('active').eq($(this).index()).addClass('active');
		$('.bottom_phone .tab_item').hide().eq($(this).index()).fadeIn()
	});
	// $.stellar({
	// 	responsive: true,
	// });
	$(".owl-carousel").owlCarousel({
		items: 1,
		loop: true,
		nav: true,
	});
	$('.popup').magnificPopup({type:'image'});
	$('.popup_c').magnificPopup();
	new WOW().init();
	// $(".top_header h1").animated("fadeInDown","fadeInDown");
	// $(".top_header h2").animated("fadeInUp","fadeInUp");
	$("footer a.button").click(function (event){
		event.preventDefault();
		var text =$(this).text();
		$("#hidden_form h2").text(text);
	})
	$(window).on('load', function () {
		$('.preloader').fadeOut('slow')
	})
});
