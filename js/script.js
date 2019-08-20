$(document).ready(function() {
    $(".js-droptrigger").click(function(e) {
        $(".js-dropcontent").toggleClass("open", 1000);
        e.stopPropagation();
    });

    //Close menu on click outside of the menu
    $(document).click(function() {
        $(".js-dropcontent").removeClass("open", 1000);
    });

});