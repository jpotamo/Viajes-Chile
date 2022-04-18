$(document).ready(function() {

    //barra de navegacion solida
    $(window).scroll(function() {
        var height = $('header').height();
        var scrollTop = $(window).scrollTop();        

        if (scrollTop >= height - 40) {            
            $('.navbar').addClass('bg-info');
        } else {
            $('.navbar').removeClass('bg-info');
        }
    });

    //smooth scroll
    $(".nav-link").on('click', function(event) {
        if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
        scrollTop: $(hash).offset().top
        }, 800, function(){
        window.location.hash = hash;
        });
        }
    });

});

/*tooltips*/
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
return new bootstrap.Tooltip(tooltipTriggerEl)
});

    
    
    