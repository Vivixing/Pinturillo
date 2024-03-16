timeLeft = 99;

function countdown() {
	timeLeft--;
	document.getElementById("time").innerHTML = String( timeLeft );
	if (timeLeft > 0) {
		setTimeout(countdown, 1000);
	}
};

setTimeout(countdown, 1000);