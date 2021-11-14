const mainMenu = document.querySelector('.mainMenu')
const closeMenu = document.querySelector('.closeMenu')
const openMenu = document.querySelector('.openMenu')

const requestURL ="https://byui-cit230.github.io/weather/data/towndata.json";
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })

.then((res)=>{
    console.log(res);
    document.getElementById('fetchData').innerHTML = res.towns.map((a,index) =>{
        return `<div class="container">
        <div class="textContent _${index%2}">
          <h2 class="placeName">${a.name}</h2>
          <h4 class="motto">${a.motto}</h4>
          <h6 class="yearFound">Year Founded: ${a.yearFounded}</h6>
          <h6 class="thePop">Population: ${a.currentPopulation}</h6>
          <h6 class="rainfall" >Annual Rain fall: ${a.averageRainfall}</h6>
        </div>
        <img id="images" src="https://picsum.photos/1600/900?random=${index}" />
      </div>`
    
    })
    .join("");


})









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