<script setup lang="ts">
import type { Anchor } from "vuetify";

withDefaults(
  defineProps<{
    text?: string;
    location?: Anchor;
    openDelay?: number | string;
    disabled?: boolean;
    openOnHover?: boolean;
  }>(),
  {
    text: undefined,
    location: "bottom",
    openDelay: 500,
    disabled: false,
    openOnHover: true,
  },
);

defineOptions({ inheritAttrs: false });
</script>

<template>
  <v-tooltip
    v-bind="$attrs"
    :text="text"
    :location="location"
    :open-delay="openDelay"
    :disabled="disabled"
    :open-on-hover="openOnHover"
  >
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData ?? {}" />
    </template>
  </v-tooltip>
</template>

<style scoped>
/* Custom visual overrides on top of Vuetify's v-tooltip */
</style>
