<script setup lang="ts">
import type { Anchor } from "vuetify";

withDefaults(
  defineProps<{
    modelValue?: boolean;
    location?: Anchor;
    openOnHover?: boolean;
    closeOnContentClick?: boolean;
    disabled?: boolean;
    openDelay?: number | string;
    closeDelay?: number | string;
    offset?: number | string;
  }>(),
  {
    modelValue: false,
    location: undefined,
    openOnHover: false,
    closeOnContentClick: false,
    disabled: false,
    openDelay: undefined,
    closeDelay: undefined,
    offset: undefined,
  },
);

defineEmits<{
  "update:modelValue": [value: boolean];
}>();

defineOptions({ inheritAttrs: false });
</script>

<template>
  <v-menu
    v-bind="$attrs"
    :model-value="modelValue"
    :location="location"
    :open-on-hover="openOnHover"
    :close-on-content-click="closeOnContentClick"
    :disabled="disabled"
    :open-delay="openDelay"
    :close-delay="closeDelay"
    :offset="offset"
    @update:model-value="$emit('update:modelValue', $event)"
  >
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData ?? {}" />
    </template>
  </v-menu>
</template>

<style scoped>
/* Custom visual overrides on top of Vuetify's v-menu */
</style>
