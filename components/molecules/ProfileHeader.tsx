import styled from "styled-components";
import RoundedImage from "@/atoms/RoundedImage";
import Typography from "@/atoms/Typography";

const Name = styled(Typography)`
    margin-top: 4px;
`

const Description = styled(Typography)`
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
            <Name variant="subtitle2-bold">Rafael Leitao</Name>
            <Typography variant="body1-bold">@maisumdiadejogo</Typography>
            <Description variant="body2-bold">Futebol pela Alemanha e Europa #groundhopping</Description>
        </ProfileHeaderWrapper>
    )
}

export default ProfileHeader