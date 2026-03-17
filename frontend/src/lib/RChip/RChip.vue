<script setup lang="ts">
withDefaults(
  defineProps<{
    variant?: "flat" | "text" | "outlined" | "elevated" | "tonal" | "plain";
    size?: "x-small" | "small" | "default" | "large" | "x-large";
    color?: string;
    label?: boolean;
    closable?: boolean;
    prependIcon?: string;
    appendIcon?: string;
    disabled?: boolean;
  }>(),
  {
    variant: "tonal",
    size: "default",
    color: undefined,
    label: false,
    closable: false,
    prependIcon: undefined,
    appendIcon: undefined,
    disabled: false,
  },
);

defineOptions({ inheritAttrs: false });
</script>

<template>
  <v-chip
    v-bind="$attrs"
    :variant="variant"
    :size="size"
    :color="color"
    :label="label"
    :closable="closable"
    :prepend-icon="prependIcon"
    :append-icon="appendIcon"
    :disabled="disabled"
  >
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData ?? {}" />
    </template>
  </v-chip>
</template>

<style scoped>
/* Custom visual overrides on top of Vuetify's v-chip */
</style>
