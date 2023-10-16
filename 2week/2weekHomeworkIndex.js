
function toggleMenu() {
    var openmenu = document.getElementById("openmenu");
    var main = document.getElementById("main");
    var overlay = document.getElementById("overlay");
    if (getComputedStyle(openmenu).left === "-230px") {
        openmenu.style.left = "0px";
        overlay.style.display = "block";
        main.style.marginLeft = "85px";
    } 
    else{
        openmenu.style.left = "-230px";
        overlay.style.display = "none";
        main.style.marginLeft = "85px";
    }
}