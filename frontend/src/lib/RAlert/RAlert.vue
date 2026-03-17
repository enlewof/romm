<script setup lang="ts">
withDefaults(
  defineProps<{
    type?: "error" | "warning" | "info" | "success";
    variant?: "flat" | "text" | "outlined" | "elevated" | "tonal" | "plain";
    density?: "default" | "comfortable" | "compact";
    color?: string;
    icon?: string | false;
    closable?: boolean;
    title?: string;
    prominent?: boolean;
    border?: boolean | "top" | "bottom" | "start" | "end";
  }>(),
  {
    type: undefined,
    variant: "tonal",
    density: "default",
    color: undefined,
    icon: undefined,
    closable: false,
    title: undefined,
    prominent: false,
    border: false,
  },
);

defineOptions({ inheritAttrs: false });
</script>

<template>
  <v-alert
    v-bind="$attrs"
    :type="type"
    :variant="variant"
    :density="density"
    :color="color"
    :icon="icon"
    :closable="closable"
    :title="title"
    :prominent="prominent"
    :border="border"
  >
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData ?? {}" />
    </template>
  </v-alert>
</template>

<style scoped>
/* Custom visual overrides on top of Vuetify's v-alert */
</style>
