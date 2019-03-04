(function($) {

	"use strict";

	$(window).stellar({
    scrollProperty: 'scroll',
    responsive: true,
    horizontalScrolling: false,
    hideDistantElements: false,
    parallaxBackgrounds: true,
    parallaxElements: true,
	});
	
	// loader
	var loader = function() {
		setTimeout(function() { 
			if($('#loader').length > 0) {
				$('#loader').removeClass('show');
			}
		}, 1);
	};
	loader();

	// Scrollax
  $.Scrollax();

})(jQuery);

