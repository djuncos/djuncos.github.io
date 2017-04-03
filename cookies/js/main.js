$(document).ready(function(){


// if(Cookies.get("cookieName")){ 


	// document.getElementById('greetingText').innerHTML="Welcome back, " + Cookies.get("cookieName")+"!"
	
// Cookies.get("cookieName")

// } 


var personName="t"




$('#submit').click(function(){

   			personName = document.getElementById('nameEnter').value

   			

   			document.cookie = "cookieName ="+personName			 	
})









// Creates new divs.

$('.clicker').click(function(){

	$('#box').append(
	  $('<button/>')
	    .attr("id", "clicker")
	    .addClass("clicker")
	    .append("<span/>")
	      .text("Click here.")
	)
	
})

	//Creates new divs




	$('.blueO').click(function(){

		$('#insert').append(
		  $('<div/>')
		    .attr("id", "clicker")
		    .addClass("blueO")
		    .append("<span/>")
		      
		)
		
	})

	$('.greenO').click(function(){

		$('#insert').append(
		  $('<div/>')
		    .attr("id", "clicker")
		    .addClass("greenO")
		    .append("<span/>")
		      
		)
		
	})

	$('.redO').click(function(){

		$('#insert').append(
		  $('<div/>')
		    .attr("id", "clicker")
		    .addClass("redO")
		    .append("<span/>")
		      
		)
		
	})


})


// Reloads page on click.

// $('.something').click(function() {

//     location.reload()

// })


