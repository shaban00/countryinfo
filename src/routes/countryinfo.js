import express from "express"
import { getCountry, getState, getCity } from "../controllers/countryinfo"

const router = express.Router()

router.get("/countries", (req, res) => {
    getCountry(req, res)
})

router.get("/states", (req, res) => {
    getState(req, res)
})

router.get("/cities", (req, res) => {
    getCity(req, res)
})

module.exports = router
