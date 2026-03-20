import type { Meta, StoryObj } from "@storybook/vue3-vite";
import RSwitch from "./RSwitch.vue";

const meta = {
  title: "Forms/RSwitch",
  component: RSwitch,
  tags: ["autodocs"],
  argTypes: {
    modelValue: { control: "boolean" },
    label: { control: "text" },
    color: { control: "text" },
    disabled: { control: "boolean" },
    readonly: { control: "boolean" },
    inset: { control: "boolean" },
    hideDetails: {
      control: "select",
      options: [true, false, "auto"],
    },
    density: {
      control: "select",
      options: ["default", "comfortable", "compact"],
    },
    loading: { control: "boolean" },
  },
} satisfies Meta<typeof RSwitch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => ({
    components: { RSwitch },
    template: '<RSwitch label="Enable feature" />',
  }),
};

export const On: Story = {
  render: () => ({
    components: { RSwitch },
    template: '<RSwitch label="Enabled" :model-value="true" />',
  }),
};

export const Inset: Story = {
  render: () => ({
    components: { RSwitch },
    template: '<RSwitch label="Inset variant" inset />',
  }),
};

export const Disabled: Story = {
  render: () => ({
    components: { RSwitch },
    template: '<RSwitch label="Disabled" disabled :model-value="true" />',
  }),
};

export const Colors: Story = {
  render: () => ({
    components: { RSwitch },
    template: `
      <div>
        <RSwitch label="Primary" color="primary" :model-value="true" />
        <RSwitch label="Red" color="romm-red" :model-value="true" />
        <RSwitch label="Green" color="romm-green" :model-value="true" />
      </div>
    `,
  }),
};

export const Playground: Story = {
  args: {
    label: "Enable feature",
    color: "primary",
    disabled: false,
    readonly: false,
    inset: false,
    hideDetails: false,
    density: "default",
    loading: false,
  },
  render: (args) => ({
    components: { RSwitch },
    setup: () => ({ args }),
    template: '<RSwitch v-bind="args" />',
  }),
};
