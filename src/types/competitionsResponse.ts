export interface CompetitionsResponse {
    competitions: Array<Competitions>
}

export interface Competitions {
    country_id: string
    country_name: string
    league_id: string
    league_name: string
}