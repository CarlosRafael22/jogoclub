import { Meta, StoryObj } from 'storybook'

import TeamNameBadge from './index'
import { mockedHomeAndAwayTeam } from '@/mocks/match'

const meta = {
    title: 'Molecules/TeamNameBadge',
    component: TeamNameBadge,
    tags: ['autodocs'],
    argTypes: {
        isHomeTeam: {
          control: 'select',
          options: [true, false],
          defaultValue: true
        },
      },
} satisfies Meta<typeof TeamNameBadge>

export default meta

type Story = StoryObj<typeof TeamNameBadge>

const Template = (args) => (
    <div className='bg-sky-300 w-fit'>
        <TeamNameBadge {...args} />
    </div>
);

export const Primary: Story = Template.bind({});
Primary.args = {
    ...mockedHomeAndAwayTeam.homeTeam,
    isHomeTeam: true
};
