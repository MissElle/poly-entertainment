//=================================================//

// script.js - script for Poly Entertainment

//=================================================//

$('#hamburger').on('click', showMenu);
$('#hamburger').on('tap', showMenu);
$('#toggle').on('swipeleft', showMenu);

function showMenu (){
	$('#toggle').toggle(170);
}