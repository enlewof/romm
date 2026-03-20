import type { Meta, StoryObj } from "@storybook/vue3-vite";
import RBadge from "./RBadge.vue";

const meta = {
  title: "Data Display/RBadge",
  component: RBadge,
  tags: ["autodocs"],
  argTypes: {
    modelValue: { control: "boolean" },
    content: { control: "text" },
    color: { control: "text" },
    dot: { control: "boolean" },
    icon: { control: "text" },
    location: {
      control: "select",
      options: ["top start", "top end", "bottom start", "bottom end"],
    },
    max: { control: "number" },
    offsetX: { control: "number" },
    offsetY: { control: "number" },
  },
} satisfies Meta<typeof RBadge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    modelValue: true,
    content: "5",
    color: "primary",
    dot: false,
  },
  render: (args) => ({
    components: { RBadge },
    setup: () => ({ args }),
    template: `
      <RBadge v-bind="args">
        <v-icon icon="mdi-bell" size="32" />
      </RBadge>
    `,
  }),
};

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
