//=================================================//

// script.js - script for Poly Entertainment

//=================================================//

$('#hamburger').on('click', menuDisplay);
$(window).on('resize', showMenu);
$(document).ready(divResize);

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
