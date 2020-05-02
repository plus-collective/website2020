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
var exitIcon = function() {
    var linkHome = document.querySelector(".brandIcon a");
    linkHome.onClick = function (e) {
        e.preventDefault();
        pageLoader("open", 500);
    }
};

//SALIR DEL HOME CON EL EFECTO CORTINA
var exitHome = function () {
    var hereBtn = document.querySelector(".usHomeLeft button");
    hereBtn.onclick = function (e) {
        pageLoader("open",500, "/about.html");
    }
};