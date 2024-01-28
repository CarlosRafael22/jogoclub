import styled from 'styled-components'

const BoxTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 56px;
`

interface Props {
    number: number;
    title: string
}

const BoxTextStat = ({ number, title }: Props) => {
    return (
        <BoxTextContainer>
            <p style={{ fontSize: '20px', fontWeight: 'bold' }}>{number}</p>
            <p style={{ fontSize: '12px' }}>{title}</p>
        </BoxTextContainer>
    )
}

export default BoxTextStat