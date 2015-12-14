var Visitor = require('../models/Visitor');
var opbeat  = require("../config/opbeat-config");

//get all visitors in the database
function all(request, response){
	Visitor.find(function(error, visitors){
		// db.collection.find().sort( { age: -1 } )
		if(error){
			opbeat.captureError(new Error('Could not get all visitors'));
			console.log("could not get visitors " + error);
		}
		response.json(visitors);
	}).sort({create_date: -1});
}

//add a visitor to the database
function create(request, response){
	
	var ip = request.headers['x-forwarded-for'] || request.connection.remoteAddress;
	request.body.ip_address = ip;
	var visitor =  new Visitor( request.body );
	/*
	if you want to set the values by assigning directly to the visitor 
	*/
	//var visitor =  new Visitor( );
	// visitor.name = request.body.name;
	// visitor.email = request.body.email;
	// visitor.ip_address = ip;
	console.log("Logging Visitor", request.body);
	visitor.save(function(err){
		if(err){
			opbeat.captureError(new Error('Error saving visitor'));
			response.send("there was an error saving visitor" + err);
		}

		//dispatch socket event
		response.json({message: "visitor has been added"});
	});
}

//show a single visitor
function show(request, response){
	var id = request.params.visitor_id;
	Visitor.findById(id, function(error, visitor){
		if(error){
			console.log("could not find visitor");
		}
		response.json(visitor);
	});
}

//update a single visitor
function update(request, response){

	var id = request.params.visitor_id;
	var data = request.body;

	Visitor.findById(id, function(error, visitor){

		if(error) {
			console.log("could not update visitor " + error);
		}
		Object.keys(data).forEach(function(key){
			visitor.set(key, data[key]);
		})

		visitor.save(function(error){
			if(error){
				console.log("could not patch: " + error);
			}
			response.json({message: 'visitor was successfully updated '})
		})
	});
}

//remove a single visitor
function remove(request, response){
	Visitor.remove({_id: request.params.visitor_id}, function(error){
		if(error){
			console.log("could not remove the visitor");
		}
		response.json({message: "visitor successfully deleted"})
	})
}

//export all CRUD modules
module.exports = {
	all: all,
	create: create,
	show: show,
	update: update,
	remove: remove
}