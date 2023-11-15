import styled from "styled-components"
import SocialMediaLink, { SOCIAL_MEDIA_LOGO_MAPPING } from "@/atoms/SocialMediaLink"

const SocialMediaSectionWrapper = styled.div`
    display: flex;
    flex-direction: row;
    margin: 16px 0;
`

const SocialMediaSection = () => {
    return (
        <SocialMediaSectionWrapper>
            <SocialMediaLink href={'https://youtube.com'} $logo={SOCIAL_MEDIA_LOGO_MAPPING.instagram} />
            <SocialMediaLink href={'https://youtube.com'} $logo={SOCIAL_MEDIA_LOGO_MAPPING.youtube} />
            <SocialMediaLink href={'https://youtube.com'} $logo={SOCIAL_MEDIA_LOGO_MAPPING.tiktok} />
        </SocialMediaSectionWrapper>
    )
}

export default SocialMediaSection