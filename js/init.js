


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

		var k = (0-a)*Math.pow(zero-h,2);

		var coeff = .8;
		var turnX = 2100;
		var turnY = (coeff)*(turnX - 1600)/(800);
		var a = (1-turnY)/Math.pow(2400-turnX,2);
 
    $(window).scroll(function() {
		var scrollTop = $(this).scrollTop();

		var x = $(this).scrollTop();
		var fOfX
		if(x<turnX){
			fOfX = (coeff)*(x-1600)/800;
		}else{
			fOfX = a*(Math.pow(x-turnX,2))+turnY;
		}
		var percent = 100*fOfX;
		if(scrollTop>=lower){
			$("#droplet").css({top:(percent)+"%"});
		};
	});

	$('.trigger').hover(
       function(){ $('#roseAfter').addClass('appears') },
       function(){ $('#roseAfter').removeClass('appears') }
	)

	$('.triggerAgain').hover(
       function(){ $('#guitarAfter').addClass('appears') },
       function(){ $('#guitarAfter').removeClass('appears') }
	)
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

