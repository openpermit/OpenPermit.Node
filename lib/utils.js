var request = require('request');

// Function to make call to CKAN API.
exports.makeRequest = function (url, res) {
	request(url, function (error, response, body) {
	  if(!error && response.statusCode == 200) {
	  	var json = JSON.parse(body);

	  	// Remove CKAN specific JSON elements.
	  	json.result.records.forEach(function(element){
	  		element.Latitude = element.LAT;
	  		element.Longitude = element.LON;
	  		delete element._full_text;
	  		delete element._id;
	  		delete element.LAT;
	  		delete element.LON;
	  	});

	    renderResponse(null, json.result.records, res); 
	  }
	  else {
	  	renderResponse(error, response.statusCode, res);
	  }
	});
};

// Get a list of jurisdiction IDs.
exports.getJurisdictions = function(url, res) {
	var jurisdictions = [];
	request(url, function (error, response, body) {
		if(!error && response.statusCode == 200) {
			var json = JSON.parse(body);
			json.result.packages.forEach(function(element){
				jurisdictions.push(element.organization.name);
			});
			renderResponse(null, getUnqiue(jurisdictions), res);
		}
		else {
			renderResponse(error, response.statusCode, res);
		}
	});
};

// Function to render response to client.
renderResponse = function (error, response, res){
	if(!error) {
		res.send(response).end();
	}
	else {
		res.status(error).send(response);
	}
}

// Get unique elements of an array.
getUnqiue = function (arr){
	var hash = {}, result = [];
	for (var i = 0, l= arr.length; i<l; ++i) {
	    if (!hash.hasOwnProperty(arr[i])) { 
	        hash[arr[i]] = true;
	        result.push(arr[i]);
	    }
	}
	return result;
}