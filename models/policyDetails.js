var mongoose= require('mongoose');

//policy details schema
var policySchema =  mongoose.Schema({
	userId:{
		type:String,
		required: true
	},
	policyName:{
		type: String,
		required: true
	},
	policyAmount:{
		type: String,
		required: true
	},
	policyPremium:{
		type: String,
		required: true

	}

});

var Policy = module.exports = mongoose.model('Policy', policySchema, 'PolicyDetails');

//Get policies
module.exports.getPolicyDetails = function(callback, limit){
	Policy.find(callback).limit(limit);
}

//Get policy by UserId
//Get policies
module.exports.getPolicyByUserId = function( query,callback){
	Policy.findOne(query, callback);
}