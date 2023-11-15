import styled from "styled-components";
import ProfileHeader from "@/molecules/ProfileHeader";
import SocialMediaSection from "@/molecules/SocialMediaSection";
import StatisticsSection from "@/molecules/StatisticsSection";
import UpcomingMatchesSection from "@/organisms/UpcomingMatchesSection";

const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 32px;
    background-color: #fafafa;
`

const GroundhopperPage = () => {
    return (
        <Container>
            <ProfileHeader />
            <SocialMediaSection />
            <StatisticsSection />
            <UpcomingMatchesSection />
        </Container>
    );
}

export default GroundhopperPage