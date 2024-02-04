import styled from 'styled-components'
import TextBoxStat from '../../molecules/TextBoxStat'
import AllStatsSection from '@/organisms/AllStatsSection'
import { TEAM_STATS, STADIUM_STATS, COUNTRIES } from 'const/data'

const StatisticsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 90%;
`

const MainContent = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 16px;
`

const ProfilePageStatsSection = () => (
        <StatisticsWrapper>
            <MainContent>
                <TextBoxStat number={35} title='Matches' />
                <TextBoxStat number={24} title='Teams' />
                <TextBoxStat number={17} title='Stadiums' />
                <TextBoxStat number={12} title='Countries' />
            </MainContent>
            <AllStatsSection teamStats={TEAM_STATS} stadiumStats={STADIUM_STATS} countryStats={COUNTRIES} />
        </StatisticsWrapper>
    )

export default ProfilePageStatsSection
