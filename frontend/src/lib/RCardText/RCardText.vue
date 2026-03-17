<script setup lang="ts">
defineOptions({ inheritAttrs: false });
</script>

<template>
  <v-card-text v-bind="$attrs">
    <slot />
  </v-card-text>
</template>

<style scoped>
/* Custom visual overrides on top of Vuetify's v-card-text */
</style>
