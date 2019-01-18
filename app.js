var bodyParser = require('body-parser');
var express = require('express');
var app = express();
var mongoose = require('mongoose');
const cors = require('cors');
const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');

app.use(cors());

Policy = require('./models/policys.js')
User = require('./models/users.js');


//Connect to mongoose
mongoose.connect('mongodb://localhost/smartInquiry');
var db= mongoose.connection;

/*const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://disharmony.auth0.com/.well-known/jwks.json`,
  }),
  aud: 'http://localhost:8080/',
  issuer: 'https://disharmony.auth0.com/',
  algorithms: [ 'RS256' ],
});*/

//app.use(checkJwt);


app.get('/', function(req,res){
	res.send('Hello World again!');
});

app.get('/api/policies', function(req, res){
	Policy.getPolicies(function(err, policies){
		if(err){
			throw err;
		}
		res.json(policies);
	});
});
//post request to filter policies
app.post('/api/policies', function(req, res){
	var searchUser = req.body.userId;
	var searchCategory = req.body.category;
	var query ;
	if(searchUser && searchCategory ){
		query = { userId: searchUser,  category: searchCategory  }; 
		console.log(query);
	}else if(searchUser){
		query = { userId: searchUser }; 
		console.log(query);
	}else if(searchCategory){
		query = { category: searchCategory  }; 
		console.log(query);
	 }
	else{
		console.log('Cannot find any policies');
	}
	
	if(query){
		Policy.getPolicyByCategory(query, function(err, policy){
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
	}
});
app.get('/api/policies/user/:userId', function(req, res){
	var query = { userId : req.params.userId };
	console.log(query);
	User.getUserByUserId(query, function(err, user){
		if(err ){
			throw err;
		}
		else if(user){
			res.json(user);
		}
		else{
			console.log('Some problem occured');
		}
	});
});

app.get('/api/policies/user/:userId/policy/:policyId', function(req, res){
	var query = { userId : req.params.userId , policyNum : req.params.policyId };
	console.log(query);
	Policy.getPolicyByPolicyId(query, function(err, policy){
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

app.get('/api/policies/user/:userId/category/:category', function(req, res){
	
	var query = { userId : req.params.userId , policyCategory: req.params.category };
	console.log(query);
	Policy.getPolicyByCategory(query, function(err, policy){
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

app.listen(8080);
console.log('Running on port 8080');
