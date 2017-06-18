(function($){
  $(function(){

  	function parent(x){


  	}

  	function position(x,a,h,k){


  	}

    $('.button-collapse').sideNav();
    $('.parallax1').parallax();

    $('.parallax2').parallax();

    	var one = 2400;
		var zero = 1600;
		var lower = zero-200;

		var h = 2400;
		// var a = 1/(one-zero);

		// var a = 1/(Math.pow(one-h,2)-Math.pow(zero-h,2));

		var k = (0-a)*Math.pow(zero-h,2);

		var coeff = .8;
		var turnX = 2100;
		var turnY = (coeff)*(turnX - 1600)/(800);
		var a = (1-turnY)/Math.pow(2400-turnX,2);

		// var a = coeff/()




 
    $(window).scroll(function() {
		var scrollTop = $(this).scrollTop();

		var x = $(this).scrollTop();

		// var fOfX = (0.46)*((Math.pow(x-2000,3)/(10*Math.pow(10,7)))-(.9)+(x/Math.pow(10,3)));

		// var fOfX = (.7)*(x-1600)/800	
		// var fOfX = a*Math.pow(scrollTop-h,2)+k;

		var fOfX

		if(x<turnX){

			fOfX = (coeff)*(x-1600)/800;

		}else{

			fOfX = a*(Math.pow(x-turnX,2))+turnY;


		}


		var percent = 100*fOfX;

		if(scrollTop>=lower){
			$("#droplet").css({top:(percent)+"%"});
			// console.log(scrollTop);
			// console.log(percent);
		};

		// console.log(percent);
		
	
		// Math.pow(x-1900,3)
			
		// 9*Math.pow(10,7)

		// first  (Math.pow(x-1900,3)/(9*Math.pow(10,7)))

		// (.1)

		// third (x/Math.pow(10,5))

		// (5*Math.pow(10,6))

		// Math.pow(x,2)

		// fourth (Math.pow(x,2)/(5*Math.pow(10,6)))

		// (0.5)*((Math.pow(x-1900,3)/(9*Math.pow(10,7)))-(.1)-(x/Math.pow(10,5))+(Math.pow(x,2)/(5*Math.pow(10,6))))





		// }

		// console.log(scrollTop);

		// $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);

			
		// $(".scroll").hover(function(event){		
		// 	event.preventDefault();


		// 	if((scrollTop<1700)&&(scrollTop>1165)){


		// 		var dif = 11.5*(scrollTop-1700)/(1700 - 1165);
		// 		$('#droplet').css("transform: translate(76.5%,"+dif+"%");

		// 	}


		// });




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

	$('.triggerAgain').hover(
       function(){ $('#guitarAfter').addClass('appears') },
       function(){ $('#guitarAfter').removeClass('appears') }
	)



	// $("#trigger2").mouseenter(function() {
	//     $('#droplet').css("top", "+40%");

	// // }).mouseleave(function() {
	// //      $(this).css("background", "00F").css("border-radius", "0px");
	     
	// });

	$('.stretch').each(function(){
        $(this).strech_text();
    });



  }); // end of document ready
})(jQuery); // end of jQuery name space

var pageHeight = $(window.top).height();
$.fn.strech_text = function(){
    var elmt          = $(this),
        cont_width    = elmt.width(),
        txt           = elmt.html(),
        one_line      = $('<span class="stretch_it">' + txt + '</span>'),
        nb_char       = elmt.text().length,
        spacing       = cont_width/nb_char,
        txt_width;
    
    elmt.html(one_line);
    txt_width = one_line.width();
    
    if (txt_width < cont_width){
        var  char_width     = txt_width/nb_char,
             ltr_spacing    = spacing - char_width + (spacing - char_width)/nb_char ; 
  
        one_line.css({'letter-spacing': ltr_spacing});
    } else {
        one_line.contents().unwrap();
        elmt.addClass('justify');
    }
};