$(document).ready( function() {
    "use strict";

    let navbar = "";
    $.get('../navbar.html', function(data) {
        navbar = data;

        document.getElementById("navbar").innerHTML = navbar;

        let filename = document.location.pathname.match(/[^\/]+$/)[0];
        let navHeaderId = "nav_" + filename;

        document.getElementById(navHeaderId).classList.add("SelectedLink")

    }, 'text');
 
});