// Code from W3 Schools: Smooth Scroll JS. 

$(document).ready(function() {
    $("a").on('click', function(event) {

        if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash;


            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {

                window.location.hash = hash;
            });
        }
    });
});

// Sticky header bar
$(document).ready(function() {

    var stick = $("header").offset().top;

    $(window).scroll(function() {
        var head = $("header");
        var scroll = $(window).scrollTop();
        if ($(window).width() > 900) {
            if (scroll >= stick) {
                head.addClass("sticky");
            } else {
                head.removeClass("sticky");
            }
        }
    });
});
