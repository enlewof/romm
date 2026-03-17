<script setup lang="ts">
withDefaults(
  defineProps<{
    modelValue?: unknown;
    color?: string;
    grow?: boolean;
    density?: "default" | "comfortable" | "compact";
    alignTabs?: "start" | "center" | "end" | "title";
    bgColor?: string;
  }>(),
  {
    modelValue: undefined,
    color: undefined,
    grow: false,
    density: undefined,
    alignTabs: undefined,
    bgColor: undefined,
  },
);

defineEmits<{
  "update:modelValue": [value: unknown];
}>();

defineOptions({ inheritAttrs: false });
</script>

<template>
  <v-tabs
    v-bind="$attrs"
    :model-value="modelValue"
    :color="color"
    :grow="grow"
    :density="density"
    :align-tabs="alignTabs"
    :bg-color="bgColor"
    @update:model-value="$emit('update:modelValue', $event)"
  >
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData ?? {}" />
    </template>
  </v-tabs>
</template>

<style scoped>
/* Custom visual overrides on top of Vuetify's v-tabs */
</style>
