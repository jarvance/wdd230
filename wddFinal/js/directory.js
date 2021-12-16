fetch("json/dir.json")
  .then(function (response) {
    return response.json();
  })
.then((res)=>{
  console.log(res);
  var i = -1;
  document.getElementById('fetchData').innerHTML = res.business.map((a,index) =>{
      i++;
      return (i % 3 == 0 ? `<div class="row">` : ``) + `<div class="container">
      <img class="images" src="${a.logo}" />
        <h2 class="placeName">${a.name}</h2>
        <h4 class="businessSite"><a href="${a.businessSite}">${a.businessSite}</a></h4>
        <h6 class="contactInfo">Contact Info: ${a.contact}</h6>
      
    </div>` + (i % 3 == 2 ? `</div>` : ``);
  
  })
  .join("");
  if(window.innerWidth <= 800){
    makeList();
    }
})

var elements = document.getElementsByClassName("container");
var i;
function makeList() {
  for (i = 0; i < elements.length; i++) {
  elements[i].style.width = "95%";
  elements[i].style.minHeight = "0px";
  elements[i].getElementsByTagName("img")[0].style.width = "25%";
}
}

function makeGrid() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.width = "25%";
    elements[i].style.minHeight = "260px";
    
    elements[i].getElementsByTagName("img")[0].style.width = "100%";
  }
}

function checkSize() { 
  if(window.innerWidth <= 800){
  makeList();
  }
}

window.addEventListener("resize", checkSize);