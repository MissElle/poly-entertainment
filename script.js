//=================================================//

// script.js - script for Poly Entertainment

//=================================================//

$('.launch-spin-8').on('click', spinIt);
$('#hamburger').on('mousedown', menuDisplay);
$('#float-box').on('mousedown', menuDisplay);
$(window).on('resize', screenSizeGrows);
$(window).on('resize', changeHTMLStyles);
$(window).on('load', changeHTMLStyles);
$(window).on('load', timer);
$(window).on('load', runCarousel);
$('.slide-left').on('click', slideContentLeft);
$('.slide-right').on('click', slideContentRight);

//=================================================//
//This counter is to be used for the menu functions
//global object is for runCarousel()

var count = 0;
//the following two arrays hold the parent ids for the carousel and the child elements ids in the carousels. These are generated in the function runCarousel()
var parentIDs = [];
var childIDs = [];

//=================================================//
//This allows users to pause the spinner if desired

function spinIt() {
	if($('.launch-spin-8').css('animation-play-state') === 'running'){
			$('.launch-spin-8').css('animation-play-state', 'paused'); 
			$('#logo-launch').css('filter', 'none');
	}else{
		$('.launch-spin-8').removeAttr('style');
		$('#logo-launch').removeAttr('style');
	}
}

//=================================================//
//This timer counts to the launch date

function timer() {
	//GMT-0700
	var launchDate = new Date('2018-02-09T03:00:00').getTime();
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
	}, 1000);
}

//=================================================//
//This changes HTML styles depending on markup and window size

function changeHTMLStyles() {
	//This changes the icon styles depending on what color the footer tag is (.content even stylings)
	//Also will change the left/right icons in the carousels
	$('.content').each(function(){
		var bgColor = $(this).css('background-color');
		if( bgColor === 'rgb(252, 252, 252)' ){
			$(this).find('.fa').css('color', '#461ca4');
			$(this).find('.fa-chevron-circle-left').css({
				'background-color' : 'rgb(255, 255, 255)',
				'color' : 'rgb(70, 28, 164)'});
			$(this).find('.fa-chevron-circle-right').css({
				'background-color' : 'rgb(255, 255, 255)',
				'color' : 'rgb(70, 28, 164)'});
			$(this).find('.slide-left').css('background' , 'linear-gradient(to right, #fcfcfc 60%, transparent)');
			$(this).find('.slide-right').css('background' , 'linear-gradient(to left, #fcfcfc 60%, transparent)');
		}else if( bgColor === 'rgb(70, 28, 164)' ){
			$(this).find('.fa').css('color', '#ffffff');
			$(this).find('.fa-chevron-circle-left').css({
				'background-color' : 'rgb(70, 28, 164)',
				'color' : 'rgb(255, 255, 255)'});
			$(this).find('.fa-chevron-circle-right').css({
				'background-color' : 'rgb(70, 28, 164)',
				'color' : 'rgb(255, 255, 255)'});
			$(this).find('.slide-left').css('background' , 'linear-gradient(to right, #461ca4 60%, transparent)');
			$(this).find('.slide-right').css('background' , 'linear-gradient(to left, #461ca4 60%, transparent)');				
		}
		console.log(bgColor);
	});
	
	$('#menu .fa-github').css('color', '#1e1e1e');
	$('#menu .fa-instagram').css('color', '#ffffff');
	$('#menu .fa-tumblr-square').css('color', '#36465d');
	$('#menu .fa-twitter').css('color', '#1b95e0');

	//This changes the scanlines height to always match the div .wrapper size
	var articleHeight = $('.wrapper').height();
	$('.scanlines').height(articleHeight);
}

//=================================================//
//This function helps the menu redisplay during resizing without it, the menu would stay hidden if the function menuDisplay was activated and then the window was resized.

function screenSizeGrows() {
	if ($(window).width()>640){
		count = 0;
    $('html').css('overflow-y', 'visible');
		$('#toggle').removeAttr('style');
		$('#float-box').removeAttr('style');
		$('#menu').animate({
			left: '-10em'
			}, 50);
		$('#logo').css('animation-name','rotateIn');
	}
}

//=================================================//
//toggle for the menu

function menuDisplay() {
	++count
	
	if (count%2 === 0) {
		$('#menu').stop().animate({
			left: '-10em'
		}, 200);
		$('#float-box').fadeOut('fast');
		$('html').css({
			'overflow': 'visible',
			'touch-action': 'auto'
		});
		$('#logo').css('animation-name','rotateOut');
	}else {
		$('#menu').stop().animate({
			left: '0px'
		}, 300);
		$('#float-box').fadeIn('fast');
		$('html').css({
			'overflow': 'hidden',
			'touch-action': 'none'
		});
		$('#logo').css('animation-name','rotateIn');
	}
}

//=================================================//
//This function is part of the conic-gradient polyfill from LeaVerou

function $$(selector) {
    return Array.prototype.slice.call(document.querySelectorAll(selector));
}

$$("#examples article").forEach(function (article, i) {
    var style = article.getAttribute("style");
    article.removeAttribute("style");

    var div = document.createElement("div");
    article.appendChild(div);

    var textarea = document.createElement("textarea");
    textarea.textContent = style;
    (textarea.oninput = function() {
        var fixed = StyleFix.fix(this.value);
        div.setAttribute("style", fixed);
    }).call(textarea);

    new Incrementable(textarea);

    article.appendChild(textarea);
});

//=================================================//
//This function will find all divs with the class 'carousel', filter them by id's, pop the child elements into an array, and 

// function runCarousel() {
	// var childIDs = new Array();
	// $('.carousel').each( function(){
		// $('.rotating-content').each(function(){
			// childIDs.push(this.id);
		// });
		// console.log(childIDs);
	// });
	
// }

function runCarousel() {
	// var childIDs = new Array();
	
	$('.carousel').each( function(){
		parentIDs.push(this.id);
		var eachItem = $(this).find('.rotating-content').map(function(){
			return (this.id);
		}).get();
		childIDs.push(eachItem);
	});
	for(var i=0; i<childIDs.length; ++i){
		var percentValue = (100/childIDs[i].length);
		var pos = -5;
		var zNum = 2000;
		for(var k=0; k<childIDs[i].length; ++k){
			$('#' + childIDs[i][k]).css({
				'left' : pos +'%',
				'z-index' : zNum});
			pos += percentValue;
			zNum -= 1;
			
			console.log(pos);
			//code will go here that maps out what happens if a value is above or below 50% in an if/else statement.... that way there will always be a highlighted middle in the carousel.
		}
	}
	console.log(childIDs);
	console.log(parentIDs);
}
	
//=================================================//
//function slides elements left in the carousels

function slideContentLeft() {

}	

//=================================================//
//function slides elements right in the carousels
	
function slideContentRight() {

}
	
//=================================================//
//This is leftover code, it will do a collapsing effect for items of the same class
//		var thisLength = 25;
//			$('.letter-animate').each(function(){
//				$(this).stop().animate({
//					left: 0,
//					opacity: 1
//				}, 100);
//			thisLength += 25;
