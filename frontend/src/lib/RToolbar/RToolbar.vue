<script setup lang="ts">
withDefaults(
  defineProps<{
    density?: "default" | "comfortable" | "compact";
    title?: string;
    color?: string;
  }>(),
  {
    density: "compact",
    title: undefined,
    color: undefined,
  },
);

defineOptions({ inheritAttrs: false });
</script>

<template>
  <v-toolbar v-bind="$attrs" :density="density" :title="title" :color="color">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData ?? {}" />
    </template>
  </v-toolbar>
</template>

<style scoped>
/* Custom visual overrides on top of Vuetify's v-toolbar */
</style>
