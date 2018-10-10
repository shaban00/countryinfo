var express = require('express');
var countryinfo = express.Router();
var countryinfocontrollers = require('../controllers/infocontrollers');


countryinfo.get('/countryinfo/', function(req, res){
	countryinfocontrollers.getAllCountries(req, res);
});



module.exports = countryinfo;
