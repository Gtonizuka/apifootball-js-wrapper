import {getRequest} from "./http";
import { CompetitionsResponse, CountriesResponse, StandingsResponse, StatisticsResponse } from "./types";

export class MainService {

    static APIKEY;

    constructor(apiKey: string) {
        if(!apiKey) {
            throw new Error('API KEY IS MISSING!')
        }
        MainService.APIKEY = apiKey
    }

     /**
     *  Returns list of support countries per subscription plan
     * @returns Resolves with API response or throw error
     */
    async getCountries() {
        try {
            const action = 'get_countries';

            const result = await getRequest(action)
            const countries: CountriesResponse =  result.data

            return countries
        } catch(err) {
            throw new Error(err)
        }
    }

     /**
     *  Returns list of supported competitions
     * @param {String} countryId If set only leagues from specific country will be returned (Optional)
     * @returns Resolves with API response or throw error
     */
    async getCompetitions(countryId: string) {
        try {
            const action = `get_leagues&country_id=${countryId}`
    
            const result = await getRequest(action)
            const competitions: CompetitionsResponse = result.data

            return competitions
        } catch(err) {
            throw new Error(err)
        }
    }

    /**
     *  Returns standings for league
     * @param {String} leagueId League internal code
     * @returns Resolves with API response or throw error
     */
    async getStandings(leagueId: string) {
        try {
            const action = `get_standings&league_id=${leagueId}`
    
            const result = await getRequest(action)
            const standings: StandingsResponse = result.data

            return standings
        } catch(err) {
            throw new Error(err)
        }
    }

    /**
     *  Returns events included in current subscription plan
     * @param {String} from Start date (yyyy-mm-dd)
     * @param {String} to Stop date (yyyy-mm-dd)
     * @param {String} countryId Country ID - if set only leagues from specific country will be returned (Optional)
     * @param {String} leagueId League ID - if set events from specific league will be returned (Optional)
     * @param {String} matchId Match ID - if set only details from specific match will be returned (Optional)
     * @param {String} teamId Team ID - if set only details from specific team will be returned (Optional)
     * @returns Resolves with API response or throw error
     */

    async getEvents(from: string = '', to: string = '', countryId: string = '', leagueId: string = '', matchId: string = '', teamId: string = '')  {
        try {
            const action = `get_events&from=${from}&to=${to}&country_id=${countryId}&league_id=${leagueId}&match_id=${matchId}&team_id=${teamId}`
    
            const result = await getRequest(action)
            return result.data
        } catch(err) {
            throw new Error(err)
        }
    }

    /**
     *  Returns standings for league
     * @param {String} matchId Unique identifier for match
     * @returns Resolves with API response or throw error
     */
    async getStatistics(matchId: string) {
        try {
            const action = `get_statistics&match_id=${matchId}`
    
            const result = await getRequest(action)
            const statistics: StatisticsResponse = result.data

            return statistics
        } catch(err) {
            throw new Error(err)
        }
    }

}