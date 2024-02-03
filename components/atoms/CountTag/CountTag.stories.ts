import { Meta, StoryObj } from 'storybook'

import CountTag from './CountTag'

const meta = {
    title: 'Atoms/CountTag',
    component: CountTag,
    tags: ['autodocs']
} satisfies Meta<typeof CountTag>

export default meta

type Story = StoryObj<typeof CountTag>

export const Primary: Story = {
    args: {
        number: 12
    }
}