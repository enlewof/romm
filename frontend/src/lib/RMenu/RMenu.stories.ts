import type { Meta, StoryObj } from "@storybook/vue3-vite";
import { RBtn } from "../RBtn";
import { RList } from "../RList";
import { RListItem } from "../RListItem";
import RMenu from "./RMenu.vue";

const meta = {
  title: "Components/RMenu",
  component: RMenu,
  tags: ["autodocs"],
} satisfies Meta<typeof RMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

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
