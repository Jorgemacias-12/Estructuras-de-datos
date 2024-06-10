import { persistentAtom } from "@nanostores/persistent";

export const $lang = persistentAtom<string>("lang", "ES");
