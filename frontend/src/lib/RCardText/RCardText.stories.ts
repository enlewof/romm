import type { Meta, StoryObj } from "@storybook/vue3-vite";
import { RCard } from "../RCard";
import RCardText from "./RCardText.vue";

const meta = {
  title: "Containment/RCardText",
  component: RCardText,
  tags: ["autodocs"],
} satisfies Meta<typeof RCardText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => ({
    components: { RCardText, RCard },
    template: `
      <RCard :width="300">
        <RCardText>This is the card text content with default padding.</RCardText>
      </RCard>
    `,
  }),
};
