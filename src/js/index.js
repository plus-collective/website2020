import fullpage from '../../node_modules/fullpage.js/dist/fullpage';

//Full Page options
new fullpage('#fullpage', {

    //Options
    controlArrows: true,
    scrollingSpeed: 300,
    lazyLoading: true,

    //Custom selectors
    sectionSelector: '.page',

    //Navigation
	menu: '#menu',
	lockAnchors: false,
	anchors:['Cover','Services','Process','Work','Contact'],
	navigation: true,
	navigationPosition: 'right',
	navigationTooltips: ['Cover','Services','Process','Work','Contact'],
    showActiveTooltip: false,
    dragAndMove:true,

    //Accessibility
	keyboardScrolling: true,
	animateAnchor: true,
    recordHistory: true,
    
	//Design
	verticalCentered: true,
	responsiveWidth: 768,
	responsiveHeight: 0,
    // scrollBar:false,
    fixedElements:'.nav-fullscreen',

});

//Menu functionality
document.addEventListener("DOMContentLoaded", function() {

	document.querySelector('.hamburger').addEventListener("click", function() {
		this.classList.toggle("hamburger--active");
        document.querySelector(".nav-fullscreen").classList.toggle("nav-fullscreen--open");
        document.getElementById("menuFs").style.top = window.scrollY +'px';
    });
    
    document.querySelector('.nav-fullscreen__items').addEventListener("click", function() {
        document.querySelector('.hamburger').classList.toggle("hamburger--active");
		document.querySelector(".nav-fullscreen").classList.toggle("nav-fullscreen--open");
	});
	
});