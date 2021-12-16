fetch(
  "https://api.openweathermap.org/data/2.5/onecall?lat=43.8730&lon=-111.7483&exclude=minutely,hourly&units=imperial&appid=a43ba410283e2662771283e580785baa"
)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    document.getElementById("weatherData").innerHTML = `<div class="todayInfo">
    <p class="currentTemp">Current Temperature: ${Math.round(data.current.temp)}°f</p>
    <p class="currentDesc">Current description: ${data.current.weather
      .map((a) => a.description)
      .join("/")}</p>
    <p class="humidity">Humidity: ${data.current.humidity}</p>
  </div>
  <div class="threeDays">
    <div id="day1" class="dailyInfo">
      <p class="day">${new Date()
        .toDateString()
        .substring(0, new Date().toDateString().length - 4)}</p>
      <p class="temperature">${Math.round(data.daily[1].temp.day)}°f</p>
    </div>
    <div id="day2" class="dailyInfo">
      <p class="day">${new Date(new Date().setDate(new Date().getDate() + 1))
        .toDateString()
        .substring(0, new Date().toDateString().length - 4)}</p>
      <p class="temperature">${Math.round(data.daily[2].temp.day)}°f</p>
    </div>
    <div id="day3" class="dailyInfo">
      <p class="day">${new Date(new Date().setDate(new Date().getDate() + 2))
        .toDateString()
        .substring(0, new Date().toDateString().length - 4)}</p>
      <p class="temperature">${Math.round(data.daily[3].temp.day)}°f</p>
    </div>`;

    const alertMessage = document.getElementById("weatherAlert");

    if (data.hasOwnProperty("alerts")) {
      const alertInfo = document.getElementById("weatherInfo");

      alertInfo.innerHTML = `<div class="backgroundDim">
        ${data.alerts[0].description.split("\n").join("<br/>")}<br/>
        <button onclick="removeMe()" id="closeButton">&times;</button></div>`;
    } else {
      alertMessage.remove();
    }
  });

function removeMe() {
  const alertMessage = document.getElementById("weatherAlert");
  alertMessage.remove();
}


 
const info = [
  { image: "sugar2.jpg", alt: "First slide" },
  { image: "sug2.jpg", alt: "Second slide" },
  { image: "sug3.jpg", alt: "Third slide" },
  { image: "sug1.jpg", alt: "Fourth slide" },
];


document.getElementById("caroHere").innerHTML = info.map((a,index)=>{
  return `<div class="carousel-item${!index?" active":""}">
  <img
    class="d-block w-100"
    src="images/${a.image}"
    alt="${a.alt}"
  />
  </div>`;
}).join("");

document.getElementById("caroInsert").innerHTML = info.map((a,index)=>{
  return  `<li data-target="#carouselExampleIndicators" data-slide-to="${index}"${!index?' class="active"':""}></li>`;
}).join("");