import type { Meta, StoryObj } from "@storybook/vue3-vite";
import RDivider from "./RDivider.vue";

const meta = {
  title: "Containment/RDivider",
  component: RDivider,
  tags: ["autodocs"],
  argTypes: {
    vertical: { control: "boolean" },
    thickness: { control: "number" },
    color: { control: "text" },
    inset: { control: "boolean" },
  },
} satisfies Meta<typeof RDivider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    vertical: false,
    inset: false,
  },
  render: (args) => ({
    components: { RDivider },
    setup: () => ({ args }),
    template: `
      <div :style="args.vertical ? 'display: flex; height: 40px; align-items: center; gap: 12px;' : ''">
        <span>Content A</span>
        <RDivider v-bind="args" />
        <span>Content B</span>
      </div>
    `,
  }),
};

export const Horizontal: Story = {
  render: () => ({
    components: { RDivider },
    template: `
      <div>
        <p>Content above</p>
        <RDivider class="my-4" />
        <p>Content below</p>
      </div>
    `,
  }),
};

export const Vertical: Story = {
  render: () => ({
    components: { RDivider },
    template: `
      <div style="display: flex; align-items: center; gap: 12px; height: 40px;">
        <span>Left</span>
        <RDivider vertical />
        <span>Right</span>
      </div>
    `,
  }),
};

export const WithSlotContent: Story = {
  render: () => ({
    components: { RDivider },
    template: `
      <div>
        <p>Above</p>
        <RDivider class="my-4">
          <template #default>
            <span class="px-2">or</span>
          </template>
        </RDivider>
        <p>Below</p>
      </div>
    `,
  }),
};
