import styled from "styled-components"

const SocialMediaLink = styled.a<{ $logo: string }>`
    background-image: url(${props => props.$logo});
    display: block;
    margin: 0 4px;
    text-indent: -9999px;
    width: 50px;
    height: 50px;
`

export const SOCIAL_MEDIA_LOGO_MAPPING = {
    youtube: "/assets/social_medias/icons8-youtube-outlined-50.png",
    instagram: "/assets/social_medias/icons8-instagram-outlined-50.png",
    tiktok: "/assets/social_medias/icons8-tiktok-outlined-50.png"
}

export default SocialMediaLink