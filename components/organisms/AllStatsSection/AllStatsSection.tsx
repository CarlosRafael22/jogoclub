import React from 'react'
import styled from 'styled-components'

import TeamStatSection from '../TeamStatSection'
import { type TeamStat } from '@/molecules/TeamStatCard'
import Typography from '@/atoms/Typography'
import THEME from 'styles/theme'
import { StadiumStat } from '@/molecules/StadiumStatCard/StadiumStatCard'
import StadiumStatSection from '../StadiumStatSection/StadiumStatSection'

const AllStatsSectionWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

const AllStatsSectionContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 8px 0px;
    border-top: 2px solid white;
`

interface Props {
    teamStats: TeamStat[]
    stadiumStats: StadiumStat[]
}

const AllStatsSection = ({ teamStats, stadiumStats }: Props) => {
    return (
        <AllStatsSectionWrapper>
            <Typography variant='body1-bold' align='right' color={THEME.colors.primaryBlue}>{'All Stats >'}</Typography>
            <AllStatsSectionContainer>
                <TeamStatSection teamStats={teamStats} />
                <StadiumStatSection stadiumStats={stadiumStats} />
            </AllStatsSectionContainer>
        </AllStatsSectionWrapper>
    )
}

export default AllStatsSection