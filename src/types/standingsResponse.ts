export interface StandingsResponse {
    standings: Array<Standings>
}

interface Standings {
    country_name: string
    league_id: string
    league_name: string
    team_id: string
    team_name: string
    overall_league_position: string
    overall_league_payed: string
    overall_league_W: string
    overall_league_D: string
    overall_league_L: string
    overall_league_GF: string
    overall_league_GA: string
    home_league_payed: string
    home_league_W: string
    home_league_D: string
    home_league_L: string
    home_league_GF: string
    home_league_GA: string
    home_league_PTS: string
    away_league_position: string
    away_league_payed: string
    away_league_W: string
    away_league_D: string
    away_league_L: string
    away_league_GF: string
    away_league_GA: string
    away_league_PTS: string
}