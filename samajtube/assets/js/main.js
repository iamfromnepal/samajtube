jQuery(document).ready(function ($) {
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
    }

    stickyHeader();

    setTimeout(stickyHeader, 1000);
});