$('.navbar-nav>li>a').on('click', function () {
    $('.navbar-collapse').collapse('hide');
});

$(window).on('load', function () {
    $('#exampleModal').modal('show');
});

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
});
