<script setup lang="ts">
withDefaults(
  defineProps<{
    vertical?: boolean;
    thickness?: number | string;
    color?: string;
    inset?: boolean;
  }>(),
  {
    vertical: false,
    thickness: undefined,
    color: undefined,
    inset: false,
  },
);

defineOptions({ inheritAttrs: false });
</script>

<template>
  <v-divider
    v-bind="$attrs"
    :vertical="vertical"
    :thickness="thickness"
    :color="color"
    :inset="inset"
  >
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData ?? {}" />
    </template>
  </v-divider>
</template>

<style scoped>
/* Custom visual overrides on top of Vuetify's v-divider */
</style>
