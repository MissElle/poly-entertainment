//=================================================//

// script.js - script for Poly Entertainment

//=================================================//

$('#hamburger').on('click', showMenu);
$('#hamburger').on('tap', showMenu);
$('#toggle').on('swipeleft', hideMenu);

function showMenu (){
	$('#toggle').slideToggle(300);
}

function hideMenu (){
	$('#toggle').hide(170);
}