import { atomWithPlasmoStorage } from "./atom-with-plasmo-storage"

export const openAIKeyAtom = atomWithPlasmoStorage<string | null>("openAIKey", null)
