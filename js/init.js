(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax1').parallax();

    $('.parallax2').parallax();

    $(window).scroll(function() {
		  var scrollTop = $(this).scrollTop();

		  $('.header-overlay').css({
			  opacity: function() {
			    var elementHeight = $(this).height(),
			    	opacity = scrollTop/600;
			        // opacity = scrollTop/(elementHeight - pageHeight);

			        // console.log("pageHeight = "+pageHeight);
			        // console.log("elementHeight = "+elementHeight);
			        // console.log("opacity = "+opacity);
			        // console.log("scrollTop = "+scrollTop);

			    return opacity;
			  }
		   });

		   $('.header-overlay2').css({
			  opacity: function() {
			    var elementHeight = $(this).height(),
			    	opacity = scrollTop/600 - 2.5;
			        // opacity = scrollTop/(elementHeight - pageHeight);

			        // console.log("pageHeight = "+pageHeight);
			        // console.log("elementHeight = "+elementHeight);
			        // console.log("opacity = "+opacity);
			        // console.log("scrollTop = "+scrollTop);

			    return opacity;
			  }
		   });

		   $('.header-overlay3').css({
			  opacity: function() {
			    var elementHeight = $(this).height(),
			    	opacity = scrollTop/600 - 4.5;
			        // opacity = scrollTop/(elementHeight - pageHeight);

			        // console.log("pageHeight = "+pageHeight);
			        // console.log("elementHeight = "+elementHeight);
			        // console.log("opacity = "+opacity);
			        // console.log("scrollTop = "+scrollTop);

			    return opacity;
			  }
		   });
	});

  }); // end of document ready
})(jQuery); // end of jQuery name space

var pageHeight = $(window.top).height();

