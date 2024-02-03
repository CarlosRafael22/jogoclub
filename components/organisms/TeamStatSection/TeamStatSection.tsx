import React from 'react'
import styled from 'styled-components'

import TeamStatCard, { TeamStat } from '@/molecules/TeamStatCard'

const TeamStatSectionContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    overflow-y: scroll;

    /* Hide scrollbar for Chrome, Safari and Opera */
    &::-webkit-scrollbar {
        display: none;
    }

    /* Hide scrollbar for IE, Edge and Firefox */
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
`

interface Props {
    teamStats: TeamStat[]
}

const TeamStatSection = ({ teamStats }: Props) => {
    return (
        <TeamStatSectionContainer>
            {teamStats.map(stat => (
                <TeamStatCard team={stat.team} number={stat.number} />
            ))}
        </TeamStatSectionContainer>
    )
}

export default TeamStatSection