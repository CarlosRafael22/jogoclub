import styled from 'styled-components'
import Milestone from './Milestone'

const StatisticsWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    align-items: center;
`

const StatisticsSection = () => {
    return (
        <StatisticsWrapper>
            <Milestone iconLabel='football' text='27 jogos'  />
            <Milestone iconLabel='stadium' text='16 estádios assistindo jogos'  />
            <Milestone iconLabel='country' text='9 países visitados pelo futebol'  />
        </StatisticsWrapper>
    )
}

export default StatisticsSection
