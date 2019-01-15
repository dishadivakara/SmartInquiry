var mongoose= require('mongoose');

//policy details schema
var userSchema =  mongoose.Schema({
	name:{
		type:String,
		required: true
	},
	lanId:{
		type: String,
		required: true
	}

});

var User = module.exports = mongoose.model('Users', userSchema, 'Users');

//Get users
module.exports.getUsers = function(callback, limit){
	User.find(callback).limit(limit);
}