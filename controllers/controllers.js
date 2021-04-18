const validator = require("validator");
const _ = require("lodash");
const { CountryField } = require("../utils/index");
const { response_codes } = require("../constants/strings");

const countries = require("../models/countries.json");

exports.getIndex = (req, res) => {
    res.status(200).json({ message: "Welcome to countryinfo where you get a lot of information about the countries you want" });
};

exports.getAllCountries = (req, res) => {
    res.status(200).json({
        message: "Success",
        data: countries,
        success_code: response_codes.SUCCESS_CODE,
    });
};

exports.getCountryFields = (req, res) => {
    let query = req.query;

    if (Object.keys(query).length > 1) {
        let { error, fields } = CountryField(query);

        if (error === true) {
            res.status(200).json({
                message: "Error in fields",
                fields: query,
                error_code: response_codes.FIELD_ERROR_CODE,
            });
        } else {
            let mapped = _.map(countries, _.partialRight(_.pick, fields));

            res.status(200).json({
                message: "Success",
                data: mapped,
                success_code: response_codes.SUCCESS_CODE,
            });
        }
    } else {
        res.status(200).json({
            message: "Empty query paramters",
            error_code: response_codes.QUERY_ERROR_CODE,
        });
    }
};

exports.getCountrySearch = (req, res) => {
    let query = req.query;

    if (Object.keys(query).length > 1) {
        if (query.name) {
            let result = _.filter(countries, (item) => {
                let name = item.name.common || item.name.official;
                return name.toLowerCase().includes(query.name.toLowerCase());
            });

            if (query.field) {
                let { error, fields } = CountryField(query);

                if (error === true) {
                    res.status(200).json({
                        message: "Error in fields",
                        fields: query.field,
                        error_code: response_codes.FIELD_ERROR_CODE,
                    });
                } else {
                    let mapped = _.map(result, _.partialRight(_.pick, fields));

                    res.status(200).json({
                        message: "Success",
                        data: mapped,
                        success_code: response_codes.SUCCESS_CODE,
                    });
                }
            } else {
                res.status(200).json({
                    message: "Success",
                    data: result,
                    success_code: response_codes.SUCCESS_CODE,
                });
            }
        } else if (query.currency) {
            let result = _.filter(countries, (item) => {
                let currency = item.currency;
                return currency.toLowerCase().includes(query.currency.toLowerCase());
            });

            if (query.field) {
                let { error, fields } = CountryField(query);

                if (error === true) {
                    res.status(200).json({
                        message: "Error in fields",
                        fields: query.field,
                        error_code: response_codes.FIELD_ERROR_CODE,
                    });
                } else {
                    let mapped = _.map(result, _.partialRight(_.pick, fields));

                    res.status(200).json({
                        message: "Success",
                        data: mapped,
                        success_code: response_codes.SUCCESS_CODE,
                    });
                }
            } else {
                res.status(200).json({
                    message: "Success",
                    data: result,
                    success_code: response_codes.SUCCESS_CODE,
                });
            }
        } else if (query.capital) {
            let result = _.filter(countries, (item) => {
                let capital = item.capital;
                return capital.toLowerCase().includes(query.capital.toLowerCase());
            });

            if (query.field) {
                let { error, fields } = CountryField(query);

                if (error === true) {
                    res.status(200).json({
                        message: "Error in fields",
                        fields: query.field,
                        error_code: response_codes.FIELD_ERROR_CODE,
                    });
                } else {
                    let mapped = _.map(result, _.partialRight(_.pick, fields));

                    res.status(200).json({
                        message: "Success",
                        data: mapped,
                        success_code: response_codes.SUCCESS_CODE,
                    });
                }
            } else {
                res.status(200).json({
                    message: "Success",
                    data: result,
                    success_code: response_codes.SUCCESS_CODE,
                });
            }
        } else if (query.independent) {
            let result = _.filter(countries, (item) => {
                let independent = item.independent;
                return independent.toLowerCase().includes(query.independent.toLowerCase());
            });

            if (query.field) {
                let { error, fields } = CountryField(query);

                if (error === true) {
                    res.status(200).json({
                        message: "Error in fields",
                        fields: query.field,
                        error_code: response_codes.FIELD_ERROR_CODE,
                    });
                } else {
                    let mapped = _.map(result, _.partialRight(_.pick, fields));

                    res.status(200).json({
                        message: "Success",
                        data: mapped,
                        success_code: response_codes.SUCCESS_CODE,
                    });
                }
            } else {
                res.status(200).json({
                    message: "Success",
                    data: result,
                    success_code: response_codes.SUCCESS_CODE,
                });
            }
        } else if (query.region) {
            let result = _.filter(countries, (item) => {
                let region = item.region;
                return region.toLowerCase().includes(query.region.toLowerCase());
            });

            if (query.field) {
                let { error, fields } = CountryField(query);

                if (error === true) {
                    res.status(200).json({
                        message: "Error in fields",
                        fields: query.field,
                        error_code: response_codes.FIELD_ERROR_CODE,
                    });
                } else {
                    let mapped = _.map(result, _.partialRight(_.pick, fields));

                    res.status(200).json({
                        message: "Success",
                        data: mapped,
                        success_code: response_codes.SUCCESS_CODE,
                    });
                }
            } else {
                res.status(200).json({
                    message: "Success",
                    data: result,
                    success_code: response_codes.SUCCESS_CODE,
                });
            }
        } else if (query.native_language) {
            let result = _.filter(countries, (item) => {
                let nativeLanguage = item.nativeLanguage;
                return nativeLanguage.toLowerCase().includes(query.native_language.toLowerCase());
            });

            if (query.field) {
                let { error, fields } = CountryField(query);

                if (error === true) {
                    res.status(200).json({
                        message: "Error in fields",
                        fields: query.field,
                        error_code: response_codes.FIELD_ERROR_CODE,
                    });
                } else {
                    let mapped = _.map(result, _.partialRight(_.pick, fields));

                    res.status(200).json({
                        message: "Success",
                        data: mapped,
                        success_code: response_codes.SUCCESS_CODE,
                    });
                }
            } else {
                res.status(200).json({
                    message: "Success",
                    data: result,
                    success_code: response_codes.SUCCESS_CODE,
                });
            }
        } else if (query.official_language) {
            let result = _.filter(countries, (item) => {
                let officialLanguage = item.officialLanguage;
                return officialLanguage.toLowerCase().includes(query.official_language.toLowerCase());
            });

            if (query.field) {
                let { error, fields } = CountryField(query);

                if (error === true) {
                    res.status(200).json({
                        message: "Error in fields",
                        fields: query.field,
                        error_code: response_codes.FIELD_ERROR_CODE,
                    });
                } else {
                    let mapped = _.map(result, _.partialRight(_.pick, fields));

                    res.status(200).json({
                        message: "Success",
                        data: mapped,
                        success_code: response_codes.SUCCESS_CODE,
                    });
                }
            } else {
                res.status(200).json({
                    message: "Success",
                    data: result,
                    success_code: response_codes.SUCCESS_CODE,
                });
            }
        } else if (query.languages) {
            let language_fields;
            let language_error = false;

            try {
                language_fields = JSON.parse(query.languages.toLowerCase());
            } catch (err) {
                language_error = true;
            }

            if (language_error === true) {
                res.status(200).json({
                    message: "Error in languages",
                    fields: query.languages,
                    error_code: response_codes.FIELD_ERROR_CODE,
                });
            } else {
                let result = _.filter(countries, (item) => {
                    let languages = item.languages;
                    let lowercase = languages.map((language) => language.toLowerCase());
                    let intersection = lowercase.filter((language) => language_fields.includes(language));

                    if (intersection.length > 0) {
                        return item;
                    }
                });

                if (query.field) {
                    let { error, fields } = CountryField(query);

                    if (error === true) {
                        res.status(200).json({
                            message: "Error in fields",
                            fields: query.field,
                            error_code: response_codes.FIELD_ERROR_CODE,
                        });
                    } else {
                        let mapped = _.map(result, _.partialRight(_.pick, fields));

                        res.status(200).json({
                            message: "Success",
                            data: mapped,
                            success_code: response_codes.SUCCESS_CODE,
                        });
                    }
                } else {
                    res.status(200).json({
                        message: "Success",
                        data: result,
                        success_code: response_codes.SUCCESS_CODE,
                    });
                }
            }
        } else if (query.nationality) {
            let result = _.filter(countries, (item) => {
                let nationality = item.nationality;
                return nationality.toLowerCase().includes(query.nationality.toLowerCase());
            });

            if (query.field) {
                let { error, fields } = CountryField(query);

                if (error === true) {
                    res.status(200).json({
                        message: "Error in fields",
                        fields: query.field,
                        error_code: response_codes.FIELD_ERROR_CODE,
                    });
                } else {
                    let mapped = _.map(result, _.partialRight(_.pick, fields));

                    res.status(200).json({
                        message: "Success",
                        data: mapped,
                        success_code: response_codes.SUCCESS_CODE,
                    });
                }
            } else {
                res.status(200).json({
                    message: "Success",
                    data: result,
                    success_code: response_codes.SUCCESS_CODE,
                });
            }
        } else if (query.borders) {
            let border_fields;
            let border_error = false;

            try {
                border_fields = JSON.parse(query.borders.toLowerCase());
            } catch (err) {
                border_error = true;
            }

            if (border_error === true) {
                res.status(200).json({
                    message: "Error in borders",
                    fields: query.borders,
                    error_code: response_codes.FIELD_ERROR_CODE,
                });
            } else {
                let result = _.filter(countries, (item) => {
                    let borders = item.borders;
                    let lowercase = borders.map((border) => border.toLowerCase());
                    let intersection = lowercase.filter((border) => border_fields.includes(border));

                    if (intersection.length > 0) {
                        return item;
                    }
                });

                if (query.field) {
                    let { error, fields } = CountryField(query);

                    if (error === true) {
                        res.status(200).json({
                            message: "Error in fields",
                            fields: query.field,
                            error_code: response_codes.FIELD_ERROR_CODE,
                        });
                    } else {
                        let mapped = _.map(result, _.partialRight(_.pick, fields));

                        res.status(200).json({
                            message: "Success",
                            data: mapped,
                            success_code: response_codes.SUCCESS_CODE,
                        });
                    }
                } else {
                    res.status(200).json({
                        message: "Success",
                        data: result,
                        success_code: response_codes.SUCCESS_CODE,
                    });
                }
            }
        } else if (query.religions) {
            let religion_fields;
            let religion_error = false;

            try {
                religion_fields = JSON.parse(query.religions.toLowerCase());
            } catch (err) {
                religion_error = true;
            }

            if (religion_error === true) {
                res.status(200).json({
                    message: "Error in religions",
                    fields: query.religions,
                    error_code: response_codes.FIELD_ERROR_CODE,
                });
            } else {
                let result = _.filter(countries, (item) => {
                    let religions = item.religions;
                    let lowercase = religions.map((religion) => religion.toLowerCase());
                    let intersection = lowercase.filter((religion) => religion_fields.includes(religion));

                    if (intersection.length > 0) {
                        return item;
                    }
                });

                if (query.field) {
                    let { error, fields } = CountryField(query);

                    if (error === true) {
                        res.status(200).json({
                            message: "Error in fields",
                            fields: query.field,
                            error_code: response_codes.FIELD_ERROR_CODE,
                        });
                    } else {
                        let mapped = _.map(result, _.partialRight(_.pick, fields));

                        res.status(200).json({
                            message: "Success",
                            data: mapped,
                            success_code: response_codes.SUCCESS_CODE,
                        });
                    }
                } else {
                    res.status(200).json({
                        message: "Success",
                        data: result,
                        success_code: response_codes.SUCCESS_CODE,
                    });
                }
            }
        } else {
            res.status(200).json({
                message: "Invalid search query",
                query: query,
                error_code: response_codes.INVALID_SEARCH_QUERY_CODE,
            });
        }
    } else {
        res.status(200).json({
            message: "Empty query paramters",
            error_code: response_codes.QUERY_ERROR_CODE,
        });
    }
};
