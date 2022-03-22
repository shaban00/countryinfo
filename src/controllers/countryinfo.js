import countries from "../data/countries.json"
import states from "../data/states.json"
import cities from "../data/cities.json"

const getIndex = (req, res) => {
    res.status(200).json({
        message:
            "Welcome to countryinfo where you get a lot of information about the countries you want",
    })
}

const getCountryByQueryField = (req, res) => {
    const allow_query_params = ["country_name", "country_code"]
    const req_keys = Object.keys(req.query)

    const allowed = req_keys.some((key) => {
        return allow_query_params.includes(key)
    })

    if (allowed) {
        const { country_name, country_code } = req.query

        if (country_name) {
            const country = countries.filter((item) => {
                return item.name === country_name
            })

            res.status(200).json({
                country,
            })
        } else if (country_code) {
            const country = countries.filter((item) => {
                return item.iso2 === country_code
            })

            res.status(200).json({
                country,
            })
        }
    } else {
        res.status(200).json({
            countries,
        })
    }
}

const getStateByQueryField = (req, res) => {
    const allow_query_params = [
        "country_name",
        "country_code",
        "state_name",
        "state_code",
    ]
    const req_keys = Object.keys(req.query)

    const allowed = req_keys.some((key) => {
        return allow_query_params.includes(key)
    })

    if (allowed) {
        const { country_name, country_code, state_name, state_code } = req.query

        if (country_name) {
            const state = states.filter((item) => {
                return item.country_name === country_name
            })

            res.status(200).json({
                state,
            })
        } else if (country_code) {
            const state = states.filter((item) => {
                return item.country_code === country_code
            })

            res.status(200).json({
                state,
            })
        } else if (state_name) {
            const state = states.filter((item) => {
                return item.name === state_name
            })

            res.status(200).json({
                state,
            })
        } else if (state_code) {
            const state = states.filter((item) => {
                return item.state_code === state_code
            })

            res.status(200).json({
                state,
            })
        }
    } else {
        res.status(200).json({
            message: "Invalid query parameter(s)",
        })
    }
}

const getCityByQueryField = (req, res) => {
    const allow_query_params = [
        "country_name",
        "country_code",
        "state_name",
        "state_code",
        "city_name",
    ]
    const req_keys = Object.keys(req.query)

    const allowed = req_keys.some((key) => {
        return allow_query_params.includes(key)
    })

    if (allowed) {
        const {
            country_name,
            country_code,
            state_name,
            state_code,
            city_name,
        } = req.query

        if (country_name) {
            const city = cities.filter((item) => {
                return item.country_name === country_name
            })

            res.status(200).json({
                city,
            })
        } else if (country_code) {
            const city = cities.filter((item) => {
                return item.country_code === country_code
            })

            res.status(200).json({
                city,
            })
        } else if (state_name) {
            const city = cities.filter((item) => {
                return item.state_name === state_name
            })

            res.status(200).json({
                city,
            })
        } else if (state_code) {
            const city = cities.filter((item) => {
                return item.state_code === state_code
            })

            res.status(200).json({
                city,
            })
        } else if (city_name) {
            const city = cities.filter((item) => {
                return item.name === city_name
            })

            res.status(200).json({
                city,
            })
        }
    } else {
        res.status(200).json({
            message: "Invalid query parameter(s)",
        })
    }
}

export {
    getIndex,
    getCountryByQueryField,
    getStateByQueryField,
    getCityByQueryField,
}
