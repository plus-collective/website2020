import fullpage from '../../node_modules/fullpage.js/dist/fullpage';



window.onload = function(){ 

    pageLoader();
    menu();
    //For service animation  
    servAnimation();
}

// -- START Page loader --//
var pageLoader = function() {
    let pageLoader = document.querySelector( 'div.page-loader' );
    setTimeout(function () {
        pageLoader.classList.add('page-loader-close');
    }, 500);
    pageLoader.style.top = window.scrollY +'px';
};

// -- START Menu functionality --- //
//TODO:Remember timeout in closing the menu.
var menu = function() {
	var container = document.querySelector( 'div.container' ),
		hamburgerBttn = document.querySelector( 'div.hamburger' ),
        overlay = document.querySelector( 'div.menu-overlay' ),
        link = document.querySelector('ul.linkList'),
		transEndEventName = 'transitionend',

	toggleMenuOverlay = function () {
		if( overlay.classList.contains('open') ) {
            overlay.classList.remove('open');
			container.classList.remove('menu-overlay-open');
			overlay.classList.add('close');
			var onEndTransitionFn = function( ev ) {
				overlay.classList.remove('close');
			};
			overlay.addEventListener( transEndEventName, onEndTransitionFn );
		}
		else if( !overlay.classList.contains('close') ) {
			overlay.classList.add('open');
			container.classList.add('menu-overlay-open');
        }
        hamburgerBttn.classList.toggle("hamburger--active");
	};
	hamburgerBttn.addEventListener( 'click', toggleMenuOverlay );
    link.addEventListener( 'click', toggleMenuOverlay );
    silentNavigation();
};
// Scroll fot menu
var silentNavigation = function(){
    var elements = document.getElementsByClassName("navLinks");
    var actualMove = function(event) {
        fullpage_api.silentMoveTo(event.target.dataset.destiny);
    };
    for (var i = 0; i < elements.length; i++) {
        elements[i].addEventListener('click', actualMove, false);
    }
};

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
	anchors:['home','services','process','works','contact'],
	navigation: true,
	navigationPosition: 'right',
	navigationTooltips: ['Home','Services','Process','Works','Contact'],
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
    fixedElements:'.nav-fullscreen, .hamburger',
});



// Service animation
let opened = null;
var servAnimation = function(){
    var elements = document.getElementsByClassName("cont_card");
    var animation = function(event) {
        if (!opened) {
            opened = event.target.parentElement.id;
            event.target.parentElement.parentElement.className = "cont_modal cont_modal_active";
        } else if ( opened === event.target.parentElement.id){
            event.target.parentElement.parentElement.className = "cont_modal";
            opened = null
        } else{
            document.getElementById("servA").parentElement.className  = "cont_modal"; 
            document.getElementById("servB").parentElement.className  = "cont_modal"; 
            opened = event.target.parentElement.id;
            event.target.parentElement.parentElement.className = "cont_modal cont_modal_active";
        }
    };
    for (var i = 0; i < elements.length; i++) {
        elements[i].addEventListener('click', animation, false);
    }
};
// -- END Service amation -->
