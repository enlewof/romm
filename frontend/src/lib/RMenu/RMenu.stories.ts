import type { Meta, StoryObj } from "@storybook/vue3-vite";
import { RBtn } from "../RBtn";
import { RList } from "../RList";
import { RListItem } from "../RListItem";
import RMenu from "./RMenu.vue";

const meta = {
  title: "Actions/RMenu",
  component: RMenu,
  tags: ["autodocs"],
  argTypes: {
    location: {
      control: "select",
      options: [
        "top",
        "bottom",
        "start",
        "end",
        "top start",
        "top end",
        "bottom start",
        "bottom end",
      ],
    },
    openOnHover: { control: "boolean" },
    closeOnContentClick: { control: "boolean" },
    disabled: { control: "boolean" },
    openDelay: { control: "number" },
    closeDelay: { control: "number" },
    offset: { control: "number" },
  },
} satisfies Meta<typeof RMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    openOnHover: false,
    closeOnContentClick: false,
    disabled: false,
  },
  render: (args) => ({
    components: { RMenu, RBtn, RList, RListItem },
    setup: () => ({ args }),
    template: `
      <RMenu v-bind="args">
        <template #activator="{ props }">
          <RBtn v-bind="props">Open Menu</RBtn>
        </template>
        <RList>
          <RListItem title="Option 1" />
          <RListItem title="Option 2" />
          <RListItem title="Option 3" />
        </RList>
      </RMenu>
    `,
  }),
};

export const Default: Story = {
  render: () => ({
    components: { RMenu, RBtn, RList, RListItem },
    template: `
      <RMenu>
        <template #activator="{ props }">
          <RBtn v-bind="props">Open Menu</RBtn>
        </template>
        <RList>
          <RListItem title="Option 1" />
          <RListItem title="Option 2" />
          <RListItem title="Option 3" />
        </RList>
      </RMenu>
    `,
  }),
};
