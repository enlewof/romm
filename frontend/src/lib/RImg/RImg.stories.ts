import type { Meta, StoryObj } from "@storybook/vue3-vite";
import RImg from "./RImg.vue";

const meta = {
  title: "Components/RImg",
  component: RImg,
  tags: ["autodocs"],
} satisfies Meta<typeof RImg>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => ({
    components: { RImg },
    template:
      '<RImg src="https://raw.githubusercontent.com/rommapp/romm/master/.github/resources/isotipo.png" :width="300" />',
  }),
};

export const WithAspectRatio: Story = {
  render: () => ({
    components: { RImg },
    template:
      '<RImg src="https://raw.githubusercontent.com/rommapp/romm/master/.github/resources/isotipo.png" :aspect-ratio="16/9" :width="300" cover />',
  }),
};

export const WithPlaceholder: Story = {
  render: () => ({
    components: { RImg },
    template: `
      <RImg src="https://raw.githubusercontent.com/rommapp/romm/master/.github/resources/isotipo.png" :width="300" :aspect-ratio="16/9">
        <template #placeholder>
          <div style="display: flex; align-items: center; justify-content: center; height: 100%;">
            Loading...
          </div>
        </template>
      </RImg>
    `,
  }),
};

export const WithErrorSlot: Story = {
  render: () => ({
    components: { RImg },
    template: `
      <RImg src="https://invalid-url.example/404.jpg" :width="300" :aspect-ratio="16/9">
        <template #error>
          <div style="display: flex; align-items: center; justify-content: center; height: 100%; background: #333;">
            Failed to load
          </div>
        </template>
      </RImg>
    `,
  }),
};
