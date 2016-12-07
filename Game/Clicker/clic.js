scoreID = document.querySelector("#score p");
multiplicatorID = document.querySelector("#multiplicator p");
autoclicID = document.querySelector("#autoclic p");
//superbID =document.query.Selector("#superb p");
buttonClic = document.querySelector("#buttonClic");
buttonMult = document.querySelector("#buttonMult");
buttonAutoclic = document.querySelector("#buttonAutoclic");
//buttonsuperb = document.querySelector("#buttonsuperb");
var s1 = document.getElementById("s1");
var scor = document.getElementById("scor");
// Default values
score = 0;
countMultiplicator = 1;
countAutoclic = 0;
//countsuperb = 0;
priceMultiplicator = 10;
priceAutoclic = 20;
suc = 0
//pricesuperb = 100;

//show
function showScore() {
	scoreID.innerHTML = "Score: " + score;
}

function showMultiplicator() {
	multiplicatorID.innerHTML = "Next multiplicator price: " + priceMultiplicator;
	buttonMult.innerHTML = "Multiplicator x" + countMultiplicator;
}

function showAutoclic() {
	autoclicID.innerHTML = "Next autoclic price: " + priceAutoclic;
	buttonAutoclic.innerHTML = "Autoclic x" + countAutoclic;
}

/*function showsuperb() {
	superbID.innerHTML = "next superb price" + pricesuperb;
	buttonsuperb.innerHTML = "superb x" + countsuperb;
}*/

//
function incrementScore() {
	score += countMultiplicator;
	showScore() ;
}


function autoclicScore() {
	score += countAutoclic;
	showScore() ;
	if(score >= 1000) {
		if(suc == 0) {
			score += 500;
			suc += 1;
			alert("Sucses: you win 500 pts");
		}
	}
	if(score >= 5000) {
		if(suc == 1) {
			score += 1000;
			suc += 1;
			countAutoclic += 1;
			alert("Sucses: you win 1000 pts and 1 autoclic");
			showAutoclic() ;
		}
	}
	scor.innerHTML = score + ": pts-clicker game";
}

/*function superbScore() {
 	score += countsuperb;
 	showScore() ;
 }*/

//
function incrementMultiplicator() {
	if (score >= priceMultiplicator) {
		score -= priceMultiplicator;
		countMultiplicator += 1;
		multiplicatorPrice();
		showScore();
		showMultiplicator();
	}
	else {
		alert("You need more point " + priceMultiplicator);
	}	
}


function multiplicatorPrice() {
	priceMultiplicator *= 2;
}

//
function incrementAutoclic() {
	if (score >= priceAutoclic) {
		score -= priceAutoclic;
		countAutoclic += 1;
		autoclicPrice();
		showScore();
		showAutoclic();
	}
	else {
		alert("You need more point " + priceAutoclic);
	}	
}

function autoclicPrice() {
	priceAutoclic *= 2;
}
/*
function incrementsuperb() {
	if (score >= pricesuperb) {
		score -= pricesuperb;
		countsuperb += 100;
		superbPrice();
		showScore();
		showsuperb();
	}
	else {
		alert("You need more point " + pricesuperb);
	}	
}
function superbPrice() {
	pricesuperb *= 2;
}
*/

/*s1 = function() {
	if(score >= 1000) {
		if(suc == 0) {
			score += 500;
			suc += 1;
			alert("Sucses: you win 500 pts");
		}
	}
}*/


//setInterval(s1, 1000);
setInterval(autoclicScore, 1000) ;
//setInterval(superbScore, 1000);
showScore();
showMultiplicator();
showAutoclic();
//showsuperb();
buttonClic.onclick = incrementScore;
buttonMult.onclick = incrementMultiplicator;
buttonAutoclic.onclick = incrementAutoclic;
//buttonsuperb.onclick = incrementsuperb;