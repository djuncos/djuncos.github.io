

var k=0

function timeDisplay(){

	k++

	var today = new Date()
		
	var hour = today.getHours()
	var minute = today.getMinutes()
	var second = today.getSeconds()
		
	var amPm

	second = zeroConcatenate(second)
	minute = zeroConcatenate(minute)
	hour = zeroConcatenate(hour)

	var timeColor = String(hour)+String(minute)+String(second)

	var n=Number(timeColor)	

	document.getElementById('timeString').innerText = timeColor

	if(isPrime(n)==true){


			$('.insert1').prepend(
				"<div class='timeContainer fade'><div class='times'>"+timeColor+"</div></div>"
			);

			$('.insert2').prepend(
				"<div class='factorContainer fade'><div class='factorization'> &nbsp; &nbsp;&nbsp;PRIME</div></div>"
			);

	}else{


		primeFactorization(n)

		pr = primeVector.length


		for(i=pr;i<6;i++){

			primeVector[i]=""
			powerVector[i]=""

		}


		var currentID = '.id'+timeColor

		$('.insert1').prepend(
				"<div class='timeContainer fade'><div class='times'>"+timeColor+"</div></div>"
			);

		$('.insert2').prepend(
					"<div class='factorContainer2 fade'><div class='primeClass'> =  &nbsp;"+primeVector[0]+"</div><div class='powerClass'> "+powerVector[0]+" </div><div class='primeClass'>"+primeVector[1]+"</div><div class='powerClass'> "+powerVector[1]+" </div><div class='primeClass'>"+primeVector[2]+"</div><div class='powerClass'> "+powerVector[2]+" </div><div class='primeClass'>"+primeVector[3]+"</div><div class='powerClass'> "+powerVector[3]+" </div><div class='primeClass'>"+primeVector[4]+"</div><div class='powerClass'> "+powerVector[4]+" </div><div class='primeClass'>"+primeVector[5]+"</div><div class='powerClass'> "+powerVector[5]+" </div></div>"
					
				);

	}


	

	$( ".fade" ).fadeTo( 15000 , 0, function() {
 		});

	setTimeout(timeDisplay,1000)
	

}

function zeroConcatenate(i){

	if(i<10){

		i = "0" + i
	}

	return i

}

function isPrime(value) {
	var i = 2

	if(value % i === 0){

		return false

	} else for(var i = 3; i < (value)^(.5); i=i+2) {
        if(value % i === 0) {
            return false
        }
    }
    return true
}

// Here begins my prime factorization function.

var primeVector=[]
var powerVector=[]
var together=[]

function primeFactorization(value){


var primeVectorA=[]
var powerVectorA=[]
var togetherA=[]


		

		var m=value
		var k=-1

		while(m>1){

			for(var d=2; d<=(m^.5); d++){

				var p = 0
				var divisor = false

				while(m%d==0){

					divisor=true
					p++
					m = m/d

				}

				 // console.log(m)

				if(divisor==true){

					k++

					if(k==0){
					primeVectorA[k]=d
					}else{

					primeVectorA[k]="&#183;&nbsp;"+d	
					}	
					powerVectorA[k]=p
					togetherA[2*k]=d
					togetherA[(2*k)+1]=p

				}


			}


		}

		primeVector=primeVectorA
		powerVector=powerVectorA
		together=togetherA

		// var txt = "= "+primeVectorA[0]+"^"+powerVectorA[0]

		// for(var t=1; t<=k; t++){

		// 	txt = txt+"\xa0"+"  x  "+"\xa0"+primeVectorA[t]+"^"+powerVectorA[t]

		// 	}		

		// return txt


		// console.log(together)
		return together
}