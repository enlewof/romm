import type { Meta, StoryObj } from "@storybook/vue3-vite";
import RCheckbox from "./RCheckbox.vue";

const meta = {
  title: "Components/RCheckbox",
  component: RCheckbox,
  tags: ["autodocs"],
} satisfies Meta<typeof RCheckbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => ({
    components: { RCheckbox },
    template: '<RCheckbox label="Accept terms" />',
  }),
};

export const Checked: Story = {
  render: () => ({
    components: { RCheckbox },
    template: '<RCheckbox label="Enabled" :model-value="true" />',
  }),
};

export const Disabled: Story = {
  render: () => ({
    components: { RCheckbox },
    template: '<RCheckbox label="Disabled" disabled :model-value="true" />',
  }),
};

export const Colors: Story = {
  render: () => ({
    components: { RCheckbox },
    template: `
      <div>
        <RCheckbox label="Primary" color="primary" :model-value="true" />
        <RCheckbox label="Red" color="romm-red" :model-value="true" />
        <RCheckbox label="Green" color="romm-green" :model-value="true" />
      </div>
    `,
  }),
};

export const Indeterminate: Story = {
  render: () => ({
    components: { RCheckbox },
    template: '<RCheckbox label="Select all" indeterminate />',
  }),
};
