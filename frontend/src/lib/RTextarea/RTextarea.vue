<script setup lang="ts">
withDefaults(
  defineProps<{
    modelValue?: string | null;
    label?: string;
    placeholder?: string;
    variant?:
      | "outlined"
      | "filled"
      | "underlined"
      | "solo"
      | "solo-filled"
      | "solo-inverted"
      | "plain";
    density?: "default" | "comfortable" | "compact";
    rows?: number | string;
    autoGrow?: boolean;
    noResize?: boolean;
    clearable?: boolean;
    disabled?: boolean;
    readonly?: boolean;
    hideDetails?: boolean | "auto";
    rules?: readonly ((value: string) => true | string)[];
    hint?: string;
    persistentHint?: boolean;
    color?: string;
    counter?: true | number | string;
    maxRows?: number | string;
  }>(),
  {
    modelValue: undefined,
    label: undefined,
    placeholder: undefined,
    variant: "underlined",
    density: "default",
    rows: 5,
    autoGrow: false,
    noResize: false,
    clearable: false,
    disabled: false,
    readonly: false,
    hideDetails: false,
    rules: undefined,
    hint: undefined,
    persistentHint: false,
    color: undefined,
    counter: undefined,
    maxRows: undefined,
  },
);

defineEmits<{
  "update:modelValue": [value: string | null];
}>();

defineOptions({ inheritAttrs: false });
</script>

<template>
  <v-textarea
    v-bind="$attrs"
    :model-value="modelValue"
    :label="label"
    :placeholder="placeholder"
    :variant="variant"
    :density="density"
    :rows="rows"
    :auto-grow="autoGrow"
    :no-resize="noResize"
    :clearable="clearable"
    :disabled="disabled"
    :readonly="readonly"
    :hide-details="hideDetails"
    :rules="rules"
    :hint="hint"
    :persistent-hint="persistentHint"
    :color="color"
    :counter="counter"
    :max-rows="maxRows"
    @update:model-value="$emit('update:modelValue', $event)"
  >
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData ?? {}" />
    </template>
  </v-textarea>
</template>

<style scoped>
/* Custom visual overrides on top of Vuetify's v-textarea */
</style>
