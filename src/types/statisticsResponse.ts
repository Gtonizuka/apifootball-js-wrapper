export interface StatisticsResponse {
    match_id : {
        statistics: [
            {
                type: string
                home: string,
                away: string
            }
        ]
    }
}