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
			object = results[i].id;
			balance = results[i].get("balance");
			
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

-WHEN CHANGING BALANCE, MAKE SURE CHANGES ARE APPLIED TO THE PARSE DATABASE(UPDATING OBJECTS)
-NOTIFICATIONS!!!!!!!!!!!!!

*/