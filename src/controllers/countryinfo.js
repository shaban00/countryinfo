import countries from "../data/countries.json"
import states from "../data/states.json"
import cities from "../data/cities.json"

const getCountry = (req, res) => {
    // Allowed query parameters
    const allowed_query = [
        "name",
        "iso3",
        "iso2",
        "capital",
        "currency",
        "currency_name",
        "region",
        "subregion",
    ]
    const query = Object.keys(req.query)

    // Check length of query parameters
    if (query.length > 0) {
        const key = query[0]
        const value = req.query[key]

        if (allowed_query.includes(key)) {
            const result = countries.filter((item) => {
                return (
                    item[key].toLocaleLowerCase() === value.toLocaleLowerCase()
                )
            })
            /*
            Return json data

                {
                    status: 200,
                    data: []
                }
             */
            res.status(200).json({
                status: 200,
                data: result,
            })
        } else {
            /*
            Return json data

                {
                    status: 400,
                    message: `Invaid query parameter: ${key}`,
                }
             */
            res.status(400).json({
                status: 400,
                message: `Invaid query parameter: ${key}`,
            })
        }
    } else {
        res.status(200).json({
            /*
            Return json data

                {
                    status: 200,
                    data: []
                }
             */
            status: 200,
            data: countries,
        })
    }
}

const getState = (req, res) => {
    // Allowed query parameters
    const allowed_query = ["name", "country_code", "country_name", "state_code"]
    const query = Object.keys(req.query)

    // Check length of query parameters
    if (query.length > 0) {
        const key = query[0]
        const value = req.query[key]

        if (allowed_query.includes(key)) {
            const result = states.filter((item) => {
                return (
                    item[key].toLocaleLowerCase() === value.toLocaleLowerCase()
                )
            })
            /*
            Return json data

                {
                    status: 200,
                    data: []
                }
             */
            res.status(200).json({
                status: 200,
                data: result,
            })
        } else {
            /*
            Return json data

                {
                    status: 400,
                    message: `Invaid query parameter: ${key}`,
                }
             */
            res.status(400).json({
                status: 400,
                message: `Invaid query parameter: ${key}`,
            })
        }
    } else {
        res.status(200).json({
            /*
            Return json data

                {
                    status: 200,
                    data: []
                }
             */
            status: 200,
            data: states,
        })
    }
}

const getCity = (req, res) => {
    // Allowed query parameters
    const allowed_query = [
        "name",
        "state_code",
        "state_name",
        "country_code",
        "country_name",
    ]
    const query = Object.keys(req.query)

    // Check length of query parameters
    if (query.length > 0) {
        const key = query[0]
        const value = req.query[key]

        if (allowed_query.includes(key)) {
            const result = cities.filter((item) => {
                return (
                    item[key].toLocaleLowerCase() === value.toLocaleLowerCase()
                )
            })
            /*
            Return json data

                {
                    status: 200,
                    data: []
                }
             */
            res.status(200).json({
                status: 200,
                data: result,
            })
        } else {
            /*
            Return json data

                {
                    status: 400,
                    message: `Invaid query parameter: ${key}`,
                }
             */
            res.status(400).json({
                status: 400,
                message: `Invaid query parameter: ${key}`,
            })
        }
    } else {
        res.status(200).json({
            /*
            Return json data

                {
                    status: 200,
                    data: []
                }
             */
            status: 200,
            data: cities,
        })
    }
}

export { getCountry, getState, getCity }
