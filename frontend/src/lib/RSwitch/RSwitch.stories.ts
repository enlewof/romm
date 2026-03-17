import type { Meta, StoryObj } from "@storybook/vue3-vite";
import RSwitch from "./RSwitch.vue";

const meta = {
  title: "Components/RSwitch",
  component: RSwitch,
  tags: ["autodocs"],
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
