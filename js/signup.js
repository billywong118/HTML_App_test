Parse.initialize('M1ifyaGlqMi0qLtPDMcdr5vl75mCxon6FizGfEdJ','UOnRWMWcLfmFC8fsD0IYAnp46DLiUfEu9nGwbIzx');
var UserObject = Parse.Object.extend("Users");
var userObject = new UserObject();


function create() {
/*var first_name = $("#first_name").val();
var last_name = $("#last_name").val();
var email = $("#email").val();
var email2 = $("#email2").val();
var user = $("#user").val();
var password = $("#password").val();
var password2 = $("#password2").val();*/

var first_name = document.getElementById("first_name").value;
var last_name = document.getElementById("last_name").value;
var email = document.getElementById("email").value;
var email2 = document.getElementById("email2").value;
var user = document.getElementById("user").value;
var password = document.getElementById("password").value;
var password2 = document.getElementById("password2").value;

/*document.getElementById().value*/


userObject.set("first_name", first_name);
userObject.set("last_name", last_name);
userObject.set("email", email);
userObject.set("user", user);
userObject.set("password", password);

userObject.save(null, {
  success: function(userObject) {
    // Execute any logic that should take place after the object is saved.
    alert('New object created' + email);
  },
  error: function(userObject, error) {
    // Execute any logic that should take place if the save fails.
    // error is a Parse.Error with an error code and message.
    alert('Failed to create new object, with error code: ' + error.message);
  }
});
}


	
