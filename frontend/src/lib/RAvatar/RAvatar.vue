<script setup lang="ts">
withDefaults(
  defineProps<{
    size?: number | string;
    rounded?: string | number | boolean;
    color?: string;
    variant?: "flat" | "text" | "outlined" | "elevated" | "tonal" | "plain";
    image?: string;
  }>(),
  {
    size: 40,
    rounded: undefined,
    color: undefined,
    variant: undefined,
    image: undefined,
  },
);

defineOptions({ inheritAttrs: false });
</script>

<template>
  <v-avatar
    v-bind="$attrs"
    :size="size"
    :rounded="rounded"
    :color="color"
    :variant="variant"
    :image="image"
  >
    <slot />
  </v-avatar>
</template>

<style scoped>
/* Custom visual overrides on top of Vuetify's v-avatar */
</style>
