Parse.initialize('M1ifyaGlqMi0qLtPDMcdr5vl75mCxon6FizGfEdJ','UOnRWMWcLfmFC8fsD0IYAnp46DLiUfEu9nGwbIzx');
UserObject = Parse.Object.extend("Users");

$("#create-account").submit(function(e) {
	e.preventDefault();

	//get values
	var first_name = $("#first_name").val();
	var last_name = $("#last_name").val();
	var email = $("#email").val();
	var email2 = $("#email2").val();
	var user = $("#user").val();
	var password = $("#password").val();
	var password2 = $("#password2").val();

	//TBD: Validation
	var user = new UserObject();
	
	if (email === email2 && password === password2) {
	user.save(
			{
				first_name:first_name,
				last_name:last_name,
				email:email,
				user:user,
				password:password
			},{
				success:function(object) {
					console.log("Saved object");
					doAlert("User Saved!", function() { document.location.href='login.html'; });
				},
				error:function(model, error) {
					console.log("Error saving");
				}
});}

});
	
	
	

	
