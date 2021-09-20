
function getLastModified(){
    document.getElementsByid("lastupdated").innerHTML = document.lastModified;
}

window.onload=function(){
    getLastModified;
}