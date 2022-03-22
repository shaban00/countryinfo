import express from "express"
import {
    getIndex,
    getCountryByQueryField,
    getStateByQueryField,
    getCityByQueryField,
} from "../controllers/countryinfo"

const router = express.Router()

router.get("/countries", (req, res) => {
    getCountryByQueryField(req, res)
})

router.get("/states", (req, res) => {
    getStateByQueryField(req, res)
})

router.get("/cities", (req, res) => {
    getCityByQueryField(req, res)
})

module.exports = router
