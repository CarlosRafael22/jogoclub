import { Meta, StoryObj } from 'storybook'
import StadiumStatCard from './StadiumStatCard'

const meta = {
    title: 'Molecules/StadiumStatCard',
    component: StadiumStatCard
} satisfies Meta<typeof StadiumStatCard>

export default meta

type Story = StoryObj<typeof StadiumStatCard>

export const Primary: Story = {
    args: {
        stadium:'Estádio do Clube Desportivo das Aves',
        location: 'Vila das Aves - Santo Tirso, Portugal',
        number: 1
    },
}