var express = require('express');
var cookieParser = require('cookie-parser');
var expressValidator = require('express-validator');
var bodyParser = require('body-parser');
var path = require('path');
var helmet = require('helmet');


/*
	Express server
*/

var app = express();


/*
	Express configuration
*/

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


app.use(cookieParser());
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: false
}));
app.disable('x-powered-by')
app.use(helmet.hidePoweredBy());
app.use(expressValidator());
app.use(cookieParser());



/*
	Application routes

*/


app.use('/api/v1',require('./routes/countryinfo'));



app.use(function(error, req, res, next){
	if (err.message
    && (~err.message.indexOf('not found'))) {
    return next()
  }

  res.status(500).json({
  	error: error
  })

})

app.use(function(req, res, next){
	res.status(404).json({
		url: req.originalUrl,
		message: "Page does not exits"
	})
})


app.listen(app.get('port'), function(){
	console.log("Server is listening on port %d", app.get('port'));

});

module.exports = app;