export const mockedHomeAndAwayTeam = {
    homeTeam: {
        name: 'FC Bayern Munich',
        code: 'BAY',
        logoUrl: 'https://i0.wp.com/worldsoccerpins.com/wp-content/uploads/2024/06/FC-Bayern-Munchen.png?resize=48%2C48&ssl=1'
    },
    awayTeam: {
        name: 'Bayer Leverkusen',
        code: 'LEV',
        logoUrl: 'https://i0.wp.com/worldsoccerpins.com/wp-content/uploads/2024/06/Bayer-Leverkusen.png?h=48&ssl=1'
    }
};

export const mockedMatchScoreWithKickoff = {
    ...mockedHomeAndAwayTeam,
    kickoff: "2024-02-26T19:00:00Z",
    scoreInfo: null
};

export const mockedUpcomingMatch = {
    ...mockedMatchScoreWithKickoff,
    competition: "Bundesliga",
    stadium: "Allianz Arena"
};

export const mockedMatchScoreInfo = {
    ...mockedHomeAndAwayTeam,
    kickoff: "2024-02-26T19:00:00Z",
    scoreInfo: {
        homeTeamScore: 2,
        awayTeamScore: 1
    }
};