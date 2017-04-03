

var cookieCount=[0,0,0]

var cookieSequenceArray = []



	//store cookieSequence into cookieSequenceArray and clear cookieSequence


if(Cookies.get("cookieSequence")){

	var n = (Cookies.get("cookieSequence").length)

	cookieSequenceArray = Cookies.get("cookieSequence")

	document.cookie = "cookieSequence =; expires=Thu, 01 Jan 1970 00:00:01 GMT;"

}



$(document).ready(function(){


	function cookieFunction(){

		this.blue=function(){

			$('#insert').append(
		  		$('<div/>')
		    		.addClass("blueO")
		    		.append("<span/>")
			)

			cookieCount[0]=cookieCount[0]+1

			document.getElementById('blueCount').innerHTML = cookieCount[0]

			if(Cookies.get("cookieSequence")){

				document.cookie = "cookieSequence = "+(Cookies.get("cookieSequence")+"B")

			} else {

				document.cookie = "cookieSequence = B"

			}

		},

		this.red=function(){

			$('#insert').append(
		  		$('<div/>')
		    		.addClass("redO")
		    		.append("<span/>")
		   )

			cookieCount[1]=cookieCount[1]+1

			document.getElementById('redCount').innerHTML = cookieCount[1]

			if(Cookies.get("cookieSequence")){

				document.cookie = "cookieSequence = "+(Cookies.get("cookieSequence")+"R")

			} else {

				document.cookie = "cookieSequence = R"

			}

		},


		this.green=function(){

			$('#insert').append(
		  		$('<div/>')
		    		.addClass("greenO")
		    		.append("<span/>")
		   )

			cookieCount[2]=cookieCount[2]+1

			document.getElementById('greenCount').innerHTML = cookieCount[2]

			if(Cookies.get("cookieSequence")){

				document.cookie = "cookieSequence = "+(Cookies.get("cookieSequence")+"G")

			} else {

				document.cookie = "cookieSequence = G"

			}

		}

	} // end of cookieFunction


	//rebuild cookieSequence

	var cookiefunction = new cookieFunction


	for(var i=0; i<n; i++){

		if(cookieSequenceArray[i]=="B"){

			cookiefunction.blue()
			
		} else if(cookieSequenceArray[i]=="R"){

			cookiefunction.red()

		} else if(cookieSequenceArray[i]=="G"){

			cookiefunction.green()

		}

	}



	$('#clearButton').click(function(){


	document.cookie = "cookieSequence =; expires=Thu, 01 Jan 1970 00:00:01 GMT;"
	location.reload()


	})




	$('.blueO').click(function(){

		cookiefunction.blue()
		
	})


	$('.redO').click(function(){

		cookiefunction.red()
		
	})


	$('.greenO').click(function(){

		cookiefunction.green()

	})



})//end of $(document).ready


