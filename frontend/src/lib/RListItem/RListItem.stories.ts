import type { Meta, StoryObj } from "@storybook/vue3-vite";
import { RList } from "../RList";
import RListItem from "./RListItem.vue";

const meta = {
  title: "Components/RListItem",
  component: RListItem,
  tags: ["autodocs"],
} satisfies Meta<typeof RListItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => ({
    components: { RListItem, RList },
    template: `
      <RList :width="300">
        <RListItem title="Basic list item" />
      </RList>
    `,
  }),
};

export const WithIcons: Story = {
  render: () => ({
    components: { RListItem, RList },
    template: `
      <RList :width="300">
        <RListItem title="Downloads" prepend-icon="mdi-download" append-icon="mdi-chevron-right" />
        <RListItem title="Favorites" prepend-icon="mdi-heart" append-icon="mdi-chevron-right" />
        <RListItem title="Settings" prepend-icon="mdi-cog" append-icon="mdi-chevron-right" />
      </RList>
    `,
  }),
};

export const Active: Story = {
  render: () => ({
    components: { RListItem, RList },
    template: `
      <RList :width="300">
        <RListItem title="Home" :active="true" active-color="primary" prepend-icon="mdi-home" />
        <RListItem title="Library" prepend-icon="mdi-bookshelf" />
        <RListItem title="Settings" prepend-icon="mdi-cog" />
      </RList>
    `,
  }),
};

export const AsLink: Story = {
  render: () => ({
    components: { RListItem, RList },
    template: `
      <RList :width="300">
        <RListItem title="External link" href="https://example.com" append-icon="mdi-open-in-new" />
        <RListItem title="Internal route" to="/home" append-icon="mdi-chevron-right" />
      </RList>
    `,
  }),
};
