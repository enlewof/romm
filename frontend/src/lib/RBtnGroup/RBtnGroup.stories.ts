import type { Meta, StoryObj } from "@storybook/vue3-vite";
import { RBtn } from "../RBtn";
import RBtnGroup from "./RBtnGroup.vue";

const meta = {
  title: "Actions/RBtnGroup",
  component: RBtnGroup,
  tags: ["autodocs"],
  argTypes: {
    divided: { control: "boolean" },
    density: {
      control: "select",
      options: ["default", "comfortable", "compact"],
    },
    variant: {
      control: "select",
      options: ["flat", "text", "elevated", "tonal", "outlined", "plain"],
    },
    color: { control: "text" },
    rounded: { control: "text" },
  },
} satisfies Meta<typeof RBtnGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    divided: true,
    density: "compact",
  },
  render: (args) => ({
    components: { RBtnGroup, RBtn },
    setup: () => ({ args }),
    template: `
      <RBtnGroup v-bind="args">
        <RBtn>Cancel</RBtn>
        <RBtn color="primary">Confirm</RBtn>
      </RBtnGroup>
    `,
  }),
};

export const Default: Story = {
  render: () => ({
    components: { RBtnGroup, RBtn },
    template: `
      <RBtnGroup>
        <RBtn>Cancel</RBtn>
        <RBtn color="primary">Confirm</RBtn>
      </RBtnGroup>
    `,
  }),
};

export const DialogActions: Story = {
  render: () => ({
    components: { RBtnGroup, RBtn },
    template: `
      <RBtnGroup>
        <RBtn class="bg-toplayer" variant="flat">Cancel</RBtn>
        <RBtn class="text-romm-red bg-toplayer" variant="flat">Delete</RBtn>
      </RBtnGroup>
    `,
  }),
};

export const ThreeButtons: Story = {
  render: () => ({
    components: { RBtnGroup, RBtn },
    template: `
      <RBtnGroup>
        <RBtn variant="flat">Left</RBtn>
        <RBtn variant="flat">Center</RBtn>
        <RBtn variant="flat">Right</RBtn>
      </RBtnGroup>
    `,
  }),
};
