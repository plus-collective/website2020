import fullpage from 'fullpage.js';

window.onload = function(){ 
    pageLoader("close", 500);
    menu();

    usMenu();
    exitHome();
    
}

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
    // link.addEventListener( 'click', toggleMenuOverlay );
    silentNavigation();
};

// Scroll fot menu
var silentNavigation = function(){
    var elements = document.getElementsByClassName("navLinks");
    console.log("ACA2");
    var actualMove = function(event) {
        console.log("ACA");
        pageLoader("open", 500, "/#"+event.target.dataset.destiny);
    };
    for (var i = 0; i < elements.length; i++) {
        elements[i].addEventListener('click', actualMove, false);
    }
};

// PARA PAGINA US
var usMenu = function (){

	var btnTeam = document.querySelector("#btnTeam a")
	var btnProcess = document.querySelector("#btnProcess a")

	var team = document.querySelector("div .usTeam");
	var process = document.querySelector("div .usProcess");

	var aux = null;

	btnTeam.onclick = function (e) {
		if(aux === null){
			return;
		}
		if (aux != e.srcElement.parentNode.id){
			btnTeam.parentNode.classList.toggle('itemMenuSelected');
			btnProcess.parentNode.classList.toggle('itemMenuSelected');

			process.classList.toggle('visible');
			team.classList.toggle('visible');
			aux = e.srcElement.parentNode.id
		} 
	}
	btnProcess.onclick = function (e) {
		if (aux != e.srcElement.parentNode.id){
			btnTeam.parentNode.classList.toggle('itemMenuSelected');
			btnProcess.parentNode.classList.toggle('itemMenuSelected');

			process.classList.toggle('visible');	
			team.classList.toggle('visible');
			aux = e.srcElement.parentNode.id
		}
    }
    
}   

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
    // scrollBar:false,
    fixedElements:'.nav-fullscreen, .hamburger .brandIcon',
});

// -- START Page loader --//
var pageLoader = function( action , time, path) {
    let pageLoader = document.querySelector( 'div.page-loader' );
    if (action === "close"){
        setTimeout(function () {
            pageLoader.classList.add('page-loader-close');
        }, time);
        pageLoader.style.top = window.scrollY +'px';
    } else if (action === "open"){
        pageLoader.classList.add('page-loader-open');
        setTimeout(function () {
			window.location.href = path;
        }, time);
        
    } 
};

//Ir al Home con efecto
var exitHome = function(where) {
	var linkHome = document.querySelector(".brandIcon img");
    linkHome.onclick = function (e) {
		console.log("ACA");
        // e.preventDefault();
        pageLoader("open", 500, "/");
    }
};
