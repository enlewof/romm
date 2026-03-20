import type { Meta, StoryObj } from "@storybook/vue3-vite";
import { RTabs } from "../RTabs";
import RTab from "./RTab.vue";

const meta = {
  title: "Navigation/RTab",
  component: RTab,
  tags: ["autodocs"],
  argTypes: {
    disabled: { control: "boolean" },
    prependIcon: { control: "text" },
    appendIcon: { control: "text" },
  },
} satisfies Meta<typeof RTab>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => ({
    components: { RTabs, RTab },
    template: `
      <RTabs model-value="games">
        <RTab value="games">Games</RTab>
        <RTab value="collections">Collections</RTab>
        <RTab value="platforms" disabled>Platforms</RTab>
      </RTabs>
    `,
  }),
};

export const Playground: Story = {
  args: {
    disabled: false,
  },
  render: (args) => ({
    components: { RTabs, RTab },
    setup: () => ({ args }),
    template: `
      <RTabs model-value="tab">
        <RTab value="tab" v-bind="args">Playground Tab</RTab>
      </RTabs>
    `,
  }),
};
