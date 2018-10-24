var validator = require('validator');
var lodash = require('lodash');

var countries = require('../models/countries.json');


var notFound = function(res){
	res.json(404, {
		message: "Sorry, page does not exist",
		code: 34
	});
}

exports.getIndex = function(req, res){
	res.send({message: 'Welcome to countryinfo where you get a lot of information about the countries you want'});
};


exports.getAllCountries =  function(req, res){
	//res.status(200).json(countries);
	res.json(countries);
};

exports.capital = function(req, res, capital){

	var country = lodash.find(countries, function(mycapital){
		return validator.isIn(capital, mycapital.capital)
	});

	if (!country) {
		notFound(res);
	}
	res.status(200).json(country);
}