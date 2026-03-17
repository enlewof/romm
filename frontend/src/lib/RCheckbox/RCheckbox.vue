<script setup lang="ts">
withDefaults(
  defineProps<{
    modelValue?: boolean | null | unknown[];
    label?: string;
    color?: string;
    disabled?: boolean;
    readonly?: boolean;
    indeterminate?: boolean;
    hideDetails?: boolean | "auto";
    density?: "default" | "comfortable" | "compact";
    trueIcon?: string;
    falseIcon?: string;
    value?: unknown;
  }>(),
  {
    modelValue: undefined,
    label: undefined,
    color: "primary",
    disabled: false,
    readonly: false,
    indeterminate: false,
    hideDetails: false,
    density: "default",
    trueIcon: undefined,
    falseIcon: undefined,
    value: undefined,
  },
);

defineEmits<{
  "update:modelValue": [value: boolean | null | unknown[]];
}>();

defineOptions({ inheritAttrs: false });
</script>

<template>
  <v-checkbox
    v-bind="$attrs"
    :model-value="modelValue"
    :label="label"
    :color="color"
    :disabled="disabled"
    :readonly="readonly"
    :indeterminate="indeterminate"
    :hide-details="hideDetails"
    :density="density"
    :true-icon="trueIcon"
    :false-icon="falseIcon"
    :value="value"
    @update:model-value="$emit('update:modelValue', $event)"
  >
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData ?? {}" />
    </template>
  </v-checkbox>
</template>

<style scoped>
/* Custom visual overrides on top of Vuetify's v-checkbox */
</style>
