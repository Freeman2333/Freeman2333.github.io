$(function() {

	$(".toggle-mnu").click(function () {
		$(this).toggleClass("on");
		$(".main-mnu").slideToggle();
	});	

	new WOW().init();

	$(".main-footer .toggle-mnu").click(function () {
		$("html, body").animate({ scrollTop: $(document).height() }, "slow");
		return false;
	});

	$(".arrow-bottom").click(function () {
		$("html, body").animate({ scrollTop: $("header").height() + 120}, "slow");
		return false;
	});

	$(".top").click(function () {
		$("html, body").animate({ scrollTop: 0 }, "slow");
		return false;
	});
	
	// $(".section-head h2, .section-head p").animated("fadeInRight");
	/*====waypoint=====*/
	// $(".section_4").waypoint(function(){
	// 	$(".section_4 .card").removeClass("card-off").addClass("card-on");
	// });
	/*======draw svg============*/
	// var myAnimation = new DrawFillSVG({
	// 	elementId: "tc-svg2"
	// });

	var waypoint = new Waypoint({
  		element: $(".section_4"),
  		handler: function() {
		$(".section_4 .card").each(function (index) {
			var ths = $(this);
			setInterval(function () {
				ths.removeClass("card-off").addClass("card-on");
				}, 100*index);		
			});
 		 },
 		 offset: "20%"
		});
	var waypoint2 = new Waypoint({
  		element: $(".section_6"),
  		handler: function() {
		$(".section_6 .team").each(function (index) {
			var ths = $(this);
			setInterval(function () {
				ths.removeClass("team-off").addClass("team-on");
				}, 100*index);		
			});
 		 },
 		 offset: "20%"
		});

	$(".slider").owlCarousel({
      items: 1,
      nav: true,
      navText: "",
      loop: true,
	});

	$(".homesect .section-bottom .buttons").click(function () {
		$("#callback h4").html($(this).text());
	}).magnificPopup({
		type: 'inline',
		mainClass: 'mfp-forms'
	});
});
