import type { Meta, StoryObj } from "@storybook/vue3-vite";
import RTextField from "./RTextField.vue";

const meta = {
  title: "Forms/RTextField",
  component: RTextField,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: [
        "outlined",
        "filled",
        "underlined",
        "solo",
        "solo-filled",
        "solo-inverted",
        "plain",
      ],
    },
    density: {
      control: "select",
      options: ["default", "comfortable", "compact"],
    },
  },
} satisfies Meta<typeof RTextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => ({
    components: { RTextField },
    template: '<RTextField label="Label" />',
  }),
};

export const WithPlaceholder: Story = {
  render: () => ({
    components: { RTextField },
    template: '<RTextField label="Email" placeholder="user@example.com" />',
  }),
};

export const WithIcons: Story = {
  render: () => ({
    components: { RTextField },
    template:
      '<RTextField label="Search" prepend-inner-icon="mdi-magnify" clearable />',
  }),
};

export const Password: Story = {
  render: () => ({
    components: { RTextField },
    template:
      '<RTextField label="Password" type="password" prepend-inner-icon="mdi-lock" append-inner-icon="mdi-eye" />',
  }),
};

export const Variants: Story = {
  render: () => ({
    components: { RTextField },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px; max-width: 400px;">
        <RTextField label="Underlined (default)" variant="underlined" />
        <RTextField label="Outlined" variant="outlined" />
        <RTextField label="Filled" variant="filled" />
        <RTextField label="Solo" variant="solo" />
        <RTextField label="Plain" variant="plain" />
      </div>
    `,
  }),
};

export const WithValidation: Story = {
  render: () => ({
    components: { RTextField },
    template: `
      <RTextField
        label="Required field"
        :rules="[v => !!v || 'This field is required']"
      />
    `,
  }),
};

export const Disabled: Story = {
  render: () => ({
    components: { RTextField },
    template:
      '<RTextField label="Disabled" model-value="Some value" disabled />',
  }),
};

export const WithHint: Story = {
  render: () => ({
    components: { RTextField },
    template:
      '<RTextField label="Username" hint="Choose a unique username" persistent-hint />',
  }),
};
