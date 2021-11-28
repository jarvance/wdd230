

const apiURL = `https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=a43ba410283e2662771283e580785baa`;
fetch(apiURL).then(res=>res.json()).then((res)=> {
  console.log(res)
  document.getElementById("curWeather").innerHTML = res.weather[0].main ||""
  document.getElementById("curTemp").innerHTML = res.main.temp ||""
  document.getElementById("curChill").innerHTML = res.main.feels_like ||""
  document.getElementById("curHumid").innerHTML = res.main.humidity ||""
  document.getElementById("curSpeed").innerHTML = res.wind.speed ||""
  
})



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
