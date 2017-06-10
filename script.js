//=================================================//

// script.js - script for Poly Entertainment

//=================================================//

$('#hamburger').on('click', menuDisplay);
$(window).on('resize', showMenu);
$(document).ready(divResize);

//=================================================//
//This coundown timer is not in a function.
//This is so the timer is always running

var launchDate = new Date('2018-02-08 20:00:00 GMT-0700').getTime();
var countDownTime = setInterval(function() {
	var now = new Date().getTime();
	var distance = launchDate - now;
	var msPerDay = 1000 * 60 * 60 * 24;
	
	var days = Math.floor(distance / msPerDay);
 	var hours = Math.floor((distance % msPerDay) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
 	var seconds = Math.floor((distance % (1000 * 60)) / 1000);
	
	if(distance <= 0) {
		$('#timer-clock').html('We have Launched!');
	}else {
		$('#timer-clock').html(days+'days<br>'+hours+':'+minutes+':'+seconds);
	}
});

//=================================================//

function divResize() {
	var y = $('article').height();
	
	$('#scanlines').height(y);
}

function showMenu() {
	if ($(window).width()>640){
		$('#toggle').removeAttr('style');
	}
}

function menuDisplay() {
	$('#toggle').slideToggle('slow');
}


