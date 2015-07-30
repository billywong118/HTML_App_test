function addbalance() {
	var amount = prompt("Specify amount to be added");
	while (isNaN(amount)) {		
		amount = prompt("Please enter a number amount to be added");
	};
	var balance = document.getElementById("balance");
	var next_balance = ( Number(balance.innerHTML.substring(1)) + Number(amount) ).toFixed(2);
	balance.innerHTML = '$' + next_balance.toString();
	updateBalance();
}

function subtractbalance() {
	var amount = prompt("Specify amount to be subtracted");
	while (isNaN(amount)) {		
		amount = prompt("Please enter a number amount to be subtracted");
	};
	var balance = document.getElementById("balance");
	var next_balance = ( Number(balance.innerHTML.substring(1)) - Number(amount) ).toFixed(2);
	balance.innerHTML = '$' + next_balance.toString();
	updateBalance();
}

/*work on where the negative sign is */

function updateBalance(new_balance) {
	var balance = Number(document.getElementById("balance").innerHTML.substring(1));
	var object;
	var query = new Parse.Query(UserObject);
	query.find({
	success: function(results) {
		for (var i = 0; i < results.length; i++) {
			object = results[i];		
		}
		object.set('balance',balance);
		object.save(null, {
		success: function(object) {
		alert('Balance updated!');
  }
});
	},
	error: function(error) {
		alert("Error: " + error.code + " " + error.message);
	}
	})
}


function navopen() {
	document.getElementById("nav-bar").style.display = 'inline-block';
	var home = document.getElementById("home");
	var goals = document.getElementById("goals");
	var goal_creation = document.getElementById("goal-creation");
	var alerts = document.getElementById("alerts");
	var gps = document.getElementById("gps");
	if (home !== null)
		{home.style.margin = '-419px 0 0 0px';}
	else if (goals !== null)
		{goals.style.margin = '-419px 0 0 0px';}
	else if (goal_creation !== null)
		{goal_creation.style.margin = '-419px 0 0 0px';}
	else if (alerts !== null)
		{alerts.style.margin = '-419px 0 0 0px';}
	else if (gps !== null)
		{gps.style.margin = '-419px 0 0 0px';}
	
	/*-80px for each extra thing on nav bar*/
}

function navclose() {
	var navvy = document.getElementById("nav-bar");
	navvy.style.display = "none";
	var home = document.getElementById("home");
	var goals = document.getElementById("goals");
	var goal_creation = document.getElementById("goal-creation");
	var alerts = document.getElementById("alerts");
	var gps = document.getElementById("gps");
	if (home !== null)
		{home.style.margin = '0 0 0 0';}
	else if (goals !== null)
		{goals.style.margin = '0 0 0 0';}
	else if (goal_creation !== null)
		{goal_creation.style.margin = '0 0 0 0px';}
	else if (alerts !== null)
		{alerts.style.margin = '0 0 0 0px';}
	else if (gps !== null)
		{gps.style.margin = '0 0 0 0px';}
}

function alert_status() {
	var switcher = document.getElementById("myonoffswitch");
	if (!switcher.checked) {
		document.getElementById("alert-options").style.display = 'none';
	}
	else {
		document.getElementById("alert-options").style.display = 'inline-block';
	}
}

function logout()  {
	 window.localStorage.clear();
	 alert("You have successfully been logged out");
	 window.location.href="welcome.html";
}