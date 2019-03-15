$(document).ready(function () {
    svg4everybody({});

    let openSearchForm = (()=>{

    	$(document).on('click','.header-search__icon',()=>{
    		// console.log($(this))
    		$('.header-search').addClass("open-form")
    	})
    })()

    let closeSearchForm = (()=>{
    	$(document).on('click', '.close-form__wrapper',()=>{
    		$('.header-search').removeClass("open-form")
    	})
    })()

    let openSearchFormResults = (()=>{

    	$(document).on('submit','.search-form',(e)=>{
    		e.preventDefault()
    		document.location.href = 'search.html'
    	})
    })()

    let mobileMenu = (()=>{
    	$('.mobile-menu__toggle').click(function () {
    		if($(window).width()<768){
    			$(".mobile-menu__content").toggleClass('mobile-menu--open');
    		}
    		else{
    			$(".mobile-menu__content").slideToggle();
    		}
    	})
    })()

    let mobileMenuClose = (()=>{
    	$('.mobile-menu__close').click(function () {
    		if($(window).width()<768){
    			$(".mobile-menu__content").toggleClass('mobile-menu--open');
    		}
    		else{
    		$(".mobile-menu__content").slideToggle();
    		}
    	})
    })()

    let mobileSearchToggle = (()=>{
    	$('.mobile-user-nav__item--search').click(function () {
    		$(".mobile-header__search").slideToggle();
    	})
    })()

    let subMobileMenu = (()=>{
    	$('.catalog-nav__item').click(function (e) {
    		e.preventDefault();
    		$(this).find('.catalog-icon').toggleClass('rotate');
    		$(this).find('.catalog-nav__list--sub').slideToggle();
    	})
    })()

    let bannerSlider = (()=>{
    	$('.js-banner').slick({
    		prevArrow: ".banner__nav--prev",
    		nextArrow: ".banner__nav--next",
    		dots: true,
    		customPaging: function() {
    			return '<div class="banner__dot"></div>'},
			appendDots: '.banner-dots'

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
    		let activeProductLineSlider = $('.tab').eq(tabIndex).find('.js-products-line-slider')
    		activeProductLineSlider.slick('refresh')
    		let activeProductPrevSlider = $('.tab').eq(tabIndex).find('.js-product-prev__slider')
    		activeProductPrevSlider.slick('refresh')
    	})
    })()

    let productTabs = (()=>{
    	$(".tabs-nav__item").click(function () {
    		let tabIndex = $(this).index()
    		let parentSection = $(this).closest('.product__header')
    		$(this).siblings().removeClass('tabs-nav__active')
    		$(this).addClass('tabs-nav__active')
    		parentSection.find('.tab').removeClass('tab-active')
    		parentSection.find('.tab').eq(tabIndex).addClass('tab-active')
    		let activeProductDotsSlider = $('.tab').eq(tabIndex).find('.js-products-slider-dots')
    		activeProductDotsSlider.slick('refresh')
    		let activeProductSlider = $('.tab').eq(tabIndex).find('.js-products-slider')
    		activeProductSlider.slick('refresh')
    	})
    })()

    let productPrevSlider = (()=>{
    	$(".js-product-prev__slider").each(function (index) {
    		let parent = $(this).closest(".product-prev");
    		let productPrevClass = 'product-prev-slider-'+index
    		parent.addClass(productPrevClass)
	    	$(this).slick({
	    		arrows: false,
	    		swipe: false,
	    		dots: true,
	    		appendDots: '.' + productPrevClass + ' .product-prev__colors',
	    		customPaging: function (slider,i) {
	    			let color = $(slider.$slides[i]).find('.product-prev__img').data('color');
	    			return '<div class="product-prev__color" style="background-color:' + color + '"></div>'
	    		},
	    	})
    	})
    })()

    let productLineSlider= (()=>{
    	$(".js-products-line-slider").each(function (index) {
    		let parent = $(this).closest('.products-line-slider');
    		let parentClass = 'products-line-slider'+index
    		parent.addClass(parentClass)
    		$(this).slick({
    			slidesToShow: 4,
    			infinite:false,
    			dots: true,
    			appendDots: '.' + parentClass +' .products-line-slider__dots',
    			customPaging: function (slider, i) {
    				return '<div class="products-line-slider__dot"></div>'
    				},
				prevArrow: '.' + parentClass +' .products-line-slider__btn--prev',
				nextArrow: '.' + parentClass +' .products-line-slider__btn--next',
				responsive: [
                    {
                        breakpoint: 1239,
                        settings: {
                            slidesToShow: 3
                        }
                    }, {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 2
                        }
                    }, {
                        breakpoint: 550,
                        settings: {
                            slidesToShow: 1
                        }
                    }
                ]
    		})
    	})
    })()

    let categorySlider= (()=>{
    	$(".js-category-slider").slick({
    			slidesToShow: 6,
    			infinite:false,
    			arrows: false,
    			dots: true,
    			appendDots: '.category-slider__dots',
    			customPaging: function (slider, i) {
    				return '<div class="category-slider__dot"></div>'
    				},
				responsive: [
                    {
                        breakpoint: 1140,
                        settings: {
                            slidesToShow: 4
                        }
                    }, {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 2
                        }
                    }
                ]
    		})
    	})()


    let preloader = (()=>{
    	$(window).load(function () {
    		$('.preloader').fadeOut(1000)
    		// $('.lds-default').delay(400).fadeOut(1000)
    	})
    })()

    let headerSubNav = (()=>{
    	$('.header-nav__tablet-icon').click(function () {
    		$('.header-subnav').toggleClass('header-subnav--open')
    	})
    })()

    let selesct = (()=>{
    	$('.select__header').click(function () {
    		$(this).parent().toggleClass('select--open')
    	})
    	$(document).on('click','.select-list__item',function () {
    		let select = $(this).closest('.select');
    		select.removeClass('select--open')
    		$(select).find(".select__current").text($(this).text())
    	})
    })()

    let asideOpen = (()=>{
    		$('.filter-mobile__toggle').click(function () {
    			$(".category__filter").addClass('aside-open')
    		})
    		$('.filter-mobile__close').click(function () {
    			$(".category__filter").removeClass('aside-open')
    		})
    	})()

  	let productSlider = (()=>{
  		$('.js-products-slider-dots').slick({
  			asNavFor: '.js-products-slider',
  			slidesToShow: 3,
  			slidesToScroll: 1,
  			vertical: true,
  			focusOnSelect: true,
  			prevArrow: '.products-slider-dots__btn--prev',
  			nextArrow: '.products-slider-dots__btn--next',
  			infinite: false,
  			responsive: [
  				{
  					breakpoint: 768,
  					settings: 'unslick'
  				}
  			]
  		})

  		$(".js-products-slider").slick({
  			asNavFor: '.js-products-slider-dots',
  			slidesToShow: 1,
  			slidesToScroll: 1,
  			centerMode: true,
  			arrows: false,
  			infinite: false
  		})
  	})()

  	let popupLink = (()=>{
  		$(".popup-with-form").magnificPopup()
  	})()

});