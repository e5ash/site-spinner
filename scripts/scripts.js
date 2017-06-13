$(document).ready(function($) {
	$('.slider__list').slick({
		slidesToShow: 2,
		prevArrow: '<button type="button" class="slick-prev slick-arrow"><i class="icon icon-arrow-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next slick-arrow"><i class="icon icon-arrow-right"></i></button>',
        responsive: [{
            breakpoint: 550,
            settings: {
                slidesToShow: 1,
            }
        }]
	})
	$('.news__list').slick({
		dots: true,
		arrows: false,
        responsive: [{
          breakpoint: 1150,
          settings: {
            slidesToShow: 2,
            infinite: true
          }

        }, {

          breakpoint: 550,
          settings: {
            slidesToShow: 1,
          }

        }]
	})
    $('.product__slider').slick({
        dots: true,
        arrows: false
    })

   $('.video__list').slick({
        variableWidth: 130,
        slidesToScroll: 1,
        slidesToShow: 3,
        infinite: false,
        asNavFor: '.video__item',
        focusOnSelect: true

   });
	function selectProduct() {
		if ($('.product__features select').val() == "c0") {
			$('.product__features tbody td:nth-of-type(4)').hide();
			$('.product__features tbody td:nth-of-type(5)').show();
		}
		else if($('.product__features select').val() == "c1"){
			$('.product__features tbody td:nth-of-type(4)').show();
			$('.product__features tbody td:nth-of-type(5)').hide();
		}
	}
	$('.product__features select').change(function() {
		selectProduct()
	});
	selectProduct()















	var tabs = $('.tabs');
    tabs.each(function() {
        var parent = $(this);
        tabsNav = $(this).find('.tabs__nav'),
            tabsNavItem = $(this).find('.tabs__nav-item');
        tabsNavItem.each(function() {
            var attr = $(this).attr('data-tab');
            if ($(this).hasClass('tabs__nav-item_select')) {
                var tab = parent.find('#' + attr);
                tab.show();
            }
            attr = tab = null;
        });
        parent = tabsNav = tabsNavItem = null;
    });

    function tabsActive() {
        $('.tabs__nav-item').click(function() {
            var parent = $(this).parents('.tabs'),
                attr = $(this).attr('data-tab'),
                tabs = parent.find('.tabs__tab'),
                navItem = parent.find('.tabs__nav-item');
            navItem.each(function() {
                $(this).removeClass('tabs__nav-item_select');
            });
            if ($(this).hasClass('tabs__nav-item_select') == false) {
                $(this).addClass('tabs__nav-item_select');
                tabs.each(function() {
                    // tabs.html(1);
                    $(this).hide();
                    // $(this).html(1);
                });

                var tab = parent.find('#' + attr);
                tab.show();

            }
            parent = attr = tab = tabs = navItem = null;
        });
    }
    tabsActive();
    tabs = null;

    var mobileBtn = $('.mobile-btn'),
        mobileNav = $('.nav > ul');

    mobileBtn.click(function() {
        mobileNav.slideToggle(300);
        mobileBtn.toggleClass('mobile-btn_close');
    });

    $(window).on('load', function() {
        var windowWidth = $(window).width();
        if (windowWidth >= 550) {
           $('.video__item').slick({
                arrows: false
           });
        }

    });
    $(window).on('load resize', function() {
        var windowWidth = $(window).width();
        if (windowWidth > 1150) {
            mobileNav.removeAttr('style')
        }
    });
});
