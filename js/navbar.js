$(document).ready( function() {
    "use strict";

    let navbar = "";
    $.get('../navbar.html', function(data) {
        navbar = data;

        document.getElementById("navbar").innerHTML = navbar;

        let filename = document.location.pathname.match(/[^\/]+$/)[0];
        filename = "nav_" + filename;
        console.log(filename);

        

    }, 'text');
 
});