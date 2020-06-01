import lottie from 'lottie-web';

window.onload = function(){ 
	// pageLoader("close", 100);
	animations();
	menu();
	transitionFix();
    goHome();
	// exitHome();

}

// -- Load lottie animations --//
var animations = function (){

	var illustrationHome = document.querySelector("div.illHome");
	var illustrationUs = document.querySelector("div.illUs");
	var illustrationEP = document.querySelector("div.illusTeam");
	var illustrationEPmob = document.querySelector("div.illusTeam-mob");

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
		path: require('../assets/animations/EP.json') 
	});

	lottie.loadAnimation({
		container: illustrationEPmob, 
		renderer: 'svg',
		loop: true,
		autoplay: true,
		path: require('../assets/animations/EP.json') 
	});

}

// -- START Menu functionality --- //
//TODO:Remember timeout in closing the menu.
var menu = function() {
	var container = document.querySelector( 'div.container' ),
		hamburgerBttn = document.querySelector( 'div.hamburger' ),
        overlay = document.querySelector( 'div.menu-overlay' ),
        link = document.querySelector('ul.linkList'),
		transEndEventName = 'transitionend';

	var toggleMenuOverlay = function () {
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
	silentNavigation();
	hamburgerBttn.addEventListener( 'click', toggleMenuOverlay );
    link.addEventListener( 'click', toggleMenuOverlay );

};

// Scroll fot menu
var silentNavigation = function(){

	if( window.location.pathname.includes("about") || window.location.pathname.includes("404")){
		//att about A or B 
		var actualMove = function(event) {
			event.preventDefault();
			if(event.target.dataset.destiny === "about"){
				window.location.href = "/about.html";
				// pageLoader("open", 500, "/about.html");
			} else{
				window.location.href = "/#"+event.target.dataset.destiny;
				// pageLoader("open", 500, "/#"+event.target.dataset.destiny);
			}
			
		};
	} else {
		//at Home
		var actualMove = function(event) {
			
			if(event.target.dataset.destiny === "about"){
				event.preventDefault();
				window.location.href = "/about.html";
				// pageLoader("open", 500, "/about.html");
			} else{
				// pageLoader("toggle", 500, event.target.dataset.destiny);
				fullpage_api.silentMoveTo(event.target.dataset.destiny);
			}
		};
	}
	var elements = document.getElementsByClassName("navLinks");
    for (var i = 0; i < elements.length; i++) {
        elements[i].addEventListener('click', actualMove, false);
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

//-- START Page loader --//
var pageLoader = function( action , time, path) {
    let pageLoader = document.querySelector( 'div.page-loader' );
    if (action === "close"){
        setTimeout(function () {
            pageLoader.classList.add('page-loader-close');
        }, time);
        pageLoader.style.top = window.scrollY +'px';
    } else if (action === "open"){
		pageLoader.classList.remove('page-loader-close');
        setTimeout(function () {
			window.location.href = path;
        }, time);
    } else if (action === "toggle"){
		pageLoader.classList.remove('page-loader-close');
        setTimeout(function () {
			fullpage_api.silentMoveTo(path);
			console.log("hgola");
			pageLoader.classList.add('page-loader-close');
        }, time);
    } 
};

//Ir al Home con efecto
var goHome = function() {
	var linkHome = document.querySelector(".brandIcon img");
	linkHome.onclick = function (e) {
		e.preventDefault();
		window.location.href = "/"
		// pageLoader("open", 500, "/");
	}
};

//SALIR DEL HOME CON EL EFECTO CORTINA
var goToAbout = function() {
	var hereBtn = document.querySelector(".usHomeLeft button" );
	if(hereBtn !== null){
		hereBtn.onclick = function (e) {
			e.preventDefault();
			window.location.href = "/about.html#about";
			// pageLoader("open",500, "/about.html#about");
		}
	}
};
