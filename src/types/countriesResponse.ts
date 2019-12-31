export interface CountriesResponse {
    countries: Array<Country>
}

interface Country {
    country_id: string
    country_name: string
}