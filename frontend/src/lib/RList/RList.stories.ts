import type { Meta, StoryObj } from "@storybook/vue3-vite";
import { RListItem } from "../RListItem";
import RList from "./RList.vue";

const meta = {
  title: "Data Display/RList",
  component: RList,
  tags: ["autodocs"],
  argTypes: {
    density: {
      control: "select",
      options: ["default", "comfortable", "compact"],
    },
    nav: { control: "boolean" },
    bgColor: { control: "text" },
    lines: {
      control: "select",
      options: [false, "one", "two", "three"],
    },
  },
} satisfies Meta<typeof RList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    nav: false,
  },
  render: (args) => ({
    components: { RList, RListItem },
    setup: () => ({ args }),
    template: `
      <RList v-bind="args" :width="300">
        <RListItem title="Item one" />
        <RListItem title="Item two" />
        <RListItem title="Item three" />
      </RList>
    `,
  }),
};

export const Default: Story = {
  render: () => ({
    components: { RList, RListItem },
    template: `
      <RList :width="300">
        <RListItem title="Item one" />
        <RListItem title="Item two" />
        <RListItem title="Item three" />
      </RList>
    `,
  }),
};

export const Nav: Story = {
  render: () => ({
    components: { RList, RListItem },
    template: `
      <RList nav :width="300">
        <RListItem title="Home" prepend-icon="mdi-home" />
        <RListItem title="Settings" prepend-icon="mdi-cog" />
        <RListItem title="About" prepend-icon="mdi-information" />
      </RList>
    `,
  }),
};
