$(document).ready(function () {
    svg4everybody({});

   let IndexSlider = (()=>{
   	$(".js-index-slider").slick({
   		prevArrow: '.index-slider__controls--prev',
   		nextArrow: '.index-slider__controls--next',
   		dots: true,
   		vertical:true,
   		customPaging: function () {
	      return '<a class="index-slider__dot"></a>';
	    },
    })

   })() 

   let indexSliderElemPos = ((elem,pos)=>{
    	let windowWidth = $(window).width()
    	let containerWidth = $(".container").width()
    	let offsetPos = (windowWidth-containerWidth)/2
    	$(".index-slider "+elem).css(pos,offsetPos)
    })

   indexSliderElemPos('.index-slider__controls','right');
   indexSliderElemPos('.slick-dots','left');

   // let IndexProductSlider = (()=>{
	  //  	$(".js-horizontal-slider").slick({
	  //  		dots: true,
	  //  		slidesToShow: 4,
	  //  		dots: true,
	  //  		prevArrow: '.horizontal-slider__controls--prev',
	  //  		nextArrow: '.horizontal-slider__controls--next',
	  //  		appendDots: '.horizontal-slider__nav',
	  //  		customPaging: function () {
		 //      return '<a class="horizontal-slider__dot"></a>';
		 //    },
		 //    responsive: [
		 //    {
		 //    	breakpoint: 960,
		 //    	settings: {
		 //    		slidesToShow: 3
		 //    	}
		 //    }
		 //    ]

   //  	})
   //  })()

 	let HorizontalSlider = (()=>{
     	$(".js-horizontal-slider").each(function () {
     		let parentSection = $(this).closest("section")
     		let prevArrow = parentSection.find('.horizontal-slider__controls--prev')
     		let nextArrow = parentSection.find('.horizontal-slider__controls--next')
     		let dots = parentSection.find('.horizontal-slider__nav')

     		$(this).slick({
	   		dots: true,
	   		slidesToShow: 4,
	   		dots: true,
	   		prevArrow: prevArrow,
	   		nextArrow: nextArrow,
	   		appendDots: dots,
	   		customPaging: function () {
		      return '<a class="horizontal-slider__dot"></a>';
		    },
		    responsive: [
		    {
		    	breakpoint: 1280,
		    	settings: {
		    		slidesToShow: 3
		    	}
		    },
                {
                    breakpoint: 650,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1
                    }
                }
		    ]

    	})
     	})


	   	
    })()

	let ProductGallerySlider = (()=>{
   	$(".js-product-gallery").slick({
   		asNavFor: '.js-product-nav',
   		centerMode: true,
   		fade: true,
   		arrows: false
    })

   })() 

   let ProductNavSlider = (()=>{
   	let number = $(".product-nav-slide").length
   	$(".js-product-nav").slick({
   		slidesToShow: number,
   		focusOnSelect: true,
   		asNavFor: '.js-product-gallery',
   		arrows: false
    })

   })()

   let Tabs = (()=>{
    	$(".tabs-nav__item").click(function () {
    		let tabIndex = $(this).index()
    		let parentTab = $(this).closest('.tabs')
    		$(this).siblings().removeClass('tabs-nav__active')
    		$(this).addClass('tabs-nav__active')
    		parentTab.find('.tab').removeClass('tab-active')
    		parentTab.find('.tab').eq(tabIndex).addClass('tab-active')
    		// let activeProductLineSlider = $('.tab').eq(tabIndex).find('.js-products-line-slider')
    		// activeProductLineSlider.slick('refresh')
    		// let activeProductPrevSlider = $('.tab').eq(tabIndex).find('.js-product-prev__slider')
    		// activeProductPrevSlider.slick('refresh')
    	})
    })()

    let bannerContent = (()=>{
    	$(".page-banner__open").click(function  (e) {
    		e.preventDefault()
    		$(this).hide();
    		$(".page-banner-content").css('height',`330px`)   
    		$(".page-banner__close").css('display','block')
    		$(".page-banner__hidden-content").show()
    		if ($(window).width()<900) {
    			$(".banner-reviewer-pic").css('display',`none`)
    			$(".page-banner-content").toggleClass('page-banner-content--mobile')
    		}
    		else{
    			$(".banner-reviewer-pic").css('height',`443px`)
    		}

    	})
    	$(".page-banner__close").click(function  (e) {
    		e.preventDefault()
    		$(this).hide();
    		$(".page-banner-content").css('height',`230px`)
    		$(".page-banner__open").show()
    		$(".page-banner__hidden-content").hide()
    		if ($(window).width()<900) {
    			$(".banner-reviewer-pic").css('display',`block`)
    			$(".page-banner-content").toggleClass('page-banner-content--mobile')
    		}
    		else{
    			$(".banner-reviewer-pic").css('height',`330px`)
    		}

    	})
    })()

    let filterShow = (()=>{
    	$(".filter-show-toggler").click(function  () {
    		$(".filter").addClass('filter-show')
    	})

    	$(".top-filter-close").click(function  () {
    		$(".filter").removeClass('filter-show')
    	})
    })()

    let headerearch = (()=>{
    	$(".header-search-icon").click(function  () {
    		$(".header-search-form").toggleClass('active');
    		$(".search-input").focus()
    	})

    	$(".search-input-close").click(function  () {
    		$(".header-search-form").removeClass('active');
    	})

    	$(".header-search-form").submit(function (e) {
    		e.preventDefault();
    		window.location = "catalog-item.html"
    	})

    })()

    let CategorySortPrice = (()=>{
    	$(".sort-price__select").click(function() {
    		$(this).toggleClass('sort-price__select--price-up')
    	})
    })()

    // order header elements on tablet screen

    let headerElems = ()=>{
    	if(window.innerWidth<1280){
    		let searchBox = $(".header-search-icon")
    		let login = $(".header-nav__item--login")
    		let searchForm = $(".header-search-form")

    		searchBox.appendTo($(".header-nav__user"))
    		searchForm.appendTo($(".header-top"))
    		login.prependTo($(".header-nav__user"))
    	}
    	// else{
    	// 	location.reload();
    	// }
    }

    headerElems()

    $(window).resize(function() {
    	headerElems()
    })

    // handle hamburger click 

    let hamburgerClick = (()=>{
    	$(".header-hamburger").click(function() {
    		$(this).find(".hamburger").toggleClass("is-active")
    		$(".main-nav").toggleClass("main-nav--open")
    	})
    })()

    let compareSlider = (()=>{
	   	$(".js-compare-slider").slick({
	   		slidesToShow: 4,
	   		arrows: true,
	   		prevArrow: ".compare-slider__controls--prev",
	   		nextArrow: ".compare-slider__controls--next",
	   		responsive: [
		    {
		    	breakpoint: 1280,
		    	settings: {
		    		slidesToShow: 3
		    	}
		    },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1
                    }
                }
		    ]
	    })
   })()

   	let stickyCompareTitle = ()=>{

	   	let titlePosY = $(".compare-item__title").offset().top

	   	function countCompareCoords() {

	   		let stickyBlock = $('.sticky-compare')
	   		stickyBlock.empty()

	   		$('.slick-active .compare-item__title').each(function() {
				let stickyTitle = $(this).clone();
				let elementX = $(this).offset().left
				let elementWidth = $(this).width()
				stickyTitle.appendTo(stickyBlock)
				stickyTitle.css({'left':elementX,'width':elementWidth})
			})
	   	}
		   	

	   	function stickyCompare () {
	   		if($(window).scrollTop()>titlePosY){
	   			$('.sticky-compare').addClass('is-sticky')
	   		}
	   		else{
	   			$('.sticky-compare').removeClass('is-sticky')
	   		}

	   	}


	   	stickyCompare()
	   	countCompareCoords() 

	   	$(window).resize(countCompareCoords)
	   	$(window).scroll(stickyCompare)
	   	
   }

   if ($("body").hasClass("compare-page")) {
   		stickyCompareTitle()
   }

   let handleBasket = (()=>{
	   	if($("body").hasClass("basket-page")){

	   		totalPrice ()

	   		function countTotalProduct (parentRow,number) {
	   			let totalField = parentRow.find('.basket-total__price');
	   			let productPrice = parentRow.find(".basket__price-value").text()
	   			let productTotalPrice = productPrice*number;
	   			totalField.text(productTotalPrice)	
	   		}

	   		function totalPrice () {
	   			let totalPriceField = $(".basket-total__number")
	   			let allProductsPrice = $(".basket-total__price")
	   			let productArr = [...allProductsPrice]
	   			let totalPrice = productArr.reduce(function(sum,product) {
	   				return sum + parseFloat(product.textContent)
	   			},0)
	   			totalPriceField.text(totalPrice)
	   			$(".basket-order-total__number").text(totalPrice)
	   		}



	   		// decreasing number of items
	   		$(".basket-count__minus").click(function () {
	   			let parentRow = $(this).closest("tr");
	   			let input = parentRow.find(".count__current-calc");
	   			let value = input.val();
	   			value--;
	   			if(value<1){value=1}
	   			input.val(value)
	   			countTotalProduct(parentRow,value)
	   			totalPrice()
	   		})
	   		// increasing number of items
	   		$(".basket-count__plus").click(function () {
	   			let parentRow = $(this).closest("tr");
	   			let input = parentRow.find(".count__current-calc");
	   			let value = input.val();
	   			value++;
	   			input.val(value)
	   			countTotalProduct(parentRow,value)
	   			totalPrice()
	   		})

	   		// delete item
	   		$(".basket-table__remove").click(function() {
	   			$(this).closest('tr').remove()
	   			totalPrice()
	   		})
	   		
	   	}
   })()

    let uiSliders = ()=>{
    	let slider = document.getElementById('slider');
    	let input0 = document.getElementById('input-with-keypress-0');
		let input1 = document.getElementById('input-with-keypress-1');
		let inputs = [input0, input1];

		noUiSlider.create(slider, {
		    start: [410, 1500],
		    connect: true,
		    range: {
		        'min': 410,
		        'max': 1500
		    },
		    format: wNumb({decimals: 0})
		});

		slider.noUiSlider.on('update', function (values, handle) {
		    inputs[handle].value = values[handle];
		});
    }

    if (document.getElementById('slider')) {
    	uiSliders()
    }

    let BrandsFilter = (()=>{
    	$(".filter-item__title--toggle").click(function() {
    		$(this).closest('.filter__item').find('.filter-item__content--toggle').slideToggle()
    	})

    	$(".filter-search__input").keyup(function  () {
    		value = $(this).val();
    		$(".filter-brands__item").each(function() {
    			if($(this).data('name').toLowerCase().indexOf(value.toLowerCase())!=-1){
    				$(this).show()
    			}
    			else{
    				$(this).hide()
    			}
    		})

    	})
    })()

    let stickyFilterNav = ()=>{
    	let navpos    = $('.filter-settings').offset().top,
    		winPos,
    		navHeight = $('.filter-settings').outerHeight(true);
    	$(window).scroll(function  () {
    		winPos = $(window).scrollTop();
    		if (winPos>=navpos) {
    			$('.filter-settings').addClass('sticky')
    			$('.catalog-result').css('paddingTop',navHeight)
    		}
    		else{
    			$('.filter-settings').removeClass('sticky');
    			$('.catalog-result').css('paddingTop', 0)
    		}

    	})
    }

    if ($('body').hasClass('catalog-item')) {
    	stickyFilterNav()
    }

    let paginationItem = (()=>{
    	$(".pagination-item").click(function (e) {
    		e.preventDefault()
    		if($(this).hasClass("pagination-item--prev")||$(this).hasClass("pagination-item--next")) return
    			else{
    		$(this).addClass("pagination-item--current").siblings().removeClass("pagination-item--current")
    		}
    	})
    })()

    // the way we display category page

    let catalogDisplayType = (()=>{
    	$(".sort-view__item").click(function(e) {
    		e.preventDefault()
    		$(this).addClass("active").siblings().removeClass("active");
    		let displayType= $(this).data("display")
    		if(displayType=="columns") {
    			$(".catalog-result").removeClass('rows')
    		} 
    		else{
    			$(".catalog-result").addClass('rows')
    		}

    	})
    	
    })()

    let productQuickPreview = (()=>{
    	$(".product-prev__fast").click(function () {
    		let parentProduct = $(this).closest(".product-prev");
    		let product = {}
    		product.img= $(parentProduct).find(".product-prev__img").attr("src");
    		product.title= $(parentProduct).find(".product-prev__title").text();
    		product.article= $(parentProduct).find(".product-prev-info__article").text();
    		product.brand= $(parentProduct).find(".product-prev-info__brand").text();
    		product.price= $(parentProduct).find(".product-prev-price").text();
    		product.price= $(parentProduct).find(".product-prev-price").text();
    		
    		let popup = $(".product-popup")

    		popup.find(".product-popup__img").attr("src",product.img)
    		popup.find(".section-title").text(product.title)
    		popup.find(".product-prev-info__article").text(product.article)
    		popup.find(".product-prev-info__brand").text(product.brand)
    		popup.find(".section-title").text(product.title)
    		popup.find(".product-prev-price").text(product.price)
    		
    	})
    })()

    let productPopup = (()=>{
    	$('.open-popup-link').magnificPopup({
		  type:'inline',
		  midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
		});
	})()

	let backToTop = (()=>{

		let $btnTop = $('.btn-top');
		$(window).on('scroll',function () {
			if ($(window).scrollTop()>=20) {
				$btnTop.fadeIn();
			}
			else{
				$btnTop.fadeOut();
			}
		})
		$btnTop.on('click',function () {
			$('html,body').animate({scrollTop:0},900)
		})
	})()


	
});

