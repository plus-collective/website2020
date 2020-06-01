
import fullpageSH from '../js/fullpage.scrollHorizontally.min.js';
import fullpage from '../../node_modules/fullpage.js/dist/fullpage.extensions.min.js';


// -- START Full Page init -->
new fullpage('#fullpage', {
    scrollHorizontally: true,
    scrollHorizontallyKey: 'cGx1c2NvbGxlY3RpdmUuaW9fTVNNYzJOeWIyeHNTRzl5YVhwdmJuUmhiR3g1UTJ6',
    licenseKey: '7D4A4921-F9FC4315-8BADB75F-4B047684',

    //Options
    controlArrows: true,
    scrollingSpeed: 300,
    lazyLoading: true,

    //Custom selectors
    sectionSelector: '.page',

    //Navigation
	menu: '#float-menu',
	lockAnchors: false,
	anchors:['home','services','about','works','contact'],
    showActiveTooltip: false,
    controlArrows: false,

    //Accessibility
	keyboardScrolling: true,
	animateAnchor: true,
    recordHistory: true,
    
	//Design
	verticalCentered: true,
	responsiveWidth: 900,
	responsiveHeight: 0,
    scrollBar:true,
    fixedElements:'.nav-fullscreen, .hamburger .brandIcon',
});