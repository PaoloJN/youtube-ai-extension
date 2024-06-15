import { atom } from "jotai"

const atomWithChromeStorage = <T>(key: string, initialValue: T) => {
  const baseAtom = atom<T>(initialValue)
  baseAtom.onMount = (setValue) => {
    ;(async () => {
      const result = await chrome.storage.sync.get([key])
      console.log({ result })
      setValue(result[key])
    })()
  }
  const derivedAtom = atom(
    (get) => get(baseAtom),
    (get, set, update) => {
      const nextValue = typeof update === "function" ? update(get(baseAtom)) : update
      set(baseAtom, nextValue)
      console.log({ [key]: nextValue })
      chrome.storage.sync.set({ [key]: nextValue })
    }
  )
  return derivedAtom
}

export const openAIKeyAtom = atomWithChromeStorage<string | null>("openAIKey", null)
