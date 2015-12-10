var express = require( 'express' );
var apiRouter = express.Router();
var visitorsController = require('../controllers/visitorsControllers');

//set up the handlers for get/post
apiRouter.route( "/visitors" )
	.post(visitorsController.create)
	.get(visitorsController.all);

apiRouter.route( "/visitor/:visitor_id" )
	.get(visitorsController.show)
	.patch(visitorsController.update)
	.delete(visitorsController.remove);

module.exports = apiRouter;