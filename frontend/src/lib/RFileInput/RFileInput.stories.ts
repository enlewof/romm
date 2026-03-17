import type { Meta, StoryObj } from "@storybook/vue3-vite";
import RFileInput from "./RFileInput.vue";

const meta = {
  title: "Components/RFileInput",
  component: RFileInput,
  tags: ["autodocs"],
} satisfies Meta<typeof RFileInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => ({
    components: { RFileInput },
    template: '<RFileInput label="Select file" />',
  }),
};

export const Multiple: Story = {
  render: () => ({
    components: { RFileInput },
    template: '<RFileInput label="Select files" multiple chips counter />',
  }),
};

export const WithAccept: Story = {
  render: () => ({
    components: { RFileInput },
    template: '<RFileInput label="Upload image" accept="image/*" show-size />',
  }),
};

export const Clearable: Story = {
  render: () => ({
    components: { RFileInput },
    template: '<RFileInput label="Attachment" clearable show-size />',
  }),
};
