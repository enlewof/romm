<script setup lang="ts">
import type { Anchor } from "vuetify";

withDefaults(
  defineProps<{
    modelValue?: boolean;
    content?: string | number;
    color?: string;
    dot?: boolean;
    icon?: string;
    location?: Anchor | null;
    max?: number | string;
    offsetX?: number | string;
    offsetY?: number | string;
  }>(),
  {
    modelValue: true,
    content: undefined,
    color: "primary",
    dot: false,
    icon: undefined,
    location: undefined,
    max: undefined,
    offsetX: undefined,
    offsetY: undefined,
  },
);

defineOptions({ inheritAttrs: false });
</script>

<template>
  <v-badge
    v-bind="$attrs"
    :model-value="modelValue"
    :content="content"
    :color="color"
    :dot="dot"
    :icon="icon"
    :location="location"
    :max="max"
    :offset-x="offsetX"
    :offset-y="offsetY"
  >
    <slot />
  </v-badge>
</template>

<style scoped>
/* Custom visual overrides on top of Vuetify's v-badge */
</style>
