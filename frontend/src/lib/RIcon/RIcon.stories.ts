import type { Meta, StoryObj } from "@storybook/vue3-vite";
import RIcon from "./RIcon.vue";

const meta = {
  title: "Data Display/RIcon",
  component: RIcon,
  tags: ["autodocs"],
  argTypes: {
    icon: { control: "text" },
    size: {
      control: "select",
      options: ["x-small", "small", "default", "large", "x-large"],
    },
    color: { control: "text" },
    start: { control: "boolean" },
    end: { control: "boolean" },
  },
} satisfies Meta<typeof RIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    icon: "mdi-heart",
    size: "default",
    start: false,
    end: false,
  },
  render: (args) => ({
    components: { RIcon },
    setup: () => ({ args }),
    template: '<RIcon v-bind="args" />',
  }),
};

export const Default: Story = {
  render: () => ({
    components: { RIcon },
    template: '<RIcon icon="mdi-heart" />',
  }),
};

export const WithColor: Story = {
  render: () => ({
    components: { RIcon },
    template: `
      <div style="display: flex; gap: 12px;">
        <RIcon icon="mdi-heart" color="primary" />
        <RIcon icon="mdi-heart" color="romm-red" />
        <RIcon icon="mdi-heart" color="romm-green" />
      </div>
    `,
  }),
};

export const Sizes: Story = {
  render: () => ({
    components: { RIcon },
    template: `
      <div style="display: flex; align-items: center; gap: 12px;">
        <RIcon icon="mdi-heart" size="x-small" />
        <RIcon icon="mdi-heart" size="small" />
        <RIcon icon="mdi-heart" size="default" />
        <RIcon icon="mdi-heart" size="large" />
        <RIcon icon="mdi-heart" size="x-large" />
      </div>
    `,
  }),
};

export const SlotContent: Story = {
  render: () => ({
    components: { RIcon },
    template: "<RIcon>mdi-account</RIcon>",
  }),
};

export const CommonIcons: Story = {
  render: () => ({
    components: { RIcon },
    template: `
      <div style="display: flex; gap: 16px;">
        <RIcon icon="mdi-home" />
        <RIcon icon="mdi-magnify" />
        <RIcon icon="mdi-cog" />
        <RIcon icon="mdi-delete" />
        <RIcon icon="mdi-download" />
        <RIcon icon="mdi-upload" />
        <RIcon icon="mdi-check" />
        <RIcon icon="mdi-close" />
      </div>
    `,
  }),
};
