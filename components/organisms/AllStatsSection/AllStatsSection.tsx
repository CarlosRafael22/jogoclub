import React from 'react'
import styled from 'styled-components'

import TeamStatSection from '../TeamStatSection'
import { type TeamStat } from '@/molecules/TeamStatCard'
import THEME from 'styles/theme'

const AllStatsSectionWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

const AllStatsSectionContainer = styled.div`
    display: flex;
    padding: 8px 0px;
    border-top: 2px solid white;
`

const Text = styled.p`
    text-align: end;
    font-size: 16px;
    font-weight: bold;
    color: ${THEME.colors.primaryBlue};
`

interface Props {
    teamStats: TeamStat[]
}

const AllStatsSection = ({ teamStats }: Props) => {
    return (
        <AllStatsSectionWrapper>
            <Text>{'All Stats >'}</Text>
            <AllStatsSectionContainer>
                <TeamStatSection teamStats={teamStats} />
            </AllStatsSectionContainer>
        </AllStatsSectionWrapper>
    )
}

export default AllStatsSection