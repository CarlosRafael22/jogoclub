import React from 'react'
import Typography from '@/atoms/Typography'
import Card from '@/atoms/Card'
import { getCountryFlag } from './helpers'

export interface Country {
    country: string
}

const CountryCard = ({ country }: Country) => {
    const flag = getCountryFlag(country)

    return (
        <Card>
            <Typography variant='body1-bold'>{`${flag} ${country}`}</Typography>
        </Card>
    )
}

export default CountryCard