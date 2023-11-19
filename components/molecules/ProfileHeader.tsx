import styled from "styled-components";
import RoundedImage from "@/atoms/RoundedImage";

const Name = styled.p`
    font-weight: 700;
    font-size: 20px;
    margin-top: 4px;
`

const Username = styled.p`
    font-weight: 700;
    font-size: 16px;
`

const Description = styled.p`
    font-weight: 700;
    font-size: 14px;
    margin-top: 4px;
`

const ProfileHeaderWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const ProfileHeader = () => {
    return (
        <ProfileHeaderWrapper>
            <RoundedImage src="/assets/profile_page/profile.png" alt="Avatar" />
            <Name>Rafael Leitao</Name>
            <Username>@maisumdiadejogo</Username>
            <Description>Futebol pela Alemanha e Europa #groundhopping</Description>
        </ProfileHeaderWrapper>
    )
}

export default ProfileHeader