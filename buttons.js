function addbalance() {
	var amount = prompt("Specify amount to be added");
	while (isNaN(amount)) {		
		amount = prompt("Please enter a number amount to be added");
	};
	var balance = document.getElementById("balance");
	balance.innerHTML = '$' + ( Number(balance.innerHTML.substring(1)) + Number(amount) ).toFixed(2).toString();
}

function subtractbalance() {
	var amount = prompt("Specify amount to be subtracted");
	while (isNaN(amount)) {		
		amount = prompt("Please enter a number amount to be subtracted");
	};
	var balance = document.getElementById("balance");
	balance.innerHTML = '$' + ( Number(balance.innerHTML.substring(1)) - Number(amount) ).toFixed(2).toString();
}

function navopen() {
	document.getElementById("nav-bar").style.display = 'block';
}

function navclose() {
	var navvy = document.getElementById("nav-bar");
	navvy.style.display = "none";
}