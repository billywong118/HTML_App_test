Parse.initialize('M1ifyaGlqMi0qLtPDMcdr5vl75mCxon6FizGfEdJ','UOnRWMWcLfmFC8fsD0IYAnp46DLiUfEu9nGwbIzx');
var UserObject = Parse.Object.extend("Users");

var email = window.localStorage.getItem("User");
var object;

function get_balance() {
	
	var balance;
	var query = new Parse.Query(UserObject);
	query.select('username','balance');
	query.find({
	success: function(results) {
		/*alert("Successfully retrieved " + results.length + " scores.");*/
		// Do something with the returned Parse.Object values
		for (var i = 0; i < results.length; i++) {
			if (results[i].get("username") === email) {
			balance = results[i].get("balance");
			}
		}
		document.getElementById("balance").innerHTML = '$' + balance.toFixed(2).toString();
		window.localStorage.setItem("Balance", balance);
	},
	error: function(error) {
		alert("Error: " + error.code + " " + error.message);
	}
	});
	
}

function get_goals() {
	var goals;
	var today = new Date().getFullYear().toString() + '-' + (new Date().getMonth()+1).toString() + '-' + new Date().getDate().toString();
	var query = new Parse.Query(UserObject);
	var Balance = window.localStorage.getItem("Balance");
	query.select('username','goals');
	query.find({
	success: function(results) {
		for (var i = 0; i < results.length; i++) {
			if (results[i].get("username") === email) {
			goals = results[i].get("goals");
			}
		}
		for (var i = 0; i < goals.length; i++) {
		var goals_holder = document.getElementById("current_goals");
		var row = goals_holder.insertRow(-1);
		var cell = row.insertCell();
		var timeDiff = Math.abs(new Date((goals[i])[2]).getTime() - new Date(today).getTime());
		var diffDays = Math.round(timeDiff / (1000 * 60 * 60 * 24)); 
		var name_of_goal = ((goals[i])[0]).replace(' ','') + "_expand";
		cell.innerHTML = "<div><div class='clickopen' onclick='expand(this)' id=" + ((goals[i])[0]).replace(' ','') +">" + (goals[i])[0] + "</div><div class='current_goal' style='display:none' id=" + name_of_goal +">Cost:</br>$" + (goals[i])[1] + "</br></br>Time Left to Complete Goal:</br>" + diffDays + " days</br></br>Money Saved:</br>$" + Balance +"</br></br>Money Needed:</br>$" + ((goals[i])[1] - Balance).toFixed(2) + "</br></div></div>";
		}
	},
	error: function(error) {
		alert("Error: " + error.code + " " + error.message);
	}
	});
	
}

function expand(thing) {	
	x = document.getElementById(thing.id + "_expand");
	if (x.style.display.match("none")) {
		x.style.display = "block";
	}
	else {
	x.style.display = "none";
	}
}

function create_goal() {
	var goals;
	var goal_name = document.getElementById("goal_name").value;
	var goal_cost = document.getElementById("goal_cost").value;
	var goal_date = document.getElementById("goal_date").value;
	var query = new Parse.Query(UserObject);
	query.select('username','goals');
	query.find({
	success: function(results) {
		for (var i = 0; i < results.length; i++) {
			if (results[i].get("username") === email) {
			goals = results[i].get("goals");
			}
		}
		
		goals.unshift([goal_name, goal_cost, goal_date]);
		
		query.find({
	success: function(results) {
		for (var i = 0; i < results.length; i++) {
			if (results[i].get("username") === email) {
			object = results[i];
			}		
		}
		object.set('goals',goals);
		object.save(null, {
		success: function(object) {
		alert('Goals updated!');
		window.location.href = "goals.html";
  }
});
	},
	error: function(error) {
		alert("Error: " + error.code + " " + error.message);
	}
	})
	
	},
	error: function(error) {
		alert("Error: " + error.code + " " + error.message);
	}
	});
	event.preventDefault();
}

function updatePassword() {
	
	var email = window.localStorage.getItem("User");

	var current_pass = document.getElementById("current_pass").value;
	var new_pass_one = document.getElementById("resetpass1").value;
	var new_pass_two = document.getElementById("resetpass2").value;
	var password;
	var correct = false;
	
	var query = new Parse.Query(UserObject);
	query.equalTo("username", email);
	query.find({
	success: function(results) {
		if (results.length >= 1) {
			for (var i = 0; i < results.length; i++) {
			password = results[i].get("password");
			if (password === current_pass) {
				correct = true;
			};
		if (correct && new_pass_one === new_pass_two && password !== new_pass_one) {
			var object;
			query.find({
			success: function(results) {
				for (var i = 0; i < results.length; i++) {
					if (results[i].get("username") === email) {
					object = results[i];}		
				}
				object.set('password',new_pass_one);
				object.save(null, {
				success: function(object) {
				alert('Password updated!');
				window.location.href = "settings.html";
		}
		});
			},
			error: function(error) {
				alert("Error: " + error.code + " " + error.message);
			}
			})
		}
		else if (new_pass_one !== new_pass_two) {
			alert("The two passwords did not match. Please check and re-enter them.")
		}
		else if (password !== current_pass){
			alert("The current password you entered is not correct. Please try again");
			window.location.href = "settings.html";
		}
		else if (password === new_pass_one) {
			alert("The new password you entered is the current one. Please enter a new password!");
			window.location.href = "settings.html";
		}
		else {
			alert("Oh no! The app has malfunctioned!")
		}
		event.preventDefault();	
				}
			}
		},
  error: function(error) {
    alert("Error: " + error.code + " " + error.message);
  }
});
	
}