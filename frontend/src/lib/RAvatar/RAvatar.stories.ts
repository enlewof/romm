import type { Meta, StoryObj } from "@storybook/vue3-vite";
import RAvatar from "./RAvatar.vue";

const meta = {
  title: "Components/RAvatar",
  component: RAvatar,
  tags: ["autodocs"],
} satisfies Meta<typeof RAvatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => ({
    components: { RAvatar },
    template: '<RAvatar color="primary">AB</RAvatar>',
  }),
};

export const WithImage: Story = {
  render: () => ({
    components: { RAvatar },
    template: '<RAvatar image="https://picsum.photos/80" :size="80" />',
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
