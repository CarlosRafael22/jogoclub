import React from 'react'
import Typography from '@/atoms/Typography'
import Card from '@/atoms/Card'

import CountTag from '@/atoms/CountTag'

export interface TeamStat {
    number: number
    team: string
}

const TeamStatCard = ({ number, team }: TeamStat) => {
    return (
        <Card>
            <Typography variant='body1-bold'>{team}</Typography>
            <CountTag number={number} />
        </Card>
    )
}

export default TeamStatCard