import React from 'react'
import styled from 'styled-components'

import TeamStatSection from '../TeamStatSection'
import { type TeamStat } from '@/molecules/TeamStatCard'
import Typography from '@/atoms/Typography'
import THEME from 'styles/theme'
import { StadiumStat } from '@/molecules/StadiumStatCard'
import StadiumStatSection from '../StadiumStatSection'
import CountryStatSection from '../CountryStatSection'
import { Country } from '@/molecules/CountryCard'

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
    countryStats: Country[]
}

const AllStatsSection = ({ teamStats, stadiumStats, countryStats }: Props) => {
    return (
        <AllStatsSectionWrapper>
            <Typography variant='body1-bold' align='right' color={THEME.colors.primaryBlue}>{'All Stats >'}</Typography>
            <AllStatsSectionContainer>
                <TeamStatSection teamStats={teamStats} />
                <StadiumStatSection stadiumStats={stadiumStats} />
                <CountryStatSection countries={countryStats} />
            </AllStatsSectionContainer>
        </AllStatsSectionWrapper>
    )
}

export default AllStatsSection