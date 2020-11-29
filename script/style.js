$(document).ready(function(){
	$('.sidenav').sidenav();
	$('.carousel').carousel({
		indicators: true,
		numVisible: 5,
		duration: 300,
	});
	$('.parallax').parallax();
	$('.scrollspy').scrollSpy();
});

