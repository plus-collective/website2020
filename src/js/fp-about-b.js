import fullpage from 'fullpage.js';

// -- START Full Page init -->
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
	anchors:['home','works','contact'],
	navigation: true,
	navigationPosition: 'right',
	navigationTooltips: ['Home','Works','Contact'],
    showActiveTooltip: false,

    //Accessibility
	keyboardScrolling: true,
	animateAnchor: true,
    recordHistory: true,
    
	//Design
	verticalCentered: true,
	responsiveWidth: 768,
	responsiveHeight: 0,
    scrollBar:true,
    fixedElements:'.nav-fullscreen, .hamburger .brandIcon',
});

