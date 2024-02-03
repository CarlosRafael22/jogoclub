import React, { type ComponentPropsWithoutRef } from 'react'
import styled from 'styled-components'

type TypographyVariant = 'body1-regular' | 'body1-bold' | 'body2-regular' | 'body2-bold' | 'body3-regular' | 'body3-bold' | 'subtitle2-regular' | 'subtitle2-bold'
type TypographyAlign = 'left' | 'center' | 'right'

interface Props extends ComponentPropsWithoutRef<"input"> {
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
    },
    'subtitle2-regular': {
        'font-size': '20px',
        'font-weight': 'normal'
    },
    'subtitle2-bold': {
        'font-size': '20px',
        'font-weight': 'bold'
    }
}

const Text = styled.p.withConfig({
    // To avoid "it looks like an unknown prop align is being sent through to the DOM"
    // A prop that fails the test in shouldForwardProp isn't passed down
    shouldForwardProp: (prop) => !["align", "variant"].includes(prop)
  })<Props>`
  ${(props) => propertiesMapping[props.variant]}
  text-align: ${props => props.align};
  ${(props) => props.color && `color: ${props.color};`}
`;

const Typography = ({ variant, align = 'center', color, children, ...restOfProps }: Props) => (
    <Text variant={variant} align={align} color={color} {...restOfProps}>{children}</Text>
)

export default Typography