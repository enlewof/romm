<script setup lang="ts">
withDefaults(
  defineProps<{
    density?: "default" | "comfortable" | "compact";
    nav?: boolean;
    bgColor?: string;
    lines?: false | "one" | "two" | "three";
  }>(),
  {
    density: undefined,
    nav: false,
    bgColor: undefined,
    lines: false,
  },
);

defineOptions({ inheritAttrs: false });
</script>

<template>
  <v-list
    v-bind="$attrs"
    :density="density"
    :nav="nav"
    :bg-color="bgColor"
    :lines="lines"
  >
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData ?? {}" />
    </template>
  </v-list>
</template>

<style scoped>
/* Custom visual overrides on top of Vuetify's v-list */
</style>
