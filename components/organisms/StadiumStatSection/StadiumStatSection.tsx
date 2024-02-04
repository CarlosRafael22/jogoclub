import React from 'react'
import styled from 'styled-components'

import StadiumStatCard, { StadiumStat } from '@/molecules/StadiumStatCard'

const StadiumStatSectionContainer = styled.div`
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
    stadiumStats: StadiumStat[]
}

const StadiumStatSection = ({ stadiumStats }: Props) => {
    return (
        <StadiumStatSectionContainer>
            {stadiumStats.map(stat => (
                <StadiumStatCard stadium={stat.stadium} location={stat.location} number={stat.number} key={stat.stadium} />
            ))}
        </StadiumStatSectionContainer>
    )
}

export default StadiumStatSection