import type { Meta, StoryObj } from "@storybook/vue3-vite";
import RBadge from "./RBadge.vue";

const meta = {
  title: "Components/RBadge",
  component: RBadge,
  tags: ["autodocs"],
} satisfies Meta<typeof RBadge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithContent: Story = {
  render: () => ({
    components: { RBadge },
    template: `
      <RBadge content="5">
        <v-icon icon="mdi-bell" size="32" />
      </RBadge>
    `,
  }),
};

export const Dot: Story = {
  render: () => ({
    components: { RBadge },
    template: `
      <RBadge dot>
        <v-icon icon="mdi-bell" size="32" />
      </RBadge>
    `,
  }),
};

export const Colors: Story = {
  render: () => ({
    components: { RBadge },
    template: `
      <div style="display: flex; gap: 24px;">
        <RBadge content="3" color="primary">
          <v-icon icon="mdi-email" size="32" />
        </RBadge>
        <RBadge content="!" color="romm-red">
          <v-icon icon="mdi-alert" size="32" />
        </RBadge>
        <RBadge content="✓" color="romm-green">
          <v-icon icon="mdi-check-circle" size="32" />
        </RBadge>
      </div>
    `,
  }),
};
