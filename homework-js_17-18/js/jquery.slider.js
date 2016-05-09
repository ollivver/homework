// jQuery slider plugin 
(function($) {

		var defaults = {
    	pixelsOffset: 200,
    	speed: 300	
    };	

    $.fn.slideImage = function(options) {

    var settings =$.extend(defaults, options);	
    
    var $elementsList = $(this);
    var $prev = $('.prev');
    var $next = $('.next');
    var currentLeftValue = 0;
    var elementsCount = $elementsList.find('li').length;
    var minimumOffset = - ((elementsCount - 1) * settings.pixelsOffset);
    var maximumOffset = 0;	

    $prev.on('click', (function() {    
    		    
        if (currentLeftValue != maximumOffset) {
            currentLeftValue += settings.pixelsOffset;
            $elementsList.animate({ left : currentLeftValue + "px"}, settings.speed);
        };

        if (currentLeftValue == maximumOffset) {
          currentLeftValue = (minimumOffset - settings.pixelsOffset);
        };                
    }));

    $next.on('click', (function() { 
    		       
        if (currentLeftValue != minimumOffset) {
            currentLeftValue -= settings.pixelsOffset;
            $elementsList.animate({ left : currentLeftValue + "px"}, settings.speed);
        };
       
        if (currentLeftValue == minimumOffset) {
          currentLeftValue = settings.pixelsOffset;
        };        
    }));

    return this;
  };

})(jQuery);

