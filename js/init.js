(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax1').parallax();

    $('.parallax2').parallax();

    $(window).scroll(function() {
		  // var scrollTop = $(this).scrollTop();

			
		  $(".scroll").click(function(event){		
			event.preventDefault();
			$('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
		});




		  // $('.header-overlay').css({
			 //  opacity: function() {
			 //    var elementHeight = $(this).height(),
			 //    	opacity = scrollTop/600;
			 //    return opacity;
			 //  }
		  //  });

		  //  $('.header-overlay2').css({
			 //  opacity: function() {
			 //    var elementHeight = $(this).height(),
			 //    	opacity = scrollTop/600 - 2.5;
			 //    return opacity;
			 //  }
		  //  });

		  //  $('.header-overlay3').css({
			 //  opacity: function() {
			 //    var elementHeight = $(this).height(),
			 //    	opacity = scrollTop/600 - 4.5;
			 //    return opacity;
			 //  }
		  //  });
	});

	$('.trigger').hover(
       function(){ $('#roseAfter').addClass('appears') },
       function(){ $('#roseAfter').removeClass('appears') }
	)

	$("#trigger2").mouseenter(function() {
	    $('#droplet').css("top", "+40%");

	// }).mouseleave(function() {
	//      $(this).css("background", "00F").css("border-radius", "0px");
	     
	});

	



  }); // end of document ready
})(jQuery); // end of jQuery name space

var pageHeight = $(window.top).height();

