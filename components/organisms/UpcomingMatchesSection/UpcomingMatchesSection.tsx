import React from 'react'
import styled from 'styled-components'

import Typography from '@/atoms/Typography'
import THEME from 'styles/theme'
import Match from '@/interfaces/match'

const UpcomingMatchesSectionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    margin-top: 48px;
`

const UpcomingMatchesSectionContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 8px 0px;
    border-top: 2px solid white;
`

const UpcomingMatchesList = styled.div`
    margin-top: 16px;
`

interface Props {
    upcomingMatches: Match[]
    previousMatches: Match[]
}

const UpcomingMatchesSection = ({ upcomingMatches, previousMatches }: Props) => {
    return (
        <UpcomingMatchesSectionWrapper>
            <Typography variant='body1-bold' align='right' color={THEME.colors.primaryBlue}>{`All Matches (${previousMatches.length}) >`}</Typography>
            <UpcomingMatchesSectionContainer>
                <Typography variant='subtitle2-bold' align='left'>Upcoming Matches</Typography>
                <UpcomingMatchesList>
                    {upcomingMatches.length > 0 ? (
                        <div>Matches coming</div>
                    ) : (
                        <Typography variant='body1-bold'>No matches scheduled to go.</Typography>
                    )}
                </UpcomingMatchesList>
            </UpcomingMatchesSectionContainer>
        </UpcomingMatchesSectionWrapper>
    )
}

export default UpcomingMatchesSection