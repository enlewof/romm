<script setup lang="ts">
withDefaults(
  defineProps<{
    title?: string;
    subtitle?: string;
    prependIcon?: string;
    appendIcon?: string;
    value?: unknown;
    active?: boolean;
    activeColor?: string;
    rounded?: string | number | boolean;
    to?: string | object;
    href?: string;
    density?: "default" | "comfortable" | "compact";
    lines?: false | "one" | "two" | "three";
  }>(),
  {
    title: undefined,
    subtitle: undefined,
    prependIcon: undefined,
    appendIcon: undefined,
    value: undefined,
    active: false,
    activeColor: undefined,
    rounded: undefined,
    to: undefined,
    href: undefined,
    density: undefined,
    lines: undefined,
  },
);

defineOptions({ inheritAttrs: false });
</script>

<template>
  <v-list-item
    v-bind="$attrs"
    :title="title"
    :subtitle="subtitle"
    :prepend-icon="prependIcon"
    :append-icon="appendIcon"
    :value="value"
    :active="active"
    :active-color="activeColor"
    :rounded="rounded"
    :to="to"
    :href="href"
    :density="density"
    :lines="lines"
  >
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData ?? {}" />
    </template>
  </v-list-item>
</template>

<style scoped>
/* Custom visual overrides on top of Vuetify's v-list-item */
</style>
