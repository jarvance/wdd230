
var mMenu = document.querySelector(".mainMenu");
var closeMenu = document.querySelector(".closeMenu");
var openMenu = document.querySelector(".openMenu");

function showMenu() {
  mMenu.style.display = "flex";
  mMenu.style.top = "0";
  closeMenu.style.display = "block";
  openMenu.style.display = "none";
  console.log("1")
}
 
function closeMenus() {
  mMenu.style.display = "none";
  openMenu.style.display = "flex";
}


function fixMenu(){
 if(window.innerWidth > 800){
  mMenu.style.display = "flex";
  mMenu.style.top = "0";
  closeMenu.style.display = "none";
  openMenu.style.display = "none";
 }
 else {
  mMenu.style.display = "none";
  mMenu.style.top = "0";
  closeMenu.style.display = "flex";
  openMenu.style.display = "flex";
 }

}

window.addEventListener("resize", fixMenu);

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