import React from 'react'
import styled from 'styled-components'
import Typography from '@/atoms/Typography'
import Card from '@/atoms/Card'

import CountTag from '@/atoms/CountTag'

const StadiumStatCardContainer = styled(Card)`
    display: flex;
    align-items: flex-end;
    flex-shrink: 0;
    gap: 8px;
    padding: 8px;
    height: 90px;
`

const StadiumInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    align-items: flex-start; 
    max-width: 140px;
    height: 100%;
    justify-content: space-between;
`

const StadiumName = styled(Typography)`
    line-height: 18px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;  
`

const StadiumLocation = styled(Typography)`
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
`

export interface StadiumStat {
    stadium: string
    location: string
    number: number
}

const StadiumStatCard = ({ number, stadium, location }: StadiumStat) => {
    return (
        <StadiumStatCardContainer>
            <StadiumInfoContainer>
                <StadiumName variant='body1-bold' align='left'>{stadium}</StadiumName>
                <StadiumLocation variant='body2-regular' align='left'>{location}</StadiumLocation>
            </StadiumInfoContainer>
            <CountTag number={number} />
        </StadiumStatCardContainer>
    )
}

export default StadiumStatCard