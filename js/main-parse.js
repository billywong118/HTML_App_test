Parse.initialize('M1ifyaGlqMi0qLtPDMcdr5vl75mCxon6FizGfEdJ','UOnRWMWcLfmFC8fsD0IYAnp46DLiUfEu9nGwbIzx');
var UserObject = Parse.Object.extend("Users");

var email = window.localStorage.getItem("User");
var object;

function get_balance() {
/*	var findUser = new Parse.Query(UserObject);
	findUser.find({
	success: function(results) {
		for (var i = 0; i < results.length; i++) {
			if (results[i].get("username") === email) {
			object = results[i];}			
		}
		console.log(object.get("username"));
		console.log(object.id);
	},
	error: function(error) {
		alert("Error: " + error.code + " " + error.message);
	}
	});*/
	
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
		window.localStorage.setItem("Balance", balance)
	},
	error: function(error) {
		alert("Error: " + error.code + " " + error.message);
	}
	});
	
}

/*WHAT TO WORK ON:

-NOTIFICATIONS!!!!!!!!!!!!!

*/