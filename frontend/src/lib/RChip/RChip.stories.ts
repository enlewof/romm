import type { Meta, StoryObj } from "@storybook/vue3-vite";
import RChip from "./RChip.vue";

const meta = {
  title: "Data Display/RChip",
  component: RChip,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["flat", "text", "outlined", "elevated", "tonal", "plain"],
    },
    size: {
      control: "select",
      options: ["x-small", "small", "default", "large", "x-large"],
    },
  },
} satisfies Meta<typeof RChip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => ({
    components: { RChip },
    template: "<RChip>Chip</RChip>",
  }),
};

export const Label: Story = {
  render: () => ({
    components: { RChip },
    template: "<RChip label>Label Chip</RChip>",
  }),
};

export const Closable: Story = {
  render: () => ({
    components: { RChip },
    template: "<RChip closable>Closable</RChip>",
  }),
};

export const WithIcons: Story = {
  render: () => ({
    components: { RChip },
    template: '<RChip prepend-icon="mdi-check">Verified</RChip>',
  }),
};

export const Sizes: Story = {
  render: () => ({
    components: { RChip },
    template: `
      <div style="display: flex; align-items: center; gap: 8px;">
        <RChip size="x-small">XS</RChip>
        <RChip size="small">SM</RChip>
        <RChip size="default">Default</RChip>
        <RChip size="large">LG</RChip>
        <RChip size="x-large">XL</RChip>
      </div>
    `,
  }),
};

export const AllVariants: Story = {
  render: () => ({
    components: { RChip },
    template: `
      <div style="display: flex; flex-wrap: wrap; gap: 8px;">
        <RChip variant="flat">Flat</RChip>
        <RChip variant="elevated">Elevated</RChip>
        <RChip variant="tonal">Tonal</RChip>
        <RChip variant="outlined">Outlined</RChip>
        <RChip variant="text">Text</RChip>
        <RChip variant="plain">Plain</RChip>
      </div>
    `,
  }),
};

export const Colors: Story = {
  render: () => ({
    components: { RChip },
    template: `
      <div style="display: flex; gap: 8px;">
        <RChip color="primary">Primary</RChip>
        <RChip color="romm-red">Red</RChip>
        <RChip color="romm-green">Green</RChip>
        <RChip color="romm-blue">Blue</RChip>
      </div>
    `,
  }),
};
