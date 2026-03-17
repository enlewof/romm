import "@mdi/font/css/materialdesignicons.css";
import type { Preview } from "@storybook/vue3-vite";
import { setup } from "@storybook/vue3-vite";
import { createVuetify } from "vuetify";
// Full Vuetify styles — library components wrap Vuetify with custom overrides
import "vuetify/styles";
// Tailwind (v4 entry point)
import "../src/lib/styles.css";
import "../src/styles/fonts.css";
import { dark, light } from "../src/styles/themes";

const vuetify = createVuetify({
  icons: { defaultSet: "mdi" },
  theme: {
    defaultTheme: "dark",
    themes: { dark, light },
  },
});

setup((app) => {
  app.use(vuetify);
});

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      test: "todo",
    },
    backgrounds: { disable: true },
  },
};

export default preview;
