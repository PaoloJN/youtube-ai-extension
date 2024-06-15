import { openAIKeyAtom } from "@/lib/atoms/openai"
import { models, prompts, type Model, type Prompt } from "@/lib/constants"
import { useAtomValue } from "jotai"
import * as React from "react"

import { usePort } from "@plasmohq/messaging/hook"

import { useExtension } from "./extension-context"

interface SummaryContext {
  summaryModel: Model
  setSummaryModel: (model: Model) => void
  summaryPrompt: Prompt
  setSummaryPrompt: (prompt: Prompt) => void
  summaryContent: string | null
  setSummaryContent: (content: string | null) => void
  summaryIsError: boolean
  setSummaryIsError: (isError: boolean) => void
  summaryIsGenerating: boolean
  setSummaryIsGenerating: (isGenerating: boolean) => void
  generateSummary: (e: any) => void
}

const SummaryContext = React.createContext<SummaryContext | undefined>(undefined)

export function useSummary() {
  const context = React.useContext(SummaryContext)
  if (!context) {
    throw new Error("useSummary must be used within a SummaryProvider")
  }
  return context
}

interface SummaryProviderProps {
  children: React.ReactNode
}

export function SummaryProvider({ children }: SummaryProviderProps) {
  const port = usePort("completion")
  const openAIKey = useAtomValue(openAIKeyAtom)

  const [summaryModel, setSummaryModel] = React.useState<Model>(models[0])
  const [summaryPrompt, setSummaryPrompt] = React.useState<Prompt>(prompts[0])
  const [summaryContent, setSummaryContent] = React.useState<string | null>(null)
  const [summaryIsError, setSummaryIsError] = React.useState<boolean>(false)
  const [summaryIsGenerating, setSummaryIsGenerating] = React.useState<boolean>(false)

  const { extensionData, extensionLoading } = useExtension()

  // functions to be used in the context

  async function generateSummary(e: any) {
    console.log("Function That Generates Summary Called")
    e.preventDefault()

    if (summaryContent !== null) {
      setSummaryContent(null)
    }

    setSummaryIsGenerating(true)
    setSummaryIsError(false)
    port.send({
      prompt: summaryPrompt.content,
      model: summaryModel.content,
      context: { ...extensionData, openAIKey }
    })
  }

  React.useEffect(() => {
    setSummaryContent(null)
    setSummaryIsGenerating(false)
    setSummaryIsError(false)
  }, [extensionLoading])

  React.useEffect(() => {
    console.log("Use Effect That Streams Summary Called")
    if (port.data?.message !== undefined && port.data.isEnd === false) {
      setSummaryContent(port.data.message)
    } else {
      console.log("End of message")
      console.log(port.data?.message)
      setSummaryIsGenerating(false)
    }

    setSummaryIsError(false)
  }, [port.data?.message])

  React.useEffect(() => {
    console.log("Use Effect That Streams Summary Error Called")
    if (port.data?.error !== undefined && port.data?.error !== null) {
      setSummaryIsError(true)
      setSummaryContent(null)
    } else {
      setSummaryIsError(false)
    }
  }, [port.data?.error])

  const value = {
    summaryModel,
    setSummaryModel,
    summaryPrompt,
    setSummaryPrompt,
    summaryContent,
    setSummaryContent,
    summaryIsError,
    setSummaryIsError,
    summaryIsGenerating,
    setSummaryIsGenerating,
    generateSummary
  }

  return <SummaryContext.Provider value={value}>{children}</SummaryContext.Provider>
}
