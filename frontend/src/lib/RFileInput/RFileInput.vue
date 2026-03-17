<script setup lang="ts">
withDefaults(
  defineProps<{
    modelValue?: File | File[] | null;
    label?: string;
    accept?: string;
    multiple?: boolean;
    variant?:
      | "outlined"
      | "filled"
      | "underlined"
      | "solo"
      | "solo-filled"
      | "solo-inverted"
      | "plain";
    density?: "default" | "comfortable" | "compact";
    prependIcon?: string;
    prependInnerIcon?: string;
    appendIcon?: string;
    appendInnerIcon?: string;
    clearable?: boolean;
    disabled?: boolean;
    hideDetails?: boolean | "auto";
    rules?: readonly ((value: File | File[]) => true | string)[];
    hint?: string;
    showSize?: boolean | 1000 | 1024;
    chips?: boolean;
    counter?: boolean;
    color?: string;
  }>(),
  {
    modelValue: undefined,
    label: undefined,
    accept: undefined,
    multiple: false,
    variant: "underlined",
    density: "default",
    prependIcon: undefined,
    prependInnerIcon: undefined,
    appendIcon: undefined,
    appendInnerIcon: undefined,
    clearable: false,
    disabled: false,
    hideDetails: false,
    rules: undefined,
    hint: undefined,
    showSize: false,
    chips: false,
    counter: false,
    color: undefined,
  },
);

defineEmits<{
  "update:modelValue": [value: File | File[] | null];
}>();

defineOptions({ inheritAttrs: false });
</script>

<template>
  <v-file-input
    v-bind="$attrs"
    :model-value="modelValue"
    :label="label"
    :accept="accept"
    :multiple="multiple"
    :variant="variant"
    :density="density"
    :prepend-icon="prependIcon"
    :prepend-inner-icon="prependInnerIcon"
    :append-icon="appendIcon"
    :append-inner-icon="appendInnerIcon"
    :clearable="clearable"
    :disabled="disabled"
    :hide-details="hideDetails"
    :rules="rules"
    :hint="hint"
    :show-size="showSize"
    :chips="chips"
    :counter="counter"
    :color="color"
    @update:model-value="$emit('update:modelValue', $event)"
  >
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData ?? {}" />
    </template>
  </v-file-input>
</template>

<style scoped>
/* Custom visual overrides on top of Vuetify's v-file-input */
</style>
