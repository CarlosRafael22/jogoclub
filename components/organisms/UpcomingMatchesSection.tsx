import styled from "styled-components";
import UpcomingMatch from "@/molecules/UpcomingMatch";

const UpcomingMatchesWrapper = styled.div`
    width: 80%;
    margin: auto;
    margin-top: 16px;
`

const UpcomingMatchesHeader = styled.p`
    font-size: 20px;
`

const UpcomingMatchesSection = () => {
    return (
        <UpcomingMatchesWrapper>
            <UpcomingMatchesHeader>Próximos jogos:</UpcomingMatchesHeader>
            <UpcomingMatch
                teamA='AS Roma'
                teamB='Udinese'
                date='26/11/2023'
                championship='Serie A'
                confirmed
            />
            <UpcomingMatch
                teamA='Lazio'
                teamB='Celtic'
                date='28/11/2023'
                championship='Champions League'
            />
            <UpcomingMatch
                teamA='FC Bayern'
                teamB='FC Copenhagen'
                date='29/11/2023'
                championship='Champions League'
                confirmed
            />
            <UpcomingMatch
                teamA='Atletico de Madrid'
                teamB='Man. United'
                date='29/11/2023'
                championship='Champions League'
            />
        </UpcomingMatchesWrapper>
    )
}

export default UpcomingMatchesSection