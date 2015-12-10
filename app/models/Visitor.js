var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

//visitors schema, list all keys that will be stored in the collection (DB)
var VisitorSchema   = new Schema({
    name:String,
	email:String,
	ip_address:Object,
	create_date:Date
});

//pre save the date for each entry
VisitorSchema.pre('save', function(next){
  this.create_date = new Date();
  next();
});

module.exports = mongoose.model('Visitor', VisitorSchema);