import type { Meta, StoryObj } from "@storybook/vue3-vite";
import RFileInput from "./RFileInput.vue";

const meta = {
  title: "Forms/RFileInput",
  component: RFileInput,
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    accept: { control: "text" },
    multiple: { control: "boolean" },
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
    prependInnerIcon: { control: "text" },
    appendIcon: { control: "text" },
    appendInnerIcon: { control: "text" },
    clearable: { control: "boolean" },
    disabled: { control: "boolean" },
    hideDetails: {
      control: "select",
      options: [true, false, "auto"],
    },
    hint: { control: "text" },
    showSize: { control: "boolean" },
    chips: { control: "boolean" },
    counter: { control: "boolean" },
    color: { control: "text" },
  },
} satisfies Meta<typeof RFileInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => ({
    components: { RFileInput },
    template: '<RFileInput label="Select file" />',
  }),
};

export const Multiple: Story = {
  render: () => ({
    components: { RFileInput },
    template: '<RFileInput label="Select files" multiple chips counter />',
  }),
};

export const WithAccept: Story = {
  render: () => ({
    components: { RFileInput },
    template: '<RFileInput label="Upload image" accept="image/*" show-size />',
  }),
};

export const Clearable: Story = {
  render: () => ({
    components: { RFileInput },
    template: '<RFileInput label="Attachment" clearable show-size />',
  }),
};

export const Playground: Story = {
  args: {
    label: "Select file",
    multiple: false,
    variant: "underlined",
    density: "default",
    clearable: false,
    disabled: false,
    hideDetails: false,
    showSize: false,
    chips: false,
    counter: false,
  },
  render: (args) => ({
    components: { RFileInput },
    setup: () => ({ args }),
    template: '<RFileInput v-bind="args" />',
  }),
};
