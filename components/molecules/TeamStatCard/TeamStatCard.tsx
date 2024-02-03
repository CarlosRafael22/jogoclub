import React from 'react'
import styled from 'styled-components'
import Typography from '@/atoms/Typography'

import CountTag from '@/atoms/CountTag'

const TeamStatCardContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 4px;
    border-radius: 6px;
    background-color: white;
    width: max-content;
    padding: 4px;
    flex-shrink: 0;
`

export interface TeamStat {
    number: number
    team: string
}

const TeamStatCard = ({ number, team }: TeamStat) => {
    return (
        <TeamStatCardContainer>
            <Typography variant='body2-bold'>{team}</Typography>
            <CountTag number={number} />
        </TeamStatCardContainer>
    )
}

export default TeamStatCard