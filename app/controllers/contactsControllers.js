var Contact = require('../models/Contact');

//add a contact to the database
function create(request, response){
	var ip = request.headers['x-forwarded-for'] || request.connection.remoteAddress;
	request.body.ip_address = ip;
	var contact =  new Contact( request.body );

	console.log("Logging contact", request.body);
	contact.save(function(err){
		if(err){
			opbeat.captureError(new Error('Error saving contact'));
			response.send("there was an error saving contact" + err);
		}

		//dispatch socket event
		response.json({message: "contact has been added"});
	});
}

//export all CRUD modules
module.exports = { create: create };