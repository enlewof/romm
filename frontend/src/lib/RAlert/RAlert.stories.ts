import type { Meta, StoryObj } from "@storybook/vue3-vite";
import RAlert from "./RAlert.vue";

const meta = {
  title: "Components/RAlert",
  component: RAlert,
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: ["error", "warning", "info", "success"],
    },
    variant: {
      control: "select",
      options: ["flat", "text", "outlined", "elevated", "tonal", "plain"],
    },
  },
} satisfies Meta<typeof RAlert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Info: Story = {
  render: () => ({
    components: { RAlert },
    template: '<RAlert type="info">This is an informational message.</RAlert>',
  }),
};

export const Success: Story = {
  render: () => ({
    components: { RAlert },
    template:
      '<RAlert type="success">Operation completed successfully.</RAlert>',
  }),
};

export const Warning: Story = {
  render: () => ({
    components: { RAlert },
    template:
      '<RAlert type="warning">Please review before continuing.</RAlert>',
  }),
};

export const Error: Story = {
  render: () => ({
    components: { RAlert },
    template: '<RAlert type="error">Something went wrong.</RAlert>',
  }),
};

export const AllTypes: Story = {
  render: () => ({
    components: { RAlert },
    template: `
      <div style="display: flex; flex-direction: column; gap: 12px;">
        <RAlert type="info">Info alert</RAlert>
        <RAlert type="success">Success alert</RAlert>
        <RAlert type="warning">Warning alert</RAlert>
        <RAlert type="error">Error alert</RAlert>
      </div>
    `,
  }),
};

export const Closable: Story = {
  render: () => ({
    components: { RAlert },
    template:
      '<RAlert type="info" closable>You can dismiss this alert.</RAlert>',
  }),
};

export const WithTitle: Story = {
  render: () => ({
    components: { RAlert },
    template:
      '<RAlert type="warning" title="Heads up!">This action cannot be undone.</RAlert>',
  }),
};

export const Outlined: Story = {
  render: () => ({
    components: { RAlert },
    template:
      '<RAlert type="error" variant="outlined">Outlined error alert.</RAlert>',
  }),
};
