import React from 'react'
import styled from 'styled-components'

type TypographyVariant = 'body1-regular' | 'body1-bold' | 'body2-regular' | 'body2-bold' | 'body3-regular' | 'body3-bold'
type TypographyAlign = 'left' | 'center' | 'right'

interface Props {
    variant: TypographyVariant
    align?: TypographyAlign
    color?: string
    children: React.ReactNode
}

const propertiesMapping = {
    'body1-regular': {
        'font-size': '16px',
        'font-weight': 'normal'
    },
    'body1-bold': {
        'font-size': '16px',
        'font-weight': 'bold'
    },
    'body2-regular': {
        'font-size': '12px',
        'font-weight': 'normal'
    },
    'body2-bold': {
        'font-size': '12px',
        'font-weight': 'bold'
    },
    'body3-regular': {
        'font-size': '10px',
        'font-weight': 'normal'
    },
    'body3-bold': {
        'font-size': '10px',
        'font-weight': 'bold'
    }
}

const Text = styled.p<Props>`
  ${(props) => propertiesMapping[props.variant]}
  ${(props) => `text-align: ${props.align};`}
  ${(props) => props.color && `color: ${props.color};`}
`;

const Typography = ({ variant, align = 'center', color, children }: Props) => (
    <Text variant={variant} align={align} color={color}>{children}</Text>
)

export default Typography