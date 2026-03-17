import type { Meta, StoryObj } from "@storybook/vue3-vite";
import RTextarea from "./RTextarea.vue";

const meta = {
  title: "Components/RTextarea",
  component: RTextarea,
  tags: ["autodocs"],
} satisfies Meta<typeof RTextarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => ({
    components: { RTextarea },
    template: '<RTextarea label="Description" />',
  }),
};

export const AutoGrow: Story = {
  render: () => ({
    components: { RTextarea },
    template: '<RTextarea label="Notes" auto-grow :rows="3" />',
  }),
};

export const WithCounter: Story = {
  render: () => ({
    components: { RTextarea },
    template: '<RTextarea label="Bio" :counter="200" />',
  }),
};

export const Readonly: Story = {
  render: () => ({
    components: { RTextarea },
    template:
      '<RTextarea label="Raw metadata" model-value="{ metadata: true }" readonly />',
  }),
};
