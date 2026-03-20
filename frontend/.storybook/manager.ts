import { GLOBALS_UPDATED } from "storybook/internal/core-events";
import { addons } from "storybook/manager-api";
import { create, type ThemeVars } from "storybook/theming/create";
import { dark, light } from "../src/styles/themes";

type RommTheme = typeof dark;

/**
 * Maps RomM theme tokens to Storybook theme variables.
 *
 *   background  → appBg          (sidebar / panels background)
 *   surface     → appContentBg   (main content area)
 *                 barBg          (top toolbar)
 *   toplayer    → appBorderColor (borders between panels)
 *   primary     → colorPrimary, colorSecondary, barTextColor
 *   secondary   → textMutedColor
 *   romm-white / romm-black → textColor, barTextColor
 */
function buildTheme(source: RommTheme): ThemeVars {
  const { colors } = source;
  return create({
    base: source.dark ? "dark" : "light",

    // background
    appBg: colors.background,
    // surface
    appContentBg: colors.surface,
    barBg: colors.surface,
    // toplayer
    appBorderColor: colors.toplayer,

    // primary
    colorPrimary: colors.primary,
    colorSecondary: colors.primary,
    // secondary
    textMutedColor: colors.secondary,

    // romm-white / romm-black
    textColor: source.dark ? colors["romm-white"] : colors["romm-black"],
    barTextColor: source.dark ? colors["romm-white"] : colors.primary,
  });
}

const darkTheme = buildTheme(dark);
const lightTheme = buildTheme(light);

const themes = { dark: darkTheme, light: lightTheme };

addons.setConfig({ theme: darkTheme });

addons.register("romm-theme-sync", () => {
  const channel = addons.getChannel();
  channel.on(
    GLOBALS_UPDATED,
    ({ globals }: { globals: Record<string, string> }) => {
      const theme = themes[globals.theme as keyof typeof themes] ?? darkTheme;
      addons.setConfig({ theme });
    },
  );
});
