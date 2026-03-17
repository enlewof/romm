<script setup lang="ts">
import { onMounted, ref, useSlots } from "vue";
import { useTheme } from "vuetify";
import EmptyFirmware from "@/components/common/EmptyStates/EmptyFirmware.vue";
import EmptyGame from "@/components/common/EmptyStates/EmptyGame.vue";
import EmptyPlatform from "@/components/common/EmptyStates/EmptyPlatform.vue";
import { RBtn } from "@/lib/RBtn";
import { RCard } from "@/lib/RCard";
import { RCardText } from "@/lib/RCardText";
import { RDivider } from "@/lib/RDivider";
import { RIcon } from "@/lib/RIcon";
import { RIsotipo } from "@/lib/RIsotipo";
import { RProgressCircular } from "@/lib/RProgressCircular";
import { RToolbar } from "@/lib/RToolbar";

withDefaults(
  defineProps<{
    modelValue: boolean;
    loadingCondition?: boolean;
    emptyStateCondition?: boolean;
    emptyStateType?: string | null;
    expandContentOnEmptyState?: boolean;
    scrollContent?: boolean;
    showRommIcon?: boolean;
    icon?: string | null;
    width?: number | string;
    height?: number | string;
  }>(),
  {
    loadingCondition: false,
    emptyStateCondition: false,
    emptyStateType: null,
    expandContentOnEmptyState: false,
    scrollContent: false,
    showRommIcon: false,
    icon: null,
    width: "auto",
    height: "auto",
  },
);
const emit = defineEmits(["update:modelValue", "close"]);
const hasToolbarSlot = ref(false);
const hasPrependSlot = ref(false);
const hasAppendSlot = ref(false);
const hasFooterSlot = ref(false);
const theme = useTheme();

function closeDialog() {
  emit("update:modelValue", false);
  emit("close");
}

onMounted(() => {
  const slots = useSlots();
  hasToolbarSlot.value = !!slots.toolbar;
  hasPrependSlot.value = !!slots.prepend;
  hasAppendSlot.value = !!slots.append;
  hasFooterSlot.value = !!slots.footer;
});
</script>

<template>
  <v-dialog
    :model-value="modelValue"
    :width="width"
    scroll-strategy="block"
    no-click-animation
    persistent
    z-index="9999"
    :scrim="theme.name.value == 'dark' ? 'black' : 'white'"
    @click:outside="closeDialog"
    @keydown.esc="closeDialog"
  >
    <RCard :min-height="height" :max-height="height">
      <RToolbar density="compact" class="bg-toplayer">
        <RIcon v-if="icon" :icon="icon" class="ml-5" />
        <RIsotipo v-if="showRommIcon" :size="30" class="mx-4" />
        <slot name="header" />
        <template #append>
          <RBtn
            size="small"
            variant="text"
            class="rounded"
            icon="mdi-close"
            @click="closeDialog"
          />
        </template>
      </RToolbar>

      <RDivider />

      <RToolbar v-if="hasToolbarSlot" density="compact" class="bg-toplayer">
        <slot name="toolbar" />
      </RToolbar>
      <RDivider />

      <RCardText v-if="hasPrependSlot" class="pa-0">
        <slot name="prepend" />
      </RCardText>

      <RCardText
        id="r-dialog-content"
        class="pa-0 d-flex flex-column"
        :class="{ scroll: scrollContent }"
      >
        <v-row
          v-if="loadingCondition"
          class="justify-center align-center flex-grow-1 my-4"
          no-gutters
        >
          <RProgressCircular
            :width="2"
            :size="40"
            color="primary"
            indeterminate
          />
        </v-row>

        <v-row
          v-if="!loadingCondition && emptyStateCondition"
          class="justify-center align-center flex-grow-1 my-4"
          no-gutters
        >
          <EmptyGame v-if="emptyStateType == 'game'" />
          <EmptyPlatform v-else-if="emptyStateType == 'platform'" />
          <EmptyFirmware v-else-if="emptyStateType == 'firmware'" />
          <slot v-else name="empty-state" />
        </v-row>

        <slot v-if="!loadingCondition && !emptyStateCondition" name="content" />
      </RCardText>
      <RCardText v-if="hasAppendSlot" class="pa-0">
        <slot name="append" />
      </RCardText>

      <template v-if="hasFooterSlot">
        <RDivider />
        <RToolbar class="bg-toplayer" density="compact">
          <slot name="footer" />
        </RToolbar>
      </template>
    </RCard>
  </v-dialog>
</template>
