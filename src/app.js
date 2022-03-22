import express from "express"
import cookieParser from "cookie-parser"
import bodyParser from "body-parser"
import helmet from "helmet"
import cors from "cors"

/*
	Express server
*/

const app = express()

/* Defaul PORT=5000 */

const PORT = 5000

/*
	Express configuration
*/

app.use(cookieParser())
app.use(helmet())
app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: false,
    })
)
app.disable("x-powered-by")
app.use(helmet.hidePoweredBy())
app.use(cookieParser())
app.use(cors())

/*
	Application routes

*/

app.use("/api/v1", require("./routes/countryinfo"))

/* Client route error page */

app.all("/*", (req, res) => {
    res.status(200).json({
        message: "This is an API not a website",
        request_method: `${req.method}`,
        error_status: 404,
        error: "Invalid url",
        error_url: `${req.headers.host}` + `${req.url}`,
    })
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

module.exports = app
