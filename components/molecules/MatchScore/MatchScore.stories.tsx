import { Meta, StoryObj } from 'storybook'

import MatchScore from './index'

import { mockedMatchScoreWithKickoff, mockedMatchScoreInfo } from '@/mocks/match'

const meta = {
    title: 'Molecules/MatchScore',
    component: MatchScore,
    tags: ['autodocs']
} satisfies Meta<typeof MatchScore>

export default meta

type Story = StoryObj<typeof MatchScore>

const Template = (args) => (
    <div className='w-80'>
        <MatchScore {...args} />
    </div>
);

export const Primary: Story = Template.bind({});
Primary.args = mockedMatchScoreWithKickoff;

export const WithScore: Story = Template.bind({});
WithScore.args = mockedMatchScoreInfo;
