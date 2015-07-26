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
	document.getElementById("nav-bar").style.display = 'inline-block';
	var home = document.getElementById("home");
	var goals = document.getElementById("goals");
	var goal_creation = document.getElementById("goal-creation");
	if (home !== null)
		{home.style.margin = '-499px 0 0 0px';}
	else if (goals !== null)
		{goals.style.margin = '-499px 0 0 0px';}
	else if (goal-creation !== null)
		{goal_creation.style.margin = '-499px 0 0 0px';}
	
}

function navclose() {
	var navvy = document.getElementById("nav-bar");
	navvy.style.display = "none";
	var home = document.getElementById("home");
	var goals = document.getElementById("goals");
	var goal_creation = document.getElementById("goal-creation");
	if (home !== null)
		{home.style.margin = '0 0 0 0';}
	else if (goals !== null)
		{goals.style.margin = '0 0 0 0';}
	else if (goals !== null)
		{document.getElementById("goal-creation").style.margin = '-499px 0 0 0px';}
}