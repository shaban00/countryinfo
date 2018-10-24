var express = require('express');
var countryinfo = express.Router();
var countryinfocontrollers = require('../controllers/infocontrollers');



countryinfo.get('/', function(req, res){
	countryinfocontrollers.getIndex(req, res)
});

countryinfo.get('/countryinfo/', function(req, res){
	countryinfocontrollers.getAllCountries(req, res);
});

countryinfo.get('/countryinfo/capital/:capital', function(req, res){
	countryinfocontrollers.capital(req, res, req.params.capital);
});



module.exports = countryinfo;
