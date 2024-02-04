import { Meta, StoryObj } from 'storybook'
import ProfilePageStatsSection from './ProfilePageStatsSection'
import { STADIUM_STATS } from 'const/data'

const meta = {
    title: 'Organisms/ProfilePageStatsSection',
    component: ProfilePageStatsSection
} satisfies Meta<typeof ProfilePageStatsSection>

export default meta

type Story = StoryObj<typeof ProfilePageStatsSection>

export const Primary: Story = {
    args: {},
}