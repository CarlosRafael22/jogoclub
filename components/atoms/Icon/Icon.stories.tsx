import { Meta, StoryObj } from 'storybook'

import Icon from './index'
import { ICONS_MAP, SIZE_MAP } from './constants'

const meta = {
    title: 'Atoms/Icon',
    component: Icon,
    tags: ['autodocs'],
    argTypes: {
        name: {
          control: 'select',
          options: Object.keys(ICONS_MAP),
          defaultValue: null
        },
        size: {
            control: 'select',
            options: Object.keys(SIZE_MAP),
            defaultValue: SIZE_MAP.m
          },
      },
} satisfies Meta<typeof Icon>

export default meta

type Story = StoryObj<typeof Icon>

export const Primary: Story = {
    args: {
        name: 'clap'
    }
}
