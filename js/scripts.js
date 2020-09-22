$(document).ready(() => {
    /**
     * SLICK
     */
    $('.near__slider').slick({
        infinite: true,
        arrows: true,
        dots: false,
        prevArrow: '<button type="button" class="slick-prev"><svg style="display: block" viewBox="0 0 10.6 18" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <desc>Left</desc> <polyline fill="none" stroke="#ffffff" stroke-linejoin="butt" stroke-linecap="butt" stroke-width="2" points="1,1 9,9 1,17"></polyline> </svg></button>',
        nextArrow: '<button type="button" class="slick-next"><svg style="display: block" viewBox="0 0 10.6 18" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <desc>Right</desc> <polyline fill="none" stroke="#ffffff" stroke-linejoin="butt" stroke-linecap="butt" stroke-width="2" points="1,1 9,9 1,17"></polyline> </svg></button>',
        slidesToShow: 4,
        autoplay: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    arrows: false
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 3,
                    arrows: false
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    arrows: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    arrows: false
                }
            }
        ]
    });

    /**
     * SLICK 22.09.2020
     */
    $('.promotions__items').slick({
        infinite: true,
        arrows: true,
        dots: false,
        prevArrow: '<button type="button" class="slick-prev"><svg style="display: block" viewBox="0 0 10.6 18" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <desc>Left</desc> <polyline fill="none" stroke="#ffffff" stroke-linejoin="butt" stroke-linecap="butt" stroke-width="2" points="1,1 9,9 1,17"></polyline> </svg></button>',
        nextArrow: '<button type="button" class="slick-next"><svg style="display: block" viewBox="0 0 10.6 18" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <desc>Right</desc> <polyline fill="none" stroke="#ffffff" stroke-linejoin="butt" stroke-linecap="butt" stroke-width="2" points="1,1 9,9 1,17"></polyline> </svg></button>',
        slidesToShow: 2,
        autoplay: false,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    arrows: false
                }
            }
        ]
    });

    /**
     * ANCHOR
     */
    $('.anchorLink').on('click', (e) => {
        e.preventDefault();
        let id = $(e.target).attr('href');
        let top = $(id).offset().top - $('.header_fixed').height() - 20;
        $('body, html').animate({scrollTop: top}, 1500);
    });

    /**
     * PHONE MASK
     */
    let phoneMask = $('#phone');
    if (phoneMask.length) {
        phoneMask.mask("+7 (999) 999-99-99");
    }

    let phoneMask_modal = $('#phone_modal');
    if (phoneMask_modal.length) {
        phoneMask_modal.mask("+7 (999) 999-99-99");
    }

    /**
     * SHOW/HIDE BLOCKS
     */
    showHeader();

    let callBlock = $('.call__animate');
    let callContainer = $('.s_call');
    let callContainerPos = callContainer.offset().top + callContainer.height();
    let callRed = $('.call__btns .btn_red');
    let callBlue = $('.call__btns .btn_blue');
    document.addEventListener('scroll', () => {
        showHeader();

        if (!callBlock.hasClass('visible') && (pageYOffset + $(window).height()) >= callContainerPos) {
            callBlock.addClass('visible');
            callRed.addClass('visible');
            callBlue.addClass('visible');
        }
    });


    if ((pageYOffset + $(window).height()) >= callContainerPos) {
        callBlock.addClass('visible');
        callRed.addClass('visible');
        callBlue.addClass('visible');
    }

    /**
     * MODAL
     */
    $('.services__item a').on('click', (e) => {
        let parent = $(e.target).parents('.services__item');
        let modal = $('#modalServices');

        modal.find('.modalTitleImage').attr('src', parent.data('img'));
        modal.find('.modal-success__title').text(parent.data('title'));
        modal.find('.services__item__content__price_new').text(parent.data('price'));
        modal.find('.services__item__content__price_old').text(parent.data('old-price'));
    });

    $('[data-fancybox-modal]').fancybox({
        trapFocus: true,
        autoFocus: false,
        touch: false,
        beforeShow: function () {
            $('html').addClass('fancybox-scroll-disable');
        },
        afterClose: function () {
            $('html').removeClass('fancybox-scroll-disable');
        }
    });
});

let showHeader = () => {
    let header = $('.header_fixed');
    if (pageYOffset > 120 && !header.hasClass('visible')) {
        header.addClass('visible');
    } else if (pageYOffset < 120 && header.hasClass('visible')) {
        header.removeClass('visible');
    }
}
