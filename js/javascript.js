
function getLastModified(){
    document.getElementById("lastupdated").innerHTML = "Last updated: " + document.lastModified;
}

window.onload = function(){
    getLastModified();
}