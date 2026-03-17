<script setup lang="ts">
withDefaults(
  defineProps<{
    icon?: string;
    size?: "x-small" | "small" | "default" | "large" | "x-large" | number;
    color?: string;
    start?: boolean;
    end?: boolean;
  }>(),
  {
    icon: undefined,
    size: "default",
    color: undefined,
    start: false,
    end: false,
  },
);

defineOptions({ inheritAttrs: false });
</script>

<template>
  <v-icon
    v-bind="$attrs"
    :icon="icon"
    :size="size"
    :color="color"
    :start="start"
    :end="end"
  >
    <slot />
  </v-icon>
</template>

<style scoped>
/* Custom visual overrides on top of Vuetify's v-icon */
</style>
