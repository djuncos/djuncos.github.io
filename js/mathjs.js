/**
 * Created by Kupletsky Sergey on 05.11.14.
 *
 * Material Design Responsive Table
 * Tested on Win8.1 with browsers: Chrome 37, Firefox 32, Opera 25, IE 11, Safari 5.1.7
 * You can use this table in Bootstrap (v3) projects. Material Design Responsive Table CSS-style will override basic bootstrap style.
 * JS used only for table constructor: you don't need it in your project
 */

$(document).ready(function() {


    var table = $('#table');

    // Table bordered
    $('#table-bordered').change(function() {
        var value = $( this ).val();
        table.removeClass('table-bordered').addClass(value);
    });

    // Table striped
    $('#table-striped').change(function() {
        var value = $( this ).val();
        table.removeClass('table-striped').addClass(value);
    });
  
    // Table hover
    $('#table-hover').change(function() {
        var value = $( this ).val();
        table.removeClass('table-hover').addClass(value);
    });

    // Table color
    $('#table-color').change(function() {
        var value = $(this).val();
        table.removeClass(/^table-mc-/).addClass(value);
    });

    Date.prototype.addDays = function(days) {
      var dat = new Date(this.valueOf());
      dat.setDate(dat.getDate() + days);
      return dat;
    }

    // var date = "Monday, March 19";
    var date01 = new Date('March 19, 2018');

    var oneDay = 1000*60*60*24;

    var date02 = date01.addDays(2);
    var date03 = date02.addDays(5);
    var date04 = date03.addDays(2);
    var date05 = date04.addDays(5);
    var date06 = date05.addDays(2);
    var date07 = date06.addDays(5);
    var date08 = date07.addDays(2);
    var date09 = date08.addDays(5);
    var date10 = date09.addDays(2);
    var date11 = date10.addDays(5);
    var date12 = date11.addDays(2);
    var date13 = date12.addDays(5);
    var date14 = date13.addDays(2);
    var date15 = date14.addDays(5);
    var date16 = date15.addDays(2);
    var date17 = date16.addDays(2);


    var weekday = new Array(7);
        weekday[0] =  "Sunday";
        weekday[1] = "Monday";
        weekday[2] = "Tuesday";
        weekday[3] = "Wednesday";
        weekday[4] = "Thursday";
        weekday[5] = "Friday";
        weekday[6] = "Saturday";

    var months = new Array(12);
        months[0] =  "January";
        months[1] =  "February";
        months[2] =  "March";
        months[3] =  "April";
        months[4] =  "May";
        months[5] =  "June";
        months[6] =  "July";
        months[7] =  "August";
        months[8] =  "September";
        months[9] =  "October";
        months[10] =  "November";
        months[11] =  "December";

    var day01 = weekday[date01.getDay()];
    var month01 = months[date01.getMonth()];
    var number01 = date01.getDate();
    var fullDate01 = day01+", "+month01+" "+number01;
    document.getElementById('output01').innerHTML = fullDate01;

    var day02 = weekday[date02.getDay()];
    var month02 = months[date02.getMonth()];
    var number02 = date02.getDate();
    var fullDate02 = day02+", "+month02+" "+number02;
    document.getElementById('output02').innerHTML = fullDate02;

    var day03 = weekday[date03.getDay()];
    var month03 = months[date03.getMonth()];
    var number03 = date03.getDate();
    var fullDate03 = day03+", "+month03+" "+number03;
    document.getElementById('output03').innerHTML = fullDate03;

    var day04 = weekday[date04.getDay()];
    var month04 = months[date04.getMonth()];
    var number04 = date04.getDate();
    var fullDate04 = day04+", "+month04+" "+number04;
    document.getElementById('output04').innerHTML = fullDate04; 

    var day05 = weekday[date05.getDay()];
    var month05 = months[date05.getMonth()];
    var number05 = date05.getDate();
    var fullDate05 = day05+", "+month05+" "+number05;
    document.getElementById('output05').innerHTML = fullDate05;

    var day06 = weekday[date06.getDay()];
    var month06 = months[date06.getMonth()];
    var number06 = date06.getDate();
    var fullDate06 = day06+", "+month06+" "+number06;
    document.getElementById('output06').innerHTML = fullDate06;

    var day07 = weekday[date07.getDay()];
    var month07 = months[date07.getMonth()];
    var number07 = date07.getDate();
    var fullDate07 = day07+", "+month07+" "+number07;
    document.getElementById('output07').innerHTML = fullDate07;

    var day08 = weekday[date08.getDay()];
    var month08 = months[date08.getMonth()];
    var number08 = date08.getDate();
    var fullDate08 = day08+", "+month08+" "+number08;
    document.getElementById('output08').innerHTML = fullDate08;

    var day09 = weekday[date09.getDay()];
    var month09 = months[date09.getMonth()];
    var number09 = date09.getDate();
    var fullDate09 = day09+", "+month09+" "+number09;
    document.getElementById('output09').innerHTML = fullDate09;    

    var day10 = weekday[date10.getDay()];
    var month10 = months[date10.getMonth()];
    var number10 = date10.getDate();
    var fullDate10 = day10+", "+month10+" "+number10;
    document.getElementById('output10').innerHTML = fullDate10;

    var day11 = weekday[date11.getDay()];
    var month11 = months[date11.getMonth()];
    var number11 = date11.getDate();
    var fullDate11 = day11+", "+month11+" "+number11;
    document.getElementById('output11').innerHTML = fullDate11;

    var day12 = weekday[date12.getDay()];
    var month12 = months[date12.getMonth()];
    var number12 = date12.getDate();
    var fullDate12 = day12+", "+month12+" "+number12;
    document.getElementById('output12').innerHTML = fullDate12;

    var day13 = weekday[date13.getDay()];
    var month13 = months[date13.getMonth()];
    var number13 = date13.getDate();
    var fullDate13 = day13+", "+month13+" "+number13;
    document.getElementById('output13').innerHTML = fullDate13;

    var day14 = weekday[date14.getDay()];
    var month14 = months[date14.getMonth()];
    var number14 = date14.getDate();
    var fullDate14 = day14+", "+month14+" "+number14;
    document.getElementById('output14').innerHTML = fullDate14;

    var day15 = weekday[date15.getDay()];
    var month15 = months[date15.getMonth()];
    var number15 = date15.getDate();
    var fullDate15 = day15+", "+month15+" "+number15;
    document.getElementById('output15').innerHTML = fullDate15;

    // var day16 = weekday[date16.getDay()];
    // var month16 = months[date16.getMonth()];
    // var number16 = date16.getDate();
    // var fullDate16 = day16+", "+month16+" "+number16;
    // document.getElementById('output16').innerHTML = fullDate16;      


});

// jQuery’s hasClass and removeClass on steroids
// by Nikita Vasilyev
// https://github.com/NV/jquery-regexp-classes
(function(removeClass) {

	jQuery.fn.removeClass = function( value ) {
		if ( value && typeof value.test === "function" ) {
			for ( var i = 0, l = this.length; i < l; i++ ) {
				var elem = this[i];
				if ( elem.nodeType === 1 && elem.className ) {
					var classNames = elem.className.split( /\s+/ );

					for ( var n = classNames.length; n--; ) {
						if ( value.test(classNames[n]) ) {
							classNames.splice(n, 1);
						}
					}
					elem.className = jQuery.trim( classNames.join(" ") );
				}
			}
		} else {
			removeClass.call(this, value);
		}
		return this;
	}

})(jQuery.fn.removeClass);