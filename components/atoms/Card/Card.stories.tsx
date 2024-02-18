import { Meta, StoryObj } from 'storybook'

import Card from './Card'

const meta = {
    title: 'Atoms/Card',
    component: Card,
    tags: ['autodocs']
} satisfies Meta<typeof Card>

export default meta

type Story = StoryObj<typeof Card>

export const Primary: Story = {
    args: {
        children: <p>This is a card</p>
    }
}

export const WithStyle: Story = {
    args: {
        children: <p>This is a styled card</p>,
        style: { backgroundColor: 'blue', color: 'white', padding: '12px' }
    }
}