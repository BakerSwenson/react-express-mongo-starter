var Visitor = require('../models/Visitor');
var opbeat  = require("../config/opbeat-config");

//get all visitors in the database
function all(request, response){
	Visitor.find(function(error, visitors){
		if(error){
			opbeat.captureError(new Error('Could not get all visitors'));
			console.log("could not get visitors " + error);
		}
		response.json(visitors);
	});
}

//add a visitor to the database
function create(request, response){
	
	var ip = request.headers['x-forwarded-for'] || request.connection.remoteAddress;
	request.body.ip_address = ip;
	var visitor =  new Visitor( request.body );
	
	visitor.name = request.body.name;
	visitor.email = request.body.email;
	visitor.ip = request.body.ip;
	
	visitor.save(function(err){
		if(err){
			opbeat.captureError(new Error('Error saving visitor'));
			response.send("there was an error saving visitor" + err);
		}
		console.log("opbear ", opbeat);

		//dispatch socket event
		response.json({message: "visitor has been added"});
	});
}

//export all CRUD modules
module.exports = {
	all: all,
	create: create
}