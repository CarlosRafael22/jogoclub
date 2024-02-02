import React from 'react'
import styled from 'styled-components'
import THEME from 'styles/theme'

const CountTagContainer = styled.div`
    background-color: ${THEME.colors.primaryBlue};
    color: white;
    font-size: 10px;
    border-radius: 12px;
    padding: 4px 8px;
`

interface Props {
    number: number
}

const CountTag = ({ number }: Props) => {
    return (
        <CountTagContainer>
            <p>{number}x</p>
        </CountTagContainer>
    )
}

export default CountTag