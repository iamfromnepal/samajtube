jQuery(document).ready(function ($) {

    // Background Imgage
    $('.bg-cover,[data-fix="image"]').each(function () {
        var wrap = $(this),
            image = wrap.find('>img');
        if (image.attr('src')) {
            if (wrap.data('fix') != 'image') {
                image.hide();
                wrap.css({
                    'background-image': 'url(\'' + image.attr('src') + '\')'
                });
            } else {
                wrap.find('.svg.img-fluid').css({
                    'background-image': 'url(\'' + image.attr('src') + '\')'
                });
            }
        }
    });

    $(document).on('click', function () {
        $('#toggleForm, .user__lists').removeClass('show');
    });

    function stopeProp(eml) {
        $(eml).on('click', function (e) {
            e.stopPropagation();
        });
    }

    stopeProp('#toggleForm');
    stopeProp('.user__lists');

    $('.searchFromToggle').on('click', function (e) {
        e.stopPropagation();
        console.log('clicked');
        $('#toggleForm').toggleClass('show');
    });


    $('.user__btn').on('click', function (e) {
        e.stopPropagation();
        console.log('clicked');
        $('.user__lists').toggleClass('show');
    });

    $('.toggleDarkMode').on('click', function () {
        $('.toggleDarkMode').toggleClass('dark');
        $('body').toggleClass('darkMode');
    });

    $('.toggleSidebar').on('click', function () {
        $('.withSidebar .sidebar').toggleClass('show');
    });

    function stickyHeader() {
        var header = $('.site-header');
        var headerHeight = header.innerHeight();
        var ptElm = $('.withSidebar .widget-wrapper, .main-content');
        ptElm.css('padding-top', headerHeight + 5);
        console.log(headerHeight);

        var winScroll = $(window).scrollTop();

        if (winScroll > headerHeight + 20) {
            header.addClass('stick');
        } else {
            header.removeClass('stick');
        }

        if (winScroll > headerHeight + 150) {
            header.addClass('stickIt');
        } else {
            header.removeClass('stickIt');
        }
    }

    stickyHeader();

    setTimeout(stickyHeader, 1000);
    
    $(window).on('resize', stickyHeader);
    $(window).on('scroll', stickyHeader);




    //Sliders
    // slider-col-1
    $('.slider-col-1').slick({
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
    });

    // slider-col-2
    $('.slider-col-2').slick({
        dots: true,
        arrows: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                adaptiveHeight: true,
            }
        }]
    });

    // slider-col-3
    $('.slider-col-3').slick({
        dots: true,
        arrows: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                adaptiveHeight: true,
            }
        }
        ]
    });

    // slider-col-4
    $('.slider-col-4').slick({
        dots: true,
        arrows: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 1,
                adaptiveHeight: true,
            }
        }
        ]
    });

    // slider-col-6
    $('.slider-col-6').slick({
        dots: true,
        arrows: true,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 6,
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        },
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
        ]
    });

    //Example
    //Adding Options
    var yourOption = [{
        breakpoint: 2000,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1
        }
    }];
    //Options Init
    $('.your-class').slick('slickSetOption', 'responsive', yourOption, true);
});