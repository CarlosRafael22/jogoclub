import React from 'react'
import styled from 'styled-components'

import CountryCard, { Country } from '@/molecules/CountryCard'

const CountryCardSectionContainer = styled.div`
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
    countries: Country[]
}

const CountryCardSection = ({ countries }: Props) => {
    return (
        <CountryCardSectionContainer>
            {countries.map(stat => (
                <CountryCard country={stat.country} key={stat.country} />
            ))}
        </CountryCardSectionContainer>
    )
}

export default CountryCardSection