// gère la pagination pour les listes de plans média
$(document).ready(function() {
    // next & prev btn
    var prev = $("#nav-pm .nav-link.prev");
    var next = $("#nav-pm .nav-link.next");

    // nav title
    var title = $('#nav-pm-title');

    // active tab
    var currentTab = $("#nav-pm-content").find(".active");

    // prev click event
    prev.on('click', function (e) {
        e.preventDefault();
        moveTab("prev");
    });

    // next click event
    next.on('click', function (e) {
        e.preventDefault();
        moveTab("next");
    });

    function moveTab(direction) {
        currentTab = $("#nav-pm-content").find(".active");

        // next btn clicked
        if (direction == "next")
        {
            // if next tab exists
            if (currentTab.next().length)
            {
                // remove visibility on current tab and activate it for next one
                currentTab.removeClass('active show');
                currentTab.next().addClass('active show');

                // change id and href of prev & next btn
                next.attr("id", {
                    id   : currentTab.next().attr("id"),
                    href : currentTab.next().attr("id")
                });

                prev.attr("href", {
                    id   : currentTab.attr("id"),
                    href : currentTab.attr("id")
                });

                // change nav title
                title.html(currentTab.next().attr("data-title"));
            }
            // else disable next btn
            else {}
        }
        // prev btn clicked
        else {
            // if prev tab exists
            if (currentTab.prev().length)
            {
                // remove visibility on current tab and activate it for prev one
                currentTab.removeClass('active show');
                currentTab.prev().addClass('active show');

                // change id and href of prev & next btn
                next.attr("id", {
                    id   : currentTab.attr("id"),
                    href : currentTab.attr("id")
                });

                prev.attr("href", {
                    id   : currentTab.prev().attr("id"),
                    href : currentTab.prev().attr("id")
                });

                // change nav title
                title.html(currentTab.prev().attr("data-title"));
            }
            // else disable prev btn
            else {}
        }
    }
});
