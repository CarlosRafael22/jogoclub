import React from 'react'
import styled from 'styled-components'
import THEME from 'styles/theme'
import Typography from '../Typography'

const CountTagContainer = styled.div`
    background-color: ${THEME.colors.primaryBlue};
    border-radius: 12px;
    padding: 4px 8px;
`

interface Props {
    number: number
}

const CountTag = ({ number }: Props) => {
    return (
        <CountTagContainer>
            <Typography variant='body3-bold' color='white'>{number}x</Typography>
        </CountTagContainer>
    )
}

export default CountTag