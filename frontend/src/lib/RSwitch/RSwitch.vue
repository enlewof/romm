<script setup lang="ts">
withDefaults(
  defineProps<{
    modelValue?: boolean | null;
    label?: string;
    color?: string;
    disabled?: boolean;
    readonly?: boolean;
    inset?: boolean;
    hideDetails?: boolean | "auto";
    density?: "default" | "comfortable" | "compact";
    loading?: boolean | string;
  }>(),
  {
    modelValue: undefined,
    label: undefined,
    color: "primary",
    disabled: false,
    readonly: false,
    inset: false,
    hideDetails: false,
    density: "default",
    loading: false,
  },
);

defineEmits<{
  "update:modelValue": [value: boolean | null];
}>();

defineOptions({ inheritAttrs: false });
</script>

<template>
  <v-switch
    v-bind="$attrs"
    :model-value="modelValue"
    :label="label"
    :color="color"
    :disabled="disabled"
    :readonly="readonly"
    :inset="inset"
    :hide-details="hideDetails"
    :density="density"
    :loading="loading"
    @update:model-value="$emit('update:modelValue', $event)"
  >
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData ?? {}" />
    </template>
  </v-switch>
</template>

<style scoped>
/* Custom visual overrides on top of Vuetify's v-switch */
</style>
