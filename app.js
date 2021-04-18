const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const helmet = require("helmet");

/*
	Express server
*/

const app = express();

/* Defaul PORT=3001 */

const PORT = 3000;

/*
	Express configuration
*/

app.use(cookieParser());
app.use(helmet());
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: false,
    })
);
app.disable("x-powered-by");
app.use(helmet.hidePoweredBy());
app.use(cookieParser());

/*
	Application routes

*/

app.use("/api/v1", require("./routes/countryinfo"));

/* Client route error page */

app.all("/*", (req, res) => {
    res.status(200).json({
        message: "This is an API not a website",
        request_method: `${req.method}`,
        error_status: 404,
        error: "Invalid url",
        error_url: `${req.headers.host}` + `${req.url}`,
    });
});

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
