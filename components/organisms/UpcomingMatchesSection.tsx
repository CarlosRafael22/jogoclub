import styled from "styled-components";
import DetailedUpcomingMatch from '@/molecules/DetailedUpcomingMatch';

const UpcomingMatchesWrapper = styled.div`
    width: 90%;
    margin: auto;
    margin-top: 16px;
`

const UpcomingMatchesContent = styled.div`
    border-left: 3px solid black;
`

const UpcomingMatchesHeader = styled.p`
    font-size: 24px;
    font-weight: 700;
    margin-bottom: -12px;
`

const UpcomingMatchesSection = () => {
    return (
        <UpcomingMatchesWrapper>
            <UpcomingMatchesHeader>Próximos jogos:</UpcomingMatchesHeader>
            <UpcomingMatchesContent>
                <DetailedUpcomingMatch
                    teamA='AS Roma'
                    teamB='Udinese'
                    date='26/11'
                    championship='Serie A'
                    time='18:00'
                    stadium='Stadio Olimpico'
                    confirmed
                />
                <DetailedUpcomingMatch
                    teamA='Lazio'
                    teamB='Celtic'
                    date='28/11'
                    championship='Champions League'
                    time='18:45'
                    stadium='Stadio Olimpico'
                />
                <DetailedUpcomingMatch
                    teamA='FC Bayern'
                    teamB='FC Copenhagen'
                    date='29/11'
                    championship='Champions League'
                    time='21:00'
                    stadium='Allianz Arena'
                    confirmed
                />
            </UpcomingMatchesContent>
        </UpcomingMatchesWrapper>
    )
}

export default UpcomingMatchesSection