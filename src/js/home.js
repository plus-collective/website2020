import fullpage from 'fullpage.js';

window.onload = function(){ 
    pageLoader("close", 500);
    menu();
    goToAbout();
	exitHome();
    usMenu();
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
	silentNavigation();
	hamburgerBttn.addEventListener( 'click', toggleMenuOverlay );
    link.addEventListener( 'click', toggleMenuOverlay );

};

// Scroll fot menu
var silentNavigation = function(){
    var elements = document.getElementsByClassName("navLinks");
	
	if( ! window.location.pathname.includes("about")){
		//at Home
		var actualMove = function(event) {
			
			if(event.target.dataset.destiny === "about"){
				event.preventDefault();
				pageLoader("open", 500, "/about.html");
			} else{
				fullpage_api.silentMoveTo(event.target.dataset.destiny);
			}
		};
	} else{
		//att about A or B 
		var actualMove = function(event) {
			event.preventDefault();
			if(event.target.dataset.destiny === "about"){
				pageLoader("open", 500, "/about.html");
			} else{
				pageLoader("open", 500, "/#"+event.target.dataset.destiny);
			}
			
		};
	}

    for (var i = 0; i < elements.length; i++) {
        elements[i].addEventListener('click', actualMove, false);
    }
};

// PARA PAGINA US
var usMenu = function (){

	var btnTeam = document.querySelector("#btnTeam a")
	var btnProcess = document.querySelector("#btnProcess a")

	if(btnTeam === null || btnProcess === null){
		return ;
	}

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

			process.classList.toggle('active');
			team.classList.toggle('active');
			aux = e.srcElement.parentNode.id
		} 
	}
	btnProcess.onclick = function (e) {
		if (aux != e.srcElement.parentNode.id){
			btnTeam.parentNode.classList.toggle('itemMenuSelected');
			btnProcess.parentNode.classList.toggle('itemMenuSelected');

			process.classList.toggle('active');	
			team.classList.toggle('active');
			aux = e.srcElement.parentNode.id
		}
	}
}

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
var exitHome = function() {
	var linkHome = document.querySelector(".brandIcon img");
    linkHome.onclick = function (e) {
        e.preventDefault();
        pageLoader("open", 500, "/");
    }
};

//SALIR DEL HOME CON EL EFECTO CORTINA
var goToAbout = function() {
	var hereBtn = document.querySelector(".usHomeLeft button" );
	if(hereBtn !== null){
		hereBtn.onclick = function (e) {
			e.preventDefault();
			pageLoader("open",500, "/about.html#about");
		}
	}
};
