import styled from "styled-components"

const MilestoneWrapper = styled.div`
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
    xs: '8px',
    s: '14px',
    m: '20px',
    l: '24px'
}[size])

export const MilestoneIcon = styled.img<{ $size?: string }>`
    height: ${props => getIconSize(props.$size || 'l')};
    width: ${props => getIconSize(props.$size || 'l')};
`

const MilestoneText = styled.div`
    margin-left: 8px;
    line-height: 24px;
`

type IconLabel = 'football' | 'stadium' | 'country'

interface MilestoneProps {
    iconLabel: IconLabel
    text: string
}

const Milestone = ({
    iconLabel,
    text
}: MilestoneProps) => {
    return (
        <MilestoneWrapper>
            <MilestoneIcon src={`/assets/profile_page/icons8-${iconLabel}-50.png`} />
            <MilestoneText>{text}</MilestoneText>
        </MilestoneWrapper>
    )
}

export default Milestone