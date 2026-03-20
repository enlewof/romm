import type { Meta, StoryObj } from "@storybook/vue3-vite";
import RImg from "./RImg.vue";

const meta = {
  title: "Data Display/RImg",
  component: RImg,
  tags: ["autodocs"],
  argTypes: {
    src: { control: "text" },
    aspectRatio: { control: "text" },
    cover: { control: "boolean" },
    contain: { control: "boolean" },
    eager: { control: "boolean" },
    alt: { control: "text" },
    width: { control: "text" },
    height: { control: "text" },
    maxWidth: { control: "text" },
    maxHeight: { control: "text" },
    lazySrc: { control: "text" },
  },
} satisfies Meta<typeof RImg>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    src: "https://raw.githubusercontent.com/rommapp/romm/refs/heads/master/.github/resources/social_preview.png",
    width: "300",
    cover: false,
    contain: false,
    eager: false,
  },
  render: (args) => ({
    components: { RImg },
    setup: () => ({ args }),
    template: '<RImg v-bind="args" />',
  }),
};

export const Default: Story = {
  render: () => ({
    components: { RImg },
    template:
      '<RImg src="https://raw.githubusercontent.com/rommapp/romm/refs/heads/master/.github/resources/social_preview.png" :width="300" />',
  }),
};

export const WithAspectRatio: Story = {
  render: () => ({
    components: { RImg },
    template:
      '<RImg src="https://raw.githubusercontent.com/rommapp/romm/refs/heads/master/.github/resources/social_preview.png" :aspect-ratio="16/9" :width="300" cover />',
  }),
};

export const WithPlaceholder: Story = {
  render: () => ({
    components: { RImg },
    template: `
      <RImg src="https://raw.githubusercontent.com/rommapp/romm/refs/heads/master/.github/resources/social_preview.png" :width="300" :aspect-ratio="16/9">
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
