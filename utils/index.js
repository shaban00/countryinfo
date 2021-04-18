CountryField = (query) => {
    let fields;
    let error = false;

    try {
        fields = JSON.parse(query.field);
    } catch (err) {
        error = true;
    }

    return { error, fields };
};

module.exports = {
    CountryField,
};
