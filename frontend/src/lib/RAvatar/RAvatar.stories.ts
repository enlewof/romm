import type { Meta, StoryObj } from "@storybook/vue3-vite";
import RAvatar from "./RAvatar.vue";

const meta = {
  title: "Data Display/RAvatar",
  component: RAvatar,
  tags: ["autodocs"],
  argTypes: {
    size: { control: "number" },
    rounded: { control: "text" },
    color: { control: "text" },
    variant: {
      control: "select",
      options: ["flat", "text", "outlined", "elevated", "tonal", "plain"],
    },
    image: { control: "text" },
  },
} satisfies Meta<typeof RAvatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    size: 40,
    color: "primary",
  },
  render: (args) => ({
    components: { RAvatar },
    setup: () => ({ args }),
    template: '<RAvatar v-bind="args">AB</RAvatar>',
  }),
};

export const Default: Story = {
  render: () => ({
    components: { RAvatar },
    template: '<RAvatar color="primary">AB</RAvatar>',
  }),
};

export const WithImage: Story = {
  render: () => ({
    components: { RAvatar },
    template:
      '<RAvatar image="https://raw.githubusercontent.com/rommapp/romm/refs/heads/master/.github/resources/isotipo.svg" :size="80" />',
  }),
};

export const Sizes: Story = {
  render: () => ({
    components: { RAvatar },
    template: `
      <div style="display: flex; align-items: center; gap: 12px;">
        <RAvatar color="primary" :size="24">S</RAvatar>
        <RAvatar color="primary" :size="40">M</RAvatar>
        <RAvatar color="primary" :size="56">L</RAvatar>
        <RAvatar color="primary" :size="80">XL</RAvatar>
      </div>
    `,
  }),
};

export const Rounded: Story = {
  render: () => ({
    components: { RAvatar },
    template: `
      <div style="display: flex; align-items: center; gap: 12px;">
        <RAvatar color="primary">A</RAvatar>
        <RAvatar color="primary" :rounded="0">B</RAvatar>
        <RAvatar color="primary" rounded="lg">C</RAvatar>
      </div>
    `,
  }),
};
