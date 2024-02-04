import React from 'react'
import styled from 'styled-components'
import Typography from '@/atoms/Typography'
import { getCountryFlag } from './helpers'

const CountryCardContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 4px;
    border-radius: 6px;
    background-color: white;
    width: max-content;
    padding: 4px 8px;
    flex-shrink: 0;
`

export interface Country {
    country: string
}

const CountryCard = ({ country }: Country) => {
    const flag = getCountryFlag(country)

    return (
        <CountryCardContainer>
            <Typography variant='body1-bold'>{`${flag} ${country}`}</Typography>
        </CountryCardContainer>
    )
}

export default CountryCard