import type { Meta, StoryObj } from "@storybook/vue3-vite";
import RProgressCircular from "./RProgressCircular.vue";

const meta = {
  title: "Components/RProgressCircular",
  component: RProgressCircular,
  tags: ["autodocs"],
} satisfies Meta<typeof RProgressCircular>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Indeterminate: Story = {
  render: () => ({
    components: { RProgressCircular },
    template: "<RProgressCircular indeterminate />",
  }),
};

export const Determinate: Story = {
  render: () => ({
    components: { RProgressCircular },
    template: '<RProgressCircular :model-value="60" :size="48" :width="4" />',
  }),
};

export const Sizes: Story = {
  render: () => ({
    components: { RProgressCircular },
    template: `
      <div style="display: flex; align-items: center; gap: 16px;">
        <RProgressCircular indeterminate :size="16" :width="2" />
        <RProgressCircular indeterminate :size="24" :width="2" />
        <RProgressCircular indeterminate :size="40" :width="3" />
        <RProgressCircular indeterminate :size="64" :width="4" />
      </div>
    `,
  }),
};

export const Colors: Story = {
  render: () => ({
    components: { RProgressCircular },
    template: `
      <div style="display: flex; align-items: center; gap: 16px;">
        <RProgressCircular indeterminate color="primary" :size="40" />
        <RProgressCircular indeterminate color="romm-red" :size="40" />
        <RProgressCircular indeterminate color="romm-green" :size="40" />
      </div>
    `,
  }),
};

export const WithContent: Story = {
  render: () => ({
    components: { RProgressCircular },
    template:
      '<RProgressCircular :model-value="75" :size="64" :width="6">75%</RProgressCircular>',
  }),
};
