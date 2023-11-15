import styled from "styled-components";
import { MilestoneIcon } from "./Milestone";

const UpcomingMatchContainer = styled.div`
    position: relative;
    margin-top: 16px;
    padding: 8px;
    border-radius: 8px;
    background-color: #ffffff;
    transition: all ease 0.2s;
    box-shadow: 8px 16px 30px -10px rgba(150,170,180,0.5);

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0px 10px 10px 2px rgba(0, 0, 0, 0.25);
    }
`

const UpcomingMatchText = styled.p`
    margin-left: 4px;
`

const UpcomingMatchInfo = styled.div`
    display: flex;
    justify-content: center;
    gap: 12px;
`

const UpcomingMatchHeader = styled.div`
    display: flex;
    justify-content: center;
`

const MatchInfoText = styled.div`
    display: flex;
    margin: 4px 0;
`

const MatchInfoTicketIcon = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    margin: 4px;
`

interface UpcomingMatchProps {
    teamA: string,
    teamB: string,
    date: string,
    championship: string
    confirmed?: boolean
}

const UpcomingMatch = ({ teamA, teamB, date, championship, confirmed }: UpcomingMatchProps) => {
    return (
        <UpcomingMatchContainer>
            {/* <UpcomingMatchText>{`${teamA} x ${teamB}`}</UpcomingMatchText> */}
            <UpcomingMatchHeader>
                {confirmed && <MatchInfoTicketIcon>
                    <MilestoneIcon src="/assets/profile_page/icons8-ticket-50.png" $size='m' />
                </MatchInfoTicketIcon>}
                <MatchInfoText>
                    <MilestoneIcon src="/assets/profile_page/icons8-football-50.png" $size='l' />
                    <UpcomingMatchText>{`${teamA} x ${teamB}`}</UpcomingMatchText>
                </MatchInfoText>
{/*                 <MatchInfoText>
                    <MilestoneIcon src="/assets/profile_page/icons8-ticket-50.png" $size='l' />
                </MatchInfoText> */}
            </UpcomingMatchHeader>
            <UpcomingMatchInfo>
                {/* <UpcomingMatchText>{date}</UpcomingMatchText> */}
                <MatchInfoText>
                    <MilestoneIcon src="/assets/profile_page/icons8-calendar-50.png" $size='l' />
                    <UpcomingMatchText>{date}</UpcomingMatchText>
                </MatchInfoText>
                {/* <UpcomingMatchText>{championship}</UpcomingMatchText> */}
                <MatchInfoText>
                    <MilestoneIcon src="/assets/profile_page/icons8-trophy-50.png" $size='l' />
                    <UpcomingMatchText>{championship}</UpcomingMatchText>
                </MatchInfoText>
            </UpcomingMatchInfo>
        </UpcomingMatchContainer>
    )
}

export default UpcomingMatch