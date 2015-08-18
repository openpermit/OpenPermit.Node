var router = require('express').Router();
var utils = require('./utils')
var config = require('../config').config;

// Retrieves a list of jurisdictions.
router.get('/jurisdictions', function(req, res) {
	utils.getJurisdictions(config.JURISDICTION_URL, res);
});

// Retrieves a list of permits.
router.get('/permits', function(req, res){
	var limit = req.query.limit || config.LIMIT;
	var url = config.CKAN_API_BASE + 'SELECT * from "' + config.JURISDICTIONS[res.jurisdiction_id].PERMITS + '" LIMIT ' + limit;
	utils.makeRequest(url, res);
});

// Retrieves a specific permit record details.
router.get('/permits/:permitnum', function(req, res){
	var url = config.CKAN_API_BASE + 'SELECT * from "' + config.JURISDICTIONS[res.jurisdiction_id].PERMITS + '" WHERE "PermitNum" = \'' + req.params.permitnum + '\'';
	utils.makeRequest(url, res);
});

// Retrieves the history of a specific permit record.
router.get('/permits/:permitnum/timeline', function(req, res){
	var url = config.CKAN_API_BASE + 'SELECT * from "' + config.JURISDICTIONS[res.jurisdiction_id].PERMIT_HISTORY + '" WHERE "PermitNum" LIKE \'' + req.params.permitnum + '%\'';
	utils.makeRequest(url, res);
});

// Retrieves the inspections for a specific permit.
router.get('/permits/:permitnum/inspections', function(req, res){
	var url = config.CKAN_API_BASE + 'SELECT * from "' + config.JURISDICTIONS[res.jurisdiction_id].INSPECTIONS + '" WHERE "PermitNum" LIKE \'' + req.params.permitnum + '%\'';
	utils.makeRequest(url, res);
});

// Retrieves the contractors for a specific permit.
router.get('/permits/:permitnum/contractors', function(req, res){
	var url = config.CKAN_API_BASE + 'SELECT * from "' + config.JURISDICTIONS[res.jurisdiction_id].CONTRACTORS + '" WHERE "PermitNum" LIKE \'' + req.params.permitnum + '%\'';
	utils.makeRequest(url, res);
});

// Retreives a list of inspections.
router.get('/inspections', function(req, res) {
	var limit = req.query.limit || config.LIMIT;
	var url = config.CKAN_API_BASE + 'SELECT * from "' + config.JURISDICTIONS[res.jurisdiction_id].INSPECTIONS + '" LIMIT ' + limit;
	utils.makeRequest(url, res);
});

// Retrieves details of a specific inspection.
router.get('/inspections/:inspectionid', function(req, res) {
	var url = config.CKAN_API_BASE + 'SELECT * from "' + config.JURISDICTIONS[res.jurisdiction_id].INSPECTIONS + '" WHERE "InspectionID" = \'' + req.params.inspectionid + '\'';
	utils.makeRequest(url, res);
});

// Retrieves a list of contractors.
router.get('/contractors', function(req, res) {
	var limit = req.query.limit || config.LIMIT;
	var url = config.CKAN_API_BASE + 'SELECT * from "' + config.JURISDICTIONS[res.jurisdiction_id].CONTRACTORS + '" LIMIT ' + limit;
	utils.makeRequest(url, res);
});

// Retrieves details for a specific contractor.
router.get('/contractors/:contractorid', function(req, res) {
	var url = config.CKAN_API_BASE + 'SELECT * from "' + config.JURISDICTIONS[res.jurisdiction_id].CONTRACTORS + '" WHERE "ContractorLicNum" = \'' + req.params.contractorid + '\'';
	utils.makeRequest(url, res);
});

module.exports = router;