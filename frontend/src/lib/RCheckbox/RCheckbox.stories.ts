import type { Meta, StoryObj } from "@storybook/vue3-vite";
import RCheckbox from "./RCheckbox.vue";

const meta = {
  title: "Forms/RCheckbox",
  component: RCheckbox,
  tags: ["autodocs"],
  argTypes: {
    modelValue: { control: "boolean" },
    label: { control: "text" },
    color: { control: "text" },
    disabled: { control: "boolean" },
    readonly: { control: "boolean" },
    indeterminate: { control: "boolean" },
    hideDetails: {
      control: "select",
      options: [true, false, "auto"],
    },
    density: {
      control: "select",
      options: ["default", "comfortable", "compact"],
    },
    trueIcon: { control: "text" },
    falseIcon: { control: "text" },
  },
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

export const Playground: Story = {
  args: {
    label: "Accept terms",
    color: "primary",
    disabled: false,
    readonly: false,
    indeterminate: false,
    hideDetails: false,
    density: "default",
  },
  render: (args) => ({
    components: { RCheckbox },
    setup: () => ({ args }),
    template: '<RCheckbox v-bind="args" />',
  }),
};
