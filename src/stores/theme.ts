import type { Theme } from "@/types";
import { persistentAtom } from "@nanostores/persistent";

export const $theme = persistentAtom<Theme>("theme", "light");

if (typeof window !== 'undefined') {
  const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const defaultTheme = userPrefersDark ? 'dark' : 'light';

  $theme.set(defaultTheme);
}
