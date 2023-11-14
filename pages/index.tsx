import styled from 'styled-components'

const IMAGE_URL = "https://img.fcbayern.com/image/upload/t_cms-1x1-seo/v1691827799/cms/public/images/fcbayern-com/players/spielerportraits/ganzkoerper/harry-kane.png"

const RoundedImage = styled.img`
    border-radius: 50%;
    width: 90px;
    height: 90px;
`

const ProfileName = styled.p`
    font-weight: 700;
    font-size: 20px;
    margin-top: 8px;
`

const ProfileHeaderWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 32px;
    background-color: #fafafa;
`

const ProfileHeader = () => {

    return (
        <ProfileHeaderWrapper>
            <RoundedImage src="/assets/profile_page/profile.png" alt="Avatar" />
            {/* <RoundedImage src={IMAGE_URL} alt="Avatar" /> */}
            <ProfileName>Rafael Leitao</ProfileName>
            <ProfileName>@maisumdiadejogo</ProfileName>
        </ProfileHeaderWrapper>
    )
}

const StatisticsWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    align-items: center;
`

const Milestone = styled.div`
    display: flex;
    border-radius: 8px;
    padding: 8px;
    margin: 6px 0;
    background-color: #ffffff;
    box-shadow: 0 7px 30px -10px rgba(150,170,180,0.5);

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0px 10px 10px 2px rgba(0, 0, 0, 0.25);
    }
`

const getIconSize = (size: string) => ({
    s: '8px',
    m: '20px',
    l: '24px'
}[size])

const MilestoneIcon = styled.img<{ $size?: string }>`
    height: ${props => getIconSize(props.$size || 'l')};
    width: ${props => getIconSize(props.$size || 'l')};
`

const MilestoneText = styled.div`
    margin-left: 8px;
    line-height: 24px;
`

const Statistics = () => {
    return (
        <StatisticsWrapper>
            <Milestone>
                <MilestoneIcon src="/assets/profile_page/icons8-football-50.png" />
                <MilestoneText>67 jogos</MilestoneText>
            </Milestone>
            <Milestone>
                <MilestoneIcon src="/assets/profile_page/icons8-stadium-50.png" />
                <MilestoneText>16 estádios assistindo jogos</MilestoneText>
            </Milestone>
            <Milestone>
                <MilestoneIcon src="/assets/profile_page/icons8-country-50.png" />
                <MilestoneText>9 países visitados pelo futebol</MilestoneText>
            </Milestone>
            {/* <Milestone>
                <MilestoneIcon src="/assets/profile_page/icons8-stadium-50.png" />
                <MilestoneText>12 estádios tours feito</MilestoneText>
            </Milestone> */}
        </StatisticsWrapper>
    )
}

const UpcomingMatchesWrapper = styled.div`
    width: 80%;
    margin: auto;
    margin-top: 16px;
`

const UpcomingMatchesHeader = styled.p`
    font-size: 20px;
`

interface UpcomingMatchProps {
    teamA: string,
    teamB: string,
    date: string,
    championship: string
    confirmed?: boolean
}

const UpcomingMatchContainer = styled.div`
    position: relative;
    margin-top: 16px;
    padding: 8px;
    border-radius: 8px;
    background-color: #ffffff;
    transition: all ease 0.2s;
    box-shadow: 8px 16px 30px -10px rgba(150,170,180,0.5);

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0px 10px 10px 2px rgba(0, 0, 0, 0.25);
    }
`

const UpcomingMatchText = styled.p`
    margin-left: 4px;
`

const UpcomingMatchInfo = styled.div`
    display: flex;
    justify-content: center;
    gap: 12px;
`

const UpcomingMatchHeader = styled.div`
    display: flex;
    justify-content: center;
`

const MatchInfoText = styled.div`
    display: flex;
    margin: 4px 0;
`

const MatchInfoTicketIcon = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    margin: 4px;
`

const UpcomingMatch = ({ teamA, teamB, date, championship, confirmed }: UpcomingMatchProps) => {
    return (
        <UpcomingMatchContainer>
            {/* <UpcomingMatchText>{`${teamA} x ${teamB}`}</UpcomingMatchText> */}
            <UpcomingMatchHeader>
                {confirmed && <MatchInfoTicketIcon>
                    <MilestoneIcon src="/assets/profile_page/icons8-ticket-50.png" $size='m' />
                </MatchInfoTicketIcon>}
                <MatchInfoText>
                    <MilestoneIcon src="/assets/profile_page/icons8-football-50.png" $size='l' />
                    <UpcomingMatchText>{`${teamA} x ${teamB}`}</UpcomingMatchText>
                </MatchInfoText>
{/*                 <MatchInfoText>
                    <MilestoneIcon src="/assets/profile_page/icons8-ticket-50.png" $size='l' />
                </MatchInfoText> */}
            </UpcomingMatchHeader>
            <UpcomingMatchInfo>
                {/* <UpcomingMatchText>{date}</UpcomingMatchText> */}
                <MatchInfoText>
                    <MilestoneIcon src="/assets/profile_page/icons8-calendar-50.png" $size='l' />
                    <UpcomingMatchText>{date}</UpcomingMatchText>
                </MatchInfoText>
                {/* <UpcomingMatchText>{championship}</UpcomingMatchText> */}
                <MatchInfoText>
                    <MilestoneIcon src="/assets/profile_page/icons8-trophy-50.png" $size='l' />
                    <UpcomingMatchText>{championship}</UpcomingMatchText>
                </MatchInfoText>
            </UpcomingMatchInfo>
        </UpcomingMatchContainer>
    )
}

const UpcomingMatches = () => {
    return (
        <UpcomingMatchesWrapper>
            <UpcomingMatchesHeader>Próximos jogos:</UpcomingMatchesHeader>
            <UpcomingMatch
                teamA='AS Roma'
                teamB='Udinese'
                date='26/11/2023'
                championship='Serie A'
                confirmed
            />
            <UpcomingMatch
                teamA='Lazio'
                teamB='Celtic'
                date='28/11/2023'
                championship='Champions League'
            />
            <UpcomingMatch
                teamA='FC Bayern'
                teamB='FC Copenhagen'
                date='29/11/2023'
                championship='Champions League'
                confirmed
            />
            <UpcomingMatch
                teamA='Atletico de Madrid'
                teamB='Man. United'
                date='29/11/2023'
                championship='Champions League'
            />
        </UpcomingMatchesWrapper>
    )
}

const SocialMediaSectionWrapper = styled.div`
    display: flex;
    flex-direction: row;
    margin: 16px 0;
`

const SocialMediaLink = styled.a<{ $logo: string }>`
    background-image: url(${props => props.$logo});
    display: block;
    margin: 0 4px;
    text-indent: -9999px;
    width: 50px;
    height: 50px;
`

const SOCIAL_MEDIA_LOGO_MAPPING = {
    youtube: "/assets/social_medias/icons8-youtube-50.png",
    instagram: "/assets/social_medias/icons8-instagram-50.png",
    tiktok: "/assets/social_medias/icons8-tiktok-50.png"
}

const SocialMediaSection = () => {
    return (
        <SocialMediaSectionWrapper>
            <SocialMediaLink href={'https://youtube.com'} $logo={SOCIAL_MEDIA_LOGO_MAPPING.instagram} />
            <SocialMediaLink href={'https://youtube.com'} $logo={SOCIAL_MEDIA_LOGO_MAPPING.youtube} />
            <SocialMediaLink href={'https://youtube.com'} $logo={SOCIAL_MEDIA_LOGO_MAPPING.tiktok} />
        </SocialMediaSectionWrapper>
    )
}


export default function FirstPost() {
    return (
        <Container>
            <ProfileHeader />
            <SocialMediaSection />
            <Statistics />
            <UpcomingMatches />
        </Container>
        );
}