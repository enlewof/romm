import type { Meta, StoryObj } from "@storybook/vue3-vite";
import { RTab } from "../RTab";
import RTabs from "./RTabs.vue";

const meta = {
  title: "Navigation/RTabs",
  component: RTabs,
  tags: ["autodocs"],
  argTypes: {
    color: { control: "text" },
    grow: { control: "boolean" },
    density: {
      control: "select",
      options: ["default", "comfortable", "compact"],
    },
    alignTabs: {
      control: "select",
      options: ["start", "center", "end", "title"],
    },
    bgColor: { control: "text" },
  },
} satisfies Meta<typeof RTabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => ({
    components: { RTabs, RTab },
    template: `
      <RTabs model-value="one">
        <RTab value="one">Tab One</RTab>
        <RTab value="two">Tab Two</RTab>
        <RTab value="three">Tab Three</RTab>
      </RTabs>
    `,
  }),
};

export const Playground: Story = {
  args: {
    grow: false,
  },
  render: (args) => ({
    components: { RTabs, RTab },
    setup: () => ({ args }),
    template: `
      <RTabs v-bind="args" model-value="one">
        <RTab value="one">Tab One</RTab>
        <RTab value="two">Tab Two</RTab>
        <RTab value="three">Tab Three</RTab>
      </RTabs>
    `,
  }),
};
