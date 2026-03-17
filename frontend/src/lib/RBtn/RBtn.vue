<script setup lang="ts">
withDefaults(
  defineProps<{
    variant?: "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain";
    size?: "x-small" | "small" | "default" | "large" | "x-large";
    icon?: string | boolean;
    prependIcon?: string;
    appendIcon?: string;
    disabled?: boolean;
    loading?: boolean;
    block?: boolean;
    color?: string;
    rounded?: string | number | boolean;
    density?: "default" | "comfortable" | "compact";
    type?: "button" | "submit" | "reset";
    to?: string | object;
    href?: string;
  }>(),
  {
    variant: "flat",
    size: "default",
    icon: undefined,
    prependIcon: undefined,
    appendIcon: undefined,
    disabled: false,
    loading: false,
    block: false,
    color: undefined,
    rounded: undefined,
    density: "default",
    type: undefined,
    to: undefined,
    href: undefined,
  },
);

defineOptions({ inheritAttrs: false });
</script>

<template>
  <v-btn
    v-bind="$attrs"
    :variant="variant"
    :size="size"
    :icon="icon"
    :prepend-icon="prependIcon"
    :append-icon="appendIcon"
    :disabled="disabled"
    :loading="loading"
    :block="block"
    :color="color"
    :rounded="rounded"
    :density="density"
    :type="type"
    :to="to"
    :href="href"
    class="r-btn"
  >
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData ?? {}" />
    </template>
  </v-btn>
</template>

<style scoped>
/* Custom visual overrides on top of Vuetify's v-btn */
</style>
