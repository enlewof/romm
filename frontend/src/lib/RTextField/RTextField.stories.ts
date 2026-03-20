import type { Meta, StoryObj } from "@storybook/vue3-vite";
import RTextField from "./RTextField.vue";

const meta = {
  title: "Forms/RTextField",
  component: RTextField,
  tags: ["autodocs"],
  argTypes: {
    modelValue: { control: "text" },
    label: { control: "text" },
    placeholder: { control: "text" },
    type: { control: "text" },
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
    prependIcon: { control: "text" },
    appendIcon: { control: "text" },
    prependInnerIcon: { control: "text" },
    appendInnerIcon: { control: "text" },
    clearable: { control: "boolean" },
    disabled: { control: "boolean" },
    readonly: { control: "boolean" },
    hideDetails: {
      control: "select",
      options: [true, false, "auto"],
    },
    hint: { control: "text" },
    persistentHint: { control: "boolean" },
    color: { control: "text" },
    name: { control: "text" },
    autocomplete: { control: "text" },
    autofocus: { control: "boolean" },
    prefix: { control: "text" },
    suffix: { control: "text" },
    counter: { control: "number" },
    loading: { control: "boolean" },
    singleLine: { control: "boolean" },
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

export const Playground: Story = {
  args: {
    label: "Label",
    type: "text",
    variant: "underlined",
    density: "default",
    clearable: false,
    disabled: false,
    readonly: false,
    hideDetails: false,
    persistentHint: false,
    autofocus: false,
    loading: false,
    singleLine: false,
  },
  render: (args) => ({
    components: { RTextField },
    setup: () => ({ args }),
    template: '<RTextField v-bind="args" />',
  }),
};
