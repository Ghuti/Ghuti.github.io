scoreID = document.querySelector("#score p");
multiplicatorID = document.querySelector("#multiplicator p");
autoclicID = document.querySelector("#autoclic p");
//superbID =document.query.Selector("#superb p");
buttonClic = document.querySelector("#buttonClic");
buttonMult = document.querySelector("#buttonMult");
buttonAutoclic = document.querySelector("#buttonAutoclic");
//buttonsuperb = document.querySelector("#buttonsuperb");


// Default values
score = 0;
countMultiplicator = 1;
countAutoclic = 0;
//countsuperb = 0;
priceMultiplicator = 10;
priceAutoclic = 20;
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