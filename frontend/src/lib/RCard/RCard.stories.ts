import type { Meta, StoryObj } from "@storybook/vue3-vite";
import RCard from "./RCard.vue";

const meta = {
  title: "Components/RCard",
  component: RCard,
  tags: ["autodocs"],
} satisfies Meta<typeof RCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => ({
    components: { RCard },
    template: '<RCard class="pa-4" :width="300">Card content goes here</RCard>',
  }),
};

export const WithTitle: Story = {
  render: () => ({
    components: { RCard },
    template:
      '<RCard title="Card Title" subtitle="Card subtitle" :width="300" class="pa-4">Body content</RCard>',
  }),
};

export const Elevated: Story = {
  render: () => ({
    components: { RCard },
    template:
      '<RCard :elevation="4" :width="300" class="pa-4">Elevated card</RCard>',
  }),
};

export const Outlined: Story = {
  render: () => ({
    components: { RCard },
    template:
      '<RCard variant="outlined" :width="300" class="pa-4">Outlined card</RCard>',
  }),
};
