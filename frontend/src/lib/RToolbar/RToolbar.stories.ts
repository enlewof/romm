import type { Meta, StoryObj } from "@storybook/vue3-vite";
import RToolbar from "./RToolbar.vue";

const meta = {
  title: "Components/RToolbar",
  component: RToolbar,
  tags: ["autodocs"],
  argTypes: {
    density: {
      control: "select",
      options: ["default", "comfortable", "compact"],
    },
  },
} satisfies Meta<typeof RToolbar>;

export default meta;
type Story = StoryObj<typeof meta>;

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
