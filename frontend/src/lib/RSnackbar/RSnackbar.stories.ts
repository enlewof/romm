import type { Meta, StoryObj } from "@storybook/vue3-vite";
import { RBtn } from "../RBtn";
import RSnackbar from "./RSnackbar.vue";

const meta = {
  title: "Feedback/RSnackbar",
  component: RSnackbar,
  tags: ["autodocs"],
  argTypes: {
    modelValue: { control: "boolean" },
    color: { control: "text" },
    timeout: { control: "number" },
    location: {
      control: "select",
      options: [
        "top",
        "bottom",
        "top start",
        "top end",
        "bottom start",
        "bottom end",
      ],
    },
    variant: {
      control: "select",
      options: ["flat", "text", "elevated", "tonal", "outlined", "plain"],
    },
  },
} satisfies Meta<typeof RSnackbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    modelValue: true,
    timeout: -1,
  },
  render: (args) => ({
    components: { RSnackbar, RBtn },
    setup: () => ({ args }),
    template: `
      <RSnackbar v-bind="args">
        This is a snackbar message.
        <template #actions>
          <RBtn variant="text" color="white">Close</RBtn>
        </template>
      </RSnackbar>
    `,
  }),
};

export const Default: Story = {
  render: () => ({
    components: { RSnackbar, RBtn },
    template: `
      <RSnackbar :model-value="true" :timeout="-1">
        This is a snackbar message.
        <template #actions>
          <RBtn variant="text" color="white">Close</RBtn>
        </template>
      </RSnackbar>
    `,
  }),
};

export const Colors: Story = {
  render: () => ({
    components: { RSnackbar, RBtn },
    template: `
      <div>
        <RSnackbar :model-value="true" :timeout="-1" color="success" location="top">
          Success message
          <template #actions>
            <RBtn variant="text" color="white">OK</RBtn>
          </template>
        </RSnackbar>
      </div>
    `,
  }),
};
