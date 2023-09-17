# **API for getting information about countries**

### Get all countries

**Request URL**
```bash
    https://countryinfo.herokuapp.com/api/countries
```

**Response data**
```json
response: {
    "status": 200,
    "data": [
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
                "kr": "",
                "br": "",
                "pt": "",
                "nl": "",
                "hr": "",
                "fa": "",
                "de": "",
                "es": "",
                "fr": "",
                "ja": "",
                "it": "",
                "cn": ""

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

## Get country using query parameters

#### Allow query parameters

| Param      | Description | Example |
| ----------- | ----------- | ----------- |
| name      | The name of the country       | Ghana |
| iso3   | ISO 3166-1 alpha-3 codes are three-letter country codes defined in ISO 3166-1, part of the ISO 3166 standard published by the International Organization for Standardization (ISO)        | GHA |
| iso2      | ISO 3166-1 alpha-2 codes are two-letter country codes defined in ISO 3166-1, part of the ISO 3166 standard published by the International Organization for Standardization (ISO)       | GH |
| capital   | The national capital of the country        | Accra |
| currency      | Short name of currency       | GHS |
| currency_name   | Full name of currency        | Ghanaian cedi |
| region      | Continent where country is located       | Africa |
| subregion   | Sub continental division where the country is located        | Western Africa |


**Example Request URL**
```bash
    https://countryinfo.herokuapp.com/api/countries?name=ghana
```

**Response data**
```json
response: {
    "status": 200,
    "data": [
        {
            "id": 83,
            "name": "Ghana",
            "iso3": "GHA",
            "iso2": "GH",
            "numeric_code": "288",
            "phone_code": "233",
            "capital": "Accra",
            "currency": "GHS",
            "currency_name": "Ghanaian cedi",
            "currency_symbol": "GH₵",
            "tld": ".gh",
            "native": "Ghana",
            "region": "Africa",
            "subregion": "Western Africa",
            "timezones": [
                {
                    "zoneName": "Africa/Accra",
                    "gmtOffset": 0,
                    "gmtOffsetName": "UTC±00",
                    "abbreviation": "GMT",
                    "tzName": "Greenwich Mean Time"
                }
            ],
            "translations": {
                "kr": "가나",
                "br": "Gana",
                "pt": "Gana",
                "nl": "Ghana",
                "hr": "Gana",
                "fa": "غنا",
                "de": "Ghana",
                "es": "Ghana",
                "fr": "Ghana",
                "ja": "ガーナ",
                "it": "Ghana",
                "cn": "加纳"
            },
            "latitude": "8.00000000",
            "longitude": "-2.00000000",
            "emoji": "🇬🇭",
            "emojiU": "U+1F1EC U+1F1ED"
        }
    ]
}

```

### Get all states of a country

**Request URL**
```bash
    https://countryinfo.herokuapp.com/api/states
```

**Response data**
```json
response: {
    "status": 200,
    "data": [
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

## Get state using query parameters

#### Allow query parameters

| Param      | Description | Example |
| ----------- | ----------- | ----------- |
| name      | The name of the state       | Greater Accra |
| country_code      | ISO 3166-1 alpha-2 codes are two-letter country codes defined in ISO 3166-1, part of the ISO 3166 standard published by the International Organization for Standardization (ISO)       | GH |
| country_name      | The name of the country       | Ghana |
| state_code      | Two-letter state codes representing a state       | AH |


**Example Request URL**
```bash
    https://countryinfo.herokuapp.com/api/states?name=Greater Accra
```

**Response data**
```json
response: {
    "status": 200,
    "data": [
        {
            "id": 54,
            "name": "Greater Accra",
            "country_id": 83,
            "country_code": "GH",
            "country_name": "Ghana",
            "state_code": "AA",
            "type": "region",
            "latitude": "5.81428360",
            "longitude": "0.07467670"
        }
    ]
}

```

### Get all cities

**Request URL**
```bash
    https://countryinfo.herokuapp.com/api/cities
```

**Response data**
```json
response: {
    "status": 200,
    "data": [
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

## Get city using query parameters

#### Allow query parameters

| Param      | Description | Example |
| ----------- | ----------- | ----------- |
| name      | The name of the city       | Nsawam |
| state_code      | Two-letter state codes representing a state       | EP |
| state_name      | The name of the state       | Eastern |
| country_code      | ISO 3166-1 alpha-2 codes are two-letter country codes defined in ISO 3166-1, part of the ISO 3166 standard published by the International Organization for Standardization (ISO)       | GH |
| country_name      | The name of the country       | Ghana |


**Example Request URL**
```bash
    https://countryinfo.herokuapp.com/api/cities?name=Nsawam
```

**Response data**
```json
response: {
    "status": 200,
    "data": [
        {
            "id": 52194,
            "name": "Nsawam",
            "state_id": 50,
            "state_code": "EP",
            "state_name": "Eastern",
            "country_id": 83,
            "country_code": "GH",
            "country_name": "Ghana",
            "latitude": "5.80893000",
            "longitude": "-0.35026000",
            "wikiDataId": "Q2724141"
        }
    ]
}

```