(function () {
	$(".carousel").owlCarousel({
		items: 1,
		loop: true,
		dots: true,
		autoplay: true,
		smartSpeed: 750,
	});
	$(".carousel1").owlCarousel({
		items: 1,
		loop: true,
		margin: 3,
		nav: true,
	});
	// tabs
	$('.tab-header li').on('click',function () {
		$('.tab-header li.active').removeClass('active');
		$(this).addClass('active');
		var tabToOpen = $(this).attr("rel");
		$('.tab-body.active').removeClass('active').hide();
		$('#'+tabToOpen).show().addClass('active');
	})

})();