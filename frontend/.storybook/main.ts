import type { StorybookConfig } from "@storybook/vue3-vite";
import tailwindcss from "@tailwindcss/vite";
import vuetify from "vite-plugin-vuetify";

const config: StorybookConfig = {
  stories: ["../src/lib/**/*.mdx", "../src/lib/**/*.stories.@(ts|tsx)"],
  addons: [
    "@chromatic-com/storybook",
    "@storybook/addon-vitest",
    "@storybook/addon-a11y",
    "@storybook/addon-docs",
  ],
  framework: "@storybook/vue3-vite",
  viteFinal(config) {
    config.plugins ??= [];
    config.plugins.push(tailwindcss());
    config.plugins.push(vuetify({ autoImport: true }));
    return config;
  },
};

export default config;
