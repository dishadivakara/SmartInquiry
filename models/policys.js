var mongoose= require('mongoose');

//policy details schema
var policySchema =  mongoose.Schema({
	policyNum:{
		type:String,
		required: true
	},
	userId:{
		type:String,
		required: true
	}
	,
	policyOwner:{
		type: String,
		required: true
	},
	policyCategory:{
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

	},
	policyCreatedDate:{
		type: String,
		required: true

	},
	policypremiumDueDate:{
		type: String,
		required: true

	},
	policyStatus:{
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
