import type { Meta, StoryObj } from "@storybook/vue3-vite";
import { RBtn } from "../RBtn";
import RTooltip from "./RTooltip.vue";

const meta = {
  title: "Data Display/RTooltip",
  component: RTooltip,
  tags: ["autodocs"],
  argTypes: {
    text: { control: "text" },
    location: {
      control: "select",
      options: ["top", "bottom", "start", "end"],
    },
    openDelay: { control: "number" },
    disabled: { control: "boolean" },
    openOnHover: { control: "boolean" },
  },
} satisfies Meta<typeof RTooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    text: "Hello from tooltip",
    location: "bottom",
    openDelay: 500,
    disabled: false,
    openOnHover: true,
  },
  render: (args) => ({
    components: { RTooltip, RBtn },
    setup: () => ({ args }),
    template: `
      <RTooltip v-bind="args">
        <template #activator="{ props }">
          <RBtn v-bind="props">Hover me</RBtn>
        </template>
      </RTooltip>
    `,
  }),
};

export const Default: Story = {
  render: () => ({
    components: { RTooltip, RBtn },
    template: `
      <RTooltip text="Hello from tooltip">
        <template #activator="{ props }">
          <RBtn v-bind="props">Hover me</RBtn>
        </template>
      </RTooltip>
    `,
  }),
};

export const Locations: Story = {
  render: () => ({
    components: { RTooltip, RBtn },
    template: `
      <div style="display: flex; gap: 24px; padding: 64px; justify-content: center;">
        <RTooltip text="Top tooltip" location="top">
          <template #activator="{ props }">
            <RBtn v-bind="props">Top</RBtn>
          </template>
        </RTooltip>
        <RTooltip text="Bottom tooltip" location="bottom">
          <template #activator="{ props }">
            <RBtn v-bind="props">Bottom</RBtn>
          </template>
        </RTooltip>
        <RTooltip text="Start tooltip" location="start">
          <template #activator="{ props }">
            <RBtn v-bind="props">Start</RBtn>
          </template>
        </RTooltip>
        <RTooltip text="End tooltip" location="end">
          <template #activator="{ props }">
            <RBtn v-bind="props">End</RBtn>
          </template>
        </RTooltip>
      </div>
    `,
  }),
};
