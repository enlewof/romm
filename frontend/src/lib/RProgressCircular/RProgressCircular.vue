<script setup lang="ts">
withDefaults(
  defineProps<{
    indeterminate?: boolean;
    modelValue?: number;
    size?: number | string;
    width?: number;
    color?: string;
  }>(),
  {
    indeterminate: false,
    modelValue: 0,
    size: 20,
    width: 2,
    color: "primary",
  },
);

defineOptions({ inheritAttrs: false });
</script>

<template>
  <v-progress-circular
    v-bind="$attrs"
    :indeterminate="indeterminate"
    :model-value="modelValue"
    :size="size"
    :width="width"
    :color="color"
  >
    <slot />
  </v-progress-circular>
</template>

<style scoped>
/* Custom visual overrides on top of Vuetify's v-progress-circular */
</style>
