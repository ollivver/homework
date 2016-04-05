$(function(){
	$('.tabs .tab__links a').on('click', function() {
		var currentTab = $(this).attr('href');

		//hide or show the tab
		$('.tabs ' + currentTab).slideDown(500).siblings().slideUp(500);
		//$('.tabs ' + currentTab).show().siblings().hide();

		//make the current tab active
		$(this).parent('li').addClass('active').siblings().removeClass('active');
		return false;
	});
});

/*
$(document).ready(function() {
// text for tooltip
		$('.tooltip__item').hover(function(){
	        // mouse hover over event
	        var title = $(this).attr('title');
	        $(this).data('tipText', title).removeAttr('title');
	        $('<p class="tooltip"></p>')
	        .text(title).appendTo('body').fadeIn('slow');
		}, function() {
	        // mouse hover out event
	        $(this).attr('title', $(this).data('tipText'));
	        $('.tooltip').remove();
		}).mousemove(function(e) { //tooltip follow mouse
	        var mouseX = e.pageX + 20; //Get X coordinates
	        var mouseY = e.pageY - 15; //Get Y coordinates
	        $('.tooltip')
	        .css({ top: mouseY, left: mouseX })
		});
}); */

$(document).ready(function() {
// text for tooltip and calculation of the tooltips location
	$('.tooltip__item').hover(function(){
	    // mouse hover over event
	    var title = $(this).attr('title');
	    $(this).data('tipText', title).removeAttr('title');
	    $('<p class="tooltip"></p>').text(title).appendTo('body').fadeIn('slow');
	    // calculating the left tooltip coordinate 
	    var windowWidth = $(window).width();
	    if (windowWidth > 940) {
	    	var leftCoord = (windowWidth - 940) / 2 + 290;
	    } else {
	    	var leftCoord = (940 - windowWidth) / 2 + 270;
	    };
	    //console.log(leftCoord);
	    // assigning values for an absolute position
			var hint = $(this).attr('name');	        
			if (hint == 'address') {
				$('.tooltip').css({ left: leftCoord, top: 519});
			} if (hint == 'lastname') {
				$('.tooltip').css({ left: leftCoord, top: 470});
			} if (hint == 'firstname') {
				$('.tooltip').css({ left: leftCoord, top: 422});
			}	;	      	
	}, function() {
	    // mouse hover out event
	    $(this).attr('title', $(this).data('tipText'));
	    $('.tooltip').remove();
	});
});