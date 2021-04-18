## __API for getting information about countries__


__Usage__

```
Method: [GET]

Url: https://countryinfos.herokuapp.com/api/v1/countryinfo/all

Output: Get all countries

Response: {
    message: "",
    data: [
        {
            name: {
                "official": "",
                "common": ""
            },
            tld: [
                ""
            ],
            cca2: "",
            cca3: "",
            ccn3: "",
            currency: "",
            callingCode: [
                ""
            ],
            capital: "",
            independent: "",
            latlng: "",
            region: "",
            nativeLanguage: "",
            officialLanguage: "",
            languages: [
                ""
            ],
            nationality: "",
            borders: [
                ""
            ],
            area: "",
            landSize: "",
            population: "",
            religions: [
                ""
            ],
            president: "",
            flag: "",
            tourSites: [
                {
                    name: "",
                    location: ""
                },...
            ]
        },...
    ],
    success_code: "0002"
}


```

##

```
Method: [GET]

Url: https://countryinfos.herokuapp.com/api/v1/countryinfo/fields

example: localhost:3000/api/v1/countryinfo/fields?field=["area", "population", "name", "currency"]

Available field parameters: ["name", "tld", "cca2", "cca3", "ccn3", "currency", "callingCode", "capital", "independent", "latlng", "region", "nativeLanguage", "officialLanguage", "languages", "nationality", "borders", "area", "landSize", "population", "religions", "president", "flag", "tourSites"]

Output: Get all countries with fields

Response : {
    message: "",
    data: [
        {

        },...
    ],
    success_code: "0002"
}

```