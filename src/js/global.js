$(document).ready(function() {

    $('.slider-text').slick({

        arrows: true,

        dots: true,

        fade: true,

        infinite: true,

        mobileFirst: true,

        asNavFor: '.slider-img',

    });



    $('.slider-img').slick({

        arrows: false,

        mobileFirst: true,

        dots: false,

        infinite: true,

        asNavFor: '.slider-text'

    });

    $('.slider-full').slick({

        arrows: true,

        dots: true,

        fade: true,

        infinite: true,

        mobileFirst: true

    });
    $('.main-slider-second').slick({
        arrows: false,
        dots: false,
        swipe: false
    });
    $('.slider-text-container').slick({

        arrows: true,

        dots: true,

        fade: true,

        infinite: true,

        mobileFirst: true,

        asNavFor: '.main-slider-second'

    });
    $('.slider-text-container').on('afterChange', function(event, slick, currentSlide, nextSlide) {
        if ($('.slider-text-container .slider-text__item.slick-active').hasClass('lighter')) {
            $('.slider-text-container').addClass('lighter-container');
        } else {
            $('.slider-text-container').removeClass('lighter-container');
        }
    });
    $('.has-children > a').on('click', function() {

        $(this).toggleClass('active-js');

    });

    $('.current-choice').on('click', function() {
        $('.current-choice').addClass('other_choices');
        $(this).removeClass('other_choices');
        $('.current-choice.other_choices').removeClass('open-js');
        $(this).toggleClass('open-js');
    });

    $('.modal-switcher__item').on('click', function() {

        $(this).parent().find('.modal-switcher__item').removeClass('modal-switcher__item--active');

        $(this).addClass('modal-switcher__item--active');


        // ++ добавлено
        var form = $(this).parents('form.pers_form');
        var item_id = $(this).attr('item_id');
        $(this).parents('.modal-switcher').find('input[type=radio]').prop('checked', false);
        $(this).parents('.modal-switcher').find('.switch_input[value="' + item_id + '"]').prop('checked', true);
        pers_price_update(form);
        // -- добавлено


    });

    $('.search-icon').on('click', function() {

        $('nav').addClass('nav-js');

        $(this).parent().addClass('search-js');

    });

    $('.search-arrow').on('click', function() {

        $('nav').removeClass('nav-js');

        $(this).parent().removeClass('search-js');

    });

    $('.responsive-menu').on('click', function() {

        $(this).next().slideToggle();

    });


    $('.modal-content-sub-menu__item').on('click', function() {
        $(this).parent().prev().removeClass('open-js');
    });


    // ++ добавлено
    $('.modal-content-sub-menu__item span.no-real-input').on('click', function() {
        var span_parent = $(this).parents('.modal-content-sub-menu__item');
        $(span_parent).find('input.pers_input').prop('checked', true);
        $(span_parent).parents('.select_div').find('span.current-choice').html($(span_parent).find('p').html());
        pers_price_update($(span_parent).parents('.pers_form'));
    });
    // -- добавлено

    $('.mobile-header__menu').on('click', function() {

        $('.mobile-menu').slideToggle();

    });

});

//additional js

//touch
$(document).ready(function() {
    if (Modernizr.touchevents) {
        $('.has-children').addClass('touch-js');
    } else {
        $('.has-children').addClass('notouch-js');
        $('.modal-title>i').addClass('notouch');
        $('.product-grid-left__item').addClass('zoom-img');
    }
    // var $easyzoom = $('.zoom-img').easyZoom();
    $('.touch-js').on('click', function() {
        $(this).toggleClass('touch-js--active');
        $(this).children().next().toggleClass('sub-menu--active');
    });
    $('.notouch').on('click', function() {
        $(this).toggleClass('notouch-click');
    });
    $(window).on('load', function() {
        $('#carousel').flexslider({
            animation: "slide",
            controlNav: false,
            animationLoop: false,
            slideshow: false,
            itemWidth: 110,
            itemMargin: 5,
            asNavFor: '#slider'
        });
        $('#slider').flexslider({
            animation: "fade",
            controlNav: false,
            slideshow: false
        });
        $(".zoom").elevateZoom({
            cursor: 'pointer',
            imageCrossfade: true,
            zoomWindowWidth: 635,
            zoomWindowHeight: 550,
            responsive: true
        });
    });
    // $('.product-grid-left-thumbs__item > li').on('click', function() {
    //     var currentPosition = $('.product-grid-left-thumbs__item > li').index($(this));
    //     var currentSlider = $('#slider').data('flexslider');
    //     currentSlider.flexslider(currentPosition);
    // });
});

$(function() {
    reviewSliderInit();
    toggleReviewText();
    autocomplete();
});

function reviewSliderInit() {
    $(".review-content__slider").slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
}

function toggleReviewText() {
    $(".review-content__toggle-text").each(function() {
        $(this).click(function (e) {
            e.preventDefault();
            var container = $(this).parent().parent();
            $(container).toggleClass("collapsed");
            if ($(container).hasClass("collapsed")) {
                $(this).text("Cвернуть текст");
            } else {
                $(this).text("Полный текст");
            }

        })
    })
}

function autocomplete() {
  var options = {
    data: ["blue", "green", "pink", "red", "yellow", "blue", "green", "pink", "red", "yellow"],
    list: {
      match: {
        enabled: true
      }
    }
  };

  $("#autocomplete").easyAutocomplete(options);
}
