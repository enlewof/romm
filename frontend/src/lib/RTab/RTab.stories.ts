import type { Meta, StoryObj } from "@storybook/vue3-vite";
import { RTabs } from "../RTabs";
import RTab from "./RTab.vue";

const meta = {
  title: "Navigation/RTab",
  component: RTab,
  tags: ["autodocs"],
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
