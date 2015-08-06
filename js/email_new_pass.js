Parse.initialize('M1ifyaGlqMi0qLtPDMcdr5vl75mCxon6FizGfEdJ','UOnRWMWcLfmFC8fsD0IYAnp46DLiUfEu9nGwbIzx');
var UserObject = Parse.Object.extend("Users");

var email = window.localStorage.getItem("User");
var object;

function send_new() {
	
	var characters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','0','1','2','3','4','5','6','7','8','9']
	
	console.log(Math.floor(Math.random()*62));
	
	/*10 random characters*/
	var new_pass = characters[Math.floor(Math.random()*62)];
	new_pass += characters[Math.floor(Math.random()*62)];
	new_pass += characters[Math.floor(Math.random()*62)];
	new_pass += characters[Math.floor(Math.random()*62)];
	new_pass += characters[Math.floor(Math.random()*62)];
	new_pass += characters[Math.floor(Math.random()*62)];
	new_pass += characters[Math.floor(Math.random()*62)];
	new_pass += characters[Math.floor(Math.random()*62)];
	new_pass += characters[Math.floor(Math.random()*62)];
	new_pass += characters[Math.floor(Math.random()*62)];
	
	console.log(new_pass);
	
	
	/*var query = new Parse.Query(UserObject);
	query.equalTo("username", email);
			query.find({
			success: function(results) {
				for (var i = 0; i < results.length; i++) {
					if (results[i].get("username") === email) {
					object = results[i];}		
				}
				object.set('password',new_pass);
				object.save(null, {
				success: function(object) {
				;
		}
		});
			},
			error: function(error) {
				alert("Error: " + error.code + " " + error.message);
			}
			})
			
			THEN EMAIL THE NEW PASS
			
			*/
	
	event.preventDefault();
}