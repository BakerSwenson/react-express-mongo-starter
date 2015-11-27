var Visitor = require('../models/Visitor');

//get all visitors in the database
function all(request, response){
	Visitor.find(function(error, visitors){
		if(error){
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
		if(err)
			response.send("there was an error " + err);

		//dispatch socket event
		response.json({message: "visitor has been added"});
	});
}

//export all CRUD modules
module.exports = {
	all: all,
	create: create
}