import { Meta, StoryObj } from 'storybook'
import StadiumStatSection from './StadiumStatSection'
import { STADIUM_STATS } from 'const/data'

const meta = {
    title: 'Organisms/StadiumStatSection',
    component: StadiumStatSection
} satisfies Meta<typeof StadiumStatSection>

export default meta

type Story = StoryObj<typeof StadiumStatSection>

export const Primary: Story = {
    args: {
        stadiumStats: STADIUM_STATS
    },
}