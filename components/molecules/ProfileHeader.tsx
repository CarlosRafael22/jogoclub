import styled from "styled-components";
import RoundedImage from "@/atoms/RoundedImage";

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

const ProfileHeader = () => {

    return (
        <ProfileHeaderWrapper>
            <RoundedImage src="/assets/profile_page/profile.png" alt="Avatar" />
            <ProfileName>Rafael Leitao</ProfileName>
            <ProfileName>@maisumdiadejogo</ProfileName>
        </ProfileHeaderWrapper>
    )
}

export default ProfileHeader