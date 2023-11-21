(function($) {

    // Caching
    var win = $(window),
        doc = $(document);


    win.load(function() {
        /* ---------------------------------------------- /*
         * WOW Animation When You Scroll
        /* ---------------------------------------------- */

        wow = new WOW({
        });
        wow.init();

    });


    doc.ready(function() {

        // fade out top area
        $(window).scroll(function() {
            $("#hello").css("opacity", 1 - $(window).scrollTop() / $('#hello').height());
        });


        // custom navigation scroll top
        $(window).scroll(function() {
            if ($(window).scrollTop() > 5) {
                $('.nav li a, .navbar-brand').addClass('animatednav');
            } else {
                $('.nav li a, .navbar-brand').removeClass('animatednav');
            }
        });


        // Mobile  Nav Fix
        $(".navbar-nav li a").click(function(event) {
            $(".navbar-collapse").collapse('hide');
        });


        // Smoothscroll
        $('a[href*="#"]:not([href="#"]):not([data-toggle])').click(function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });

    });

})(jQuery);
