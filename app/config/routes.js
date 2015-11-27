var express = require( 'express' );
var apiRouter = express.Router();
var visitorsController = require('../controllers/visitorsControllers');

//set up the handlers for get/post
apiRouter.route( "/visitors" )
	.post(visitorsController.create)
	.get(visitorsController.all);

module.exports = apiRouter;