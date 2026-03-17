<script setup lang="ts">
withDefaults(
  defineProps<{
    elevation?: number | string;
    color?: string;
    variant?: "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain";
    rounded?: string | number | boolean;
    loading?: boolean | string;
    disabled?: boolean;
    width?: number | string;
    height?: number | string;
    maxWidth?: number | string;
    maxHeight?: number | string;
    title?: string;
    subtitle?: string;
    hover?: boolean;
    link?: boolean;
    to?: string | object;
    href?: string;
  }>(),
  {
    elevation: 0,
    color: undefined,
    variant: undefined,
    rounded: undefined,
    loading: false,
    disabled: false,
    width: undefined,
    height: undefined,
    maxWidth: undefined,
    maxHeight: undefined,
    title: undefined,
    subtitle: undefined,
    hover: false,
    link: false,
    to: undefined,
    href: undefined,
  },
);

defineOptions({ inheritAttrs: false });
</script>

<template>
  <v-card
    v-bind="$attrs"
    :elevation="elevation"
    :color="color"
    :variant="variant"
    :rounded="rounded"
    :loading="loading"
    :disabled="disabled"
    :width="width"
    :height="height"
    :max-width="maxWidth"
    :max-height="maxHeight"
    :title="title"
    :subtitle="subtitle"
    :hover="hover"
    :link="link"
    :to="to"
    :href="href"
  >
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData ?? {}" />
    </template>
  </v-card>
</template>

<style scoped>
/* Custom visual overrides on top of Vuetify's v-card */
</style>
