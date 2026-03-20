import "@mdi/font/css/materialdesignicons.css";
import type { Preview } from "@storybook/vue3-vite";
import { setup } from "@storybook/vue3-vite";
import { useTheme } from "vuetify";
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
  globalTypes: {
    theme: {
      description: "Vuetify theme",
      toolbar: {
        title: "Theme",
        icon: "paintbrush",
        items: [
          { value: "dark", title: "Dark", icon: "moon" },
          { value: "light", title: "Light", icon: "sun" },
        ],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    theme: "dark",
  },
  decorators: [
    (story, context) => {
      const themeName = context.globals.theme || "dark";
      return {
        setup() {
          const theme = useTheme();
          theme.global.name.value = themeName;
          const bg = theme.global.current.value.colors.background;
          document.body.style.setProperty("background-color", bg, "important");
          document.documentElement.style.setProperty(
            "background-color",
            bg,
            "important",
          );
          document
            .querySelectorAll(".sb-show-main, .docs-story, #storybook-root")
            .forEach((el) => {
              (el as HTMLElement).style.setProperty(
                "background-color",
                bg,
                "important",
              );
            });
        },
        template: `<story />`,
      };
    },
  ],
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
