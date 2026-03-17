<script setup lang="ts">
withDefaults(
  defineProps<{
    src?: string;
    aspectRatio?: string | number;
    cover?: boolean;
    contain?: boolean;
    eager?: boolean;
    alt?: string;
    width?: number | string;
    height?: number | string;
    maxWidth?: number | string;
    maxHeight?: number | string;
    lazySrc?: string;
    transition?: string | boolean;
  }>(),
  {
    src: undefined,
    aspectRatio: undefined,
    cover: false,
    contain: false,
    eager: false,
    alt: undefined,
    width: undefined,
    height: undefined,
    maxWidth: undefined,
    maxHeight: undefined,
    lazySrc: undefined,
    transition: undefined,
  },
);

defineOptions({ inheritAttrs: false });
</script>

<template>
  <v-img
    v-bind="$attrs"
    :src="src"
    :aspect-ratio="aspectRatio"
    :cover="cover"
    :contain="contain"
    :eager="eager"
    :alt="alt"
    :width="width"
    :height="height"
    :max-width="maxWidth"
    :max-height="maxHeight"
    :lazy-src="lazySrc"
    :transition="transition"
  >
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData ?? {}" />
    </template>
  </v-img>
</template>

<style scoped>
/* Custom visual overrides on top of Vuetify's v-img */
</style>
