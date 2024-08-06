import { OPENAI_API_KEY_STORAGE_KEY } from "../constants";
import { atomWithPlasmoStorage } from "./atom-with-plasmo-storage";

export const openAIKeyAtom = atomWithPlasmoStorage<string | null>(
  OPENAI_API_KEY_STORAGE_KEY,
  null
)