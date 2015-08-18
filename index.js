// Include required modules.
var express = require('express');
var bodyParser = require('body-parser');

// include routes and utilities
var config = require('./config').config;
var utils = require('./lib/utils');
var api = require('./lib/api');

// Start express app.
var app = express();
app.use(bodyParser());
app.listen(config.PORT);

// Serve static assets.
app.use(express.static(__dirname + '/public'));

// Require jurisdiction ID.
app.use(function(req, res, next) {
	if(req.path == '/api/jurisdictions') {
		next();
	}
	else if(!req.headers["x-jurisdiction-id"]) {
		res.status(403).json({message: 'You must use a jurisdiction ID. A list of jurisdiction IDs can be found at api/jurisdictions'});
	}
	else {
		res.jurisdiction_id = req.headers["x-jurisdiction-id"];
	next();
	}
});

// Set routes
app.use('/api', api);

// Handle errors.
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.status(403).json({message: err.message, error: err});
});

