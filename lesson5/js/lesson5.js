var mMenu = document.querySelector(".mainMenu");
var closeMenu = document.querySelector(".closeMenu");
var openMenu = document.querySelector(".openMenu");

function getLastModified() {
  document.getElementById("lastupdated").innerHTML =
    "Last updated: " + document.lastModified;
}

function getDays() {
  var days = document.getElementsByClassName("day");
  const d = new Date();
  var dayNum = d.getDay();

  var weekday = new Array(7);

  weekday[0] = "Sun";
  weekday[1] = "Mon";
  weekday[2] = "Tue";
  weekday[3] = "Wed";
  weekday[4] = "Thu";
  weekday[5] = "Fri";
  weekday[6] = "Sat";
  
  for (var i = 0; i < 5; i++) {
    days[i].innerHTML = weekday[(i + dayNum)%7];
  }
}   

function getEvents(){
    const d = new Date();
    var dayNum = d.getDay(); 
    if (dayNum == 5){
        var friday = document.getElementById("events");
        friday.style.display="block";
    }

}

window.onload = function () {
  getLastModified();
  getDays();
  getEvents();
};

openMenu.addEventListener("click", show);
closeMenu.addEventListener("click", close);

function show() {
  mMenu.style.display = "flex";
  mMenu.style.top = "0";
  closeMenu.style.display = "block";
  openMenu.style.display = "none";
}

function close() {
  mMenu.style.display = "none";
  openMenu.style.display = "block";
}
