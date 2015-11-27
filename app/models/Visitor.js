var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var VisitorSchema   = new Schema({
    name:String,
	email:String,
	ip:String
});

//pre save the date for each entry
VisitorSchema.pre('save', function(next){
  this.create_date = new Date();
  next();
});


//added ip for possible banning/
module.exports = mongoose.model('Visitor', VisitorSchema);