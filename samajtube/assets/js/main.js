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
});