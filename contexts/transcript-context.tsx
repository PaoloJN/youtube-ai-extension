import type { Transcript } from "@/lib/constants"
import { cleanJsonTranscript } from "@/utils/functions"
import * as React from "react"

import { useExtension } from "./extension-context"

interface TranscriptContext {
  transcriptSearch: string
  setTranscriptSearch: (search: string) => void
  transcriptJson: Transcript[]
  // transcriptCurrentItem: string
  // setTranscriptCurrentItem: (currentItem: string) => void
  // transcriptLanguage: Language
  // setTranscriptLanguage: (language: Language) => void
}

const TranscriptContext = React.createContext<TranscriptContext | undefined>(undefined)

export function useTranscript() {
  const context = React.useContext(TranscriptContext)
  if (!context) {
    throw new Error("useTranscript must be used within a TranscriptProvider")
  }
  return context
}

interface TranscriptProviderProps {
  children: React.ReactNode
}

export function TranscriptProvider({ children }: TranscriptProviderProps) {
  const [transcriptSearch, setTranscriptSearch] = React.useState<string>("")
  const { extensionLoading, extensionData } = useExtension()

  const transcriptJson = React.useMemo(() => {
    if (!extensionLoading && extensionData && extensionData.transcript) {
      return cleanJsonTranscript(extensionData.transcript)
    }
    return []
  }, [extensionLoading, extensionData])

  // const [transcriptCurrentItem, setTranscriptCurrentItem] = React.useState<string>("")
  // const [transcriptLanguage, setTranscriptLanguage] = React.useState<Language>(languages[0])

  const value = {
    transcriptSearch,
    setTranscriptSearch,
    transcriptJson

    // transcriptCurrentItem,
    // setTranscriptCurrentItem
    // transcriptLanguage,
    // setTranscriptLanguage
  }

  // functions to be used in the context

  return <TranscriptContext.Provider value={value}>{children}</TranscriptContext.Provider>
}
