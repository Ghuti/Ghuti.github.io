var choise = document.getElementById("choise");
//var button = "button" ;
reponce = Math.ceil(Math.random()*100); 

var debug = document.getElementById("debug");
var pm = document.getElementById("pm");
//var tim = document.getElementById("tim");

var time = 60;

do {
    time - 1 ;
    var inter = setInterval('request()', 1000);
    puis :
    clearInterval(inter);
}
while (time = 0);

function showDebug() {
    debug.innerHTML = reponce;
}

    if (choise.value < reponce) {
        pm.innerHTML = "Greater: ";
    }
    if (choise.value == reponce) {
        alert ("Congratulation, the numbers is: " + reponce) ;
        pm.innerHTML = "true";
    }
    if (choise.value > reponce) {
        pm.innerHTML = "lower: ";
    }


/*function showTime() {
    tim = tim - 1;
    tim.innerHTML = tim + "s";
        if (tim.value = 0) {
        alert ("you lose");
    }
}*/



//setInterval(showTime, 1000);
showDebug();
//showTime();
//button.onclick = verifier;
