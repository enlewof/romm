<script setup lang="ts">
import type { Emitter } from "mitt";
import { inject, ref } from "vue";
import { useI18n } from "vue-i18n";
import { useRouter, useRoute } from "vue-router";
import { RBtn, RCard, RIcon, RImg, RProgressCircular, RTextField } from "@/lib";
import { refetchCSRFToken } from "@/services/api";
import identityApi from "@/services/api/identity";
import storeAuth from "@/stores/auth";
import type { Events } from "@/types/emitter";

const { t } = useI18n();
const authStore = storeAuth();
const emitter = inject<Emitter<Events>>("emitter");
const route = useRoute();
const router = useRouter();
const token = route.query.token as string;
const newPassword = ref("");
const confirmPassword = ref("");
const visibleNewPassword = ref(false);
const visibleConfirmNewPassword = ref(false);

async function resetPassword() {
  await identityApi
    .resetPassword(token, newPassword.value)
    .then(async () => {
      await refetchCSRFToken();
      try {
        await authStore.fetchCurrentUser();
      } catch (error) {
        console.error("Error setting a new password: ", error);
      }
      const params = new URLSearchParams(window.location.search);
      router.push(params.get("next") ?? "/");
    })
    .catch(({ response, message }) => {
      const errorMessage =
        response.data?.detail ||
        response.data ||
        message ||
        response.statusText;
      emitter?.emit("snackbarShow", {
        msg: `Unable to reset password: ${errorMessage}`,
        icon: "mdi-close-circle",
        color: "red",
      });
      console.error(
        `[${response.status} ${response.statusText}] ${errorMessage}`,
      );
    });
}
</script>

<template>
  <RCard class="translucent py-8 px-5" width="500">
    <RImg src="/assets/isotipo.svg" class="mx-auto mb-8" width="80" />
    <v-row class="text-white justify-center mt-2" no-gutters>
      <v-col cols="10">
        <v-form @submit.prevent="resetPassword">
          <RTextField
            v-model="newPassword"
            :label="t('login.new-password')"
            :type="visibleNewPassword ? 'text' : 'password'"
            required
            :append-inner-icon="visibleNewPassword ? 'mdi-eye-off' : 'mdi-eye'"
            variant="underlined"
            @click:append-inner="visibleNewPassword = !visibleNewPassword"
          />
          <RTextField
            v-model="confirmPassword"
            :label="t('login.confirm-new-password')"
            :type="visibleConfirmNewPassword ? 'text' : 'password'"
            required
            :append-inner-icon="
              visibleConfirmNewPassword ? 'mdi-eye-off' : 'mdi-eye'
            "
            variant="underlined"
            @click:append-inner="
              visibleConfirmNewPassword = !visibleConfirmNewPassword
            "
          />
          <span
            v-if="newPassword !== confirmPassword && newPassword.length > 0"
            class="text-red text-caption"
            >Passwords do not match</span
          >
          <RBtn
            type="submit"
            class="bg-toplayer mt-4"
            variant="text"
            block
            :disabled="newPassword !== confirmPassword"
          >
            <template #prepend>
              <RIcon>mdi-send</RIcon>
            </template>
            {{ t("login.reset-password") }}
            <template #loader>
              <RProgressCircular
                color="primary"
                :width="2"
                :size="20"
                indeterminate
              />
            </template>
          </RBtn>
        </v-form>
        <div class="my-6 text-right">
          <a class="text-blue text-caption" href="/login">
            {{ t("login.back-to-login") }}
          </a>
        </div>
      </v-col>
    </v-row>
  </RCard>
</template>
