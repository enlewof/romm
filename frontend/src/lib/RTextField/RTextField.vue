<script setup lang="ts">
withDefaults(
  defineProps<{
    modelValue?: string | number | null;
    label?: string;
    placeholder?: string;
    type?: string;
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
    appendIcon?: string;
    prependInnerIcon?: string;
    appendInnerIcon?: string;
    clearable?: boolean;
    disabled?: boolean;
    readonly?: boolean;
    hideDetails?: boolean | "auto";
    rules?: readonly ((value: string) => true | string)[];
    hint?: string;
    persistentHint?: boolean;
    color?: string;
    name?: string;
    autocomplete?: string;
    autofocus?: boolean;
    prefix?: string;
    suffix?: string;
    counter?: boolean | number | string;
    loading?: boolean;
    singleLine?: boolean;
  }>(),
  {
    modelValue: undefined,
    label: undefined,
    placeholder: undefined,
    type: "text",
    variant: "underlined",
    density: "default",
    prependIcon: undefined,
    appendIcon: undefined,
    prependInnerIcon: undefined,
    appendInnerIcon: undefined,
    clearable: false,
    disabled: false,
    readonly: false,
    hideDetails: false,
    rules: undefined,
    hint: undefined,
    persistentHint: false,
    color: undefined,
    name: undefined,
    autocomplete: undefined,
    autofocus: false,
    prefix: undefined,
    suffix: undefined,
    counter: false,
    loading: false,
    singleLine: false,
  },
);

defineEmits<{
  "update:modelValue": [value: string | number | null];
  "click:append-inner": [event: MouseEvent];
  "click:prepend-inner": [event: MouseEvent];
  "click:append": [event: MouseEvent];
  "click:prepend": [event: MouseEvent];
  "click:clear": [event: MouseEvent];
}>();

defineOptions({ inheritAttrs: false });
</script>

<template>
  <v-text-field
    v-bind="$attrs"
    :model-value="modelValue"
    :label="label"
    :placeholder="placeholder"
    :type="type"
    :variant="variant"
    :density="density"
    :prepend-icon="prependIcon"
    :append-icon="appendIcon"
    :prepend-inner-icon="prependInnerIcon"
    :append-inner-icon="appendInnerIcon"
    :clearable="clearable"
    :disabled="disabled"
    :readonly="readonly"
    :hide-details="hideDetails"
    :rules="rules"
    :hint="hint"
    :persistent-hint="persistentHint"
    :color="color"
    :name="name"
    :autocomplete="autocomplete"
    :autofocus="autofocus"
    :prefix="prefix"
    :suffix="suffix"
    :counter="counter"
    :loading="loading"
    :single-line="singleLine"
    @update:model-value="$emit('update:modelValue', $event)"
    @click:append-inner="$emit('click:append-inner', $event)"
    @click:prepend-inner="$emit('click:prepend-inner', $event)"
    @click:append="$emit('click:append', $event)"
    @click:prepend="$emit('click:prepend', $event)"
    @click:clear="$emit('click:clear', $event)"
  >
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData ?? {}" />
    </template>
  </v-text-field>
</template>

<style scoped>
/* Custom visual overrides on top of Vuetify's v-text-field */
</style>
