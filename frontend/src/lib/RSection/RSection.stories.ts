import type { Meta, StoryObj } from "@storybook/vue3-vite";
import RSection from "./RSection.vue";

const meta = {
  title: "Containment/RSection",
  component: RSection,
  tags: ["autodocs"],
  argTypes: {
    title: { control: "text" },
    icon: { control: "text" },
    titleDivider: { control: "boolean" },
    iconColor: { control: "text" },
    bgColor: { control: "text" },
  },
} satisfies Meta<typeof RSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    title: "Platform Stats",
    icon: "mdi-chart-bar",
    titleDivider: false,
    iconColor: "",
    bgColor: "bg-background",
  },
  render: (args) => ({
    components: { RSection },
    setup: () => ({ args }),
    template: `
      <RSection v-bind="args">
        <template #content>
          <div class="pa-4">Section content goes here</div>
        </template>
      </RSection>
    `,
  }),
};

export const Default: Story = {
  args: { title: "Platform Stats", icon: "mdi-chart-bar" },
  render: () => ({
    components: { RSection },
    template: `
      <RSection title="Platform Stats" icon="mdi-chart-bar">
        <template #content>
          <div class="pa-4">Section content goes here</div>
        </template>
      </RSection>
    `,
  }),
};

export const WithDivider: Story = {
  args: { title: "Settings", icon: "mdi-cog" },
  render: () => ({
    components: { RSection },
    template: `
      <RSection title="Settings" icon="mdi-cog" title-divider>
        <template #content>
          <div class="pa-4">Content with divider below toolbar</div>
        </template>
      </RSection>
    `,
  }),
};

export const WithToolbarAppend: Story = {
  args: { title: "Users", icon: "mdi-account-group" },
  render: () => ({
    components: { RSection },
    template: `
      <RSection title="Users" icon="mdi-account-group">
        <template #toolbar-append>
          <v-btn size="small" variant="text" icon="mdi-plus" />
        </template>
        <template #content>
          <div class="pa-4">Content with action button in toolbar</div>
        </template>
      </RSection>
    `,
  }),
};
