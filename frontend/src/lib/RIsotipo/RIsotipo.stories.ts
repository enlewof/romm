import type { Meta, StoryObj } from "@storybook/vue3-vite";
import RIsotipo from "./RIsotipo.vue";

const meta = {
  title: "Branding/RIsotipo",
  component: RIsotipo,
  tags: ["autodocs"],
  argTypes: {
    size: { control: "number" },
    avatar: { control: "boolean" },
  },
} satisfies Meta<typeof RIsotipo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    size: 40,
    avatar: true,
  },
  render: (args) => ({
    components: { RIsotipo },
    setup: () => ({ args }),
    template: '<RIsotipo v-bind="args" />',
  }),
};

export const Default: Story = {
  render: () => ({
    components: { RIsotipo },
    template: "<RIsotipo />",
  }),
};

export const Large: Story = {
  render: () => ({
    components: { RIsotipo },
    template: '<RIsotipo :size="80" />',
  }),
};

export const NoAvatar: Story = {
  render: () => ({
    components: { RIsotipo },
    template: '<RIsotipo :avatar="false" :size="60" />',
  }),
};

export const Sizes: Story = {
  render: () => ({
    components: { RIsotipo },
    template: `
      <div style="display: flex; align-items: center; gap: 16px;">
        <RIsotipo :size="24" />
        <RIsotipo :size="40" />
        <RIsotipo :size="60" />
        <RIsotipo :size="80" />
      </div>
    `,
  }),
};
