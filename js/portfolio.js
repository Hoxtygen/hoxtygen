$(document).ready(function()    {
    $("#menu-toggle, .close-menu").on('click', function () {
        $("#menu-toggle").toggleClass("active");
        $("body").toggleClass("body-push-left");
        $("#theMenu").toggleClass("open-menu");
    });
});
