import { Meta, StoryObj } from 'storybook'

import FeedActivityFooter from './index'
import { Primary as TaggedProfilesPrimary, ProfilesAboveThreshold } from '@/molecules/TaggedProfiles/TaggedProfiles.stories'

const meta = {
    title: 'Organisms/FeedActivityFooter',
    component: FeedActivityFooter,
    tags: ['autodocs'],
} satisfies Meta<typeof FeedActivityFooter>

export default meta

type Story = StoryObj<typeof FeedActivityFooter>

const Template = (args) => (
    <div className='w-80'>
        <FeedActivityFooter {...args} />
    </div>
);

export const Primary: Story = Template.bind({});

export const WithInteractionCount: Story = Template.bind({});
WithInteractionCount.args = {
    celebrateCount: 12,
    commentCount: 32,
    stadiumCount: 8
};

export const WithInteractionCountAndPeopleUpToThreshold: Story = Template.bind({});
WithInteractionCountAndPeopleUpToThreshold.args = {
    celebrateCount: 12,
    commentCount: 32,
    stadiumCount: 8,
    taggedProfiles: TaggedProfilesPrimary.args.profiles
}

export const WithInteractionCountAndPeopleAboveThreshold: Story = Template.bind({});
WithInteractionCountAndPeopleAboveThreshold.args = {
    celebrateCount: 12,
    commentCount: 32,
    stadiumCount: 8,
    taggedProfiles: ProfilesAboveThreshold.args.profiles
};
