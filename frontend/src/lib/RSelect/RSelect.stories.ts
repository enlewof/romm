import type { Meta, StoryObj } from "@storybook/vue3-vite";
import RSelect from "./RSelect.vue";

const meta = {
  title: "Components/RSelect",
  component: RSelect,
  tags: ["autodocs"],
} satisfies Meta<typeof RSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => ({
    components: { RSelect },
    template:
      "<RSelect label=\"Choose option\" :items=\"['Option A', 'Option B', 'Option C']\" />",
  }),
};

export const WithObjects: Story = {
  render: () => ({
    components: { RSelect },
    template: `
      <RSelect
        label="Select platform"
        :items="[
          { title: 'Nintendo 64', value: 'n64' },
          { title: 'PlayStation', value: 'ps1' },
          { title: 'Sega Genesis', value: 'genesis' },
        ]"
      />
    `,
  }),
};

export const Multiple: Story = {
  render: () => ({
    components: { RSelect },
    template: `
      <RSelect
        label="Select tags"
        :items="['RPG', 'Action', 'Adventure', 'Puzzle']"
        multiple
        chips
        closable-chips
      />
    `,
  }),
};

export const Clearable: Story = {
  render: () => ({
    components: { RSelect },
    template:
      "<RSelect label=\"Filter\" :items=\"['All', 'Active', 'Archived']\" clearable />",
  }),
};
