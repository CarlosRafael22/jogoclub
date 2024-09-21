import { BasicTeamIdentity } from "./team";

export type ScoreInfo = {
    homeTeamScore: number;
    awayTeamScore: number;
}

export type BasicMatchInfo = {
    homeTeam: BasicTeamIdentity;
    awayTeam: BasicTeamIdentity;
    kickoff: string;
    scoreInfo?: ScoreInfo;
    competition: string;
    stadium: string;
}