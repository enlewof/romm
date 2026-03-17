<script setup lang="ts">
import { onBeforeMount, ref } from "vue";
import { useI18n } from "vue-i18n";
import { RCard, RCardText, RChip } from "@/lib";
import api from "@/services/api";
import { formatBytes } from "@/utils";

const { t } = useI18n();
const stats = ref({
  PLATFORMS: 0,
  ROMS: 0,
  SAVES: 0,
  STATES: 0,
  SCREENSHOTS: 0,
  TOTAL_FILESIZE_BYTES: 0,
});

onBeforeMount(() => {
  api.get("/stats").then(({ data }) => {
    stats.value = data;
  });
});
</script>
<template>
  <RCard class="ma-2">
    <RCardText class="pa-1">
      <v-row no-gutters class="flex-nowrap overflow-x-auto text-center">
        <v-col>
          <RChip
            class="text-overline"
            prepend-icon="mdi-controller"
            variant="text"
            label
          >
            {{ t("common.platforms-n", stats.PLATFORMS) }}
          </RChip>
        </v-col>
        <v-col>
          <RChip
            class="text-overline"
            prepend-icon="mdi-disc"
            variant="text"
            label
          >
            {{ t("common.games-n", stats.ROMS) }}
          </RChip>
        </v-col>
        <v-col>
          <RChip
            class="text-overline"
            prepend-icon="mdi-content-save"
            variant="text"
            label
          >
            {{ t("common.saves-n", stats.SAVES) }}
          </RChip>
        </v-col>
        <v-col>
          <RChip
            class="text-overline"
            prepend-icon="mdi-file"
            variant="text"
            label
          >
            {{ t("common.states-n", stats.STATES) }}
          </RChip>
        </v-col>
        <v-col>
          <RChip
            class="text-overline"
            prepend-icon="mdi-image-area"
            variant="text"
            label
          >
            {{ t("common.screenshots-n", stats.SCREENSHOTS) }}
          </RChip>
        </v-col>
        <v-col>
          <RChip
            class="text-overline"
            prepend-icon="mdi-harddisk"
            variant="text"
            label
          >
            {{ t("common.size-on-disk") }}:
            {{ formatBytes(stats.TOTAL_FILESIZE_BYTES, 1) }}
          </RChip>
        </v-col>
      </v-row>
    </RCardText>
  </RCard>
</template>
