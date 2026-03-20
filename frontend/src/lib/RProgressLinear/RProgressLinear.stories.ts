import type { Meta, StoryObj } from "@storybook/vue3-vite";
import RProgressLinear from "./RProgressLinear.vue";

const meta = {
  title: "Feedback/RProgressLinear",
  component: RProgressLinear,
  tags: ["autodocs"],
  argTypes: {
    indeterminate: { control: "boolean" },
    modelValue: { control: "number" },
    color: { control: "text" },
    height: { control: "number" },
    striped: { control: "boolean" },
    rounded: { control: "text" },
    bgColor: { control: "text" },
  },
} satisfies Meta<typeof RProgressLinear>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    indeterminate: false,
    modelValue: 60,
    color: "primary",
    height: 4,
    striped: false,
  },
  render: (args) => ({
    components: { RProgressLinear },
    setup: () => ({ args }),
    template: '<RProgressLinear v-bind="args" />',
  }),
};

export const Indeterminate: Story = {
  render: () => ({
    components: { RProgressLinear },
    template: "<RProgressLinear indeterminate />",
  }),
};

export const Determinate: Story = {
  render: () => ({
    components: { RProgressLinear },
    template: '<RProgressLinear :model-value="60" />',
  }),
};

export const CustomHeight: Story = {
  render: () => ({
    components: { RProgressLinear },
    template: '<RProgressLinear :model-value="45" :height="12" rounded />',
  }),
};

export const Colors: Story = {
  render: () => ({
    components: { RProgressLinear },
    template: `
      <div style="display: flex; flex-direction: column; gap: 12px;">
        <RProgressLinear :model-value="60" color="primary" />
        <RProgressLinear :model-value="40" color="romm-red" />
        <RProgressLinear :model-value="80" color="romm-green" />
      </div>
    `,
  }),
};
