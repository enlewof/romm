<script setup lang="ts">
withDefaults(
  defineProps<{
    modelValue?: unknown;
    items?: readonly unknown[];
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
    itemTitle?: string;
    itemValue?: string;
    multiple?: boolean;
    chips?: boolean;
    closableChips?: boolean;
    clearable?: boolean;
    disabled?: boolean;
    readonly?: boolean;
    hideDetails?: boolean | "auto";
    rules?: readonly ((value: unknown) => true | string)[];
    returnObject?: boolean;
    color?: string;
    prependInnerIcon?: string;
    appendInnerIcon?: string;
  }>(),
  {
    modelValue: undefined,
    items: undefined,
    label: undefined,
    placeholder: undefined,
    variant: "underlined",
    density: "default",
    itemTitle: "title",
    itemValue: "value",
    multiple: false,
    chips: false,
    closableChips: false,
    clearable: false,
    disabled: false,
    readonly: false,
    hideDetails: false,
    rules: undefined,
    returnObject: false,
    color: undefined,
    prependInnerIcon: undefined,
    appendInnerIcon: undefined,
  },
);

defineEmits<{
  "update:modelValue": [value: unknown];
}>();

defineOptions({ inheritAttrs: false });
</script>

<template>
  <v-select
    v-bind="$attrs"
    :model-value="modelValue"
    :items="items"
    :label="label"
    :placeholder="placeholder"
    :variant="variant"
    :density="density"
    :item-title="itemTitle"
    :item-value="itemValue"
    :multiple="multiple"
    :chips="chips"
    :closable-chips="closableChips"
    :clearable="clearable"
    :disabled="disabled"
    :readonly="readonly"
    :hide-details="hideDetails"
    :rules="rules"
    :return-object="returnObject"
    :color="color"
    :prepend-inner-icon="prependInnerIcon"
    :append-inner-icon="appendInnerIcon"
    @update:model-value="$emit('update:modelValue', $event)"
  >
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData ?? {}" />
    </template>
  </v-select>
</template>

<style scoped>
/* Custom visual overrides on top of Vuetify's v-select */
</style>
