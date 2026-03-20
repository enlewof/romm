import type { Meta, StoryObj } from "@storybook/vue3-vite";
import RCard from "./RCard.vue";

const meta = {
  title: "Containment/RCard",
  component: RCard,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["flat", "text", "elevated", "tonal", "outlined", "plain"],
    },
    elevation: { control: "number" },
    color: { control: "text" },
    rounded: { control: "text" },
    loading: { control: "boolean" },
    disabled: { control: "boolean" },
    width: { control: "text" },
    height: { control: "text" },
    maxWidth: { control: "text" },
    maxHeight: { control: "text" },
    title: { control: "text" },
    subtitle: { control: "text" },
    hover: { control: "boolean" },
    link: { control: "boolean" },
    to: { control: "text" },
    href: { control: "text" },
  },
} satisfies Meta<typeof RCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    elevation: 0,
    loading: false,
    disabled: false,
    hover: false,
    link: false,
    width: "300",
    title: "Card Title",
    subtitle: "Card subtitle",
  },
  render: (args) => ({
    components: { RCard },
    setup: () => ({ args }),
    template:
      '<RCard v-bind="args" class="pa-4">Card content goes here</RCard>',
  }),
};

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
