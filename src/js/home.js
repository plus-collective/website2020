import lottie from 'lottie-web';

window.onload = function(){ 
	pageLoader("close", 250);
	animations();
	menu();
	transitionFix();
    goHome();
	goToAbout();
}

// -- Load lottie animations --//
var animations = function (){

	var illustrationHome = document.querySelector("div.illHome");
	var illustrationUs = document.querySelector("div.illUs");
	var illustrationEP = document.querySelector("div.illusTeam");
	var illustrationEPmob = document.querySelector("div.illusTeam-mob");

	var pathEP = require('../assets/animations/ep.json');

	lottie.loadAnimation({
		container: illustrationHome, 
		renderer: 'svg',
		loop: true,
		autoplay: true,
		path: require('../assets/animations/home.json')
	});

	lottie.loadAnimation({
		container: illustrationUs, 
		renderer: 'svg',
		loop: true,
		autoplay: true,
		path: require('../assets/animations/us.json') 
	});

	lottie.loadAnimation({
		container: illustrationEP, 
		renderer: 'svg',
		loop: true,
		autoplay: true,
		path: pathEP
	});

	lottie.loadAnimation({
		container: illustrationEPmob, 
		renderer: 'svg',
		loop: true,
		autoplay: true,
		path: pathEP
	});

}

// -- START Menu functionality --- //
//TODO:Remember timeout in closing the menu.
var menu = function() {

	var actualMove;
	if( window.location.pathname.includes("about") || window.location.pathname.includes("404")){
		//att about A or B 
		actualMove = function(event) {
			event.preventDefault();
			if(event.target.dataset.destiny === "about"){
				pageLoader("open", 500, "/about.html");
			} else{
				pageLoader("open", 500, "/#"+event.target.dataset.destiny);
			}
		};
	} else {
		//at Home
		actualMove = function(event) {
			event.preventDefault();
			if(event.target.dataset.destiny === "about"){
				pageLoader("open", 500, "/about.html");
			} else{
				// pageLoader("toggle", 500, event.target.dataset.destiny);
				if(window.innerWidth < 768 && event.target.dataset.destiny === "works"){
					window.location.href = "/#works-m";
				} else{
					pageLoader("toggle", 500, event.target.dataset.destiny);
				}
			}
		};
	}

	var hamburgerBttn = document.querySelector( 'div.hamburger' );
	hamburgerBttn.addEventListener( 'click', toggleMenuOverlay );

	var	elements = document.getElementsByClassName("navLinks");
    for (var i = 0; i < elements.length; i++) {
        elements[i].addEventListener('click', actualMove, false);
	}
};

var toggleMenuOverlay = function () {
	var container = document.querySelector( 'div.container' ),
	overlay = document.querySelector( 'div.menu-overlay' ),
	hamburgerBttn = document.querySelector( 'div.hamburger' );

	if( overlay.classList.contains('open') ) {
		overlay.classList.remove('open');
		container.classList.remove('menu-overlay-open');
	}
	else if( !overlay.classList.contains('close') ) {
		overlay.classList.add('open');
		container.classList.add('menu-overlay-open');
	}
	hamburgerBttn.classList.toggle("hamburger--active");
};


var pageLoader = function( action , time, path) {
	let pageLoader = document.querySelector( 'div.page-loader' );
    if (action === "close"){
        setTimeout(function () {
            pageLoader.classList.remove('page-loader-open');
        }, time);
    } else if (action === "open"){
		pageLoader.classList.add('page-loader-open');
        setTimeout(function () {
			window.location.href = path;
        }, time);
	} else if (action === "toggle"){
		pageLoader.classList.add('page-loader-open');
		setTimeout(function () {
			fullpage_api.silentMoveTo(path);
			toggleMenuOverlay();
		}, 500);

		setTimeout(function () {
			pageLoader.classList.remove('page-loader-open');
		}, 1000);
    } 
};

// -- Fix for transition between Home and About#TP--//
var transitionFix = function(){
	if (window.location.href.includes("#tp")){
		fullpage_api.silentMoveTo(2);
	}
	if (window.location.href.includes("#services")){
		fullpage_api.silentMoveTo(2);
	}
	if (window.location.href.includes("#contact")){
		fullpage_api.silentMoveTo(5);
	}
	if (window.location.href.includes("#works")){
		fullpage_api.silentMoveTo(4);
	}
}

//go Home transition
var goHome = function() {
	var linkHome = document.querySelector(".brandIcon img");
	linkHome.onclick = function (e) {
		e.preventDefault();
		pageLoader("open", 500, "/");
	}
};

//Home to about transition
var goToAbout = function() {
	var hereBtn = document.querySelector(".usHomeRight button" );
	if(hereBtn !== null){
		hereBtn.onclick = function (e) {
			e.preventDefault();
			// window.location.href = "/about.html#about";
			pageLoader("open",500, "/about.html#tp");
		}
	}
};
