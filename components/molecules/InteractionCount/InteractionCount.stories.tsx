import { Meta, StoryObj } from 'storybook'

import InteractionCount from './index'
import { INTERACTION_ICONS_MAP } from '@/atoms/Icon/constants'

const meta = {
    title: 'Molecules/InteractionCount',
    component: InteractionCount,
    tags: ['autodocs'],
    argTypes: {
        name: {
          control: 'select',
          options: Object.keys(INTERACTION_ICONS_MAP),
          defaultValue: null
        }
      },
} satisfies Meta<typeof InteractionCount>

export default meta

type Story = StoryObj<typeof InteractionCount>

export const Primary: Story = {
    args: {
        name: 'clap'
    }
}

export const WithCount: Story = {
    args: {
        name: 'clap',
        count: 32
    }
}
