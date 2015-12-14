var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

//visitors schema, list all keys that will be stored in the collection (DB)
var ContactSchema   = new Schema({
	email:String,
	reason: String,
	message: String,
	sendCopy: Boolean,
	ip_address:Object,
	create_date:Date
});

//pre save the date for each entry
ContactSchema.pre('save', function(next){
  this.create_date = new Date();
  next();
});

module.exports = mongoose.model('Contact', ContactSchema);