import React from 'react'
import styled from 'styled-components'

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

const Text = styled.p`
    font-size: 12px;
    font-weight: bold;
`

export interface TeamStat {
    number: number
    team: string
}

const TeamStatCard = ({ number, team }: TeamStat) => {
    return (
        <TeamStatCardContainer>
            <Text>{team}</Text>
            <CountTag number={number} />
        </TeamStatCardContainer>
    )
}

export default TeamStatCard