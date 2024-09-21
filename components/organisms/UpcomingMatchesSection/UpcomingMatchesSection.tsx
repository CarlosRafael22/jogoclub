import React from 'react'

import Typography from '@/atoms/Typography'
import MatchCard from '@/molecules/MatchCard'
import { type BasicMatchInfo } from 'entities/models/match'
import THEME from 'styles/theme'
import Match from '@/interfaces/match'

interface Props {
    upcomingMatches: BasicMatchInfo[]
    previousMatches: Match[]
}

const UpcomingMatchesSection = ({ upcomingMatches, previousMatches }: Props) => {
    return (
        <div className='flex flex-col mt-12 w-[90%]'>
            <Typography variant='body1-bold' align='right' color={THEME.colors.primaryBlue}>{`All Matches (${previousMatches.length}) >`}</Typography>
            <div className='flex flex-col gap-2 py-2 border-t-2 border-s-white'>
                <Typography variant='subtitle2-bold' align='left'>Upcoming Matches</Typography>
                <div className='flex flex-col items-center mt-4 gap-4'>
                    {upcomingMatches.length > 0 ? (
                        upcomingMatches.map(match => (
                            <MatchCard {...match} />
                        ))
                    ) : (
                        <Typography variant='body1-bold'>No matches scheduled to go.</Typography>
                    )}
                </div>
            </div>
        </div>
    )
}

export default UpcomingMatchesSection