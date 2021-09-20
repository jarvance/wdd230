
function getLastModified(){
    document.getElementByid("lastupdated").innerHTML = document.lastModified;
}

window.onload=function(){
    getLastModified;
}