import styled from 'styled-components'

const TextBoxContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 56px;
`

interface Props {
    number: number;
    title: string
}

const TextBoxStat = ({ number, title }: Props) => {
    return (
        <TextBoxContainer>
            <p style={{ fontSize: '20px', fontWeight: 'bold' }}>{number}</p>
            <p style={{ fontSize: '12px' }}>{title}</p>
        </TextBoxContainer>
    )
}

export default TextBoxStat