var opbeat  = require("./app/config/opbeat-config");

// call the packages we need
var express    			= require('express');
var app        			= express();
var bodyParser 			= require('body-parser');
var mongoose   			= require('mongoose');
var server 				= require('http').createServer(app);
var io 					= require('socket.io').listen(server);
var ecstatic 			= require('ecstatic');
var cors				= require('cors');

//set up cors for cross origin requests
app.use(cors());

//connect to mongo db
//determine if we're in dev vs. production
var db = process.env.MONGOLAB_URI || "mongodb://localhost:27017/react-starter-visitors"
mongoose.connect(db);

// this will take the body of your request and parse it to json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// set our port
// by default, ecstatic uses port 8000
var port = process.env.PORT || 8000;

// ROUTES FOR OUR API
// =============================================================================

// set our router
var apiRouter = require( "./app/config/routes" );

//CORS MIDDLEWARE
apiRouter.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', apiRouter);

//tell the application the /public directory is the root directory
//if page does not exist, go to 404.html
app.use(ecstatic({ root: __dirname + '/public', handleError:false }));
app.get('*', function(request, response){
	response.sendfile("./public/index.html");
});

// SOCKET.IO Integration
// =============================================================================
//socket.io events here
io.on('connection', function(socket){
	io.emit("HELLO", {welcome: "Socket is Sending to Client"});
});

// START THE SERVER
// =============================================================================
server.listen(port);
console.log('Listening on port ' + port);

