$(document).ready( function() {
    "use strict";

    let navbar = "";
    $.get('navbar.html', function(data) {
        navbar = data;
        console.log(navbar);
        document.getElementById("navbar").innerHTML = navbar;

    }, 'text');
 
});