import styled from "styled-components";
import ProfileHeader from "@/molecules/ProfileHeader";
import SocialMediaSection from "@/molecules/SocialMediaSection";
import ProfilePageStatsSection from "@/organisms/ProfilePageStatsSection";
import UpcomingMatchesSection from "@/organisms/UpcomingMatchesSection";
import { DEVICES } from "styles/theme";

const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 16px;
    background-color: #f4f4f4;

    @media ${DEVICES.xxl} {
        width: 60%;
        margin: 0 auto;
    }

    @media ${DEVICES.xl} {
        width: 80%;
        margin: 0 auto;
    }

    @media ${DEVICES.sm} {
        width: 100%;
    }
`

const GroundhopperPage = () => {
    return (
        <Container>
            <ProfileHeader />
            <SocialMediaSection />
            <ProfilePageStatsSection />
            <UpcomingMatchesSection />
        </Container>
    );
}

export default GroundhopperPage