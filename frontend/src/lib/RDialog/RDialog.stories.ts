import type { Meta, StoryObj } from "@storybook/vue3-vite";
import { RBtn, RBtnGroup } from "@/lib";
import RDialog from "./RDialog.vue";

const meta = {
  title: "Components/RDialog",
  component: RDialog,
  tags: ["autodocs"],
} satisfies Meta<typeof RDialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { modelValue: true },
  render: () => ({
    components: { RDialog, RBtn, RBtnGroup },
    data: () => ({ show: true }),
    template: `
      <div>
        <RBtn @click="show = true">Open Dialog</RBtn>
        <RDialog v-model="show" icon="mdi-information" width="400">
          <template #header>
            <span>Dialog Title</span>
          </template>
          <template #content>
            <div class="pa-4">This is the dialog content.</div>
          </template>
          <template #footer>
            <RBtnGroup>
              <RBtn variant="flat" class="bg-toplayer" @click="show = false">Cancel</RBtn>
              <RBtn variant="flat" color="primary" @click="show = false">Confirm</RBtn>
            </RBtnGroup>
          </template>
        </RDialog>
      </div>
    `,
  }),
};

export const Loading: Story = {
  args: { modelValue: true },
  render: () => ({
    components: { RDialog, RBtn },
    data: () => ({ show: true }),
    template: `
      <div>
        <RBtn @click="show = true">Open Loading Dialog</RBtn>
        <RDialog v-model="show" icon="mdi-loading" width="400" :loading-condition="true">
          <template #header>
            <span>Loading...</span>
          </template>
        </RDialog>
      </div>
    `,
  }),
};

export const WithRommIcon: Story = {
  args: { modelValue: true },
  render: () => ({
    components: { RDialog, RBtn },
    data: () => ({ show: true }),
    template: `
      <div>
        <RBtn @click="show = true">Open</RBtn>
        <RDialog v-model="show" show-romm-icon width="400">
          <template #header>
            <span>About RomM</span>
          </template>
          <template #content>
            <div class="pa-4">Dialog with RomM logo</div>
          </template>
        </RDialog>
      </div>
    `,
  }),
};
