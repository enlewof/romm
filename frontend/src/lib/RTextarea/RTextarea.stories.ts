import type { Meta, StoryObj } from "@storybook/vue3-vite";
import RTextarea from "./RTextarea.vue";

const meta = {
  title: "Forms/RTextarea",
  component: RTextarea,
  tags: ["autodocs"],
  argTypes: {
    modelValue: { control: "text" },
    label: { control: "text" },
    placeholder: { control: "text" },
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
    rows: { control: "number" },
    autoGrow: { control: "boolean" },
    noResize: { control: "boolean" },
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
    counter: { control: "number" },
    maxRows: { control: "number" },
  },
} satisfies Meta<typeof RTextarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => ({
    components: { RTextarea },
    template: '<RTextarea label="Description" />',
  }),
};

export const AutoGrow: Story = {
  render: () => ({
    components: { RTextarea },
    template: '<RTextarea label="Notes" auto-grow :rows="3" />',
  }),
};

export const WithCounter: Story = {
  render: () => ({
    components: { RTextarea },
    template: '<RTextarea label="Bio" :counter="200" />',
  }),
};

export const Readonly: Story = {
  render: () => ({
    components: { RTextarea },
    template:
      '<RTextarea label="Raw metadata" model-value="{ metadata: true }" readonly />',
  }),
};

export const Playground: Story = {
  args: {
    label: "Description",
    variant: "underlined",
    density: "default",
    rows: 5,
    autoGrow: false,
    noResize: false,
    clearable: false,
    disabled: false,
    readonly: false,
    hideDetails: false,
    persistentHint: false,
  },
  render: (args) => ({
    components: { RTextarea },
    setup: () => ({ args }),
    template: '<RTextarea v-bind="args" />',
  }),
};
