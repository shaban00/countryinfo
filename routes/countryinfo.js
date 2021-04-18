const express = require("express");
const router = express.Router();
const countryinfocontrollers = require("../controllers/controllers");

router.get("/", (req, res) => {
    countryinfocontrollers.getIndex(req, res);
});

router.get("/countryinfo/all", (req, res) => {
    countryinfocontrollers.getAllCountries(req, res);
});

router.get("/countryinfo/fields", (req, res) => {
    countryinfocontrollers.getCountryFields(req, res);
});

router.get("/countryinfo/search", (req, res) => {
    countryinfocontrollers.getCountrySearch(req, res);
});

module.exports = router;
