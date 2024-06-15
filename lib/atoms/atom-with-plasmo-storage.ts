import { atom } from "jotai"

import { storage } from "./storage"

export const atomWithPlasmoStorage = <T>(key: string, initialValue: T) => {
  const baseAtom = atom<T>(initialValue)
  baseAtom.onMount = (setValue) => {
    ;(async () => {
      const result = await storage.get(key)
      setValue(result as T)
    })()
  }
  const derivedAtom = atom(
    (get) => get(baseAtom),
    (get, set, update) => {
      const nextValue = typeof update === "function" ? update(get(baseAtom)) : update
      set(baseAtom, nextValue)
      storage.set(key, nextValue)
    }
  )
  return derivedAtom
}
