//=================================================//

// script.js - script for Poly Entertainment

//=================================================//

$('#hamburger').on('click', menuDisplay);
$(window).on('resize', showMenu);
$(document).ready(divResize);
$(window).on('resize', divResize);
$(document).ready(timer);

//=================================================//
//This timer counts to the launch date

function timer() {
	var launchDate = new Date('2018-02-08 20:00:00 GMT-0700').getTime();
	var countDownTime = setInterval(function() {
		var now = new Date().getTime();
		var distance = launchDate - now;
		var msPerDay = 1000 * 60 * 60 * 24;

		var days = Math.floor(distance / msPerDay);
		var hours = Math.floor((distance % msPerDay) / (1000 * 60 * 60));
		var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		var seconds = Math.floor((distance % (1000 * 60)) / 1000);
		
		//=================================================//
		// these if statements will add a 0 if the number is singular
		// This helps with formatting issues, looks cleaner
		
		if(hours<=9) {
			hours= '0' + hours; 
		}
		if(minutes<=9){
			minutes= '0' + minutes;
		}
		if(seconds<=9) {
			seconds = '0'+ seconds;
		}
		
		//=================================================//
		//This if statement will change the timer to a phrase
		//if the launch date hits.
		
		if(distance <= 0) {
			$('#timer-clock').html('We have Launched!');
		}else {
			$('#timer-clock').html('<span class="large-time">'+days+'</span>'+' days<br><span class="small-time">'+hours+':'+minutes+':'+seconds+'</span>');
		}
	});
}

//=================================================//



//=================================================//
//This resizes the scanlines for to fit the body width

function divResize() {
	var articleHeight = $('#wrapper').height();
	
	$('#scanlines').height(articleHeight);
}

//=================================================//
//This function helps the menu redisplay during resizing
//without it, the menu would stay hidden if the function
//menuDisplay was activated and then the window was resized.

function showMenu() {
	if ($(window).width()>640){
		$('#toggle').removeAttr('style');
	}
}

//=================================================//
//toggle for the menu

function menuDisplay() {
	$('#toggle').slideToggle('slow');
}


