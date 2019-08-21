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

//accordion

$(document).ready(function() {

    $('.accordion').on('click', '.accordion-control', function(e) {
        e.preventDefault();
        $('.accordion-panel').not(':animated').slideToggle();
    });
});

//tabs
$(document).ready(function(){

    $('.tab-link').click(function(){
        var tab_id = $(this).attr('data-tab');

        $('.tab-link').removeClass('current');
        $('.tab-content').removeClass('current');

        $(this).addClass('current');
        $("#"+tab_id).addClass('current');
    });

});

$(document).ready(function() {
    $(".js-add-bookmark").click(function() {
        $(this).toggleClass("chosen");
    });
});

$(document).ready(function() {

    $('.js-slider').on('initialized.owl.carousel changed.owl.carousel', function(e) {
        if (!e.namespace)  {
            return;
        }
        var carousel = e.relatedTarget;
        $('.slider-counter').text(carousel.relative(carousel.current()) + 1 + ' из ' + carousel.items().length);
    }).owlCarousel({
        items: 1,
        nav: false,
        dots: false,
        loop:true,
        margin:10
    });
});