import type { Meta, StoryObj } from "@storybook/vue3-vite";
import { RTab } from "../RTab";
import RTabs from "./RTabs.vue";

const meta = {
  title: "Components/RTabs",
  component: RTabs,
  tags: ["autodocs"],
  argTypes: {
    density: {
      control: "select",
      options: ["default", "comfortable", "compact"],
    },
    alignTabs: {
      control: "select",
      options: ["start", "center", "end", "title"],
    },
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
