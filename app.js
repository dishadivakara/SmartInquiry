var bodyParser = require('body-parser');
var express = require('express');
var app = express();
var mongoose = require('mongoose');

Policy = require('./models/policyDetails.js')
User = require('./models/users.js');


//Connect to mongoose
mongoose.connect('mongodb://localhost/smartInquiry');
var db= mongoose.connection;

app.get('/', function(req,res){
	res.send('Hello World again!');
});

app.get('/api/policies', function(req, res){
	Policy.getPolicyDetails(function(err, policies){
		if(err){
			throw err;
		}
		res.json(policies);
	});
});

app.get('/api/policies/:userId', function(req, res){
	var query = { userId : req.params.userId };
	console.log(query);
	Policy.getPolicyByUserId(query, function(err, policy){
		if(err ){
			throw err;
		}
		else if(policy){
			res.json(policy);
		}
		else{
			console.log('Some problem occured');
		}
	});
});

app.get('/api/users', function(req, res){
	User.getUsers(function(err, users){
		if(err){
			throw err;
		}
		res.json(users);
	});
});

app.listen(3000);
console.log('Running on port 3000');