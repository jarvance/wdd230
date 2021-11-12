const requestURL ="https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); // temporary checking for valid response and data parsing
    const prophets = jsonObject["prophets"];
    let grids = document.getElementById("grid-container");
    prophets.forEach((prophet) => {
        let divItem = document.createElement("div");
        divItem.classList.add("grid-item");
        let card = document.createElement("section");
        let h2 = document.createElement("h2");
        let birthplace = document.createElement("p");
        let birthdate = document.createElement("p");
        let image = document.createElement("img");
       
        h2.innerHTML = '<span>' + prophet.name + " " + prophet.lastname +'</span>';
        birthdate.innerHTML = `<strong>Date of Birth:</strong> ${prophet.birthdate}`;
        birthplace.innerHTML = `<strong>Place of Birth:</strong> ${prophet.birthplace}`;
        image.src = `${prophet.imageurl}`;
        card.appendChild(h2);
        card.appendChild(birthdate);
        card.appendChild(birthplace);
        card.appendChild(image);
        divItem.appendChild(h2);
        divItem.appendChild(birthdate);
        divItem.appendChild(birthplace);
        divItem.appendChild(image);
        
        //output to html here
        document.querySelector("div#grid-container").appendChild(divItem);  
        document.querySelector("div.cards").appendChild(card);
               
    });
  });

