import type { Meta, StoryObj } from "@storybook/vue3-vite";
import RSheet from "./RSheet.vue";

const meta = {
  title: "Components/RSheet",
  component: RSheet,
  tags: ["autodocs"],
} satisfies Meta<typeof RSheet>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => ({
    components: { RSheet },
    template:
      '<RSheet :width="300" :height="150" class="pa-4">Sheet content</RSheet>',
  }),
};

export const Elevated: Story = {
  render: () => ({
    components: { RSheet },
    template:
      '<RSheet :elevation="4" :width="300" :height="150" rounded class="pa-4">Elevated sheet</RSheet>',
  }),
};
