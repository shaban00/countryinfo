## **API for getting information about countries**

**Usage**

Get All Countries

```bash
url: https://countryinfos.herokuapp.com/api/v1/countries

response: {
    countries: [
        {
        "id": "",
        "name": "",
        "iso3": "",
        "iso2": "",
        "numeric_code": "",
        "phone_code": "",
        "capital": "",
        "currency": "",
        "currency_name": "",
        "currency_symbol": "",
        "tld": "",
        "native": "",
        "region": "",
        "subregion": "",
        "timezones": [
            {
                "zoneName": "",
                "gmtOffset": "",
                "gmtOffsetName": "",
                "abbreviation": "",
                "tzName": ""
            },
            ...
        ],
        "translations": {

        },
        "latitude": "",
        "longitude": "",
        "emoji": "",
        "emojiU": ""
    },
    ...
    ]
}

```

Get Country Using Query Parameters

```bash
url: https://countryinfos.herokuapp.com/api/v1/countries
allowed_query_parameters = ["country_name", "country_code"]

eg: https://countryinfos.herokuapp.com/api/v1/countries?country_name=Ghana

eg: https://countryinfos.herokuapp.com/api/v1/countries?country_code=GH


response: {
    countries: [
        {
        "id": "",
        "name": "",
        "iso3": "",
        "iso2": "",
        "numeric_code": "",
        "phone_code": "",
        "capital": "",
        "currency": "",
        "currency_name": "",
        "currency_symbol": "",
        "tld": "",
        "native": "",
        "region": "",
        "subregion": "",
        "timezones": [
            {
                "zoneName": "",
                "gmtOffset": "",
                "gmtOffsetName": "",
                "abbreviation": "",
                "tzName": ""
            },
            ...
        ],
        "translations": {

        },
        "latitude": "",
        "longitude": "",
        "emoji": "",
        "emojiU": ""
        }
    ]
}

```

Get States of Country

```bash
url: https://countryinfos.herokuapp.com/api/v1/states

allowed_query_parameters = ["country_name", "country_code", "state_name", "state_code"]

eg: https://countryinfos.herokuapp.com/api/v1/states?country_name=Ghana

response: {
    state: [
        {
        "id": "",
        "name": "",
        "country_id": "",
        "country_code": "",
        "country_name": "",
        "state_code": "",
        "type": "",
        "latitude": "",
        "longitude": ""
        },
        {
        "id": "",
        "name": "",
        "country_id": "",
        "country_code": "",
        "country_name": "",
        "state_code": "",
        "type": "",
        "latitude": "",
        "longitude": ""
        },
    ...
    ]
}
```

Get Cities of State

```bash
url: https://countryinfos.herokuapp.com/api/v1/cities

allowed_query_parameters = ["country_name", "country_code", "state_name", "state_code", "city_name"]

eg: https://countryinfos.herokuapp.com/api/v1/cities?country_name=Ghana

response: {
    city: [
        {
            "id": "",
            "name": "",
            "state_id": "",
            "state_code": "",
            "state_name": "",
            "country_id": "",
            "country_code": "",
            "country_name": "",
            "latitude": "",
            "longitude": "",
            "wikiDataId": ""
        },
        {
            "id": "",
            "name": "",
            "state_id": "",
            "state_code": "",
            "state_name": "",
            "country_id": "",
            "country_code": "",
            "country_name": "",
            "latitude": "",
            "longitude": "",
            "wikiDataId": ""
        },
        ...
    ]
}
```
