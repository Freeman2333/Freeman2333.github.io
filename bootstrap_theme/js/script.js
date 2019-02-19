
$(document).ready(function(){
	$('.img-container').magnificPopup({
	  delegate: 'a',
	  type: 'image',
	  gallery: {
	      enabled: true
	    },
	});

	$('#logo').owlCarousel({
	    loop:true,
	    margin:10,
	    items: 6,
	    nav: true,
	    smartSpeed: 3000,
	    responsive:{
	        0:{
	            items:1,
	            nav:false
	        },
	        600:{
	            items:3,
	            dots: false
	        },
	        1000:{
	            items:5,
	            nav:false
	        }
	    }
	});

	$('#owl-work').owlCarousel({
	    loop:true,
	    margin:10,
	    smartSpeed: 3000,
	    responsive:{
	        0:{
	            items:1,
	            nav: false,
	            dots: true
	        },
	        600:{
	            items:2,
	            nav: false,
	            dots: true
	        },
	        900:{
	            items: 3,
	    		nav: true,
	    		dots: false,
	        }
	    }
	});

	$('#customers').owlCarousel({
	    loop:true,
	    nav: true,
	    items: 1,
	    dots: false,
	    smartSpeed: 3000,

	});

	$(window).scroll(function () {
		var location =$(this).scrollTop();
		if (location<70) {
			$("nav").removeClass("transparent");
		}
		else{
			$("nav").addClass("transparent");
		}
	});

	var $button = $.backToTop({
		style: {
			width: '20px',
			height: '20px'
		},
		duration: 1000
	});


});