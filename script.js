//=================================================//

// script.js - script for Poly Entertainment

//=================================================//

$('#hamburger').on('click', showMenu)
$('#hamburger').on('tap', showMenu)
$('#menu').on('swipeleft', showMenu)

function showMenu (){
	$('#toggle').toggle(170);
}