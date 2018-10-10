var validator = require('validator');
var lodash = require('lodash');

var countries = require('../models/countries.json');



exports.getIndex = function(req, res){
	res.send({message: 'Welcome to countryinfo where you get a lot of information about the countries you want'});
};


exports.getAllCountries =  function(req, res){
	//res.status(200).json(countries);
	res.json(countries);
};