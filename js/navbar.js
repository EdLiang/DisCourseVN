let handleResize = function() {

    "use strict";

    var mobile = (/iphone|ipod|android|blackberry|mini|windows\sce|palm/i.test(navigator.userAgent.toLowerCase()));          
    let aspectRatio = window.innerWidth / window.innerHeight;

    if (mobile || aspectRatio > 2.0 || aspectRatio < 1.2)
    {
        $('#navContainer').css('display', 'none');
    }
    else
    {
        $('#navContainer').css('display', 'block');
    }
}

$(document).ready(function () {
    "use strict";

    let navbar = "";
    $.get('../navbar.html', function(data) {
        navbar = data;

        document.getElementById("navbar").innerHTML = navbar;

        let filename = document.location.pathname.match(/[^\/]+$/);
        
        if (filename === null) filename = "index.html";
        else filename = filename[0];

        let navHeaderId = "nav_" + filename;
        //document.getElementById(navHeaderId).classList.add("SelectedLink")

        // check for the first time if the navbar needs to be hidden
        handleResize();

    }, 'text');

    $(window).resize(handleResize);

});

