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


let displayTime;

if(localStorage.getItem("lastVisited")){
    let lastVisit = localStorage.getItem("lastVisited");
    displayTime = Math.round((Date.now() - lastVisit)/1000/60/60/24);
}

if(displayTime){
    document.querySelector('#lastVisit').innerHTML = displayTime + " days ago";
}
else{
    document.querySelector('#lastVisit').innerHTML = "Today";
}

localStorage.setItem("lastVisited", Date.now());