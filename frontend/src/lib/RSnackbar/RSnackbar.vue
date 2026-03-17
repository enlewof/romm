<script setup lang="ts">
import type { Anchor } from "vuetify";

withDefaults(
  defineProps<{
    modelValue?: boolean;
    color?: string;
    timeout?: number | string;
    location?: Anchor;
    variant?: "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain";
  }>(),
  {
    modelValue: false,
    color: undefined,
    timeout: 3000,
    location: undefined,
    variant: undefined,
  },
);

defineEmits<{
  "update:modelValue": [value: boolean];
}>();

defineOptions({ inheritAttrs: false });
</script>

<template>
  <v-snackbar
    v-bind="$attrs"
    :model-value="modelValue"
    :color="color"
    :timeout="timeout"
    :location="location"
    :variant="variant"
    @update:model-value="$emit('update:modelValue', $event)"
  >
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData ?? {}" />
    </template>
  </v-snackbar>
</template>

<style scoped>
/* Custom visual overrides on top of Vuetify's v-snackbar */
</style>
