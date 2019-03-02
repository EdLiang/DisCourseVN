let handleResize = function() {

    "use strict";

    var mobile = (/iphone|ipod|android|blackberry|mini|windows\sce|palm/i.test(navigator.userAgent.toLowerCase()));          
    let aspectRatio = window.innerWidth / window.innerHeight;

    if (mobile || aspectRatio > 3.0 || aspectRatio < 1.2)
    {
        console.log(aspectRatio);
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
    var navHide = true;
    
    $.get('../navbar.html', function(data) {
        navbar = data;

        document.getElementById("navbar-inclusion").innerHTML = navbar;

        let filename = document.location.pathname.match(/[^\/]+$/);
        
        if (filename === null) filename = "index.html";
        else filename = filename[0];

        let navHeaderId = "nav_" + filename;
        //document.getElementById(navHeaderId).classList.add("SelectedLink")

        // check for the first time if the navbar needs to be hidden
        handleResize();

        // $('#navContainer').animate( {
        //     'top': 0,
        //     'left': -300
        // }, 200);

        // // add handlers here;
        // $('#header-img').on( 'mouseout', function() {
        //     if (!navHide)
        //     {
        //         $('#navContainer').animate( {
        //             'top': 0,
        //             'left': -300
        //         }, 300);
        //         navHide = true;
        //     }
        // });

        // $('#header-img').on( 'mouseenter', function() {
        //     $('#navContainer').animate( {
        //         'top': 0,
        //         'left': 0
        //     }, 300,  function() {
        //         navHide = false;
        //     });
            
        // });

    }, 'text');

    $(window).resize(handleResize);

});

