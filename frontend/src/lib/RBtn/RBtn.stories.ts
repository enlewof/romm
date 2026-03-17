import type { Meta, StoryObj } from "@storybook/vue3-vite";
import RBtn from "./RBtn.vue";

const meta = {
  title: "Components/RBtn",
  component: RBtn,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["flat", "text", "elevated", "tonal", "outlined", "plain"],
    },
    size: {
      control: "select",
      options: ["x-small", "small", "default", "large", "x-large"],
    },
    density: {
      control: "select",
      options: ["default", "comfortable", "compact"],
    },
  },
} satisfies Meta<typeof RBtn>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Flat: Story = {
  render: () => ({
    components: { RBtn },
    template: '<RBtn variant="flat">Button</RBtn>',
  }),
};

export const Elevated: Story = {
  render: () => ({
    components: { RBtn },
    template: '<RBtn variant="elevated">Button</RBtn>',
  }),
};

export const Tonal: Story = {
  render: () => ({
    components: { RBtn },
    template: '<RBtn variant="tonal">Tonal</RBtn>',
  }),
};

export const Outlined: Story = {
  render: () => ({
    components: { RBtn },
    template: '<RBtn variant="outlined">Outlined</RBtn>',
  }),
};

export const Text: Story = {
  render: () => ({
    components: { RBtn },
    template: '<RBtn variant="text">Text</RBtn>',
  }),
};

export const Plain: Story = {
  render: () => ({
    components: { RBtn },
    template: '<RBtn variant="plain">Plain</RBtn>',
  }),
};

export const IconButton: Story = {
  render: () => ({
    components: { RBtn },
    template: '<RBtn icon="mdi-heart" variant="text" />',
  }),
};

export const WithPrependIcon: Story = {
  render: () => ({
    components: { RBtn },
    template: '<RBtn prepend-icon="mdi-download">Download</RBtn>',
  }),
};

export const WithAppendIcon: Story = {
  render: () => ({
    components: { RBtn },
    template: '<RBtn append-icon="mdi-arrow-right">Next</RBtn>',
  }),
};

export const Loading: Story = {
  render: () => ({
    components: { RBtn },
    template: '<RBtn :loading="true">Saving...</RBtn>',
  }),
};

export const Disabled: Story = {
  render: () => ({
    components: { RBtn },
    template: '<RBtn :disabled="true">Disabled</RBtn>',
  }),
};

export const Block: Story = {
  render: () => ({
    components: { RBtn },
    template: '<RBtn :block="true">Full Width</RBtn>',
  }),
};

export const WithColor: Story = {
  render: () => ({
    components: { RBtn },
    template: `
      <div style="display: flex; gap: 12px;">
        <RBtn color="primary">Primary</RBtn>
        <RBtn color="romm-red">Red</RBtn>
        <RBtn color="romm-green">Green</RBtn>
      </div>
    `,
  }),
};

export const Sizes: Story = {
  render: () => ({
    components: { RBtn },
    template: `
      <div style="display: flex; align-items: center; gap: 12px;">
        <RBtn size="x-small">XS</RBtn>
        <RBtn size="small">SM</RBtn>
        <RBtn size="default">Default</RBtn>
        <RBtn size="large">LG</RBtn>
        <RBtn size="x-large">XL</RBtn>
      </div>
    `,
  }),
};

export const AllVariants: Story = {
  render: () => ({
    components: { RBtn },
    template: `
      <div style="display: flex; flex-wrap: wrap; align-items: center; gap: 12px;">
        <RBtn variant="flat">Flat</RBtn>
        <RBtn variant="elevated">Elevated</RBtn>
        <RBtn variant="tonal">Tonal</RBtn>
        <RBtn variant="outlined">Outlined</RBtn>
        <RBtn variant="text">Text</RBtn>
        <RBtn variant="plain">Plain</RBtn>
      </div>
    `,
  }),
};
