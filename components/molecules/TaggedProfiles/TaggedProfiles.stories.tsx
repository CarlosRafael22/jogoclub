import { Meta, StoryObj } from 'storybook'

import TaggedProfiles from './index'
import { mockedTaggedProfiles } from '@/mocks/profiles'

const meta = {
    title: 'Molecules/TaggedProfiles',
    component: TaggedProfiles,
    tags: ['autodocs'],
} satisfies Meta<typeof TaggedProfiles>

export default meta

type Story = StoryObj<typeof TaggedProfiles>

const RenderFunction = {
    render: (args) => (
        <div className='w-80'>
            <TaggedProfiles {...args} />
        </div>
    )
}

export const Primary: Story = {
    ...RenderFunction,
    args: {
        profiles: mockedTaggedProfiles,
    },
    
}

export const ProfilesAboveThreshold: Story = {
    ...RenderFunction,
    args: {
        profiles: [
            ...mockedTaggedProfiles,
            ...mockedTaggedProfiles
        ],
    }
}
