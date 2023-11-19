import styled, { css } from "styled-components";
import { MilestoneIcon } from "./Milestone";
import { getDayOfTheWeek, getDateFromDDMMYYYY } from "helpers";

const UpcomingMatchContainer = styled.div<{ $isLast?: boolean }>`
    position: relative;
    padding: 8px;
    border-radius: 8px;
    margin: 16px 48px 0px;
    background-color: #ffffff;
    transition: all ease 0.2s;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

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
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const UpcomingMatchHeader = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 4px;
`

const MatchInfoText = styled.div`
    display: flex;
    margin: 4px 0;
    font-size: 14px;
    margin: 0;
`

const MatchInfoTitle = styled.div`
    font-size: 16px;
    display: flex;
    margin: 4px 0;
    margin: 0;
`

const MatchInfoTicketIcon = styled.div<{$confirmed: boolean}>`
    position: absolute;
    right: -16px;
    top: -16px;
    margin: 4px;
    background-color: ${props => props.$confirmed ? '#20bf55' : '#adb5bd'};
    border-radius: 50%;
    padding: 4px;
`

const Wrapper = styled.div`
    position: relative;
    margin: 32px 0;
`

const DateText = styled.div`
    display: flex;
    margin-left: 8px;
    justify-content: center;
    font-size: 14px;
    line-height: 14px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    background-color: white;
    width: max-content;
    padding: 4px;

    &:before {
        position: absolute;
        left: -7.5px;
        content: " ";
        border-radius: 50%;
        background-color: #333;
        background: black;
        height: 12px;
        width: 12px;
        transition: all 500ms ease-in-out;
    }
`

interface UpcomingMatchProps {
    teamA: string
    teamB: string
    date: string
    time: string
    championship: string
    stadium: string
    confirmed?: boolean
}

const UpcomingMatch = ({ teamA, teamB, date, championship, confirmed, time, stadium }: UpcomingMatchProps) => {
    const ticketIcon = confirmed ? "/assets/profile_page/icons8-ticket-50.png" : "/assets/profile_page/icons8-binoculars-50.png";
    const dateObj = getDateFromDDMMYYYY(date+'/2023')
    const weekDay = getDayOfTheWeek(dateObj)

    return (
        <Wrapper>
            <DateText>
                <MilestoneIcon src="/assets/profile_page/icons8-calendar-50.png" $size='s' />
                <UpcomingMatchText>{weekDay} - {date} - {time}</UpcomingMatchText>
            </DateText>
        <UpcomingMatchContainer>
            <UpcomingMatchHeader>
                <MatchInfoTicketIcon $confirmed={confirmed}>
                    <MilestoneIcon src={ticketIcon} $size='m' />
                </MatchInfoTicketIcon>
                <MatchInfoTitle>
                    <UpcomingMatchText>{`${teamA} x ${teamB}`}</UpcomingMatchText>
                </MatchInfoTitle>
            </UpcomingMatchHeader>
            <UpcomingMatchInfo>
                <MatchInfoText>
                    <MilestoneIcon src="/assets/profile_page/icons8-ground-50.png" $size='m' />
                    <UpcomingMatchText>{stadium}</UpcomingMatchText>
                </MatchInfoText>
                <MatchInfoText>
                    <MilestoneIcon src="/assets/profile_page/icons8-trophy-50.png" $size='m' />
                    <UpcomingMatchText>{championship}</UpcomingMatchText>
                </MatchInfoText>
            </UpcomingMatchInfo>
        </UpcomingMatchContainer>
        </Wrapper>
    )
}

export default UpcomingMatch