import type { Meta, StoryObj } from "@storybook/vue3-vite";
import RToolbar from "./RToolbar.vue";

const meta = {
  title: "Containment/RToolbar",
  component: RToolbar,
  tags: ["autodocs"],
  argTypes: {
    density: {
      control: "select",
      options: ["default", "comfortable", "compact"],
    },
    title: { control: "text" },
    color: { control: "text" },
  },
} satisfies Meta<typeof RToolbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    density: "compact",
    title: "My Toolbar",
  },
  render: (args) => ({
    components: { RToolbar },
    setup: () => ({ args }),
    template: '<RToolbar v-bind="args">Toolbar content</RToolbar>',
  }),
};

export const Default: Story = {
  render: () => ({
    components: { RToolbar },
    template: "<RToolbar>Toolbar content</RToolbar>",
  }),
};

export const Compact: Story = {
  render: () => ({
    components: { RToolbar },
    template: '<RToolbar density="compact">Compact toolbar</RToolbar>',
  }),
};

export const WithTitle: Story = {
  render: () => ({
    components: { RToolbar },
    template: '<RToolbar title="My Toolbar" color="primary" />',
  }),
};
