import { atomWithChromeStorage } from "./atom-with-chrome-storage"

export const openAIKeyAtom = atomWithChromeStorage<string | null>("openAIKey", null)
