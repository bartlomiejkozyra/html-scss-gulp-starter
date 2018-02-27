$(document).ready(function () {
    // object-fit fix
    var userAgent, ieReg, ie;
    userAgent = window.navigator.userAgent;
    ieReg = /msie|Trident.*rv[ :]*11\./gi;
    ie = ieReg.test(userAgent);

    if (ie) {
        $(".ie-fit").each(function () {
            var $container = $(this),
                imgUrl = $container.find("img").prop("src");
            if (imgUrl) {
                $container.css("backgroundImage", 'url(' + imgUrl + ')').addClass("custom-object-fit");
            }
        });
    }
    
    // slick slider
    $('.slick').slick();
    
});
