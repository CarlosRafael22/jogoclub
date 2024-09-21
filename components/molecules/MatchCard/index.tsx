import MatchScore from "../MatchScore";
import Typography from "@/atoms/Typography";
import { type BasicMatchInfo } from "entities/models/match";

const MatchCard = ({
    homeTeam,
    awayTeam,
    kickoff,
    scoreInfo,
    competition,
    stadium,
}: BasicMatchInfo) => {

    return (
        <div className="flex flex-col rounded-lg bg-white p-4 w-full max-w-96">
            <div className="flex flex-row justify-between mb-4">
                <Typography variant="body1-bold">{competition}</Typography>
                <Typography variant="body1-bold">{stadium}</Typography>
            </div>
            <MatchScore homeTeam={homeTeam} awayTeam={awayTeam} kickoff={kickoff} scoreInfo={scoreInfo} />
        </div>
    );
};

export default MatchCard;