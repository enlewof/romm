<script setup lang="ts">
import { RCard } from "@/lib/RCard";
import { RCardText } from "@/lib/RCardText";
import { RDivider } from "@/lib/RDivider";
import { RIcon } from "@/lib/RIcon";
import { RToolbar } from "@/lib/RToolbar";

withDefaults(
  defineProps<{
    title: string;
    icon: string;
    titleDivider?: boolean;
    iconColor?: string;
    bgColor?: string;
  }>(),
  {
    title: "",
    icon: "",
    titleDivider: false,
    iconColor: "",
    bgColor: "bg-background",
  },
);
</script>

<template>
  <RCard class="bg-background" :elevation="0">
    <RToolbar class="bg-toplayer px-1" density="compact">
      <v-toolbar-title class="text-button">
        <RIcon :color="iconColor" class="mr-2">
          {{ icon }}
        </RIcon>
        {{ title }}
        <slot name="toolbar-title-append" />
      </v-toolbar-title>
      <slot name="toolbar-append" />
    </RToolbar>

    <RDivider v-if="titleDivider" />

    <RCardText :class="['pa-0', bgColor]">
      <slot name="content" />
    </RCardText>
  </RCard>
</template>
