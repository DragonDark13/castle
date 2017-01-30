$(document).ready(function() {

// $("body").addClass('no_scroll');

	$(".button").click(function(event) {
		/* Act on the event */

$(".container").removeClass('hide').addClass('show');
// $("body").removeClass('no_scroll');



	});

	 $("html").niceScroll({

        	scrollspeed: 40,
        });

	 $('.container').viewportChecker({

	 	offset: '100%',

	 	 invertBottomOffset: false,
	 	 // repeat: true,



	 	classToAdd: 'show',

	 	// classToAddForFullView: 'show_c',
	 	 classToRemove: 'hide',
	 	 callbackFunction: function(elem, action){

// $(".container").removeClass('hide').addClass('show');



	 	 },


	 });

	 function parallax(){
    var scrolled = $(window).scrollTop();
    $('.plan').css('bottom', (scrolled * 0.2) + 'px');
}

$(window).scroll(function(e){
    parallax();
});



    
	
});
