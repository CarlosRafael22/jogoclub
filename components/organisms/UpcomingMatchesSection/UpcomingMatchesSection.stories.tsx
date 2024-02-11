import { Meta, StoryObj } from 'storybook'
import UpcomingMatchesSection from './UpcomingMatchesSection'
import { UPCOMING_MATCHES } from 'const/data'

const meta = {
    title: 'Organisms/UpcomingMatchesSection',
    component: UpcomingMatchesSection
} satisfies Meta<typeof UpcomingMatchesSection>

export default meta

type Story = StoryObj<typeof UpcomingMatchesSection>

export const Primary: Story = {
    args: {
        upcomingMatches: UPCOMING_MATCHES,
        previousMatches: UPCOMING_MATCHES
    },
}