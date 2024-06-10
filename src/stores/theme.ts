import type { Theme } from "@/types";
import { persistentAtom } from "@nanostores/persistent";

const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
const defaultTheme: Theme = userPrefersDark ? 'dark' : 'light';

export const $theme = persistentAtom<Theme>("theme", defaultTheme);