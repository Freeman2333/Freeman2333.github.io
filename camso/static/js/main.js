;
// Начинать писать отсюда!!!!

$(document).ready(function () {
	$("body").click(function () {
		$(".main-nav__list").removeClass("active");
		$(".tyre-selection__popup").slideUp();
		$(".hide-filter__type").slideUp();
		$(".hide-filter__size").slideUp();
		$(".bottom-menu__list").removeClass("show");
	})

	$(".menu_open").click(toggleMenu);

	$('.main-nav__title').click(toggleMenu);

	function  toggleMenu(event) {
		event.stopPropagation()
		event.preventDefault()
		$(".main-nav__list").toggleClass("active")
	};

	$('.image-popup-fit-width').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		image: {
			verticalFit: false
		}
	});

	$(".trigger-form").click(function (event) {
		event.preventDefault()
		event.stopPropagation()
		$(".tyre-selection__popup").slideToggle();
	})

	$(".trigger-size__filter").click(function (event) {
		event.preventDefault()
		event.stopPropagation()
		$(".hide-filter__type").slideUp();
		$(".hide-filter__size").slideToggle();
	})

	$(".trigger-type__filter").click(function (event) {
		event.preventDefault()
		event.stopPropagation()
		$(".hide-filter__size").slideUp();
		$(".hide-filter__type").slideToggle();
	})

	$(".trigger-menu").click(function (event) {
		event.preventDefault()
		event.stopPropagation()
		$(".bottom-menu__list").toggleClass("show");
	})

	   $('.scroll').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top - 100
                }, 1000);
                return false;
            }
        }
    });

	 if(location.hash){
        if(location.hash.length){
            $('html, body').animate({
                scrollTop: $(location.hash).offset().top - 100
            }, 10);
        }
    } 
    
    $(".scroll-top").click(function () {
    	$("body,html").animate({
    		scrollTop:0
    	},1000)
    });

    $(".perc").each(function () {
    	var percent = $(this).data('percent');
    	console.log(percent);
    	$(this).animate({
    		width: percent+'%'
    	},1000)
    })
})