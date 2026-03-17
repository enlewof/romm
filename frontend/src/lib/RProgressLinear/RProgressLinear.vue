<script setup lang="ts">
withDefaults(
  defineProps<{
    indeterminate?: boolean;
    modelValue?: number;
    color?: string;
    height?: number | string;
    striped?: boolean;
    rounded?: boolean | string | number;
    bgColor?: string;
  }>(),
  {
    indeterminate: false,
    modelValue: 0,
    color: "primary",
    height: 4,
    striped: false,
    rounded: false,
    bgColor: undefined,
  },
);

defineOptions({ inheritAttrs: false });
</script>

<template>
  <v-progress-linear
    v-bind="$attrs"
    :indeterminate="indeterminate"
    :model-value="modelValue"
    :color="color"
    :height="height"
    :striped="striped"
    :rounded="rounded"
    :bg-color="bgColor"
  >
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData ?? {}" />
    </template>
  </v-progress-linear>
</template>

<style scoped>
/* Custom visual overrides on top of Vuetify's v-progress-linear */
</style>
