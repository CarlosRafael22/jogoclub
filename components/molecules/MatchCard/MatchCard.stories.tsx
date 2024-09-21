import { Meta, StoryObj } from 'storybook'

import MatchCard from './index'

import { mockedUpcomingMatch } from '@/mocks/match'

const meta = {
    title: 'Molecules/MatchCard',
    component: MatchCard,
    tags: ['autodocs'],
    parameters: {
        backgrounds: {
            default: 'Gray',
            values: [
              { name: 'Gray', value: '#CCC' },
            ],
          },
    },
} satisfies Meta<typeof MatchCard>

export default meta

type Story = StoryObj<typeof MatchCard>

const Template = (args) => (
    <div className='w-80'>
        <MatchCard {...args} />
    </div>
);

export const Primary: Story = Template.bind({});
Primary.args = mockedUpcomingMatch;
