import type { Meta, StoryObj } from "@storybook/vue3-vite";
import RSelect from "./RSelect.vue";

const meta = {
  title: "Forms/RSelect",
  component: RSelect,
  tags: ["autodocs"],
  argTypes: {
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
    itemTitle: { control: "text" },
    itemValue: { control: "text" },
    multiple: { control: "boolean" },
    chips: { control: "boolean" },
    closableChips: { control: "boolean" },
    clearable: { control: "boolean" },
    disabled: { control: "boolean" },
    readonly: { control: "boolean" },
    hideDetails: {
      control: "select",
      options: [true, false, "auto"],
    },
    returnObject: { control: "boolean" },
    color: { control: "text" },
    prependInnerIcon: { control: "text" },
    appendInnerIcon: { control: "text" },
  },
} satisfies Meta<typeof RSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => ({
    components: { RSelect },
    template:
      "<RSelect label=\"Choose option\" :items=\"['Option A', 'Option B', 'Option C']\" />",
  }),
};

export const WithObjects: Story = {
  render: () => ({
    components: { RSelect },
    template: `
      <RSelect
        label="Select platform"
        :items="[
          { title: 'Nintendo 64', value: 'n64' },
          { title: 'PlayStation', value: 'ps1' },
          { title: 'Sega Genesis', value: 'genesis' },
        ]"
      />
    `,
  }),
};

export const Multiple: Story = {
  render: () => ({
    components: { RSelect },
    template: `
      <RSelect
        label="Select tags"
        :items="['RPG', 'Action', 'Adventure', 'Puzzle']"
        multiple
        chips
        closable-chips
      />
    `,
  }),
};

export const Clearable: Story = {
  render: () => ({
    components: { RSelect },
    template:
      "<RSelect label=\"Filter\" :items=\"['All', 'Active', 'Archived']\" clearable />",
  }),
};

export const Playground: Story = {
  args: {
    label: "Choose option",
    items: ["Option A", "Option B", "Option C"],
    variant: "underlined",
    density: "default",
    multiple: false,
    chips: false,
    closableChips: false,
    clearable: false,
    disabled: false,
    readonly: false,
    hideDetails: false,
    returnObject: false,
  },
  render: (args) => ({
    components: { RSelect },
    setup: () => ({ args }),
    template: '<RSelect v-bind="args" />',
  }),
};
