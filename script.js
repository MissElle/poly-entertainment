//=================================================//

// script.js - script for Poly Entertainment

//=================================================//

$('#hamburger').on('click', menuDisplay);
$(window).on('resize', showMenu);
$(document).ready(divResize);
$(document).ready(timeToLaunch);

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

function timeToLaunch() {
	var launchDate = new Date('2018-02-08 20:00:00 GMT-0700').getTime();
	var countDownTime = setInterval(function() {
		var now = new Date().getTime();
		var distance = launchDate - now;
		
		$('#timer-clock').html(distance);
	});
}