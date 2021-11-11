const mainMenu = document.querySelector('.mainMenu')
const closeMenu = document.querySelector('.closeMenu')
const openMenu = document.querySelector('.openMenu')

function getLastModified(){
    document.getElementById("lastupdated").innerHTML = "Last updated: " + document.lastModified;
}

window.onload = function(){
    getLastModified();
}


openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
    closeMenu.style.display = 'block';
    openMenu.style.display = 'none';
}

function close(){
    mainMenu.style.display = 'none';
    openMenu.style.display = 'block';
}

function adjustRating(rating) {
    document.getElementById("ratingvalue").innerHTML = rating;
}