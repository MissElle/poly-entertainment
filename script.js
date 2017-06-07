//=================================================//

// script.js - script for Poly Entertainment

//=================================================//

$('#hamburger').on('click', menuDisplay);
$(window).on('resize', showMenu);

function showMenu() {
	if ($(window).width()>640){
		$('#toggle').removeAttr('style');
	}
}

function menuDisplay() {
	$('#toggle').slideToggle('slow');
}
