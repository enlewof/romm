import type { Meta, StoryObj } from "@storybook/vue3-vite";
import RDivider from "./RDivider.vue";

const meta = {
  title: "Containment/RDivider",
  component: RDivider,
  tags: ["autodocs"],
} satisfies Meta<typeof RDivider>;

export default meta;
type Story = StoryObj<typeof meta>;

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
