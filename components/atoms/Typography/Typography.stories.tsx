import { Meta, StoryObj } from 'storybook'
import Typography from './Typography'

const meta = {
    title: 'Atoms/Typography',
    component: Typography
} satisfies Meta<typeof Typography>

export default meta

type Story = StoryObj<typeof Typography>

export const Primary: Story = {
    args: {
        children: 'Typography example',
        variant: 'body1-regular'
    }
}