var mongoose= require('mongoose');

//policy details schema
var userSchema =  mongoose.Schema({
	name:{
		type:String,
		required: true
	},
	userId:{
		type: String,
		required: true
	}

});

var User = module.exports = mongoose.model('User', userSchema, 'User');

//Get users
module.exports.getUsers = function(callback, limit){
	User.find(callback).limit(limit);
}

module.exports.getUserByUserId = function( query,callback){
	User.findOne(query, callback);
}
