<script setup lang="ts">
withDefaults(
  defineProps<{
    divided?: boolean;
    density?: "default" | "comfortable" | "compact";
    variant?: "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain";
    color?: string;
    rounded?: string | number | boolean;
  }>(),
  {
    divided: true,
    density: "compact",
    variant: undefined,
    color: undefined,
    rounded: undefined,
  },
);

defineOptions({ inheritAttrs: false });
</script>

<template>
  <v-btn-group
    v-bind="$attrs"
    :divided="divided"
    :density="density"
    :variant="variant"
    :color="color"
    :rounded="rounded"
  >
    <slot />
  </v-btn-group>
</template>

<style scoped>
/* Custom visual overrides on top of Vuetify's v-btn-group */
</style>
