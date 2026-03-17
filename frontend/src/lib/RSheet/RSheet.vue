<script setup lang="ts">
withDefaults(
  defineProps<{
    elevation?: number | string;
    color?: string;
    rounded?: string | number | boolean;
    width?: number | string;
    height?: number | string;
  }>(),
  {
    elevation: undefined,
    color: undefined,
    rounded: undefined,
    width: undefined,
    height: undefined,
  },
);

defineOptions({ inheritAttrs: false });
</script>

<template>
  <v-sheet
    v-bind="$attrs"
    :elevation="elevation"
    :color="color"
    :rounded="rounded"
    :width="width"
    :height="height"
  >
    <slot />
  </v-sheet>
</template>

<style scoped>
/* Custom visual overrides on top of Vuetify's v-sheet */
</style>
