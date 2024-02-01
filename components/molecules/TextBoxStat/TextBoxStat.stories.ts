import { Meta, StoryObj } from 'storybook'
import TextBoxStat from './TextBoxStat'

const meta = {
    title: 'Molecules/TextBoxStat',
    component: TextBoxStat,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs']
} satisfies Meta<typeof TextBoxStat>

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        number: 34,
        title: 'Matches'
    }
}