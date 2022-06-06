// gère l'affichage de la bare de recherche du menu
$(document).ready(function() {
    var icon = $('#nav-search-icon');
    var list = $("#nav-list");
    var search = $("#nav-search");
    var input = $("#nav-search input");

    // hide menu items and display search when icon clicked
    icon.click(function () {
        list.css("display", "none");
        search.css("display", "block");
        input.focus();
    });

    // hide search and display menu items when focus is out
    input.focusout(function () {
        console.log("focus out");
        list.css("display", "flex");
        search.css("display", "none");
    });

});
