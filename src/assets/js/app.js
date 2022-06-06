import $ from 'jquery';
import 'what-input';

// window.jQuery = $;
window.$ = $;
require('foundation-sites');

require('./nav.js');
require('./plans-media.js');

$(document).foundation();

// pages/plans-media.html
$(document).ready(function() {
    // const title = $('#nav-pm-title');
    //
    // // change nav title (ex: JANVIER 2022) in pages/plans-media.html
    // $('#nav-pm a').click(function (e) {
    //     console.log(e.target);
    // });
});
