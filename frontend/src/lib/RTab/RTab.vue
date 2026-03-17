<script setup lang="ts">
withDefaults(
  defineProps<{
    value?: unknown;
    disabled?: boolean;
    prependIcon?: string;
    appendIcon?: string;
  }>(),
  {
    value: undefined,
    disabled: false,
    prependIcon: undefined,
    appendIcon: undefined,
  },
);

defineOptions({ inheritAttrs: false });
</script>

<template>
  <v-tab
    v-bind="$attrs"
    :value="value"
    :disabled="disabled"
    :prepend-icon="prependIcon"
    :append-icon="appendIcon"
  >
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData ?? {}" />
    </template>
  </v-tab>
</template>

<style scoped>
/* Custom visual overrides on top of Vuetify's v-tab */
</style>
