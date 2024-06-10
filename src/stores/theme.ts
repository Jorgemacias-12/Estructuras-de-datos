import type { Theme } from "@/types";
import { persistentAtom } from "@nanostores/persistent";


let defaultTheme: Theme = 'light';

if (typeof window !== 'undefined') {
  const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  defaultTheme = userPrefersDark ? 'dark' : 'light';
}

export const $theme = persistentAtom<Theme>("theme", defaultTheme);


