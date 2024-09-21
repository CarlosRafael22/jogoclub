import { Meta, StoryObj } from 'storybook'
import UpcomingMatchesSection from './UpcomingMatchesSection'
import { UPCOMING_MATCHES } from 'const/data'
import { mockedUpcomingMatch } from '@/mocks/match'

const meta = {
    title: 'Organisms/UpcomingMatchesSection',
    component: UpcomingMatchesSection,
    parameters: {
        backgrounds: {
            default: 'Gray',
            values: [
              { name: 'Gray', value: '#CCC' },
            ],
          },
    },
} satisfies Meta<typeof UpcomingMatchesSection>

export default meta

type Story = StoryObj<typeof UpcomingMatchesSection>

export const Primary: Story = {
    args: {
        upcomingMatches: Array(4).fill(mockedUpcomingMatch),
        previousMatches: UPCOMING_MATCHES
    },
}