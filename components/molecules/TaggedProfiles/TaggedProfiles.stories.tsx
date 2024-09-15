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

const Template = (args) => (
    <div className='w-80'>
        <TaggedProfiles {...args} />
    </div>
);

export const Primary: Story = Template.bind({});
Primary.args = {
    profiles: mockedTaggedProfiles,
};

export const ProfilesAboveThreshold: Story = Template.bind({});
ProfilesAboveThreshold.args = {
    profiles: [
        ...mockedTaggedProfiles,
        ...mockedTaggedProfiles
    ],
};
