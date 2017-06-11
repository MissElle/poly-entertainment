//=================================================//

// script.js - script for Poly Entertainment

//=================================================//

$('#hamburger').on('click', menuDisplay);
$('#float-box').on('click', menuDisplay);
$(window).on('resize', screenSizeGrows);
$(document).ready(divResize);
$(window).on('resize', divResize);
$(document).ready(initialStyle);
$(document).ready(timer);

//=================================================//
//This counter is to be used for the menu functions
var count = 0;

//=================================================//
//This timer counts to the launch date

function timer() {
	var launchDate = new Date('2018-02-08 20:00:00 GMT -0700').getTime();
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
//This resizes the scanlines for to fit the body width

function divResize() {
	var articleHeight = $('#wrapper').height();
	
	$('#scanlines').height(articleHeight);
}

//=================================================//

function initialStyle() {
	$('.content').each(function(){
		var bgColor = $(this).css('background-color');
		if( bgColor === 'rgb(255, 255, 255)') {
			$('.fa').css('color', '#362166');
		}else if(bgColor === 'rgb(54, 33, 102)')	{
			$('.fa').css('color', '#ffffff');	
		}
	});
	
	$('#menu .fa-github').css('color', '#1e1e1e');
	$('#menu .fa-instagram').css({
		'background': 'radial-gradient(at 20% 120%, #ffe086, #d82f80, #3f6cdf)',	
		'background': '-webkit-radial-gradient(20% 120%, #ffe086, #d82f80, #3f6cdf)',
		'color': '#ffffff',
		'border-radius': '.27em',
		'width': '.99em'
	});
	$('#menu .fa-tumblr-square').css('color', '#36465d');
	$('#menu .fa-twitter').css('color', '#1b95e0');
}

//=================================================//
//This function helps the menu redisplay during resizing without it, the menu would stay hidden if the function menuDisplay was activated and then the window was resized.

function screenSizeGrows() {
	if ($(window).width()>640){
		count = 0;
    $('html').css('overflow', 'visible');
		$('#toggle').removeAttr('style');
		$('#float-box').removeAttr('style');
	}
}

//=================================================//
//toggle for the menu

function menuDisplay() {
	++count
	
	if (count%2 === 0) {
		$('#menu').animate({
			left: '-10em'
		}, 50);
		$('#float-box').fadeOut('fast');
		$('html').css({
			'overflow': 'visible',
			'touch-action': 'auto'
		});
	}else {
		$('#menu').animate({
			left: '0px'
		}, 50);
		$('#float-box').fadeIn('fast');
		$('html').css({
			'overflow': 'hidden',
			'touch-action': 'none'
		});
	}
}


