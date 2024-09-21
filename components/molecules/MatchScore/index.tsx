import TeamNameBadge from "../TeamNameBadge";
import { type TeamScoreInfo } from "entities/models/team";
import { type ScoreInfo } from "entities/models/match";
import Typography from "@/atoms/Typography";
import { getFormattedDateAndHourFromDateString, getHourText } from "helpers";

type Props = {
    homeTeam: TeamScoreInfo;
    awayTeam: TeamScoreInfo;
    kickoff: string;
    scoreInfo: ScoreInfo;
}

const MatchScore = ({ homeTeam, awayTeam, kickoff, scoreInfo }: Props) => {
    const { name: homeTeamName, code: homeTeamCode, logoUrl: homeTeamLogoUrl } = homeTeam;
    const { name: awayTeamName, code: awayTeamCode, logoUrl: awayTeamLogoUrl } = awayTeam;

    const [formattedDate, formattedHour] = getFormattedDateAndHourFromDateString(kickoff);
    const boxText = scoreInfo ? `${scoreInfo.homeTeamScore} - ${scoreInfo.awayTeamScore}` : formattedHour;
    const dateTimeInfo = scoreInfo ? `${formattedDate} - ${getHourText(formattedHour)}` : formattedDate;
    
    return (
        <div className="flex flex-col gap-1 items-center">
            <div className="flex flex-row gap-1 items-center">
                <TeamNameBadge name={homeTeamName} code={homeTeamCode} logoUrl={homeTeamLogoUrl} isHomeTeam={true} />
                <div className="bg-gray-300 px-2 py-1 rounded flex items-center h-fit mx-1">
                    <Typography variant="body1-bold">{boxText}</Typography>
                </div>
                <TeamNameBadge name={awayTeamName} code={awayTeamCode} logoUrl={awayTeamLogoUrl} />
            </div>
            <Typography variant="body2-bold">{dateTimeInfo}</Typography>
        </div>
    );
};

export default MatchScore;