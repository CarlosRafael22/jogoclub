interface Match {
    date: string
    homeTeam: string
    homeTeamScore?: number | null
    homeTeamPenaltyScore?: number | null
    awayTeam: string
    awayTeamScore?: number | null
    awayTeamPenaltyScore?: number | null
    competition: string
    stadium: string
    image?: string | null
}

export default Match