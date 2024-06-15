import { atom } from "jotai"

export const atomWithChromeStorage = <T>(key: string, initialValue: T) => {
  const baseAtom = atom<T>(initialValue)
  baseAtom.onMount = (setValue) => {
    ;(async () => {
      const result = await chrome.storage.sync.get([key])
      setValue(result[key])
    })()
  }
  const derivedAtom = atom(
    (get) => get(baseAtom),
    (get, set, update) => {
      const nextValue = typeof update === "function" ? update(get(baseAtom)) : update
      set(baseAtom, nextValue)
      chrome.storage.sync.set({ [key]: nextValue })
    }
  )
  return derivedAtom
}
