import styled from 'styled-components'
import Typography from '@/atoms/Typography'

const TextBoxContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 56px;
`

interface Props {
    /** Stat number */
    number: number;
    /** Stat title */
    title: string;
}

const TextBoxStat = ({ number, title }: Props) => {
    return (
        <TextBoxContainer>
            <Typography variant='subtitle2-bold'>{number}</Typography>
            <Typography variant='body2-regular'>{title}</Typography>
        </TextBoxContainer>
    )
}

export default TextBoxStat