var mongoose= require('mongoose');

//policy details schema
var policySchema =  mongoose.Schema({
	policyId:{
		type:String,
		required: true
	},
	customerId:{
		type:String,
		required: true
	}
	,
	policyName:{
		type: String,
		required: true
	},
	policyDueDate:{
		type: String,
		required: true
	},
	policyPremium:{
		type: String,
		required: true

	}

});

var Policy = module.exports = mongoose.model('Policy', policySchema, 'Policy');

//Get policies
module.exports.getPolicies = function(callback, limit){
	Policy.find(callback).limit(limit);
}

//Get policy by UserId
//Get policies
module.exports.getPolicyByUserId = function( query,callback){
	Policy.findOne(query, callback);
}

module.exports.getPolicyByPolicyId = function( query,callback){
	Policy.findOne(query, callback);
}

module.exports.getPolicyByCategory = function( query,callback){
	Policy.findOne(query, callback);
}